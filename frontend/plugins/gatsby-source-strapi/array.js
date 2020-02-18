'use strict';

var array1 = [{
  title: 'Thanks for giving this Starter a try!',
  content: '# Thanks\nWe hope that this starter will make you want to discover Strapi in more details.\n\n## Features\n\n- 2 Content types: Article, Category\n- Permissions set to `true` for article and category\n- 2 Created Articles\n- 3 Created categories\n- Responsive design using UIkit\n\n## Pages\n\n- "/" display every articles\n- "/article/:id" display one article\n- "/category/:id" display articles depending on the category',
  published_at: '2020-01-28',
  category: {
    id: 1,
    name: 'news',
    created_at: '2020-01-17T15:41:53.103Z',
    updated_at: '2020-01-17T15:41:53.103Z'
  },
  created_at: '2020-01-28T15:47:00.380Z',
  updated_at: '2020-02-11T10:51:25.390Z',
  contents: [],
  image: {
    id: 1,
    name: 'nasa-Q1p7bh3SHj8-unsplash.jpg',
    hash: 'bb8ba79691c0402d8ffb02dc1408be7a',
    sha256: 'c3M6EVRw--0qdsdEhaqa3WHzQlr8EZHs-EtJS4mTF5I',
    ext: '.jpg',
    mime: 'image/jpeg',
    size: 950.49,
    url: '/uploads/bb8ba79691c0402d8ffb02dc1408be7a.jpg',
    provider: 'local',
    provider_metadata: null,
    created_at: '2020-01-28T15:47:00.413Z',
    updated_at: '2020-01-28T15:47:00.413Z'
  },
  image___NODE: '/Users/maximecastres/Projects/starters/strapi-starter-gatsby-blog/frontend/.cache/gatsby-source-filesystem/36211f6d7e5cf2ad1cad42c2651fc27c.jpeg absPath of file',
  strapiId: 1,
  id: 'Article_1',
  parent: '__SOURCE__',
  children: [],
  internal: {
    type: 'StrapiArticle',
    contentDigest: '1231973880bca3ac0039216291bdf211',
    counter: 31,
    owner: 'gatsby-source-strapi'
  }
}, {
  title: 'Enjoy!',
  content: 'Have fun!',
  published_at: '2020-01-28',
  category: {
    id: 2,
    name: 'trends',
    created_at: '2020-01-17T15:41:57.487Z',
    updated_at: '2020-01-17T15:41:57.487Z'
  },
  created_at: '2020-01-28T15:47:28.328Z',
  updated_at: '2020-01-28T15:49:13.653Z',
  contents: [],
  image: {
    id: 2,
    name: 'jake-marty-CwmOoZ7f_PQ-unsplash.jpg',
    hash: '71ac942d097445b58b9b29116c7abd3e',
    sha256: 'RuGZ7S5Cnevs5XfqxcZGHsQF4hmqH4ZXQ_YBccdukeE',
    ext: '.jpg',
    mime: 'image/jpeg',
    size: 2200.97,
    url: '/uploads/71ac942d097445b58b9b29116c7abd3e.jpg',
    provider: 'local',
    provider_metadata: null,
    created_at: '2020-01-28T15:47:28.354Z',
    updated_at: '2020-01-28T15:47:28.354Z'
  },
  image___NODE: '/Users/maximecastres/Projects/starters/strapi-starter-gatsby-blog/frontend/.cache/gatsby-source-filesystem/b1fd7cb0c42c511ba0fdc87589b980e8.jpg absPath of file',
  strapiId: 2,
  id: 'Article_2',
  parent: '__SOURCE__',
  children: [],
  internal: {
    type: 'StrapiArticle',
    contentDigest: '747802ac44a403dc746873e2309fe15f',
    counter: 32,
    owner: 'gatsby-source-strapi'
  }
}, {
  name: 'news',
  created_at: '2020-01-17T15:41:53.103Z',
  updated_at: '2020-01-17T15:41:53.103Z',
  articles: [[Object]],
  strapiId: 1,
  id: 'Category_1',
  parent: '__SOURCE__',
  children: [],
  internal: {
    type: 'StrapiCategory',
    contentDigest: '86f4ff3da6d921eb78a8f98f167c3bd0',
    counter: 33,
    owner: 'gatsby-source-strapi'
  }
}, {
  name: 'trends',
  created_at: '2020-01-17T15:41:57.487Z',
  updated_at: '2020-01-17T15:41:57.487Z',
  articles: [[Object]],
  strapiId: 2,
  id: 'Category_2',
  parent: '__SOURCE__',
  children: [],
  internal: {
    type: 'StrapiCategory',
    contentDigest: 'f3048358e9905fe014fa813c94bb88fb',
    counter: 34,
    owner: 'gatsby-source-strapi'
  }
}, {
  name: 'opinion',
  created_at: '2020-01-17T15:42:00.593Z',
  updated_at: '2020-01-17T15:42:00.593Z',
  articles: [],
  strapiId: 3,
  id: 'Category_3',
  parent: '__SOURCE__',
  children: [],
  internal: {
    type: 'StrapiCategory',
    contentDigest: '2e2ebae6f82dc99979ddfc1c1322c7b5',
    counter: 35,
    owner: 'gatsby-source-strapi'
  }
}];

var array2 = [{
  title: 'Thanks for giving this Starter a try!',
  content: '# Thanks\nWe hope that this starter will make you want to discover Strapi in more details.\n\n## Features\n\n- 2 Content types: Article, Category\n- Permissions set to `true` for article and category\n- 2 Created Articles\n- 3 Created categories\n- Responsive design using UIkit\n\n## Pages\n\n- "/" display every articles\n- "/article/:id" display one article\n- "/category/:id" display articles depending on the category',
  published_at: '2020-01-28',
  category: {
    id: 1,
    name: 'news',
    created_at: '2020-01-17T15:41:53.103Z',
    updated_at: '2020-01-17T15:41:53.103Z'
  },
  created_at: '2020-01-28T15:47:00.380Z',
  updated_at: '2020-02-11T10:51:25.390Z',
  contents: [],
  image: {
    id: 1,
    name: 'nasa-Q1p7bh3SHj8-unsplash.jpg',
    hash: 'bb8ba79691c0402d8ffb02dc1408be7a',
    sha256: 'c3M6EVRw--0qdsdEhaqa3WHzQlr8EZHs-EtJS4mTF5I',
    ext: '.jpg',
    mime: 'image/jpeg',
    size: 950.49,
    url: '/uploads/bb8ba79691c0402d8ffb02dc1408be7a.jpg',
    provider: 'local',
    provider_metadata: null,
    created_at: '2020-01-28T15:47:00.413Z',
    updated_at: '2020-01-28T15:47:00.413Z'
  },
  image___NODE: '/Users/maximecastres/Projects/starters/strapi-starter-gatsby-blog/frontend/.cache/gatsby-source-filesystem/36211f6d7e5cf2ad1cad42c2651fc27c.jpeg absPath of file',
  strapiId: 1,
  id: 'Article_1',
  parent: '__SOURCE__',
  children: [],
  internal: {
    type: 'StrapiArticle',
    contentDigest: '1231973880bca3ac0039216291bdf211',
    counter: 31,
    owner: 'gatsby-source-strapi'
  }
}, {
  title: 'Enjoy!',
  content: 'Have fun!',
  published_at: '2020-01-28',
  category: {
    id: 2,
    name: 'trends',
    created_at: '2020-01-17T15:41:57.487Z',
    updated_at: '2020-01-17T15:41:57.487Z'
  },
  created_at: '2020-01-28T15:47:28.328Z',
  updated_at: '2020-01-28T15:49:13.653Z',
  contents: [],
  image: {
    id: 2,
    name: 'jake-marty-CwmOoZ7f_PQ-unsplash.jpg',
    hash: '71ac942d097445b58b9b29116c7abd3e',
    sha256: 'RuGZ7S5Cnevs5XfqxcZGHsQF4hmqH4ZXQ_YBccdukeE',
    ext: '.jpg',
    mime: 'image/jpeg',
    size: 2200.97,
    url: '/uploads/71ac942d097445b58b9b29116c7abd3e.jpg',
    provider: 'local',
    provider_metadata: null,
    created_at: '2020-01-28T15:47:28.354Z',
    updated_at: '2020-01-28T15:47:28.354Z'
  },
  image___NODE: '/Users/maximecastres/Projects/starters/strapi-starter-gatsby-blog/frontend/.cache/gatsby-source-filesystem/b1fd7cb0c42c511ba0fdc87589b980e8.jpg absPath of file',
  strapiId: 2,
  id: 'Article_2',
  parent: '__SOURCE__',
  children: [],
  internal: {
    type: 'StrapiArticle',
    contentDigest: '747802ac44a403dc746873e2309fe15f',
    counter: 32,
    owner: 'gatsby-source-strapi'
  }
}, {
  name: 'news',
  created_at: '2020-01-17T15:41:53.103Z',
  updated_at: '2020-01-17T15:41:53.103Z',
  articles: [[Object]],
  strapiId: 1,
  id: 'Category_1',
  parent: '__SOURCE__',
  children: [],
  internal: {
    type: 'StrapiCategory',
    contentDigest: '86f4ff3da6d921eb78a8f98f167c3bd0',
    counter: 33,
    owner: 'gatsby-source-strapi'
  }
}, {
  name: 'trends',
  created_at: '2020-01-17T15:41:57.487Z',
  updated_at: '2020-01-17T15:41:57.487Z',
  articles: [[Object]],
  strapiId: 2,
  id: 'Category_2',
  parent: '__SOURCE__',
  children: [],
  internal: {
    type: 'StrapiCategory',
    contentDigest: 'f3048358e9905fe014fa813c94bb88fb',
    counter: 34,
    owner: 'gatsby-source-strapi'
  }
}];

var results = array1.filter(function (_ref) {
  var id1 = _ref.id;
  return !array2.some(function (_ref2) {
    var id2 = _ref2.id;
    return id2 === id1;
  });
});

console.log(results);