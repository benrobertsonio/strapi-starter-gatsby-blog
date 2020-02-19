import axios from 'axios'
import fetchData from './fetch'
import { Node } from './nodes'
import { capitalize } from 'lodash'
import normalize from './normalize'
import authentication from './authentication'

exports.sourceNodes = async (
  {
    store,
    actions,
    cache,
    reporter,
    createContentDigest,
    createNodeId,
    getNode,
    getNodes,
    getNodesByType,
  },
  {
    apiURL = 'http://localhost:1337',
    contentTypes = [],
    loginData = {},
    queryLimit = 100,
  }
) => {
  const { createNode, deleteNode, touchNode } = actions

  const existingNodes = getNodes().filter(
    n => n.internal.owner === `gatsby-source-strapi`
  )

  existingNodes.forEach(n => {
    touchNode({ nodeId: n.id })
  })

  // Authentication
  let jwtToken = await authentication({ loginData, reporter, apiURL })

  // Start activyti, Strapi data fetching
  const fetchActivity = reporter.activityTimer(`Fetching Strapi Data`)
  fetchActivity.start()

  // Generate a list of promises based on the `contentTypes` option.
  const promises = contentTypes.map(contentType =>
    fetchData({
      apiURL,
      contentType,
      jwtToken,
      queryLimit,
      reporter,
    })
  )

  // Execute the promises.
  let entities = await Promise.all(promises)

  entities = await normalize.downloadMediaFiles({
    entities,
    apiURL,
    store,
    cache,
    createNode,
    touchNode,
    jwtToken,
  })

  // Create nodes
  contentTypes.forEach((contentType, i) => {
    const items = entities[i]
    items.forEach((item, i) => {
      const node = Node(capitalize(contentType), item)
      createNode(node)
    })
  })

  const newNodes = await getNodes().filter(
    n => n.internal.owner === `gatsby-source-strapi`
  )

  const diff = await existingNodes.filter(
    ({ id: id1 }) => !newNodes.some(({ id: id2 }) => id2 === id1)
  )

  // Delete nodes
  diff.forEach(data => {
    deleteNode({ node: data.id })
  })

  fetchActivity.end()
}
