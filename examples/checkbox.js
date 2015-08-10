webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcTree = __webpack_require__(7);
	
	var _rcTree2 = _interopRequireDefault(_rcTree);
	
	function handleChecked(checked, c) {
	  console.log('checked: ', checked, c);
	}
	
	var demo = _react2['default'].createElement(
	  'div',
	  null,
	  _react2['default'].createElement(
	    'h2',
	    null,
	    'checkbox'
	  ),
	  _react2['default'].createElement(
	    _rcTree2['default'],
	    { expandAll: true, checkable: true, onChecked: handleChecked },
	    _react2['default'].createElement(
	      _rcTree.TreeNode,
	      { title: 'parent 1' },
	      _react2['default'].createElement(
	        _rcTree.TreeNode,
	        { title: 'child1', defaultChecked: true },
	        _react2['default'].createElement(
	          _rcTree.TreeNode,
	          null,
	          'child11 '
	        ),
	        _react2['default'].createElement(
	          _rcTree.TreeNode,
	          null,
	          'child12 '
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTree.TreeNode,
	        { title: 'child2' },
	        _react2['default'].createElement(
	          _rcTree.TreeNode,
	          { title: 'child21' },
	          _react2['default'].createElement(
	            _rcTree.TreeNode,
	            null,
	            'child211 '
	          ),
	          _react2['default'].createElement(
	            _rcTree.TreeNode,
	            null,
	            'child212 '
	          )
	        ),
	        _react2['default'].createElement(
	          _rcTree.TreeNode,
	          { checked: true },
	          'child22 '
	        ),
	        _react2['default'].createElement(
	          _rcTree.TreeNode,
	          { checked: true },
	          'child23 '
	        )
	      )
	    ),
	    _react2['default'].createElement(
	      _rcTree.TreeNode,
	      { title: 'parent 2' },
	      _react2['default'].createElement(
	        _rcTree.TreeNode,
	        { checked: true },
	        'child2 '
	      )
	    )
	  )
	);
	
	_react2['default'].render(demo, document.getElementById('__react-content'));
	/*
	<Tree expandAll={true} checkable={true} onChecked={handleChecked} checked={false}>
	 <TreeNode title="parent 1" checked={false}>
	   <TreeNode>leaf </TreeNode>
	   <TreeNode title="parent 1-1" checked={true}>
	     <TreeNode title="parent 2-1">
	       <TreeNode>leaf </TreeNode>
	       <TreeNode>leaf </TreeNode>
	     </TreeNode>
	     <TreeNode>leaf </TreeNode>
	     <TreeNode>leaf </TreeNode>
	   </TreeNode>
	 </TreeNode>
	 <TreeNode>
	   <TreeNode>leaf </TreeNode>
	 </TreeNode>
	</Tree>
	*/

/***/ }
]);
//# sourceMappingURL=checkbox.js.map