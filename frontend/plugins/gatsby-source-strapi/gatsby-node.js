'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _nodes = require('./nodes');

var _lodash = require('lodash');

var _normalize = require('./normalize');

var _normalize2 = _interopRequireDefault(_normalize);

var _authentication = require('./authentication');

var _authentication2 = _interopRequireDefault(_authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.sourceNodes = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
    var store = _ref2.store,
        actions = _ref2.actions,
        cache = _ref2.cache,
        reporter = _ref2.reporter,
        createContentDigest = _ref2.createContentDigest,
        createNodeId = _ref2.createNodeId,
        getNode = _ref2.getNode,
        getNodes = _ref2.getNodes,
        getNodesByType = _ref2.getNodesByType;
    var _ref3$apiURL = _ref3.apiURL,
        apiURL = _ref3$apiURL === undefined ? 'http://localhost:1337' : _ref3$apiURL,
        _ref3$contentTypes = _ref3.contentTypes,
        contentTypes = _ref3$contentTypes === undefined ? [] : _ref3$contentTypes,
        _ref3$loginData = _ref3.loginData,
        loginData = _ref3$loginData === undefined ? {} : _ref3$loginData,
        _ref3$queryLimit = _ref3.queryLimit,
        queryLimit = _ref3$queryLimit === undefined ? 100 : _ref3$queryLimit;
    var createNode, deleteNode, touchNode, existingNodes, jwtToken, fetchActivity, promises, entities, newNodes, diff;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createNode = actions.createNode, deleteNode = actions.deleteNode, touchNode = actions.touchNode;
            existingNodes = getNodes().filter(function (n) {
              return n.internal.owner === 'gatsby-source-strapi';
            });


            existingNodes.forEach(function (n) {
              touchNode({ nodeId: n.id });
            });

            // Authentication
            _context.next = 5;
            return (0, _authentication2.default)({ loginData: loginData, reporter: reporter, apiURL: apiURL });

          case 5:
            jwtToken = _context.sent;


            // Start activyti, Strapi data fetching
            fetchActivity = reporter.activityTimer('Fetching Strapi Data');

            fetchActivity.start();

            // Generate a list of promises based on the `contentTypes` option.
            promises = contentTypes.map(function (contentType) {
              return (0, _fetch2.default)({
                apiURL: apiURL,
                contentType: contentType,
                jwtToken: jwtToken,
                queryLimit: queryLimit,
                reporter: reporter
              });
            });

            // Execute the promises.

            _context.next = 11;
            return _promise2.default.all(promises);

          case 11:
            entities = _context.sent;
            _context.next = 14;
            return _normalize2.default.downloadMediaFiles({
              entities: entities,
              apiURL: apiURL,
              store: store,
              cache: cache,
              createNode: createNode,
              touchNode: touchNode,
              jwtToken: jwtToken
            });

          case 14:
            entities = _context.sent;


            // Create nodes
            contentTypes.forEach(function (contentType, i) {
              var items = entities[i];
              items.forEach(function (item, i) {
                var node = (0, _nodes.Node)((0, _lodash.capitalize)(contentType), item);
                createNode(node);
              });
            });

            newNodes = getNodes().filter(function (n) {
              return n.internal.owner === 'gatsby-source-strapi';
            });
            diff = existingNodes.filter(function (_ref4) {
              var id1 = _ref4.id;
              return !newNodes.some(function (_ref5) {
                var id2 = _ref5.id;
                return id2 === id1;
              });
            });

            // Delete nodes

            diff.forEach(function (data) {
              deleteNode({ node: data });
            });

            fetchActivity.end();

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();