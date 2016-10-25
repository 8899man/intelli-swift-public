webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(172);

	var _stores = __webpack_require__(195);

	var _stores2 = _interopRequireDefault(_stores);

	var _App = __webpack_require__(205);

	var _App2 = _interopRequireDefault(_App);

	var _StyleSheet = __webpack_require__(209);

	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

	var _View = __webpack_require__(219);

	var _View2 = _interopRequireDefault(_View);

	__webpack_require__(941);

	__webpack_require__(943);

	__webpack_require__(945);

	__webpack_require__(947);

	__webpack_require__(949);

	__webpack_require__(951);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppContainer = function (_Component) {
	    _inherits(AppContainer, _Component);

	    function AppContainer() {
	        _classCallCheck(this, AppContainer);

	        return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
	    }

	    _createClass(AppContainer, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _View2.default,
	                {
	                    ref: 'main',
	                    className: _StyleSheet2.default.rootClassName,
	                    style: styles.appContainer },
	                _react2.default.createElement(_App2.default, null)
	            );
	        }
	    }]);

	    return AppContainer;
	}(_react.Component);

	var styles = _StyleSheet2.default.create({
	    // This is needed so the application covers the whole screen
	    // and therefore the contents of the React are not clipped.
	    appContainer: {
	        position: 'absolute',
	        left: 0,
	        top: 0,
	        right: 0,
	        bottom: 0
	    }
	});

	var store = (0, _stores2.default)();

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(AppContainer, null)
	), document.getElementById('app'));

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(173);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(176);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(174);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(175);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },

/***/ 175:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(174);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(177);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(178);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(175);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(181);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(193);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(194);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 177:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(179);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(180);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(188);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(190);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(191);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(192);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(189);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(181);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(185);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(186);


/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ponyfill = __webpack_require__(187);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root = undefined; /* global window */

	if (typeof global !== 'undefined') {
		root = global;
	} else if (typeof window !== 'undefined') {
		root = window;
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 187:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(180);

	var _isPlainObject = __webpack_require__(181);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(189);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 189:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },

/***/ 190:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(192);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },

/***/ 192:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },

/***/ 193:
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(179);

	var _reduxThunk = __webpack_require__(196);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(197);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var middlewares = [_reduxThunk2.default];
	var createLogger = __webpack_require__(204);

	if (process.env.NODE_ENV === 'development') {
	  var logger = createLogger();
	  middlewares.push(logger);
	}
	var createStoreWithMiddleware = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middlewares), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	  return f;
	})(_redux.createStore);

	function configureStore(initialState) {
	  var store = createStoreWithMiddleware(_reducers2.default, initialState);

	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('../reducers', function () {
	      var nextReducer = require('../reducers');
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 196:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reduxImmutablejs = __webpack_require__(198);

	var _template = __webpack_require__(202);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _reduxImmutablejs.combineReducers)({
	  template: _template2.default
	});

	exports.default = rootReducer;

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCombineReducers = __webpack_require__(199);

	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);

	var _utilsCreateReducer = __webpack_require__(201);

	var _utilsCreateReducer2 = _interopRequireDefault(_utilsCreateReducer);

	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.createReducer = _utilsCreateReducer2['default'];

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	// TODO need to find a way to reference Redux's init for compatability
	var ActionTypes = { INIT: 'INIT' };
	var isImmutable = function isImmutable(obj) {
	  return _immutable2['default'].Iterable.isIterable(obj);
	};

	/* eslint-disable no-console */

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!isImmutable(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = inputState.keySeq().filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });

	  if (unexpectedKeys.size > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  reducers.keySeq().forEach(function (key) {
	    var reducer = reducers.get(key);
	    var initialState = reducer(undefined, { type: ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */

	function combineReducers(reducers) {
	  var finalReducers = isImmutable(reducers) ? reducers : _immutable2['default'].fromJS(reducers);
	  finalReducers = finalReducers.filter(function (v) {
	    return typeof v === 'function';
	  });
	  var sanityError;

	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  var defaultState = finalReducers.map(function (r) {
	    return undefined;
	  });

	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;

	    if (sanityError) {
	      throw sanityError;
	    }

	    var dirty = false;
	    var finalState = finalReducers.map(function (reducer, key) {
	      var oldState = state.get(key);
	      var newState = reducer(oldState, action);
	      dirty = dirty || oldState !== newState;
	      if (typeof newState === 'undefined') {
	        throw new Error(getErrorMessage(key, action));
	      }
	      return newState;
	    });

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }

	    return dirty ? finalState : state;
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createReducer;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	/**
	 * Create a handler (action) map reducer for the given list of handlers
	 *
	 * @param  {object} initialState     The initial state of the reducer, expecting an Immutable.Iterable instance,
	 * otherwise given initialState is converted to immutable.
	 * @param  {object} handlers         A map of actions where key is action name and value is a reducer function
	 * @param  {boolean} enforceImmutable = true if to enforce immutable, in other words a TypeError is thrown in case
	 * a handler returned anything that is not an Immutable.Iterable type.
	 * @param  {function} constructor    A function to process non-immutable state, defaults to Immutable.fromJS.
	 * @return {object}                  The calculated next state
	 */

	function createReducer(initialState, handlers) {
	  var enforceImmutable = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	  var constructor = arguments.length <= 3 || arguments[3] === undefined ? _immutable2['default'].fromJS.bind(_immutable2['default']) : arguments[3];

	  return function (state, action) {
	    if (state === undefined) state = initialState;

	    // convert the initial state to immutable
	    // This is useful in isomorphic apps where states were serialized
	    if (!_immutable2['default'].Iterable.isIterable(state)) {
	      state = constructor(state);
	    }

	    var handler = action && action.type ? handlers[action.type] : undefined;

	    if (!handler) {
	      return state;
	    }

	    state = handler(state, action);

	    if (enforceImmutable && !_immutable2['default'].Iterable.isIterable(state)) {
	      throw new TypeError('Reducers must return Immutable objects.');
	    }

	    return state;
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = template;

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _ActionTypes = __webpack_require__(203);

	var ActionTypes = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = _immutable2.default.fromJS(BH.STORE.popConfig);

	function template() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case ActionTypes.UPDATE_TEMPLATE:
	            return action.$template;

	        case ActionTypes.UPDATE_WIDGET:
	            return state.setIn(['widgets', action.wId], action.$widget);
	            break;
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 203:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var UPDATE_TEMPLATE = exports.UPDATE_TEMPLATE = 'UPDATE_TEMPLATE';
	var UPDATE_WIDGET = exports.UPDATE_WIDGET = 'UPDATE_WIDGET';

/***/ },

/***/ 204:
/***/ function(module, exports) {

	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;

	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */

	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}

	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */

	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;

	  // exit if console undefined

	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }

	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;

	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;

	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");

	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }

	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");

	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }

	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }

	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }

	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }

	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }

	        var logEntry = {};
	        logBuffer.push(logEntry);

	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;

	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());

	        printBuffer();

	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}

	module.exports = createLogger;

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _redux = __webpack_require__(179);

	var _reactRedux = __webpack_require__(172);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _core = __webpack_require__(329);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _template = __webpack_require__(810);

	var TodoActions = _interopRequireWildcard(_template);

	var _Main = __webpack_require__(811);

	var _Main2 = _interopRequireDefault(_Main);

	var _Layout = __webpack_require__(940);

	var _Layout2 = _interopRequireDefault(_Layout);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import PanResponderDemo from '../examples/base/2/PanResponder/PanResponder'
	//import ViewDemo from '../examples/base/2/View/View'
	//import ScrollViewDemo from '../examples/base/2/ScrollView/ScrollView'
	//import ListViewDemo from '../examples/base/2/ListView/ListView';
	//import PickerDemo from '../examples/base/2/Picker/Picker'
	//import DatePickerIOSDemo from '../examples/base/2/DatePickerIOS/DatePickerIOS'
	//import ViewPagerDemo from '../examples/base/2/ViewPager/ViewPager'
	//import NavigatorDemo from '../examples/base/2/Navigator/Navigator'
	//
	//import AutoSizerDemo from '../examples/base/3/AutoSizer/AutoSizer';
	//import WheelerDemo from '../examples/base/3/Wheeler/Wheeler';
	//import SwiperDemo from '../examples/base/3/Swiper/Swiper';
	//
	//
	//import ScrollSyncDemo from '../examples/base/3/ScrollSync/ScrollSync';
	//import CellMeasurerDemo from '../examples/base/3/CellMeasurer/CellMeasurer';
	//import ColumnSizerDemo from '../examples/base/3/ColumnSizer/ColumnSizer';
	//import GridDemo from '../examples/base/3/Grid/Grid';
	//import CollectionDemo from '../examples/base/3/Collection/Collection';
	//import VirtualScrollDemo from '../examples/base/3/VirtualScroll/VirtualScroll';
	//import InfiniteLoaderDemo from '../examples/base/3/InfiniteLoader/InfiniteLoader';
	//import ArrowKeyStepperDemo from '../examples/base/3/ArrowKeyStepper/ArrowKeyStepper';
	//import GiftedListViewDemo from '../examples/base/3/GiftedListView/GiftedListView'
	//import SideMenu from '../examples/base/3/SideMenu/SideMenu'
	//import SortableDemo from '../examples/base/3/Sortable/Sortable'
	//import Animatable from '../examples/base/3/Animatable/Animatable'
	//
	//import TableResizeExample from '../examples/base/3/Table/ResizeExample'
	//import TableColumnGroupsExample from '../examples/base/3/Table/ColumnGroupsExample'
	//import TableFilterExample from '../examples/base/3/Table/FilterExample'
	//import TableFlexGrowExample from '../examples/base/3/Table/FlexGrowExample'
	//import TableObjectDataExample from '../examples/base/3/Table/ObjectDataExample'
	//import TableSortExample from '../examples/base/3/Table/SortExample'

	// import DialogDemo from '../examples/base/3/Dialog/Dialog'

	//import UIExplorerApp from '../examples/UIExplorer/UIExplorerApp.web'
	// import Game2048 from '../examples/2048/Game2048'

	var App = function (_Component) {
	    _inherits(App, _Component);

	    _createClass(App, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            var _props = this.props;
	            var actions = _props.actions;
	            var $template = _props.$template;

	            return {
	                actions: actions,
	                $template: $template
	            };
	        }
	    }]);

	    function App(props, context) {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));
	    }

	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            setInterval(function () {
	                (0, _lib.Fetch)(BH.servletURL + '?op=fr_bi_dezi&cmd=update_session', {
	                    method: "POST",
	                    body: JSON.stringify({ _t: new Date(), sessionID: BH.sessionID })
	                });
	            }, 30000);
	            window.onbeforeunload = function () {
	                (0, _lib.Fetch)(BH.servletURL + '?op=closesessionid', {
	                    method: "POST",
	                    body: JSON.stringify({ _t: new Date(), sessionID: BH.sessionID })
	                });
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _lib2.default.createElement(
	                _lib.View,
	                null,
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { flex: true, box: 'mean' },
	                    _lib2.default.createElement(_Main2.default, { $template: this.props.$template })
	                ),
	                _lib2.default.createElement(_lib.Portal, null)
	            );
	        }
	    }]);

	    return App;
	}(_lib.Component);

	App.childContextTypes = {
	    actions: _lib.PropTypes.object,
	    $template: _lib.PropTypes.object
	};


	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        position: 'absolute',
	        left: 0,
	        right: 0,
	        top: 0,
	        bottom: 0
	    }
	});

	App.propTypes = {
	    actions: _lib.PropTypes.object.isRequired,
	    $template: _lib.PropTypes.object.isRequired
	};
	_reactMixin2.default.onClass(App, _core.ReactComponentWithImmutableRenderMixin);

	function mapStateToProps(state) {
	    var props = {
	        $template: state.get('template')
	    };
	    return props;
	}
	function mapDispatchToProps(dispatch) {
	    var actionMap = { actions: (0, _redux.bindActionCreators)(TodoActions, dispatch) };
	    return actionMap;
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.updateTemplate = updateTemplate;
	exports.updateWidget = updateWidget;

	var _ActionTypes = __webpack_require__(203);

	var types = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function updateTemplate($template) {
	    return { type: types.UPDATE_TEMPLATE, $template: $template };
	}

	function updateWidget($widget, wId) {
	    return { type: types.UPDATE_WIDGET, $widget: $widget, wId: wId };
	}

/***/ },

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _Toolbar = __webpack_require__(812);

	var _Toolbar2 = _interopRequireDefault(_Toolbar);

	var _LayoutComponent = __webpack_require__(914);

	var _LayoutComponent2 = _interopRequireDefault(_LayoutComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Dimensions$get = _lib.Dimensions.get('window');

	var width = _Dimensions$get.width;
	var height = _Dimensions$get.height;

	var Main = function (_Component) {
	    _inherits(Main, _Component);

	    function Main(props, context) {
	        _classCallCheck(this, Main);

	        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props, context));

	        _this.template = _data.TemplateFactory.createTemplate(props.$template);
	        return _this;
	    }

	    _createClass(Main, [{
	        key: 'navigationBarRouteMapper',
	        value: function navigationBarRouteMapper() {
	            var self = this;
	            return {
	                LeftButton: function LeftButton(route, navigator, index, navState) {
	                    if (index === 0) {
	                        return null;
	                    }

	                    return _lib2.default.createElement(
	                        _lib.TouchableHighlight,
	                        {
	                            onPress: function onPress() {
	                                return navigator.pop();
	                            },
	                            underlayColor: _data.Colors.PRESS,
	                            style: styles.navBarLeftButton },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            { style: [styles.navBarText, styles.navBarButtonText] },
	                            '返回'
	                        )
	                    );
	                },
	                RightButton: function RightButton(route, navigator, index, navState) {
	                    if (index === 0) {
	                        return null;
	                    }

	                    if (route.name === 'widget') {
	                        return _lib2.default.createElement(
	                            _lib.TouchableHighlight,
	                            {
	                                onPress: function onPress() {
	                                    var prevRoute = navState.routeStack[navState.presentedIndex - 1];
	                                    if (route.$template) {
	                                        prevRoute.$template = route.$template;
	                                        navigator.replacePreviousAndPop(prevRoute);
	                                    } else {
	                                        navigator.pop();
	                                    }
	                                },
	                                underlayColor: _data.Colors.PRESS,
	                                style: styles.navBarRightButton },
	                            _lib2.default.createElement(
	                                _lib.Text,
	                                { style: [styles.navBarText, styles.navBarButtonText] },
	                                '确定'
	                            )
	                        );
	                    }

	                    if (route.name === 'list') {
	                        return _lib2.default.createElement(
	                            _lib.TouchableHighlight,
	                            {
	                                onPress: function onPress() {
	                                    var prevRoute = navState.routeStack[navState.presentedIndex - 1];
	                                    if (route.$template) {
	                                        prevRoute.$template = route.$template;
	                                        self.context.actions.updateTemplate(route.$template);
	                                        navigator.replacePreviousAndPop(prevRoute);
	                                    } else {
	                                        navigator.pop();
	                                    }
	                                },
	                                underlayColor: _data.Colors.PRESS,
	                                style: styles.navBarRightButton },
	                            _lib2.default.createElement(
	                                _lib.Text,
	                                { style: [styles.navBarText, styles.navBarButtonText] },
	                                '查询'
	                            )
	                        );
	                    }

	                    return null;
	                },
	                Title: function Title(route, navigator, index, navState) {
	                    return _lib2.default.createElement(
	                        _lib.Text,
	                        { style: [styles.navBarText, styles.navBarTitleText] },
	                        route.title
	                    );
	                }
	            };
	        }
	    }, {
	        key: 'renderScene',
	        value: function renderScene(route, navigationOperations, onComponentRef) {
	            var props = _objectWithoutProperties(this.props, []);

	            var name = route.name;
	            var Component = route.Component;
	            var title = route.title;
	            var onValueChange = route.onValueChange;

	            var others = _objectWithoutProperties(route, ['name', 'Component', 'title', 'onValueChange']);

	            if (name === 'index') {
	                if (this.template.hasControlWidget()) {
	                    return _lib2.default.createElement(
	                        _layout.Layout,
	                        { flex: true, dir: 'top', box: 'last' },
	                        _lib2.default.createElement(_LayoutComponent2.default, _extends({ width: width, height: height - 50 - _data.Sizes.ITEM_HEIGHT }, props, {
	                            navigator: navigationOperations })),
	                        _lib2.default.createElement(_Toolbar2.default, _extends({}, props, { navigator: navigationOperations }))
	                    );
	                }
	                return _lib2.default.createElement(_LayoutComponent2.default, _extends({ width: width, height: height }, props));
	            }
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { flex: true, box: 'mean' },
	                _lib2.default.createElement(Component, _extends({
	                    width: width, height: height - 50
	                }, others, {
	                    onValueChange: function onValueChange($template) {
	                        route.$template = $template;
	                    },
	                    navigator: navigationOperations
	                }))
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var initialRoute = { name: 'index', title: '首页' };
	            return _lib2.default.createElement(_lib.Navigator, {
	                style: styles.wrapper,
	                initialRoute: initialRoute,
	                renderScene: this.renderScene.bind(this),
	                navigationBar: _lib2.default.createElement(_lib.Navigator.NavigationBar, {
	                    routeMapper: this.navigationBarRouteMapper(),
	                    style: styles.navBar
	                }),
	                configureScene: function configureScene(route) {
	                    if (route.sceneConfig) {
	                        return route.sceneConfig;
	                    }
	                    return _lib.Navigator.SceneConfigs.FloatFromRight;
	                },
	                sceneStyle: styles.sceneStyle
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return Main;
	}(_lib.Component);

	Main.contextTypes = {
	    actions: _lib2.default.PropTypes.object,
	    $template: _lib2.default.PropTypes.object
	};
	Main.propTypes = {};

	_reactMixin2.default.onClass(Main, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        paddingTop: 50
	    },
	    sceneStyle: {
	        backgroundColor: _data.Colors.TEXT
	    },
	    navBar: {
	        backgroundColor: '#efeff4',
	        height: 50,
	        borderBottomWidth: 1,
	        borderBottomColor: _data.Colors.BORDER
	    },
	    navBarText: {
	        fontSize: 16
	    },
	    navBarTitleText: {
	        color: '#000',
	        fontWeight: 700
	    },
	    navBarLeftButton: {
	        color: _data.Colors.HIGHLIGHT,
	        paddingLeft: 10
	    },
	    navBarRightButton: {
	        color: _data.Colors.HIGHLIGHT,
	        paddingRight: 10
	    }
	});

	exports.default = Main;

/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _Controls = __webpack_require__(908);

	var _Controls2 = _interopRequireDefault(_Controls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Toolbar = function (_Component) {
	    _inherits(Toolbar, _Component);

	    function Toolbar(props, context) {
	        _classCallCheck(this, Toolbar);

	        var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Toolbar, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }, {
	        key: '_onPress',
	        value: function _onPress() {
	            this.props.navigator.push(_extends({}, this.props, {
	                name: 'list',
	                Component: _Controls2.default,
	                title: '参数查询'
	            }));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            return _lib2.default.createElement(_base.IconButton, { onPress: this._onPress.bind(this), className: 'tool-filter-font',
	                style: [styles.filter] });
	        }
	    }]);

	    return Toolbar;
	}(_lib.Component);

	Toolbar.propTypes = {};
	Toolbar.defaultProps = {};

	_reactMixin2.default.onClass(Toolbar, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    filter: {
	        borderTop: '1px solid ' + _data.Colors.BORDER,
	        height: _data.Sizes.ITEM_HEIGHT
	    }
	});
	exports.default = Toolbar;

/***/ },

/***/ 895:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.YearMonthWidget = exports.DateWidget = exports.MultiTreeSelectorWidget = exports.MultiSelectorWidget = exports.TableWidget = undefined;

	var _TableWidget2 = __webpack_require__(896);

	var _TableWidget3 = _interopRequireDefault(_TableWidget2);

	var _MultiSelectorWidget2 = __webpack_require__(899);

	var _MultiSelectorWidget3 = _interopRequireDefault(_MultiSelectorWidget2);

	var _MultiTreeSelectorWidget2 = __webpack_require__(902);

	var _MultiTreeSelectorWidget3 = _interopRequireDefault(_MultiTreeSelectorWidget2);

	var _DateWidget2 = __webpack_require__(906);

	var _DateWidget3 = _interopRequireDefault(_DateWidget2);

	var _YearMonthWidget2 = __webpack_require__(907);

	var _YearMonthWidget3 = _interopRequireDefault(_YearMonthWidget2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.TableWidget = _TableWidget3.default;
	exports.MultiSelectorWidget = _MultiSelectorWidget3.default;
	exports.MultiTreeSelectorWidget = _MultiTreeSelectorWidget3.default;
	exports.DateWidget = _DateWidget3.default;
	exports.YearMonthWidget = _YearMonthWidget3.default;
	exports.default = module.exports;

/***/ },

/***/ 896:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactAddonsPureRenderMixin = __webpack_require__(230);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _base = __webpack_require__(813);

	var _GroupHeader = __webpack_require__(897);

	var _GroupHeader2 = _interopRequireDefault(_GroupHeader);

	var _GroupItems = __webpack_require__(898);

	var _GroupItems2 = _interopRequireDefault(_GroupItems);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColumnGroup = _base.Table.ColumnGroup;
	var Column = _base.Table.Column;
	var Cell = _base.Table.Cell;

	var TableWidget = function (_Component) {
	    _inherits(TableWidget, _Component);

	    function TableWidget(props, context) {
	        _classCallCheck(this, TableWidget);

	        var _this = _possibleConstructorReturn(this, (TableWidget.__proto__ || Object.getPrototypeOf(TableWidget)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TableWidget, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var isNeedFreeze = _props.isNeedFreeze;
	            var freezeCols = _props.freezeCols;
	            var columnSize = _props.columnSize;
	            var rowHeight = _props.rowHeight;
	            var headerRowHeight = _props.headerRowHeight;
	            var header = _props.header;
	            var items = _props.items;
	            var groupHeader = _props.groupHeader;
	            var groupItems = _props.groupItems;
	            var itemsCellRenderer = _props.itemsCellRenderer;
	            var headerCellRenderer = _props.headerCellRenderer;
	            var groupHeaderCellRenderer = _props.groupHeaderCellRenderer;
	            var groupItemsCellRenderer = _props.groupItemsCellRenderer;
	            var width = _props.width;
	            var height = _props.height;

	            var others = _objectWithoutProperties(_props, ['isNeedFreeze', 'freezeCols', 'columnSize', 'rowHeight', 'headerRowHeight', 'header', 'items', 'groupHeader', 'groupItems', 'itemsCellRenderer', 'headerCellRenderer', 'groupHeaderCellRenderer', 'groupItemsCellRenderer', 'width', 'height']);

	            var fixColumns = [],
	                columns = [];
	            header.forEach(function (row, colIndex) {
	                var column = _lib2.default.createElement(Column, {
	                    key: colIndex,
	                    fixed: isNeedFreeze && freezeCols.indexOf(colIndex) > -1,
	                    header: headerCellRenderer(_extends({ colIndex: colIndex }, row)),
	                    cell: function cell(_ref) {
	                        var rowIndex = _ref.rowIndex;

	                        var props = _objectWithoutProperties(_ref, ['rowIndex']);

	                        return itemsCellRenderer(_extends({
	                            colIndex: colIndex,
	                            rowIndex: rowIndex }, items[colIndex][rowIndex], props));
	                    },
	                    width: columnSize[colIndex]
	                });
	                if (isNeedFreeze && freezeCols.indexOf(colIndex) > -1) {
	                    fixColumns.push(column);
	                } else {
	                    columns.push(column);
	                }
	            });

	            return _lib2.default.createElement(
	                _base.Table,
	                _extends({
	                    rowHeight: rowHeight,
	                    groupHeaderHeight: headerRowHeight * groupHeader.length,
	                    headerHeight: headerRowHeight,
	                    rowsCount: items[0] ? items[0].length : 0,
	                    width: width,
	                    height: height
	                }, others),
	                fixColumns.length > 0 ? _lib2.default.createElement(
	                    ColumnGroup,
	                    {
	                        fixed: true,
	                        header: _lib2.default.createElement(_GroupHeader2.default, { headerRowHeight: headerRowHeight, groupHeader: groupHeader,
	                            groupHeaderCellRenderer: groupHeaderCellRenderer }) },
	                    fixColumns
	                ) : null,
	                _lib2.default.createElement(
	                    ColumnGroup,
	                    {
	                        header: _lib2.default.createElement(_GroupItems2.default, { columnSize: columnSize.slice(fixColumns.length), headerRowHeight: headerRowHeight,
	                            groupHeader: groupHeader, groupItems: groupItems,
	                            groupItemsCellRenderer: groupItemsCellRenderer }) },
	                    columns
	                )
	            );
	        }
	    }]);

	    return TableWidget;
	}(_lib.Component);

	TableWidget.propTypes = {};
	TableWidget.defaultProps = {
	    isNeedFreeze: true,
	    freezeCols: [],
	    columnSize: [],
	    rowHeight: 36,
	    headerRowHeight: 36,
	    header: [],
	    items: [],
	    groupHeader: [],
	    groupItems: [],
	    itemsCellRenderer: _core.emptyFunction,
	    headerCellRenderer: _core.emptyFunction,
	    groupHeaderCellRenderer: _core.emptyFunction,
	    groupItemsCellRenderer: _core.emptyFunction
	};

	_reactMixin2.default.onClass(TableWidget, _reactAddonsPureRenderMixin2.default);
	var style = _lib.StyleSheet.create({
	    region: {
	        position: 'absolute'
	    }
	});
	exports.default = TableWidget;

/***/ },

/***/ 897:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _base = __webpack_require__(813);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GroupHeader = function (_Component) {
	    _inherits(GroupHeader, _Component);

	    function GroupHeader(props, context) {
	        _classCallCheck(this, GroupHeader);

	        var _this = _possibleConstructorReturn(this, (GroupHeader.__proto__ || Object.getPrototypeOf(GroupHeader)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(GroupHeader, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var width = _props.width;
	            var height = _props.height;
	            var groupHeader = _props.groupHeader;
	            var headerRowHeight = _props.headerRowHeight;
	            var groupHeaderCellRenderer = _props.groupHeaderCellRenderer;
	            var props = _objectWithoutProperties(_props, ['width', 'height', 'groupHeader', 'headerRowHeight', 'groupHeaderCellRenderer']);
	            var state = _objectWithoutProperties(this.state, []);

	            var items = [];
	            (0, _core.each)(groupHeader, function (cell, rowIndex) {
	                var style = {
	                    position: 'absolute',
	                    width: width,
	                    height: headerRowHeight,
	                    borderBottomWidth: 1 / _lib.PixelRatio.get(),
	                    borderRightWidth: 1 / _lib.PixelRatio.get(),
	                    borderBottomColor: '#d3d3d3',
	                    borderRightColor: '#d3d3d3'
	                };
	                (0, _core.translateDOMPositionXY)(style, 0, rowIndex * headerRowHeight);

	                items.push(_lib2.default.createElement(
	                    _lib.View,
	                    { style: style },
	                    groupHeaderCellRenderer(_extends({ rowIndex: rowIndex, width: width, headerRowHeight: height }, cell))
	                ));
	            });
	            return _lib2.default.createElement(
	                _lib.View,
	                { style: [styles.wrapper, { width: width, height: height }] },
	                items
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return GroupHeader;
	}(_lib.Component);

	GroupHeader.propTypes = {};
	GroupHeader.defaultProps = {
	    headerRowHeight: 30,
	    groupHeader: [],
	    groupHeaderCellRenderer: _core.emptyFunction,
	    width: 200,
	    height: 30
	};

	_reactMixin2.default.onClass(GroupHeader, _core.ReactComponentWithPureRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        position: 'relative'
	    }
	});
	exports.default = GroupHeader;

/***/ },

/***/ 898:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _base = __webpack_require__(813);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GroupItems = function (_Component) {
	    _inherits(GroupItems, _Component);

	    function GroupItems(props, context) {
	        _classCallCheck(this, GroupItems);

	        var _this = _possibleConstructorReturn(this, (GroupItems.__proto__ || Object.getPrototypeOf(GroupItems)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(GroupItems, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: '_renderCells',
	        value: function _renderCells() {
	            var _props = this.props;
	            var groupHeader = _props.groupHeader;
	            var groupItems = _props.groupItems;
	            var columnSize = _props.columnSize;
	            var headerRowHeight = _props.headerRowHeight;
	            var groupItemsCellRenderer = _props.groupItemsCellRenderer;

	            var props = _objectWithoutProperties(_props, ['groupHeader', 'groupItems', 'columnSize', 'headerRowHeight', 'groupItemsCellRenderer']);

	            var cells = [];
	            var index = 0;
	            var track = function track(node, layer) {
	                if (!(0, _core.isEmpty)(node.children)) {
	                    var width = 0;
	                    (0, _core.each)(node.children, function (child) {
	                        width += track(child, layer + 1);
	                    });
	                    node.width = width;
	                    return width;
	                }
	                var values = node.values;
	                if ((0, _core.isEmpty)(values)) {
	                    values = [''];
	                }
	                node.width = _core.math.sum(columnSize.slice(index, index + values.length));
	                index += values.length;
	                return node.width;
	            };
	            (0, _core.each)(groupItems, function (item) {
	                track(item, 0);
	            });

	            if (groupItems.length > 0) {
	                (function () {
	                    var children = groupItems[0].children;
	                    var offsets = [];
	                    var offset = 0;
	                    (0, _core.each)(children, function (child) {
	                        offsets.push(offset);
	                        offset += child.width;
	                    });
	                    var layer = 0;

	                    var _loop = function _loop() {
	                        var childs = [];
	                        var childOffsets = [];
	                        (0, _core.each)(children, function (child, i) {
	                            var style = {
	                                position: 'absolute',
	                                width: child.width,
	                                height: headerRowHeight,
	                                borderBottomWidth: 1 / _lib.PixelRatio.get(),
	                                borderRightWidth: 1 / _lib.PixelRatio.get(),
	                                borderBottomColor: '#d3d3d3',
	                                borderRightColor: '#d3d3d3'
	                            };
	                            if ((0, _core.isEmpty)(child.children)) {
	                                style.height = (groupHeader.length - layer) * headerRowHeight;
	                            }
	                            (0, _core.translateDOMPositionXY)(style, offsets[i], layer * headerRowHeight);
	                            cells.push(_lib2.default.createElement(
	                                _lib.View,
	                                { style: style },
	                                groupItemsCellRenderer(_extends({ layer: layer, height: style.height }, child))
	                            ));
	                            var offset = 0;
	                            (0, _core.each)(child.children, function (c) {
	                                childs.push(c);
	                                childOffsets.push(offsets[i] + offset);
	                                offset += c.width;
	                            });
	                        });
	                        children = childs;
	                        offsets = childOffsets;
	                        layer++;
	                    };

	                    while (children.length > 0 && layer < groupHeader.length) {
	                        _loop();
	                    }
	                })();
	            }
	            return cells;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props;
	            var width = _props2.width;
	            var height = _props2.height;
	            var groupItems = _props2.groupItems;
	            var headerRowHeight = _props2.headerRowHeight;
	            var groupItemsCellRenderer = _props2.groupItemsCellRenderer;
	            var props = _objectWithoutProperties(_props2, ['width', 'height', 'groupItems', 'headerRowHeight', 'groupItemsCellRenderer']);
	            var state = _objectWithoutProperties(this.state, []);

	            var items = this._renderCells();
	            return _lib2.default.createElement(
	                _lib.View,
	                { style: [styles.wrapper, { width: width, height: height }] },
	                items
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return GroupItems;
	}(_lib.Component);

	GroupItems.propTypes = {};
	GroupItems.defaultProps = {
	    headerRowHeight: 30,
	    columnSize: [],
	    groupHeader: [],
	    groupItems: [],
	    groupItemsCellRenderer: _core.emptyFunction,
	    width: 200,
	    height: 30
	};

	_reactMixin2.default.onClass(GroupItems, _core.ReactComponentWithPureRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        position: 'relative'
	    }
	});
	exports.default = GroupItems;

/***/ },

/***/ 899:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactAddonsPureRenderMixin = __webpack_require__(230);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _data = __webpack_require__(780);

	var _Item = __webpack_require__(900);

	var _Item2 = _interopRequireDefault(_Item);

	var _MultiSelectorWidgetHelper = __webpack_require__(901);

	var _MultiSelectorWidgetHelper2 = _interopRequireDefault(_MultiSelectorWidgetHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MultiSelectorWidget = function (_Component) {
	    _inherits(MultiSelectorWidget, _Component);

	    function MultiSelectorWidget(props, context) {
	        _classCallCheck(this, MultiSelectorWidget);

	        var _this = _possibleConstructorReturn(this, (MultiSelectorWidget.__proto__ || Object.getPrototypeOf(MultiSelectorWidget)).call(this, props, context));

	        _this.state = {};

	        _this.state = _this._getNextState(props, {
	            selected_values: (0, _core.clone)(props.value)
	        });
	        return _this;
	    }

	    _createClass(MultiSelectorWidget, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	            var nextState = _extends({}, props, state);
	            return {
	                value: nextState.value,
	                selected_values: nextState.selected_values,
	                type: nextState.type,
	                items: nextState.items,
	                hasNext: nextState.hasNext,
	                times: nextState.times || 0
	            };
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._fetchData();
	        }
	    }, {
	        key: '_fetchData',
	        value: function _fetchData() {
	            var _this2 = this;

	            if (this.props.itemsCreator) {
	                this.props.itemsCreator({
	                    selected_values: this.state.value,
	                    times: this.state.times + 1
	                }).then(function (data) {
	                    _this2.setState(_this2._getNextState(_this2.props, _extends({}, _this2.state, {
	                        times: _this2.state.times + 1,
	                        hasNext: data.hasNext,
	                        items: _this2.state.items.concat((0, _core.map)(data.value, function (val) {
	                            return { value: val };
	                        }))
	                    })));
	                });
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this3 = this;

	            this.setState(this._getNextState(nextProps, {
	                times: 0,
	                selected_values: (0, _core.clone)(nextProps.value)
	            }), function () {
	                _this3._fetchData();
	            });
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            this._helper = new _MultiSelectorWidgetHelper2.default(state);
	            //return <Infinite
	            //    elementHeight={44}
	            //    containerHeight={props.height}
	            //    infiniteLoadBeginEdgeOffset={200}
	            //    onInfiniteLoad={this.handleInfiniteLoad}
	            //    loadingSpinnerDelegate={this.elementInfiniteLoad()}
	            //    isInfiniteLoading={true}
	            //    timeScrollStateLastsForAfterUserScrolls={1000}
	            //    ></Infinite>;
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { dir: 'top', box: 'last', style: styles.wrapper },
	                _lib2.default.createElement(_base.VirtualScroll, {
	                    width: props.width,
	                    height: props.height - _data.Sizes.ITEM_HEIGHT,
	                    overscanRowCount: 0
	                    //noRowsRenderer={this._noRowsRenderer.bind(this)}
	                    , rowCount: this._helper.getSortedItems().length + 1,
	                    rowHeight: _data.Sizes.ITEM_HEIGHT,
	                    rowRenderer: this._rowRenderer.bind(this)
	                    //scrollToIndex={scrollToIndex}
	                }),
	                _lib2.default.createElement(
	                    _lib.View,
	                    { style: styles.toolbar },
	                    _lib2.default.createElement(
	                        _base.TextButton,
	                        { style: { flex: 1 },
	                            onPress: this._onSelectAll.bind(this) },
	                        state.type === 1 ? '全选' : '全不选'
	                    )
	                )
	            );
	        }
	    }, {
	        key: '_onSelectAll',
	        value: function _onSelectAll() {
	            var _this4 = this;

	            var type = this.state.type === 2 ? 1 : 2;
	            this.setState({
	                type: type,
	                selected_values: []
	            }, function () {
	                var _state = _this4.state;
	                var value = _state.selected_values;
	                var type = _state.type;

	                _this4.props.onValueChange({
	                    type: type,
	                    value: value
	                });
	            });
	        }
	    }, {
	        key: '_moreRenderer',
	        value: function _moreRenderer() {
	            var _this5 = this;

	            if (this.state.hasNext === true) {
	                return _lib2.default.createElement(
	                    _base.TextButton,
	                    { style: { height: _data.Sizes.ITEM_HEIGHT }, onPress: function onPress() {
	                            _this5._fetchData();
	                        } },
	                    '点击加载更多数据'
	                );
	            } else {
	                return _lib2.default.createElement(
	                    _base.TextButton,
	                    { style: { height: _data.Sizes.ITEM_HEIGHT }, disabled: true },
	                    '无更多数据'
	                );
	            }
	        }
	    }, {
	        key: '_rowRenderer',
	        value: function _rowRenderer(_ref) {
	            var _this6 = this;

	            var index = _ref.index;
	            var isScrolling = _ref.isScrolling;

	            if (index === this._helper.getSortedItems().length) {
	                return this._moreRenderer();
	            } else {
	                var _ret = function () {
	                    var rowData = _this6._helper.getSortedItems()[index];
	                    return {
	                        v: _lib2.default.createElement(_Item2.default, _extends({ key: rowData.value, onSelected: function onSelected(sel) {
	                                if (sel) {
	                                    _this6._helper.selectOneValue(rowData.value);
	                                } else {
	                                    _this6._helper.disSelectOneValue(rowData.value);
	                                }
	                                _this6.setState({
	                                    selected_values: _this6._helper.getSelectedValue()
	                                }, function () {
	                                    var _state2 = _this6.state;
	                                    var value = _state2.selected_values;
	                                    var type = _state2.type;

	                                    _this6.props.onValueChange({
	                                        type: type,
	                                        value: value
	                                    });
	                                });
	                            } }, rowData))
	                    };
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }
	        }
	    }]);

	    return MultiSelectorWidget;
	}(_lib.Component);

	MultiSelectorWidget.propTypes = {};
	MultiSelectorWidget.defaultProps = {
	    type: 0,
	    value: [],
	    items: [],
	    hasNext: false,
	    onValueChange: _core.emptyFunction
	};

	_reactMixin2.default.onClass(MultiSelectorWidget, _reactAddonsPureRenderMixin2.default);
	var styles = _lib.StyleSheet.create({
	    wrapper: {},
	    toolbar: {
	        borderTopWidth: 1 / _lib.PixelRatio.get(),
	        borderTopColor: _data.Colors.BORDER,
	        height: _data.Sizes.ITEM_HEIGHT
	    }
	});
	exports.default = MultiSelectorWidget;

/***/ },

/***/ 900:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactAddonsPureRenderMixin = __webpack_require__(230);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_Component) {
	    _inherits(Item, _Component);

	    function Item(props, context) {
	        _classCallCheck(this, Item);

	        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props, context));

	        _this.state = {};
	        var text = props.text;
	        var value = props.value;
	        var selected = props.selected;

	        _this.state = { text: text, value: value, selected: selected };
	        return _this;
	    }

	    _createClass(Item, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            var text = props.text;
	            var value = props.value;
	            var selected = props.selected;

	            this.state = { text: text, value: value, selected: selected };
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: '_onPress',
	        value: function _onPress() {
	            var _this2 = this;

	            this.setState({
	                selected: !this.state.selected
	            }, function () {
	                _this2.props.onSelected(_this2.state.selected);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            return _lib2.default.createElement(
	                _base.Button,
	                { onPress: this._onPress.bind(this) },
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { box: 'last', style: [styles.row] },
	                    _lib2.default.createElement(
	                        _layout.VerticalCenterLayout,
	                        { style: styles.text },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            null,
	                            state.value == null ? state.text : state.value
	                        )
	                    ),
	                    _lib2.default.createElement(
	                        _layout.CenterLayout,
	                        { style: [{ width: _data.Sizes.ITEM_HEIGHT }] },
	                        _lib2.default.createElement(_base.Checkbox, { checked: this.state.selected, onChecked: this._onPress.bind(this) })
	                    )
	                )
	            );
	        }
	    }]);

	    return Item;
	}(_lib.Component);

	Item.propTypes = {};
	Item.defaultProps = {
	    text: '',
	    value: '',
	    selected: 0,
	    onSelected: _core.emptyFunction
	};

	_reactMixin2.default.onClass(Item, _reactAddonsPureRenderMixin2.default);
	var styles = _lib.StyleSheet.create({
	    row: {
	        height: _data.Sizes.ITEM_HEIGHT,
	        borderBottomColor: _data.Colors.SPLIT,
	        borderBottomWidth: 1 / _lib.PixelRatio.get()
	    },

	    text: {
	        paddingLeft: 20,
	        paddingRight: 20
	    }
	});
	exports.default = Item;

/***/ },

/***/ 901:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MultiSelectorWidgetHelper = function () {
	    function MultiSelectorWidgetHelper(state) {
	        _classCallCheck(this, MultiSelectorWidgetHelper);

	        this.value = state.value || [];
	        this.selected_values = state.selected_values;
	        this.type = state.type;
	        this.items = this.value.map(function (val) {
	            return { value: val };
	        }).concat(state.items);
	        this.sorted = this._digest();
	    }

	    _createClass(MultiSelectorWidgetHelper, [{
	        key: '_selectOneValue',
	        value: function _selectOneValue(val) {
	            if (this.selected_values.indexOf(val) === -1) {
	                this.selected_values.push(val);
	                this.sorted = this._digest();
	            }
	        }
	    }, {
	        key: '_disSelectOneValue',
	        value: function _disSelectOneValue(val) {
	            var idx = void 0;
	            if ((idx = this.selected_values.indexOf(val)) > -1) {
	                this.selected_values.splice(idx, 1);
	                this.sorted = this._digest();
	            }
	        }
	    }, {
	        key: '_digest',
	        value: function _digest() {
	            var _this = this;

	            return this.items.map(function (item) {
	                return _extends({}, item, {
	                    selected: _this.type === 2 ? _this.selected_values.indexOf(item.value) === -1 : _this.selected_values.indexOf(item.value) > -1
	                });
	            });
	        }
	    }, {
	        key: 'selectOneValue',
	        value: function selectOneValue(val) {
	            if (this.type === 2) {
	                this._disSelectOneValue(val);
	            } else {
	                this._selectOneValue(val);
	            }
	        }
	    }, {
	        key: 'disSelectOneValue',
	        value: function disSelectOneValue(val) {
	            if (this.type === 2) {
	                this._selectOneValue(val);
	            } else {
	                this._disSelectOneValue(val);
	            }
	        }
	    }, {
	        key: 'getSelectedValue',
	        value: function getSelectedValue() {
	            return (0, _core.clone)(this.selected_values);
	        }
	    }, {
	        key: 'getSortedItems',
	        value: function getSortedItems() {
	            return this.sorted;
	        }
	    }]);

	    return MultiSelectorWidgetHelper;
	}();

	exports.default = MultiSelectorWidgetHelper;

/***/ },

/***/ 902:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactAddonsPureRenderMixin = __webpack_require__(230);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _base = __webpack_require__(813);

	var _data = __webpack_require__(780);

	var _Item = __webpack_require__(903);

	var _Item2 = _interopRequireDefault(_Item);

	var _MultiTreeSelectorWidgetHelper = __webpack_require__(904);

	var _MultiTreeSelectorWidgetHelper2 = _interopRequireDefault(_MultiTreeSelectorWidgetHelper);

	var _MultiTreeSelectorWidgetAsyncHelper = __webpack_require__(905);

	var _MultiTreeSelectorWidgetAsyncHelper2 = _interopRequireDefault(_MultiTreeSelectorWidgetAsyncHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MultiTreeSelectorWidget = function (_Component) {
	    _inherits(MultiTreeSelectorWidget, _Component);

	    function MultiTreeSelectorWidget(props, context) {
	        _classCallCheck(this, MultiTreeSelectorWidget);

	        var _this = _possibleConstructorReturn(this, (MultiTreeSelectorWidget.__proto__ || Object.getPrototypeOf(MultiTreeSelectorWidget)).call(this, props, context));

	        _this.state = {
	            value: _this.props.value,
	            items: _this.props.items,
	            hasNext: false,
	            times: 0
	        };
	        return _this;
	    }

	    _createClass(MultiTreeSelectorWidget, [{
	        key: '_getNextState',
	        value: function _getNextState(props, state) {
	            var _props$state = _extends({}, props, state);

	            var items = _props$state.items;
	            var value = _props$state.value;
	            var hasNext = _props$state.hasNext;
	            var times = _props$state.times;

	            return {
	                items: items,
	                value: value,
	                hasNext: hasNext,
	                times: times
	            };
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: '_fetchData',
	        value: function _fetchData() {
	            var _this2 = this;

	            if (this.props.itemsCreator) {
	                this.props.itemsCreator({
	                    floors: this.props.floors,
	                    selected_values: this.state.value,
	                    times: this.state.times + 1
	                }).then(function (data) {
	                    _this2.setState(_this2._getNextState(_this2.props, _extends({}, _this2.state, {
	                        times: _this2.state.times + 1,
	                        hasNext: data.hasNext,
	                        items: _this2.state.items.concat(data.items)
	                    })));
	                });
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._fetchData();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState(this._getNextState(_extends({}, this.props, this.state), nextProps));
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            if (props.itemsCreator) {
	                this._helper = new _MultiTreeSelectorWidgetAsyncHelper2.default(state, props);
	            } else {
	                this._helper = new _MultiTreeSelectorWidgetHelper2.default(state);
	            }
	            return _lib2.default.createElement(_base.VirtualScroll, {
	                width: props.width,
	                height: props.height,
	                overscanRowCount: 0
	                //noRowsRenderer={this._noRowsRenderer.bind(this)}
	                , rowCount: this._helper.getSortedItems().length + 1,
	                rowHeight: _data.Sizes.ITEM_HEIGHT,
	                rowRenderer: this._rowRenderer.bind(this)
	                //scrollToIndex={scrollToIndex}
	            });
	        }
	    }, {
	        key: '_moreRenderer',
	        value: function _moreRenderer() {
	            var _this3 = this;

	            if (this.state.hasNext === true) {
	                return _lib2.default.createElement(
	                    _base.TextButton,
	                    { style: { height: _data.Sizes.ITEM_HEIGHT }, onPress: function onPress() {
	                            _this3._fetchData();
	                        } },
	                    '点击加载更多数据'
	                );
	            } else {
	                return _lib2.default.createElement(
	                    _base.TextButton,
	                    { style: { height: _data.Sizes.ITEM_HEIGHT }, disabled: true },
	                    '无更多数据'
	                );
	            }
	        }
	    }, {
	        key: '_rowRenderer',
	        value: function _rowRenderer(_ref) {
	            var _this4 = this;

	            var index = _ref.index;
	            var isScrolling = _ref.isScrolling;

	            if (index === this._helper.getSortedItems().length) {
	                return this._moreRenderer();
	            } else {
	                var _ret = function () {
	                    var rowData = _this4._helper.getSortedItems()[index];
	                    return {
	                        v: _lib2.default.createElement(_Item2.default, _extends({ key: rowData.value, onSelected: function onSelected(sel) {
	                                _this4._onSelected(rowData, sel);
	                            }, onExpand: function onExpand(expanded) {
	                                _this4._onExpand(rowData, expanded);
	                            } }, rowData))
	                    };
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }
	        }
	    }, {
	        key: '_onExpand',
	        value: function _onExpand(rowData, expanded) {
	            var _this5 = this;

	            this._helper[expanded ? 'expandOneNode' : 'collapseOneNode'](rowData).then(function () {
	                _this5.setState({
	                    items: _this5._helper.getItems()
	                });
	            });
	        }
	    }, {
	        key: '_onSelected',
	        value: function _onSelected(rowData, sel) {
	            var _this6 = this;

	            if (sel.checked === true) {
	                this._helper.selectOneNode(rowData);
	            } else {
	                this._helper.disSelectOneNode(rowData);
	            }
	            this.setState({
	                items: this._helper.getItems(),
	                value: this._helper.getSelectedValue()
	            }, function () {
	                _this6.props.onValueChange(_this6.state.value);
	            });
	        }
	    }]);

	    return MultiTreeSelectorWidget;
	}(_lib.Component);

	MultiTreeSelectorWidget.propTypes = {};
	MultiTreeSelectorWidget.defaultProps = {
	    items: [],
	    floors: 0
	};

	_reactMixin2.default.onClass(MultiTreeSelectorWidget, _reactAddonsPureRenderMixin2.default);
	var styles = _lib.StyleSheet.create({
	    region: {
	        position: 'absolute'
	    }
	});
	exports.default = MultiTreeSelectorWidget;

/***/ },

/***/ 903:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactAddonsPureRenderMixin = __webpack_require__(230);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_Component) {
	    _inherits(Item, _Component);

	    function Item(props, context) {
	        _classCallCheck(this, Item);

	        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props, context));

	        _this.state = {};
	        var text = props.text;
	        var value = props.value;
	        var checked = props.checked;
	        var halfCheck = props.halfCheck;
	        var expanded = props.expanded;

	        _this.state = { text: text, value: value, checked: checked, halfCheck: halfCheck, expanded: expanded };
	        return _this;
	    }

	    _createClass(Item, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            var text = props.text;
	            var value = props.value;
	            var checked = props.checked;
	            var halfCheck = props.halfCheck;
	            var expanded = props.expanded;

	            this.setState({ text: text, value: value, checked: checked, halfCheck: halfCheck, expanded: expanded });
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: '_onExpand',
	        value: function _onExpand() {
	            var _this2 = this;

	            this.setState({
	                expanded: !this.state.expanded
	            }, function () {
	                _this2.props.onExpand(_this2.state.expanded);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            var row = void 0;
	            if (!props.isLeaf) {
	                row = _lib2.default.createElement(_base.IconButton, { className: 'node-fold-font', invalid: true, selected: state.expanded, style: [styles.icon, {
	                        width: 44,
	                        marginLeft: props.layer * 44
	                    }] });
	            }
	            return _lib2.default.createElement(
	                _base.Button,
	                { onPress: this._onExpand.bind(this) },
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { box: 'justify', style: [styles.row] },
	                    row ? row : _lib2.default.createElement(_lib.View, null),
	                    _lib2.default.createElement(
	                        _layout.VerticalCenterLayout,
	                        { style: [{
	                                paddingLeft: (0, _core.isNil)(row) ? (props.layer + 1) * 44 : 0
	                            }] },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            null,
	                            (0, _core.isNil)(state.value) ? state.text : state.value
	                        )
	                    ),
	                    _lib2.default.createElement(
	                        _layout.CenterLayout,
	                        { style: [{ width: _data.Sizes.ITEM_HEIGHT }] },
	                        _lib2.default.createElement(_base.Checkbox, { checked: state.checked, halfCheck: state.halfCheck,
	                            onChecked: props.onSelected })
	                    )
	                )
	            );
	        }
	    }]);

	    return Item;
	}(_lib.Component);

	Item.propTypes = {};
	Item.defaultProps = {
	    text: '',
	    value: null,
	    checked: false,
	    halfCheck: false,
	    expanded: false,
	    layer: 0,
	    onExpand: _core.emptyFunction,
	    onSelected: _core.emptyFunction
	};

	_reactMixin2.default.onClass(Item, _reactAddonsPureRenderMixin2.default);
	var styles = _lib.StyleSheet.create({
	    row: {
	        flexDirection: 'row',
	        borderBottomColor: _data.Colors.SPLIT,
	        borderBottomStyle: 'solid',
	        borderBottomWidth: 1 / _lib.PixelRatio.get(),
	        height: _data.Sizes.ITEM_HEIGHT
	    },

	    selected: {
	        backgroundColor: _data.Colors.HIGHLIGHT
	    }
	});
	exports.default = Item;

/***/ },

/***/ 904:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MultiTreeSelectorWidgetHelper = function () {
	    function MultiTreeSelectorWidgetHelper(state) {
	        _classCallCheck(this, MultiTreeSelectorWidgetHelper);

	        this.items = state.items;
	        this.value = state.value || {};
	        var format = this._initTree(this.items, this.value);
	        this.sorted = this._expandTreeItems(format);
	    }

	    _createClass(MultiTreeSelectorWidgetHelper, [{
	        key: '_createMap',
	        value: function _createMap(items) {
	            var _this = this;

	            this.map = {};
	            (0, _core.each)(items, function (node) {
	                _this.map[node.id] = node;
	            });
	        }
	    }, {
	        key: '_createSelectedMap',
	        value: function _createSelectedMap(selected_values) {
	            var _this2 = this;

	            this.selMap = {};
	            var track = function track(val, route) {
	                (0, _core.each)(val, function (child, key) {
	                    if ((0, _core.isEmpty)(child)) {
	                        _this2.selMap[route + key] = 2;
	                    } else {
	                        _this2.selMap[route + key] = 1;
	                    }
	                    track(child, route + key);
	                });
	            };
	            track(selected_values, '');
	        }
	    }, {
	        key: '_getKey',
	        value: function _getKey(values) {
	            return values.join('');
	        }
	    }, {
	        key: '_getRouteKey',
	        value: function _getRouteKey(route) {
	            return this._getKey(this._getRouteValues(route));
	        }
	    }, {
	        key: '_getRouteValues',
	        value: function _getRouteValues(route) {
	            var _this3 = this;

	            var result = [];
	            (0, _core.each)(route, function (key) {
	                result.push(_this3.map[key].value || _this3.map[key].text);
	            });
	            return result;
	        }
	    }, {
	        key: '_getTreeList',
	        value: function _getTreeList(map) {
	            var result = [];
	            var track = function track(node, parent) {
	                (0, _core.each)(node, function (value, key) {
	                    if ((0, _core.isPlainObject)(value) && (0, _core.isEmpty)(value)) {
	                        result.push(parent.concat(key));
	                    } else {
	                        track(value, parent.concat(key));
	                    }
	                });
	            };
	            track(map, []);
	            return result;
	        }
	    }, {
	        key: '_getTree',
	        value: function _getTree(map, values) {
	            var cur = map;
	            (0, _core.some)(values, function (value) {
	                if (cur[value] == null) {
	                    return true;
	                }
	                cur = cur[value];
	            });
	            return cur;
	        }
	    }, {
	        key: '_addTreeNode',
	        value: function _addTreeNode(map, values, key, value) {
	            var cur = map;
	            (0, _core.each)(values, function (value) {
	                if (cur[value] == null) {
	                    cur[value] = {};
	                }
	                cur = cur[value];
	            });
	            cur[key] = value;
	        }

	        //构造树节点

	    }, {
	        key: '_buildTree',
	        value: function _buildTree(map, values) {
	            var cur = map;
	            (0, _core.each)(values, function (value) {
	                if (cur[value] == null) {
	                    cur[value] = {};
	                }
	                cur = cur[value];
	            });
	        }

	        //获取半选框值

	    }, {
	        key: '_buildHalfSelectedValues',
	        value: function _buildHalfSelectedValues(map, node, parentValues) {
	            var _node$get = node.get('data');

	            var halfCheck = _node$get.halfCheck;
	            var checked = _node$get.checked;
	            var isParent = _node$get.isParent;
	            var value = _node$get.value;
	            var text = _node$get.text;
	            //将未选的去掉

	            if (checked === false && halfCheck === false) {
	                return;
	            }
	            var path = parentValues.concat(value || text);
	            //如果节点已展开,并且是半选
	            if (isParent === true && node.getChildrenLength() > 0 && halfCheck === true) {
	                // each(node.getChildren(), (ch)=> {
	                //     this._buildHalfSelectedValues(map, ch, path);
	                // });
	                return;
	            }
	            if (node.getChildrenLength() > 0 || halfCheck === false) {
	                this._buildTree(map, path);
	                return;
	            }
	            var treeNode = this._getTree(this.value, path);
	            this._addTreeNode(map, parent, value || text, treeNode);
	        }
	    }, {
	        key: '_initTree',
	        value: function _initTree(items) {
	            var _this4 = this;

	            var selected_values = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	            this._createMap(items);
	            this._createSelectedMap(selected_values);
	            var format = _core.Tree.transformToTreeFormat(items);
	            this.tree = new _core.Tree();
	            this.tree.initTree(format);
	            this.tree.recursion(function (child, routes) {
	                var key = _this4._getRouteKey(routes);
	                if (_this4.selMap[key] === 1) {
	                    child.get('data').checked = true;
	                    child.get('data').halfCheck = true;
	                } else if (_this4.selMap[key] === 2) {
	                    child.get('data').checked = true;
	                    child.get('data').halfCheck = false;
	                }
	            });
	            return format;
	        }
	    }, {
	        key: '_expandTreeItems',
	        value: function _expandTreeItems(items) {
	            var result = [];
	            var track = function track(nodes, layer) {
	                (0, _core.each)(nodes, function (node, i) {
	                    var children = node.children;

	                    var others = _objectWithoutProperties(node, ['children']);

	                    var isLeaf = (0, _core.isNil)(node.children) && !node.isParent;
	                    result.push(_extends({
	                        layer: layer,
	                        isLeaf: isLeaf
	                    }, others));
	                    if (node.expanded === true) {
	                        track(children, layer + 1);
	                    }
	                });
	            };
	            track(items, 0);
	            return result;
	        }
	    }, {
	        key: '_adjustUpTreeSelected',
	        value: function _adjustUpTreeSelected(node) {
	            if (this.tree.isRoot(node)) {
	                return;
	            }
	            var isAllSelected = true,
	                isHalSelected = false;
	            (0, _core.each)(node.getChildren(), function (child) {
	                var data = child.get('data');
	                if (!data.checked || data.halfCheck) {
	                    isAllSelected = false;
	                }
	                if (data.checked) {
	                    isHalSelected = true;
	                }
	            });
	            node.get('data').checked = isAllSelected || isHalSelected;
	            node.get('data').halfCheck = !isAllSelected && isHalSelected;
	            this._adjustUpTreeSelected(node.getParent());
	        }
	    }, {
	        key: '_adjustDownTreeSelected',
	        value: function _adjustDownTreeSelected(node) {
	            var _this5 = this;

	            var checked = node.get('data').checked,
	                halfCheck = node.get('data').halfCheck;
	            (0, _core.each)(node.getChildren(), function (child) {
	                var data = child.get('data');
	                if (!checked || !halfCheck) {
	                    data.checked = checked;
	                    data.halfCheck = false;
	                    _this5._adjustDownTreeSelected(child);
	                }
	            });
	        }
	    }, {
	        key: '_digestSelected',
	        value: function _digestSelected() {
	            var _this6 = this;

	            var map = {};
	            var mustDeleted = new Set();
	            this.tree.recursion(function (child, routes) {
	                var _child$get = child.get('data');

	                var checked = _child$get.checked;
	                var halfCheck = _child$get.halfCheck;
	                var isParent = _child$get.isParent;

	                mustDeleted.add(_this6._getRouteKey(routes));
	                if (checked === true && halfCheck === true) {
	                    if (isParent && child.getChildrenLength() === 0) {
	                        _this6._buildHalfSelectedValues(map, child, _this6._getRouteValues(routes).slice(0, routes.length - 1));
	                        return true;
	                    }
	                } else if (checked === true) {
	                    _this6._buildTree(map, _this6._getRouteValues(routes));
	                    return true;
	                }
	            });
	            (0, _core.each)(this.value, function (value, key) {
	                if (!map[key] && !mustDeleted.has(key)) {
	                    map[key] = value;
	                }
	            });
	            this.value = map;
	        }
	    }, {
	        key: '_selectOneNode',
	        value: function _selectOneNode(node) {
	            var find = this.tree.search(node.id);
	            if (find) {
	                var data = find.get('data');
	                data.checked = true;
	                data.halfCheck = false;
	                this._adjustUpTreeSelected(find.getParent());
	                this._adjustDownTreeSelected(find);
	                this._digestSelected();
	            }
	        }
	    }, {
	        key: '_disSelectOneNode',
	        value: function _disSelectOneNode(node) {
	            var find = this.tree.search(node.id);
	            if (find) {
	                var data = find.get('data');
	                data.checked = false;
	                data.halfCheck = false;
	                this._adjustUpTreeSelected(find.getParent());
	                this._adjustDownTreeSelected(find);
	                this._digestSelected();
	            }
	        }
	    }, {
	        key: 'selectOneNode',
	        value: function selectOneNode(node) {
	            this._selectOneNode(node);
	        }
	    }, {
	        key: 'disSelectOneNode',
	        value: function disSelectOneNode(node) {
	            this._disSelectOneNode(node);
	        }
	    }, {
	        key: 'expandOneNode',
	        value: function expandOneNode(node) {
	            var find = this.tree.search(node.id);
	            if (find) {
	                var data = find.get('data');
	                data.expanded = true;
	            }
	            return new _core.Promise(function (resolve, reject) {
	                resolve();
	            });
	        }
	    }, {
	        key: 'collapseOneNode',
	        value: function collapseOneNode(node) {
	            var find = this.tree.search(node.id);
	            if (find) {
	                var data = find.get('data');
	                data.expanded = false;
	            }
	            return new _core.Promise(function (resolve, reject) {
	                resolve();
	            });
	        }
	    }, {
	        key: 'getSelectedValue',
	        value: function getSelectedValue() {
	            return this.value;
	        }
	    }, {
	        key: 'getItems',
	        value: function getItems() {
	            return _core.Tree.transformToArrayFormat(this.tree.toJSON());
	        }
	    }, {
	        key: 'getSortedItems',
	        value: function getSortedItems() {
	            return this.sorted;
	        }
	    }]);

	    return MultiTreeSelectorWidgetHelper;
	}();

	exports.default = MultiTreeSelectorWidgetHelper;

/***/ },

/***/ 905:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	var _MultiTreeSelectorWidgetHelper = __webpack_require__(904);

	var _MultiTreeSelectorWidgetHelper2 = _interopRequireDefault(_MultiTreeSelectorWidgetHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MultiTreeSelectorWidgetAsnycHelper = function (_MultiTreeSelectorWid) {
	    _inherits(MultiTreeSelectorWidgetAsnycHelper, _MultiTreeSelectorWid);

	    function MultiTreeSelectorWidgetAsnycHelper(state, props) {
	        _classCallCheck(this, MultiTreeSelectorWidgetAsnycHelper);

	        var _this = _possibleConstructorReturn(this, (MultiTreeSelectorWidgetAsnycHelper.__proto__ || Object.getPrototypeOf(MultiTreeSelectorWidgetAsnycHelper)).call(this, state));

	        _this.floors = props.floors;
	        _this.itemsCreator = props.itemsCreator;
	        return _this;
	    }

	    _createClass(MultiTreeSelectorWidgetAsnycHelper, [{
	        key: '_digest',
	        value: function _digest() {
	            var format = _core.Tree.transformToTreeFormat(this.items);
	            this.tree.initTree(format);
	        }
	    }, {
	        key: '_getParentValues',
	        value: function _getParentValues(node) {
	            if (this.tree.isRoot(node)) {
	                return [];
	            }
	            var ps = this._getParentValues(node.getParent());
	            return ps.concat(node.get('data').value || node.get('data').text);
	        }
	    }, {
	        key: 'expandOneNode',
	        value: function expandOneNode(node) {
	            var _this2 = this;

	            var find = this.tree.search(node.id);
	            if (find) {
	                var data = find.get('data');
	                data.expanded = true;
	                this.map[node.id].expanded = true;
	                if (data.isParent && find.getChildrenLength() === 0) {
	                    return this.itemsCreator({
	                        id: node.id,
	                        times: -1,
	                        floors: this.floors,
	                        check_state: {
	                            checked: data.checked,
	                            half: data.halfCheck
	                        },
	                        parent_values: this._getParentValues(find),
	                        selected_values: this.value
	                    }).then(function (data) {
	                        (0, _core.each)(data.items, function (item) {
	                            item.pId = node.id;
	                        });
	                        _this2.items = _this2.items.concat(data.items);
	                        _this2._digest();
	                    });
	                }
	            }
	            return new Promise(function (resolve, reject) {
	                resolve();
	            });
	        }
	    }]);

	    return MultiTreeSelectorWidgetAsnycHelper;
	}(_MultiTreeSelectorWidgetHelper2.default);

	exports.default = MultiTreeSelectorWidgetAsnycHelper;

/***/ },

/***/ 906:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DateWidget = function (_Component) {
	    _inherits(DateWidget, _Component);

	    function DateWidget(props, context) {
	        _classCallCheck(this, DateWidget);

	        var _this = _possibleConstructorReturn(this, (DateWidget.__proto__ || Object.getPrototypeOf(DateWidget)).call(this, props, context));

	        _this.state = {
	            year: _this.props.year,
	            month: _this.props.month,
	            day: _this.props.day
	        };
	        return _this;
	    }

	    _createClass(DateWidget, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            return _lib2.default.createElement(
	                _layout.Layout,
	                { dir: 'top', main: 'justify', style: styles.wrapper },
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { cross: 'center', style: styles.button },
	                    _lib2.default.createElement(
	                        _lib.Text,
	                        { style: styles.dateLabel },
	                        '选择日期'
	                    ),
	                    _lib2.default.createElement(
	                        _lib.Text,
	                        {
	                            style: styles.date },
	                        state.year ? state.year + '年' + (state.month + 1) + '月' + state.day + '日' : '无限制'
	                    )
	                ),
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { dir: 'top', box: 'first', style: styles.picker },
	                    _lib2.default.createElement(
	                        _layout.CenterLayout,
	                        { style: styles.header },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            null,
	                            '选择日期'
	                        )
	                    ),
	                    _lib2.default.createElement(_lib.DatePickerIOS, { date: state.year ? new Date(state.year, state.month, state.day) : new Date(),
	                        onDateChange: function onDateChange(date) {
	                            _this2.setState({
	                                year: date.getFullYear(),
	                                month: date.getMonth(),
	                                day: date.getDate()
	                            }, function () {
	                                var _state = _this2.state;
	                                var year = _state.year;
	                                var month = _state.month;
	                                var day = _state.day;

	                                _this2.props.onValueChange({ year: year, month: month, day: day });
	                            });
	                        } })
	                )
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var year = nextProps.year;
	            var month = nextProps.month;
	            var day = nextProps.day;

	            this.setState({ year: year, month: month, day: day });
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return DateWidget;
	}(_lib.Component);

	DateWidget.propTypes = {};
	DateWidget.defaultProps = {
	    onValueChange: _core.emptyFunction
	};

	_reactMixin2.default.onClass(DateWidget, _core.ReactComponentWithPureRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {},

	    dateLabel: {
	        width: 120,
	        paddingLeft: 30
	    },

	    button: {
	        height: _data.Sizes.HEADER_HEIGHT
	    },

	    date: {
	        paddingLeft: 20
	    },

	    picker: {
	        height: 217
	    },

	    header: {
	        paddingLeft: 20,
	        paddingRight: 20,
	        height: _data.Sizes.HEADER_HEIGHT,
	        borderBottomColor: _data.Colors.BORDER,
	        borderBottomWidth: 1 / _lib.PixelRatio.get()
	    }
	});
	exports.default = DateWidget;

/***/ },

/***/ 907:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PICKER_ITEM_HEIGHT = 36;

	var YearMonthWidget = function (_Component) {
	    _inherits(YearMonthWidget, _Component);

	    function YearMonthWidget(props, context) {
	        _classCallCheck(this, YearMonthWidget);

	        var _this = _possibleConstructorReturn(this, (YearMonthWidget.__proto__ || Object.getPrototypeOf(YearMonthWidget)).call(this, props, context));

	        _this.state = {
	            selection: 1,
	            year: _this.props.year,
	            month: _this.props.month
	        };
	        return _this;
	    }

	    _createClass(YearMonthWidget, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            var detailPicker;
	            var year = [],
	                month = [];
	            for (var i = 1900; i <= 2050; i++) {
	                year.push(_lib2.default.createElement(_lib.PickerIOS.Item, { key: i, value: i, label: '' + (i + BH.i18nText("BH-Year")) }));
	            }
	            for (var _i = 0; _i < 12; _i++) {
	                month.push(_lib2.default.createElement(_lib.PickerIOS.Item, { key: _i, value: _i, label: '' + (_i + 1 + BH.i18nText("BH-Month")) }));
	            }
	            if (this.state.selection === 1) {
	                detailPicker = _lib2.default.createElement(
	                    _lib.View,
	                    { style: styles.datepicker },
	                    _lib2.default.createElement(_lib.View, { style: styles.highlight }),
	                    _lib2.default.createElement(
	                        _lib.View,
	                        { style: styles.container },
	                        _lib2.default.createElement(
	                            _lib.PickerIOS,
	                            { selectedValue: this.state.year || new Date().getFullYear(), onValueChange: function onValueChange(Y) {
	                                    _this2.setState({ year: Y }, function () {
	                                        var _state = _this2.state;
	                                        var year = _state.year;
	                                        var month = _state.month;

	                                        _this2.props.onValueChange({ year: year, month: month });
	                                    });
	                                } },
	                            year
	                        )
	                    )
	                );
	            } else {
	                detailPicker = _lib2.default.createElement(
	                    _lib.View,
	                    { style: styles.datepicker },
	                    _lib2.default.createElement(_lib.View, { style: styles.highlight }),
	                    _lib2.default.createElement(
	                        _lib.View,
	                        { style: styles.container },
	                        _lib2.default.createElement(
	                            _lib.PickerIOS,
	                            { selectedValue: this.state.month || new Date().getMonth(), onValueChange: function onValueChange(M) {
	                                    _this2.setState({ month: M }, function () {
	                                        var _state2 = _this2.state;
	                                        var year = _state2.year;
	                                        var month = _state2.month;

	                                        _this2.props.onValueChange({ year: year, month: month });
	                                    });
	                                } },
	                            month
	                        )
	                    )
	                );
	            }
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { dir: 'top', main: 'justify', style: styles.wrapper },
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { cross: 'center', style: styles.button },
	                    _lib2.default.createElement(
	                        _layout.Layout,
	                        null,
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            { style: styles.dateLabel },
	                            BH.i18nText("BH-Select_Year")
	                        ),
	                        _lib2.default.createElement(
	                            _base.TextButton,
	                            { style: styles.date, onPress: function onPress() {
	                                    _this2.setState({
	                                        selection: 1
	                                    });
	                                } },
	                            state.year ? '' + (state.year + BH.i18nText("BH-Year")) : BH.i18nText("BH-Unrestricted")
	                        )
	                    ),
	                    _lib2.default.createElement(
	                        _layout.Layout,
	                        null,
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            { style: styles.dateLabel },
	                            BH.i18nText("BH-Select_Month")
	                        ),
	                        _lib2.default.createElement(
	                            _base.TextButton,
	                            { style: styles.date, onPress: function onPress() {
	                                    _this2.setState({
	                                        selection: 2
	                                    });
	                                } },
	                            state.month ? '' + (state.month + 1 + BH.i18nText("BH-Month")) : BH.i18nText("BH-Unrestricted")
	                        )
	                    )
	                ),
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { dir: 'top', box: 'first', style: styles.picker },
	                    _lib2.default.createElement(
	                        _layout.CenterLayout,
	                        { style: styles.header },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            null,
	                            BH.i18nText("BH-Select_Date")
	                        )
	                    ),
	                    detailPicker
	                )
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var year = nextProps.year;
	            var month = nextProps.month;

	            this.setState({ year: year, month: month });
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return YearMonthWidget;
	}(_lib.Component);

	YearMonthWidget.propTypes = {};
	YearMonthWidget.defaultProps = {
	    onValueChange: _core.emptyFunction
	};

	_reactMixin2.default.onClass(YearMonthWidget, _core.ReactComponentWithPureRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {},

	    dateLabel: {
	        width: 120,
	        paddingLeft: 30
	    },

	    button: {
	        height: _data.Sizes.HEADER_HEIGHT
	    },

	    date: {
	        paddingLeft: 20
	    },

	    picker: {
	        height: 217
	    },

	    header: {
	        paddingLeft: 20,
	        paddingRight: 20,
	        height: _data.Sizes.HEADER_HEIGHT,
	        borderBottomColor: _data.Colors.BORDER,
	        borderBottomWidth: 1 / _lib.PixelRatio.get()
	    },
	    datepicker: {
	        flexDirection: 'row',
	        justifyContent: 'center'
	    },
	    container: {
	        flexDirection: 'row'
	    },
	    highlight: {
	        position: 'absolute',
	        left: 0,
	        right: 0,
	        height: PICKER_ITEM_HEIGHT,
	        top: '50%',
	        marginTop: -1 * PICKER_ITEM_HEIGHT / 2,
	        borderTopWidth: 1,
	        borderTopStyle: 'solid',
	        borderTopColor: '#ddd',
	        borderBottomWidth: 1,
	        borderBottomStyle: 'solid',
	        borderBottomColor: '#ddd'
	    }
	});
	exports.default = YearMonthWidget;

/***/ },

/***/ 908:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _MultiSelectorComponent = __webpack_require__(909);

	var _MultiSelectorComponent2 = _interopRequireDefault(_MultiSelectorComponent);

	var _MultiTreeSelectorComponent = __webpack_require__(910);

	var _MultiTreeSelectorComponent2 = _interopRequireDefault(_MultiTreeSelectorComponent);

	var _DateComponent = __webpack_require__(911);

	var _DateComponent2 = _interopRequireDefault(_DateComponent);

	var _YearMonthComponent = __webpack_require__(912);

	var _YearMonthComponent2 = _interopRequireDefault(_YearMonthComponent);

	var _Item = __webpack_require__(913);

	var _Item2 = _interopRequireDefault(_Item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Controls = function (_Component) {
	    _inherits(Controls, _Component);

	    function Controls(props, context) {
	        _classCallCheck(this, Controls);

	        var _this = _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Controls, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);

	            this.template = _data.TemplateFactory.createTemplate(props.$template);
	            return _lib2.default.createElement(
	                _lib.ScrollView,
	                { style: styles.wrapper },
	                (0, _core.map)(this.template.getAllControlWidgetIds(), function (wId) {
	                    var $widget = _this2.template.get$WidgetById(wId);
	                    var widget = _data.WidgetFactory.createWidget($widget, wId, _this2.template);
	                    return _lib2.default.createElement(_Item2.default, { key: wId, id: wId, $widget: $widget, onPress: function onPress() {
	                            var Component = null;
	                            switch (widget.getType()) {
	                                case BICst.WIDGET.STRING:
	                                    Component = _MultiSelectorComponent2.default;
	                                    break;
	                                case BICst.WIDGET.NUMBER:
	                                case BICst.WIDGET.TREE:
	                                    Component = _MultiTreeSelectorComponent2.default;
	                                    break;
	                                case BICst.WIDGET.DATE:
	                                case BICst.WIDGET.YEAR:
	                                case BICst.WIDGET.QUARTER:
	                                case BICst.WIDGET.MONTH:
	                                    Component = _YearMonthComponent2.default;
	                                    break;
	                                case BICst.WIDGET.YMD:
	                                    Component = _DateComponent2.default;
	                            }
	                            props.navigator.push(_extends({}, props, {
	                                name: 'widget',
	                                wId: wId,
	                                Component: Component,
	                                title: widget.getName()
	                            }));
	                        } });
	                })
	            );
	        }

	        // render() {
	        //     const {...props} = this.props;
	        //     return <VtapeLayout style={styles.wrapper}>
	        //         <HtapeLayout style={styles.title} height={44}>
	        //             <VerticalCenterLayout width={'auto'}><Text onPress={props.onReturn}>返回</Text></VerticalCenterLayout>
	        //             <CenterLayout><Text>参数查询</Text></CenterLayout>
	        //             <VerticalCenterLayout width={'auto'}><Text>查询</Text></VerticalCenterLayout>
	        //         </HtapeLayout>
	        //         <ScrollView>
	        //             {map(props.template.getAllControlWidgetIds(), (id)=> {
	        //                 return <Item id={id} widget={props.template.getWidgetById(id)}/>
	        //             })}
	        //         </ScrollView>
	        //     </VtapeLayout>
	        // }

	    }]);

	    return Controls;
	}(_lib.Component);

	Controls.propTypes = {};

	_reactMixin2.default.onClass(Controls, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        flex: 1
	    },
	    title: {
	        justifyContent: 'space-between',
	        padding: '0 4px',
	        flexDirection: 'row',
	        borderBottom: '1px solid ' + _data.Colors.BORDER
	    },
	    back: {}
	});
	exports.default = Controls;

/***/ },

/***/ 909:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _base = __webpack_require__(813);

	var _data = __webpack_require__(780);

	var _widgets = __webpack_require__(895);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MultiSelectorComponent = function (_Component) {
	    _inherits(MultiSelectorComponent, _Component);

	    function MultiSelectorComponent(props, context) {
	        _classCallCheck(this, MultiSelectorComponent);

	        var _this = _possibleConstructorReturn(this, (MultiSelectorComponent.__proto__ || Object.getPrototypeOf(MultiSelectorComponent)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(MultiSelectorComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);

	            var wId = props.wId;
	            var template = _data.TemplateFactory.createTemplate(props.$template);
	            var widget = template.getWidgetById(wId);
	            return _lib2.default.createElement(_widgets.MultiSelectorWidget, {
	                style: styles.wrapper,
	                type: widget.getSelectType(),
	                value: widget.getSelectValue(),
	                itemsCreator: function itemsCreator(options) {
	                    return widget.getData(options);
	                },
	                width: props.width,
	                height: props.height,
	                onValueChange: function onValueChange(value) {
	                    widget.setWidgetValue(value);
	                    template.set$Widget(wId, widget.$get());
	                    _this2.props.onValueChange(template.$get());
	                }
	            });
	        }
	    }]);

	    return MultiSelectorComponent;
	}(_lib.Component);

	MultiSelectorComponent.propTypes = {};
	MultiSelectorComponent.defaultProps = {
	    onValueChange: _core.emptyFunction
	};

	_reactMixin2.default.onClass(MultiSelectorComponent, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        backgroundColor: '#fff'
	    }
	});
	exports.default = MultiSelectorComponent;

/***/ },

/***/ 910:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _base = __webpack_require__(813);

	var _data = __webpack_require__(780);

	var _widgets = __webpack_require__(895);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MultiTreeSelectorComponent = function (_Component) {
	    _inherits(MultiTreeSelectorComponent, _Component);

	    function MultiTreeSelectorComponent(props, context) {
	        _classCallCheck(this, MultiTreeSelectorComponent);

	        var _this = _possibleConstructorReturn(this, (MultiTreeSelectorComponent.__proto__ || Object.getPrototypeOf(MultiTreeSelectorComponent)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(MultiTreeSelectorComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);

	            var wId = props.wId;
	            var template = _data.TemplateFactory.createTemplate(props.$template);
	            var widget = template.getWidgetById(wId);
	            return _lib2.default.createElement(_widgets.MultiTreeSelectorWidget, {
	                style: styles.wrapper,
	                floors: widget.getTreeFloors(),
	                value: widget.getSelectedTreeValue(),
	                itemsCreator: function itemsCreator(options) {
	                    return widget.getData(options);
	                },
	                onValueChange: function onValueChange(value) {
	                    widget.setWidgetValue(value);
	                    template.set$Widget(wId, widget.$get());
	                    _this2.props.onValueChange(template.$get());
	                },
	                width: props.width,
	                height: props.height
	            });
	        }
	    }]);

	    return MultiTreeSelectorComponent;
	}(_lib.Component);

	MultiTreeSelectorComponent.propTypes = {};
	MultiTreeSelectorComponent.defaultProps = {};

	_reactMixin2.default.onClass(MultiTreeSelectorComponent, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        backgroundColor: '#fff'
	    }
	});
	exports.default = MultiTreeSelectorComponent;

/***/ },

/***/ 911:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DateComponent = function (_Component) {
	    _inherits(DateComponent, _Component);

	    function DateComponent(props, context) {
	        _classCallCheck(this, DateComponent);

	        var _this = _possibleConstructorReturn(this, (DateComponent.__proto__ || Object.getPrototypeOf(DateComponent)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(DateComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            var wId = props.wId;
	            var template = _data.TemplateFactory.createTemplate(props.$template);
	            var widget = template.getWidgetById(wId);
	            return _lib2.default.createElement(_widgets.DateWidget, { style: styles.wrapper,
	                year: widget.getYear(),
	                month: widget.getMonth(),
	                day: widget.getDay(),
	                onValueChange: function onValueChange(value) {
	                    widget.setWidgetValue(value);
	                    template.set$Widget(wId, widget.$get());
	                    _this2.props.onValueChange(template.$get());
	                }
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return DateComponent;
	}(_lib.Component);

	DateComponent.propTypes = {};
	DateComponent.defaultProps = {};

	_reactMixin2.default.onClass(DateComponent, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {}
	});
	exports.default = DateComponent;

/***/ },

/***/ 912:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YearMonthComponent = function (_Component) {
	    _inherits(YearMonthComponent, _Component);

	    function YearMonthComponent(props, context) {
	        _classCallCheck(this, YearMonthComponent);

	        var _this = _possibleConstructorReturn(this, (YearMonthComponent.__proto__ || Object.getPrototypeOf(YearMonthComponent)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(YearMonthComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            var wId = props.wId;
	            var template = _data.TemplateFactory.createTemplate(props.$template);
	            var widget = template.getWidgetById(wId);
	            return _lib2.default.createElement(_widgets.YearMonthWidget, { style: styles.wrapper,
	                year: widget.getYear(),
	                month: widget.getMonth(),
	                onValueChange: function onValueChange(value) {
	                    widget.setWidgetValue(value);
	                    template.set$Widget(wId, widget.$get());
	                    _this2.props.onValueChange(template.$get());
	                }
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return YearMonthComponent;
	}(_lib.Component);

	YearMonthComponent.propTypes = {};
	YearMonthComponent.defaultProps = {};

	_reactMixin2.default.onClass(YearMonthComponent, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {}
	});
	exports.default = YearMonthComponent;

/***/ },

/***/ 913:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_Component) {
	    _inherits(Item, _Component);

	    function Item(props, context) {
	        _classCallCheck(this, Item);

	        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Item, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            return _lib2.default.createElement(
	                _base.Button,
	                { onPress: this.props.onPress },
	                _lib2.default.createElement(
	                    _layout.VerticalCenterLayout,
	                    { style: styles.wrapper },
	                    _lib2.default.createElement(
	                        _lib.Text,
	                        null,
	                        _data.WidgetFactory.createWidget(props.$widget).getName()
	                    )
	                )
	            );
	        }
	    }]);

	    return Item;
	}(_lib.Component);

	Item.propTypes = {};
	Item.defaultProps = {};

	_reactMixin2.default.onClass(Item, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        height: _data.Sizes.ITEM_HEIGHT,
	        paddingLeft: 20,
	        paddingRight: 20,
	        borderBottom: '1px solid ' + _data.Colors.SPLIT
	    }
	});
	exports.default = Item;

/***/ },

/***/ 914:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _data = __webpack_require__(780);

	var _ChartPaneComponent = __webpack_require__(915);

	var _ChartPaneComponent2 = _interopRequireDefault(_ChartPaneComponent);

	var _TablePaneComponent = __webpack_require__(928);

	var _TablePaneComponent2 = _interopRequireDefault(_TablePaneComponent);

	var _DetailTablePaneComponent = __webpack_require__(934);

	var _DetailTablePaneComponent2 = _interopRequireDefault(_DetailTablePaneComponent);

	var _MultiSelectorComponent = __webpack_require__(909);

	var _MultiSelectorComponent2 = _interopRequireDefault(_MultiSelectorComponent);

	var _MultiTreeSelectorComponent = __webpack_require__(910);

	var _MultiTreeSelectorComponent2 = _interopRequireDefault(_MultiTreeSelectorComponent);

	var _ContentComponent = __webpack_require__(937);

	var _ContentComponent2 = _interopRequireDefault(_ContentComponent);

	var _ImageComponent = __webpack_require__(938);

	var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

	var _YearMonthComponent = __webpack_require__(912);

	var _YearMonthComponent2 = _interopRequireDefault(_YearMonthComponent);

	var _WebCompontent = __webpack_require__(939);

	var _WebCompontent2 = _interopRequireDefault(_WebCompontent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LayoutComponent = function (_Component) {
	    _inherits(LayoutComponent, _Component);

	    function LayoutComponent(props, context) {
	        _classCallCheck(this, LayoutComponent);

	        return _possibleConstructorReturn(this, (LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call(this, props, context));
	    }

	    _createClass(LayoutComponent, [{
	        key: '_onPageScroll',
	        value: function _onPageScroll() {}
	    }, {
	        key: '_onPageSelected',
	        value: function _onPageSelected() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);

	            var ds = new _lib.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
	                    return r1 !== r2;
	                } });
	            this.template = _data.TemplateFactory.createTemplate(props.$template);
	            var rows = this.template.getAllWidgetIds();
	            return _lib2.default.createElement(
	                _lib.ViewPagerAndroid,
	                {
	                    style: styles.viewPager,
	                    initialPage: 0,
	                    onPageScroll: this._onPageScroll.bind(this),
	                    onPageSelected: this._onPageSelected.bind(this)
	                },
	                [_lib2.default.createElement(_lib.ListView, _extends({
	                    key: 1
	                }, props, {
	                    initialListSize: Math.ceil(props.height / 310) + 1,
	                    dataSource: ds.cloneWithRows(rows),
	                    renderRow: this._renderRow.bind(this)
	                }))]
	            );
	            // return <ListView
	            //     {...props}
	            //     initialListSize={Math.floor(props.height / 270) + 1}
	            //     dataSource={this.state.dataSource}
	            //     renderRow={this._renderRow.bind(this)}
	            // />;
	        }
	    }, {
	        key: '_renderRow',
	        value: function _renderRow(wId, sectionID, rowID) {
	            var $widget = this.template.get$WidgetById(wId);
	            var type = _data.WidgetFactory.createWidget($widget, wId, this.template).getType();
	            var props = {
	                $widget: $widget,
	                wId: wId,
	                width: this.props.width - 40,
	                height: 270
	            };
	            var component = null;
	            switch (type) {
	                case BICst.WIDGET.TABLE:
	                    component = _lib2.default.createElement(_TablePaneComponent2.default, props);
	                    break;
	                //case BICst.WIDGET.CROSS_TABLE:
	                //case BICst.WIDGET.COMPLEX_TABLE:
	                //
	                case BICst.WIDGET.DETAIL:
	                    component = _lib2.default.createElement(_DetailTablePaneComponent2.default, props);
	                    break;

	                case BICst.WIDGET.AXIS:
	                case BICst.WIDGET.ACCUMULATE_AXIS:
	                case BICst.WIDGET.PERCENT_ACCUMULATE_AXIS:
	                case BICst.WIDGET.COMPARE_AXIS:
	                case BICst.WIDGET.FALL_AXIS:
	                case BICst.WIDGET.BAR:
	                case BICst.WIDGET.ACCUMULATE_BAR:
	                case BICst.WIDGET.COMPARE_BAR:
	                case BICst.WIDGET.LINE:
	                case BICst.WIDGET.AREA:
	                case BICst.WIDGET.ACCUMULATE_AREA:
	                case BICst.WIDGET.COMPARE_AREA:
	                case BICst.WIDGET.RANGE_AREA:
	                case BICst.WIDGET.COMBINE_CHART:
	                case BICst.WIDGET.MULTI_AXIS_COMBINE_CHART:
	                case BICst.WIDGET.PIE:
	                case BICst.WIDGET.DONUT:
	                case BICst.WIDGET.MAP:
	                case BICst.WIDGET.GIS_MAP:
	                case BICst.WIDGET.DASHBOARD:
	                case BICst.WIDGET.BUBBLE:
	                case BICst.WIDGET.FORCE_BUBBLE:
	                case BICst.WIDGET.SCATTER:
	                case BICst.WIDGET.RADAR:
	                case BICst.WIDGET.ACCUMULATE_RADAR:
	                case BICst.WIDGET.FUNNEL:
	                    component = _lib2.default.createElement(_ChartPaneComponent2.default, props);
	                    break;
	                case BICst.WIDGET.NUMBER:
	                case BICst.WIDGET.DATE:
	                case BICst.WIDGET.YEAR:
	                case BICst.WIDGET.QUARTER:
	                case BICst.WIDGET.MONTH:
	                    component = _lib2.default.createElement(_YearMonthComponent2.default, props);
	                    break;
	                case BICst.WIDGET.YMD:
	                case BICst.WIDGET.QUERY:
	                case BICst.WIDGET.RESET:
	                    break;
	                case BICst.WIDGET.CONTENT:
	                    component = _lib2.default.createElement(_ContentComponent2.default, props);
	                    break;
	                case BICst.WIDGET.IMAGE:
	                    component = _lib2.default.createElement(_ImageComponent2.default, props);
	                    break;
	                case BICst.WIDGET.WEB:
	                    component = _lib2.default.createElement(_WebCompontent2.default, props);
	                    break;
	                case BICst.WIDGET.STRING:
	                    component = _lib2.default.createElement(_MultiSelectorComponent2.default, props);
	                    break;
	                case BICst.WIDGET.TREE:
	                    component = _lib2.default.createElement(_MultiTreeSelectorComponent2.default, props);
	                    break;
	                default:
	                    break;
	            }
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { flex: true, box: 'mean', style: styles.wrapper },
	                component
	            );
	        }
	    }]);

	    return LayoutComponent;
	}(_lib.Component);

	LayoutComponent.propTypes = {};

	_reactMixin2.default.onClass(LayoutComponent, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        padding: 20
	    },
	    viewPager: {
	        flex: 1
	    }
	});
	exports.default = LayoutComponent;

/***/ },

/***/ 915:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _ChartComponent = __webpack_require__(916);

	var _ChartComponent2 = _interopRequireDefault(_ChartComponent);

	var _SettingsComponent = __webpack_require__(917);

	var _SettingsComponent2 = _interopRequireDefault(_SettingsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChartPaneComponent = function (_Component) {
	    _inherits(ChartPaneComponent, _Component);

	    function ChartPaneComponent(props, context) {
	        _classCallCheck(this, ChartPaneComponent);

	        return _possibleConstructorReturn(this, (ChartPaneComponent.__proto__ || Object.getPrototypeOf(ChartPaneComponent)).call(this, props, context));
	    }

	    _createClass(ChartPaneComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: '_renderHeader',
	        value: function _renderHeader() {
	            var _this2 = this;

	            var _props = this.props;
	            var $widget = _props.$widget;
	            var wId = _props.wId;

	            var widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(this.context.$template));
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { main: 'justify', cross: 'center', style: styles.header },
	                _lib2.default.createElement(
	                    _lib.Text,
	                    null,
	                    widget.getName()
	                ),
	                _lib2.default.createElement(_base.IconLink, { className: 'setting-font', onPress: function onPress() {
	                        _lib.Portal.showModal('ChartComponent', _lib2.default.createElement(_SettingsComponent2.default, {
	                            key: 'ChartComponent',
	                            $widget: _this2.props.$widget,
	                            wId: _this2.props.wId,
	                            height: 0,
	                            onComplete: function onComplete(opt) {
	                                _lib.Portal.closeModal('ChartComponent');
	                                _this2.context.actions.updateWidget(opt.$widget, opt.wId);
	                            },
	                            onReturn: function onReturn() {
	                                _lib.Portal.closeModal('ChartComponent');
	                            }
	                        }));
	                    } })
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props;
	            var width = _props2.width;
	            var height = _props2.height;
	            var $widget = _props2.$widget;
	            var wId = _props2.wId;

	            return _lib2.default.createElement(
	                _layout.Layout,
	                { dir: 'top', box: 'first' },
	                this._renderHeader(),
	                _lib2.default.createElement(_ChartComponent2.default, {
	                    width: width,
	                    height: height - _data.Sizes.HEADER_HEIGHT,
	                    $widget: $widget,
	                    wId: wId
	                })
	            );
	        }
	    }]);

	    return ChartPaneComponent;
	}(_lib.Component);

	ChartPaneComponent.contextTypes = {
	    $template: _lib2.default.PropTypes.object,
	    actions: _lib2.default.PropTypes.object
	};

	_reactMixin2.default.onClass(ChartPaneComponent, _core.ReactComponentWithImmutableRenderMixin);

	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        position: 'relative'
	    },
	    header: {
	        paddingLeft: 4,
	        paddingRight: 4,
	        height: _data.Sizes.HEADER_HEIGHT
	    }
	});
	exports.default = ChartPaneComponent;

/***/ },

/***/ 916:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _base = __webpack_require__(813);

	var _data = __webpack_require__(780);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChartComponent = function (_Component) {
	    _inherits(ChartComponent, _Component);

	    function ChartComponent(props, context) {
	        _classCallCheck(this, ChartComponent);

	        return _possibleConstructorReturn(this, (ChartComponent.__proto__ || Object.getPrototypeOf(ChartComponent)).call(this, props, context));
	    }
	    //static propTypes = {
	    //    height: React.PropTypes.number.required,
	    //    id: React.PropTypes.string.required,
	    //    template: React.PropTypes.object.required
	    //};


	    _createClass(ChartComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: '_fetchData',
	        value: function _fetchData(props) {
	            var _this2 = this;

	            var $widget = props.$widget;
	            var wId = props.wId;

	            var widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(this.context.$template));
	            widget.getData().then(function (data) {
	                _this2.chart.setOptions(data);
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.chart = VanCharts.init(_reactDom2.default.findDOMNode(this.refs.chart));
	            this._fetchData(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (!(0, _core.immutableShallowEqual)(nextProps, this.props)) {
	                this._fetchData(nextProps);
	                this._changed = true;
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            if (this._changed) {
	                this._changed = false;
	                return false;
	            }
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _lib2.default.createElement(_lib.View, { ref: 'chart', style: _extends({ height: this.props.height, width: this.props.width }, styles.wrapper) });
	        }
	    }]);

	    return ChartComponent;
	}(_lib.Component);
	// mixin.onClass(ChartComponent, ReactComponentWithImmutableRenderMixin);

	ChartComponent.contextTypes = {
	    $template: _lib2.default.PropTypes.object
	};
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        position: 'relative'
	    },
	    header: {
	        paddingLeft: 4,
	        paddingRight: 4,
	        flexDirection: 'row',
	        alignItems: 'center',
	        justifyContent: 'space-between'
	    }
	});
	exports.default = ChartComponent;

/***/ },

/***/ 917:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _SettingsComponentHelper = __webpack_require__(918);

	var _SettingsComponentHelper2 = _interopRequireDefault(_SettingsComponentHelper);

	var _DimensionComponent = __webpack_require__(919);

	var _DimensionComponent2 = _interopRequireDefault(_DimensionComponent);

	var _TargetComponent = __webpack_require__(923);

	var _TargetComponent2 = _interopRequireDefault(_TargetComponent);

	var _DimensionSortableComponent = __webpack_require__(927);

	var _DimensionSortableComponent2 = _interopRequireDefault(_DimensionSortableComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SortableContainer = _base.Sortable.SortableContainer;
	var SortableElement = _base.Sortable.SortableElement;

	var Header = function (_Component) {
	    _inherits(Header, _Component);

	    function Header(props, context) {
	        _classCallCheck(this, Header);

	        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props, context));
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            var viewItem = this.props.viewItem;

	            return _lib2.default.createElement(
	                _base.TextButton,
	                { key: viewItem.viewId, textAlign: 'left', style: styles.collapseHeader,
	                    onPress: this.props.onPress },
	                viewItem.text
	            );
	        }
	    }]);

	    return Header;
	}(_lib.Component);

	var SortHeader = SortableElement(function (_ref) {
	    var props = _objectWithoutProperties(_ref, []);

	    return _lib2.default.createElement(Header, props);
	});
	var SortableList = SortableContainer(function (_ref2) {
	    var viewItems = _ref2.viewItems;
	    var context = _ref2.context;

	    var dimensionHeader = [],
	        dimensionBody = [],
	        targetHeader = [],
	        targetBody = [];
	    (0, _core.each)(viewItems, function (items, viewId) {
	        var viewItem = context._helper.getViewItemByViewId(viewId);
	        var header = dimensionHeader,
	            body = dimensionBody,
	            collection = 0;
	        if (!context._helper.isDimensionByViewId(viewId)) {
	            header = targetHeader;
	            body = targetBody;
	            collection = 1;
	        }
	        if (header.length === 0) {
	            header.push(_lib2.default.createElement(Header, { key: 'header-' + viewItem.viewId, viewItem: viewItem, collapsed: {} }));
	        } else {
	            body.push(_lib2.default.createElement(SortHeader, { key: 'header-' + viewItem.viewId, index: viewItem.viewId, collection: collection,
	                viewItem: viewItem,
	                collapsed: {} }));
	        }
	        items.forEach(function (value, index) {
	            body.push(_lib2.default.createElement(_DimensionSortableComponent2.default, { key: 'item-' + value.dId,
	                index: viewItem.viewId + '-' + index,
	                value: value, wId: context.props.wId,
	                $widget: context.props.$widget,
	                collection: collection,
	                dId: value.dId }));
	        });
	    });
	    return _lib2.default.createElement(
	        _lib.ScrollView,
	        null,
	        dimensionHeader,
	        dimensionBody,
	        targetHeader,
	        targetBody
	    );
	});

	var SettingsComponent = function (_Component2) {
	    _inherits(SettingsComponent, _Component2);

	    function SettingsComponent(props, context) {
	        _classCallCheck(this, SettingsComponent);

	        var _this2 = _possibleConstructorReturn(this, (SettingsComponent.__proto__ || Object.getPrototypeOf(SettingsComponent)).call(this, props, context));

	        _this2.state = {
	            $widget: _this2.props.$widget,
	            collapsed: {},
	            sortable: false
	        };

	        _this2._onSortEnd = function (_ref3) {
	            var oldIndex = _ref3.oldIndex;
	            var newIndex = _ref3.newIndex;

	            var $widget = _this2._helper.doMove(oldIndex, newIndex);
	            _this2.setState({
	                $widget: $widget
	            });
	        };

	        return _this2;
	    }

	    _createClass(SettingsComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                $widget: nextProps.$widget
	            });
	        }
	    }, {
	        key: '_renderHeader',
	        value: function _renderHeader() {
	            var _this3 = this;

	            var _props = this.props;
	            var $widget = _props.$widget;
	            var wId = _props.wId;

	            var widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(this.context.$template));
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { main: 'justify', cross: 'center', style: styles.header },
	                _lib2.default.createElement(
	                    _base.TextLink,
	                    { onPress: function onPress() {
	                            _this3.refs['overlay'].close();
	                        }, style: styles.back },
	                    '返回'
	                ),
	                _lib2.default.createElement(
	                    _lib.Text,
	                    { style: styles.name },
	                    widget.getName()
	                ),
	                _lib2.default.createElement(
	                    _base.TextLink,
	                    { onPress: function onPress() {
	                            _this3.refs['overlay'].close(true);
	                        }, style: styles.complete },
	                    '完成'
	                )
	            );
	        }
	    }, {
	        key: '_renderSortableList',
	        value: function _renderSortableList(viewItem) {
	            var _this4 = this;

	            var items = this._helper.getDimensionsItems(viewItem.viewId);
	            return _lib2.default.createElement(SortableList, { items: items,
	                $widget: this.state.$widget,
	                wId: this.props.wId,
	                onSortEnd: function onSortEnd(_ref4) {
	                    var oldIndex = _ref4.oldIndex;
	                    var newIndex = _ref4.newIndex;

	                    _this4._onSortEnd({
	                        oldIndex: oldIndex, newIndex: newIndex, viewId: viewItem.viewId
	                    });
	                },
	                useDragHandle: true,
	                lockToContainerEdges: true,
	                lockAxis: 'y',
	                helperClass: 'sortable-helper'
	            });
	        }
	    }, {
	        key: '_renderUnSortableList',
	        value: function _renderUnSortableList(viewItem) {
	            var _this5 = this;

	            var items = this._helper.getDimensionsItems(viewItem.viewId);
	            return items.map(function (value, index) {
	                if (_this5._helper.isDimensionByDimensionId(value.dId)) {
	                    return _lib2.default.createElement(_DimensionComponent2.default, { key: index, value: value, wId: _this5.props.wId,
	                        $widget: _this5.state.$widget,
	                        dId: value.dId, onValueChange: function onValueChange($widget) {
	                            _this5.setState({
	                                $widget: $widget
	                            });
	                        } });
	                } else {
	                    return _lib2.default.createElement(_TargetComponent2.default, { key: index, value: value, wId: _this5.props.wId,
	                        $widget: _this5.state.$widget,
	                        dId: value.dId, onValueChange: function onValueChange($widget) {
	                            _this5.setState({
	                                $widget: $widget
	                            });
	                        } });
	                }
	            });
	        }
	    }, {
	        key: '_renderSortableContainer',
	        value: function _renderSortableContainer() {
	            var _this6 = this;

	            var viewItems = this._helper.getAllDimensionItems();
	            return _lib2.default.createElement(SortableList, { viewItems: viewItems,
	                context: this,
	                onSortEnd: function onSortEnd(_ref5) {
	                    var oldIndex = _ref5.oldIndex;
	                    var newIndex = _ref5.newIndex;

	                    _this6._onSortEnd({
	                        oldIndex: oldIndex, newIndex: newIndex
	                    });
	                },
	                useDragHandle: true,
	                lockToContainerEdges: true,
	                lockAxis: 'y',
	                helperClass: 'sortable-helper'
	            });
	        }
	    }, {
	        key: '_renderUnSortableContainer',
	        value: function _renderUnSortableContainer() {
	            var _this7 = this;

	            var array = [];
	            (0, _core.each)(this._helper.getViewItems(), function (viewItem) {
	                array.push(_lib2.default.createElement(Header, { viewItem: viewItem, onPress: function onPress() {
	                        var collapsed = (0, _core.clone)(_this7.state.collapsed);
	                        collapsed[viewItem.viewId] = !collapsed[viewItem.viewId];
	                        _this7.setState({
	                            collapsed: collapsed
	                        });
	                    } }));
	                array.push(_lib2.default.createElement(
	                    _base.Collapsible,
	                    { key: 'collapsible-' + viewItem.viewId,
	                        collapsed: _this7.state.collapsed[viewItem.viewId] || false },
	                    _this7._renderUnSortableList(viewItem)
	                ));
	            });
	            return _lib2.default.createElement(
	                _lib.ScrollView,
	                null,
	                array
	            );
	        }
	    }, {
	        key: '_renderDialog',
	        value: function _renderDialog() {
	            var _this8 = this;

	            return _lib2.default.createElement(
	                _layout.Layout,
	                { dir: 'top', box: 'first' },
	                _lib2.default.createElement(
	                    _lib.View,
	                    { style: { height: 100 } },
	                    _lib2.default.createElement(
	                        _base.TextButton,
	                        { onPress: function onPress() {
	                                _this8.setState({
	                                    sortable: !_this8.state.sortable
	                                });
	                            }, style: styles.sortChangeButton },
	                        this.state.sortable ? '退出排序' : '排序'
	                    )
	                ),
	                this.state.sortable ? this._renderSortableContainer() : this._renderUnSortableContainer()
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this9 = this;

	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            this._helper = new _SettingsComponentHelper2.default(state, this.context);
	            return _lib2.default.createElement(
	                _base.Overlay,
	                { ref: 'overlay', onClose: function onClose(tag) {
	                        if (tag === true) {
	                            var $widget = _this9.state.$widget;var wId = _this9.props.wId;

	                            _this9.props.onComplete({ $widget: $widget, wId: wId });
	                        } else {
	                            _this9.props.onReturn();
	                        }
	                    } },
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { dir: 'top', box: 'first', style: styles.wrapper },
	                    this._renderHeader(),
	                    this._renderDialog()
	                )
	            );
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return SettingsComponent;
	}(_lib.Component);

	SettingsComponent.contextTypes = {
	    actions: _lib2.default.PropTypes.object
	};
	SettingsComponent.propTypes = {};
	SettingsComponent.defaultProps = {
	    onReturn: _core.emptyFunction,
	    onComplete: _core.emptyFunction
	};

	_reactMixin2.default.onClass(SettingsComponent, _core.ReactComponentWithPureRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        position: 'absolute',
	        backgroundColor: '#ffffff',
	        left: 10,
	        right: 10,
	        top: 30,
	        bottom: 10
	    },
	    header: {
	        paddingLeft: 20,
	        paddingRight: 20,
	        color: _data.Colors.TEXT,
	        backgroundColor: _data.Colors.HIGHLIGHT,
	        height: _data.Sizes.HEADER_HEIGHT
	    },
	    sortableItems: {
	        paddingLeft: 20,
	        paddingRight: 20,
	        height: _data.Sizes.ITEM_HEIGHT,
	        borderBottomWidth: 1 / _lib.PixelRatio.get(),
	        borderBottomColor: _data.Colors.BORDER
	    },
	    dragHandler: {
	        opacity: 0.25
	    },
	    collapseHeader: {
	        paddingLeft: 20,
	        backgroundColor: '#d8f2fd',
	        height: _data.Sizes.ITEM_HEIGHT
	    },

	    sortChangeButton: {
	        position: 'absolute',
	        right: 20,
	        bottom: 20,
	        height: 20
	    }
	});
	exports.default = SettingsComponent;

/***/ },

/***/ 918:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	var _data = __webpack_require__(780);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SettingsComponentHelper = function () {
	    function SettingsComponentHelper(props, context) {
	        _classCallCheck(this, SettingsComponentHelper);

	        this.widget = _data.WidgetFactory.createWidget(props.$widget, props.wId, _data.TemplateFactory.createTemplate(context.$template));
	    }

	    _createClass(SettingsComponentHelper, [{
	        key: 'getViewItems',
	        value: function getViewItems() {
	            var result = [];
	            (0, _core.each)(this._getViewIds(), function (viewId) {
	                result.push({
	                    text: '行表头',
	                    viewId: viewId
	                });
	            });
	            return result;
	        }
	    }, {
	        key: 'getViewItemByViewId',
	        value: function getViewItemByViewId(viewId) {
	            return {
	                text: '行表头',
	                viewId: viewId
	            };
	        }
	    }, {
	        key: 'isDimensionByViewId',
	        value: function isDimensionByViewId(viewId) {
	            return this.widget.isDimensionByViewId(viewId);
	        }
	    }, {
	        key: 'isDimensionByDimensionId',
	        value: function isDimensionByDimensionId(dId) {
	            return this.widget.isDimensionById(dId);
	        }
	    }, {
	        key: 'getAllDimensionItems',
	        value: function getAllDimensionItems() {
	            var _this = this;

	            var result = {};
	            (0, _core.each)(this._getViewIds(), function (viewId) {
	                result[viewId] = _this.getDimensionsItems(viewId);
	            });
	            return result;
	        }
	    }, {
	        key: 'getDimensionsItems',
	        value: function getDimensionsItems(viewId) {
	            var _this2 = this;

	            var result = [];
	            (0, _core.each)(this._getDimensionIds(viewId), function (dId) {
	                var dim = _this2.widget.getDimensionOrTargetById(dId);
	                result.push({
	                    text: dim.getName(),
	                    viewId: viewId,
	                    dId: dId
	                });
	            });
	            return result;
	        }
	    }, {
	        key: '_getViewIds',
	        value: function _getViewIds() {
	            var view = this.widget.getWidgetView();
	            return (0, _core.keys)(view);
	        }
	    }, {
	        key: '_getDimensionIds',
	        value: function _getDimensionIds(viewId) {
	            var view = this.widget.getWidgetView();
	            return view[viewId] || [];
	        }
	    }, {
	        key: '_getPreViewIdByViewId',
	        value: function _getPreViewIdByViewId(viewId) {
	            var view = this.widget.getWidgetView();
	            var vs = (0, _core.keys)(view);
	            var idx = -1;
	            if ((idx = vs.indexOf(viewId)) > 0) {
	                return vs[idx - 1];
	            }
	        }
	    }, {
	        key: 'doMove',
	        value: function doMove(oldIndex, newIndex) {
	            var oldValue = oldIndex.split('-');

	            var _oldValue = _slicedToArray(oldValue, 2);

	            var oViewId = _oldValue[0];
	            var oIndex = _oldValue[1];

	            var newValue = newIndex.split('-');

	            var _newValue = _slicedToArray(newValue, 2);

	            var nViewId = _newValue[0];
	            var nIndex = _newValue[1];

	            var view = this.widget.getWidgetView();
	            var oItems = this._getDimensionIds(oViewId);
	            if (oViewId === nViewId) {
	                if ((0, _core.isNil)(nIndex)) {
	                    var curr = oItems.splice(oIndex, 1);
	                    var preViewId = this._getPreViewIdByViewId(nViewId);
	                    var nItems = this._getDimensionIds(preViewId);
	                    nItems.push(curr[0]);
	                    view[oViewId] = oItems;
	                    view[preViewId] = nItems;
	                } else {
	                    (0, _core.arrayMove)(oItems, oIndex, nIndex);
	                    view[oViewId] = oItems;
	                }
	            } else {
	                var _nItems = this._getDimensionIds(nViewId);
	                var _curr = oItems.splice(oIndex, 1);
	                if (parseInt(nViewId) > parseInt(oViewId)) {
	                    _nItems.splice((0, _core.isNil)(nIndex) ? 0 : parseInt(nIndex, 10) + 1, 0, _curr[0]);
	                } else {
	                    _nItems.splice(nIndex, 0, _curr[0]);
	                }
	                view[oViewId] = oItems;
	                view[nViewId] = _nItems;
	            }

	            this.widget.setWidgetView(view);
	            return this.widget.$get();
	        }
	    }]);

	    return SettingsComponentHelper;
	}();

	exports.default = SettingsComponentHelper;

/***/ },

/***/ 919:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _DimensionComponentHelper = __webpack_require__(920);

	var _DimensionComponentHelper2 = _interopRequireDefault(_DimensionComponentHelper);

	var _DimensionSortComponent = __webpack_require__(921);

	var _DimensionSortComponent2 = _interopRequireDefault(_DimensionSortComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DimensionComponent = function (_Component) {
	    _inherits(DimensionComponent, _Component);

	    function DimensionComponent(props, context) {
	        _classCallCheck(this, DimensionComponent);

	        var _this = _possibleConstructorReturn(this, (DimensionComponent.__proto__ || Object.getPrototypeOf(DimensionComponent)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(DimensionComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            this._helper = new _DimensionComponentHelper2.default(props, this.context);
	            return _lib2.default.createElement(
	                _base.Button,
	                { onPress: function onPress() {
	                        _this2.props.onValueChange(_this2._helper.switchSelect());
	                    } },
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { main: 'justify', box: 'mean', style: styles.wrapper },
	                    _lib2.default.createElement(
	                        _layout.Layout,
	                        { cross: 'center', box: 'first' },
	                        _lib2.default.createElement(_base.IconButton, { style: styles.icon, invalid: true, selected: this._helper.isUsed(),
	                            className: 'single-select-font' }),
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            { numberOfLines: 1, style: (0, _core.sc)([styles.disabledText, !this._helper.isUsed()]),
	                                effect: false },
	                            props.value.text
	                        )
	                    ),
	                    _lib2.default.createElement(
	                        _layout.Layout,
	                        { cross: 'center', box: 'last' },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            { numberOfLines: 1,
	                                style: [styles.disabledText, styles.sortTargetName],
	                                effect: false },
	                            this._helper.getSortTargetName()
	                        ),
	                        _lib2.default.createElement(_base.IconButton, { style: styles.sortIcon, onPress: function onPress() {
	                                _lib.Portal.showModal('DimensionSort', _lib2.default.createElement(
	                                    _base.Dialog,
	                                    {
	                                        key: 'DimensionSort',
	                                        title: '"' + _this2._helper.getSortTargetName() + '"排序',
	                                        onClose: function onClose(tag) {
	                                            if (tag === '取消') {} else if (tag === '确定') {
	                                                if (_this2._$widget) {
	                                                    _this2.props.onValueChange(_this2._$widget);
	                                                }
	                                            }
	                                            _lib.Portal.closeModal('DimensionSort');
	                                        }
	                                    },
	                                    _lib2.default.createElement(_DimensionSortComponent2.default, {
	                                        wId: props.wId, $widget: props.$widget, dId: props.value.dId,
	                                        onValueChange: function onValueChange($widget) {
	                                            _this2._$widget = $widget;
	                                        }
	                                    })
	                                ));
	                            },
	                            className: this._helper.getSortTargetTypeFont() })
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return DimensionComponent;
	}(_lib.Component);

	DimensionComponent.propTypes = {};
	DimensionComponent.defaultProps = {
	    wId: '',
	    $widget: null,
	    dId: '',
	    value: {}
	};

	_reactMixin2.default.onClass(DimensionComponent, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        paddingLeft: 20,
	        paddingRight: 20,
	        height: _data.Sizes.ITEM_HEIGHT,
	        borderBottomWidth: 1 / _lib.PixelRatio.get(),
	        borderBottomColor: _data.Colors.BORDER
	    },
	    icon: {
	        width: 40
	    },

	    sortIcon: {
	        width: 20
	    },

	    sortTargetName: {
	        paddingLeft: 10,
	        paddingRight: 10,
	        textAlign: 'right'
	    },

	    disabledText: {
	        color: _data.Colors.DISABLED
	    }
	});
	exports.default = DimensionComponent;

/***/ },

/***/ 920:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	var _data = __webpack_require__(780);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DimensionComponentHelper = function () {
	    function DimensionComponentHelper(props, context) {
	        _classCallCheck(this, DimensionComponentHelper);

	        this.widget = _data.WidgetFactory.createWidget(props.$widget, props.wId, _data.TemplateFactory.createTemplate(context.$template));
	        this.wId = props.wId;
	        this.dId = props.dId;
	        this.dimension = this.widget.getDimensionOrTargetById(this.dId);
	    }

	    _createClass(DimensionComponentHelper, [{
	        key: 'isUsed',
	        value: function isUsed() {
	            return this.dimension.isUsed();
	        }
	    }, {
	        key: 'getSortTargetName',
	        value: function getSortTargetName() {
	            return this.dimension.getSortTargetName();
	        }
	    }, {
	        key: 'getSortTargetTypeFont',
	        value: function getSortTargetTypeFont() {
	            switch (this.dimension.getSortType()) {
	                case BICst.SORT.ASC:
	                    return 'asc-sort-font';
	                case BICst.SORT.DESC:
	                    return 'dsc-sort-font';
	            }
	        }
	    }, {
	        key: 'switchSelect',
	        value: function switchSelect() {
	            this.dimension.setUsed(!this.isUsed()).$get();
	            this.widget.set$Dimension(this.dimension.$get(), this.dId);
	            return this.widget.$get();
	        }
	    }]);

	    return DimensionComponentHelper;
	}();

	exports.default = DimensionComponentHelper;

/***/ },

/***/ 921:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _DimensionSortComponentHelper = __webpack_require__(922);

	var _DimensionSortComponentHelper2 = _interopRequireDefault(_DimensionSortComponentHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DimensionSortComponent = function (_Component) {
	    _inherits(DimensionSortComponent, _Component);

	    function DimensionSortComponent(props, context) {
	        _classCallCheck(this, DimensionSortComponent);

	        var _this = _possibleConstructorReturn(this, (DimensionSortComponent.__proto__ || Object.getPrototypeOf(DimensionSortComponent)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(DimensionSortComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            this._helper = new _DimensionSortComponentHelper2.default(props, this.context);
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { box: 'mean', style: styles.wrapper },
	                _lib2.default.createElement(
	                    _lib.PickerIOS,
	                    { selectedValue: this._helper.getSortType(), onValueChange: function onValueChange(type) {
	                            _this2.props.onValueChange(_this2._helper.setSortType(type));
	                        } },
	                    _lib2.default.createElement(_lib.PickerIOS.Item, { value: BICst.SORT.ASC, label: '升序' }),
	                    _lib2.default.createElement(_lib.PickerIOS.Item, { value: BICst.SORT.DESC, label: '降序' })
	                ),
	                _lib2.default.createElement(
	                    _lib.PickerIOS,
	                    { selectedValue: this._helper.getSortTargetValue(), onValueChange: function onValueChange(dId) {
	                            _this2.props.onValueChange(_this2._helper.setSortTarget(dId));
	                        } },
	                    (0, _core.map)(this._helper.getSortTargetItems(), function (_ref) {
	                        var value = _ref.value;
	                        var label = _ref.label;

	                        return _lib2.default.createElement(_lib.PickerIOS.Item, { key: value, value: value, label: label });
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return DimensionSortComponent;
	}(_lib.Component);

	DimensionSortComponent.propTypes = {};
	DimensionSortComponent.defaultProps = {};

	_reactMixin2.default.onClass(DimensionSortComponent, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {}
	});
	exports.default = DimensionSortComponent;

/***/ },

/***/ 922:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	var _data = __webpack_require__(780);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DimensionSortComponentHelper = function () {
	    function DimensionSortComponentHelper(props, context) {
	        _classCallCheck(this, DimensionSortComponentHelper);

	        this.widget = _data.WidgetFactory.createWidget(props.$widget, props.wId);
	        this.dId = props.dId;
	        this.dimension = this.widget.getDimensionOrTargetById(props.dId);
	    }

	    _createClass(DimensionSortComponentHelper, [{
	        key: 'getSortType',
	        value: function getSortType() {
	            return this.dimension.getSortType();
	        }
	    }, {
	        key: 'getSortTargetValue',
	        value: function getSortTargetValue() {
	            return this.dimension.getSortTarget() || this.dId;
	        }
	    }, {
	        key: 'getSortTargetItems',
	        value: function getSortTargetItems() {
	            var _this = this;

	            var name = this.dimension.getName();
	            var result = [{ value: this.dId, label: name }];
	            (0, _core.each)(this.widget.getAllTargetIds(), function (dId) {
	                var name = _this.widget.getTargetById(dId).getName();
	                result.push({
	                    value: dId,
	                    label: name
	                });
	            });
	            return result;
	        }
	    }, {
	        key: 'setSortType',
	        value: function setSortType(type) {
	            this.dimension.setSortType(type);
	            this.widget.set$Dimension(this.dimension.$get(), this.dId);
	            return this.widget.$get();
	        }
	    }, {
	        key: 'setSortTarget',
	        value: function setSortTarget(dId) {
	            this.dimension.setSortTarget(dId);
	            this.widget.set$Dimension(this.dimension.$get(), this.dId);
	            return this.widget.$get();
	        }
	    }]);

	    return DimensionSortComponentHelper;
	}();

	exports.default = DimensionSortComponentHelper;

/***/ },

/***/ 923:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _TargetComponentHelper = __webpack_require__(924);

	var _TargetComponentHelper2 = _interopRequireDefault(_TargetComponentHelper);

	var _TargetSortComponent = __webpack_require__(925);

	var _TargetSortComponent2 = _interopRequireDefault(_TargetSortComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TargetComponent = function (_Component) {
	    _inherits(TargetComponent, _Component);

	    function TargetComponent(props, context) {
	        _classCallCheck(this, TargetComponent);

	        var _this = _possibleConstructorReturn(this, (TargetComponent.__proto__ || Object.getPrototypeOf(TargetComponent)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TargetComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            this._helper = new _TargetComponentHelper2.default(props, this.context);
	            return _lib2.default.createElement(
	                _base.Button,
	                { onPress: function onPress() {
	                        _this2.props.onValueChange(_this2._helper.switchSelect());
	                    } },
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { main: 'justify', box: 'last', style: styles.wrapper },
	                    _lib2.default.createElement(
	                        _layout.Layout,
	                        { cross: 'center', box: 'first' },
	                        _lib2.default.createElement(_base.IconButton, { style: styles.icon, invalid: true, selected: this._helper.isUsed(),
	                            className: 'single-select-font' }),
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            { numberOfLines: 1, style: (0, _core.sc)([styles.disabledText, !this._helper.isUsed()]),
	                                effect: false },
	                            props.value.text
	                        )
	                    ),
	                    _lib2.default.createElement(_base.IconButton, { style: styles.sortIcon, onPress: function onPress() {
	                            _lib.Portal.showModal('TargetSort', _lib2.default.createElement(
	                                _base.Dialog,
	                                {
	                                    key: 'TargetSort',
	                                    title: '"' + _this2._helper.getSortTargetName() + '"排序',
	                                    onClose: function onClose(tag) {
	                                        if (tag === '取消') {} else if (tag === '确定') {
	                                            if (_this2._$widget) {
	                                                _this2.props.onValueChange(_this2._$widget);
	                                            }
	                                        }
	                                        _lib.Portal.closeModal('TargetSort');
	                                    }
	                                },
	                                _lib2.default.createElement(_TargetSortComponent2.default, {
	                                    wId: props.wId, $widget: props.$widget, dId: props.value.dId,
	                                    onValueChange: function onValueChange($widget) {
	                                        _this2._$widget = $widget;
	                                    }
	                                })
	                            ));
	                        },
	                        className: this._helper.getSortTargetTypeFont() })
	                )
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return TargetComponent;
	}(_lib.Component);

	TargetComponent.propTypes = {};
	TargetComponent.defaultProps = {
	    wId: '',
	    $widget: null,
	    dId: '',
	    value: {}
	};

	_reactMixin2.default.onClass(TargetComponent, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        paddingLeft: 20,
	        paddingRight: 20,
	        height: _data.Sizes.ITEM_HEIGHT,
	        borderBottomWidth: 1 / _lib.PixelRatio.get(),
	        borderBottomColor: _data.Colors.BORDER
	    },
	    icon: {
	        width: 40
	    },

	    sortIcon: {
	        width: 20
	    },

	    sortTargetName: {
	        paddingLeft: 10,
	        paddingRight: 10,
	        textAlign: 'right'
	    },

	    disabledText: {
	        color: _data.Colors.DISABLED
	    }
	});
	exports.default = TargetComponent;

/***/ },

/***/ 924:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	var _data = __webpack_require__(780);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TargetComponentHelper = function () {
	    function TargetComponentHelper(props, context) {
	        _classCallCheck(this, TargetComponentHelper);

	        this.widget = _data.WidgetFactory.createWidget(props.$widget, props.wId, _data.TemplateFactory.createTemplate(context.$template));
	        this.wId = props.wId;
	        this.dId = props.dId;
	        this.dimension = this.widget.getDimensionOrTargetById(this.dId);
	    }

	    _createClass(TargetComponentHelper, [{
	        key: 'isUsed',
	        value: function isUsed() {
	            return this.dimension.isUsed();
	        }
	    }, {
	        key: 'getSortTargetName',
	        value: function getSortTargetName() {
	            return this.dimension.getName();
	        }
	    }, {
	        key: 'getSortTargetTypeFont',
	        value: function getSortTargetTypeFont() {
	            switch (this.widget.getSortType()) {
	                case BICst.SORT.ASC:
	                    return 'asc-sort-font';
	                case BICst.SORT.DESC:
	                    return 'dsc-sort-font';
	            }
	        }
	    }, {
	        key: 'switchSelect',
	        value: function switchSelect() {
	            this.dimension.setUsed(!this.isUsed()).$get();
	            this.widget.set$Dimension(this.dimension.$get(), this.dId);
	            return this.widget.$get();
	        }
	    }]);

	    return TargetComponentHelper;
	}();

	exports.default = TargetComponentHelper;

/***/ },

/***/ 925:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _TargetSortComponentHelper = __webpack_require__(926);

	var _TargetSortComponentHelper2 = _interopRequireDefault(_TargetSortComponentHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TargetSortComponent = function (_Component) {
	    _inherits(TargetSortComponent, _Component);

	    function TargetSortComponent(props, context) {
	        _classCallCheck(this, TargetSortComponent);

	        var _this = _possibleConstructorReturn(this, (TargetSortComponent.__proto__ || Object.getPrototypeOf(TargetSortComponent)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TargetSortComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            this._helper = new _TargetSortComponentHelper2.default(props, this.context);
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { box: 'mean', style: styles.wrapper },
	                _lib2.default.createElement(
	                    _lib.PickerIOS,
	                    { selectedValue: this._helper.getSortType(), onValueChange: function onValueChange(type) {
	                            _this2.props.onValueChange(_this2._helper.setSortType(type));
	                        } },
	                    _lib2.default.createElement(_lib.PickerIOS.Item, { value: BICst.SORT.ASC, label: '升序' }),
	                    _lib2.default.createElement(_lib.PickerIOS.Item, { value: BICst.SORT.DESC, label: '降序' }),
	                    _lib2.default.createElement(_lib.PickerIOS.Item, { value: BICst.SORT.NONE, label: '不排序' })
	                )
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return TargetSortComponent;
	}(_lib.Component);

	TargetSortComponent.propTypes = {};
	TargetSortComponent.defaultProps = {};

	_reactMixin2.default.onClass(TargetSortComponent, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {}
	});
	exports.default = TargetSortComponent;

/***/ },

/***/ 926:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	var _data = __webpack_require__(780);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TargetSortComponentHelper = function () {
	    function TargetSortComponentHelper(props, context) {
	        _classCallCheck(this, TargetSortComponentHelper);

	        this.widget = _data.WidgetFactory.createWidget(props.$widget, props.wId);
	        this.dId = props.dId;
	        this.dimension = this.widget.getDimensionOrTargetById(props.dId);
	    }

	    _createClass(TargetSortComponentHelper, [{
	        key: 'getSortType',
	        value: function getSortType() {
	            return this.widget.getSortType();
	        }
	    }, {
	        key: 'setSortType',
	        value: function setSortType(type) {
	            this.widget.setSortType(type);
	            this.widget.setSortTarget(this.dId);
	            return this.widget.$get();
	        }
	    }]);

	    return TargetSortComponentHelper;
	}();

	exports.default = TargetSortComponentHelper;

/***/ },

/***/ 927:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _DimensionComponentHelper = __webpack_require__(920);

	var _DimensionComponentHelper2 = _interopRequireDefault(_DimensionComponentHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DimensionSortableComponent = function (_Component) {
	    _inherits(DimensionSortableComponent, _Component);

	    function DimensionSortableComponent(props, context) {
	        _classCallCheck(this, DimensionSortableComponent);

	        var _this = _possibleConstructorReturn(this, (DimensionSortableComponent.__proto__ || Object.getPrototypeOf(DimensionSortableComponent)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(DimensionSortableComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            this._helper = new _DimensionComponentHelper2.default(props, this.context);
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { cross: 'center', box: 'last', style: styles.wrapper },
	                _lib2.default.createElement(
	                    _layout.Layout,
	                    { cross: 'center' },
	                    _lib2.default.createElement(_base.IconButton, { style: styles.icon, invalid: true, selected: this._helper.isUsed(),
	                        className: 'single-select-font' }),
	                    _lib2.default.createElement(
	                        _lib.Text,
	                        { style: (0, _core.sc)([styles.disabledText, !this._helper.isUsed()]), textAlign: 'left',
	                            effect: false },
	                        props.value.text
	                    )
	                ),
	                _lib2.default.createElement(DragHandle, null)
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return DimensionSortableComponent;
	}(_lib.Component);

	DimensionSortableComponent.propTypes = {};
	DimensionSortableComponent.defaultProps = {
	    wId: '',
	    $widget: null,
	    dId: '',
	    value: {}
	};

	_reactMixin2.default.onClass(DimensionSortableComponent, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        paddingLeft: 20,
	        paddingRight: 20,
	        height: _data.Sizes.ITEM_HEIGHT,
	        borderBottomWidth: 1 / _lib.PixelRatio.get(),
	        borderBottomColor: _data.Colors.BORDER
	    },
	    icon: {
	        width: 40
	    },

	    disabledText: {
	        color: _data.Colors.DISABLED
	    }
	});

	var SortableElement = _base.Sortable.SortableElement;
	var SortableHandle = _base.Sortable.SortableHandle;


	var DragHandle = SortableHandle(function () {
	    return _lib2.default.createElement(_base.IconButton, { effect: false, style: styles.dragHandler, className: 'draggable-font', iconWidth: 18,
	        iconHeight: 18 });
	});

	exports.default = SortableElement(function (props) {
	    return _lib2.default.createElement(DimensionSortableComponent, props);
	});

/***/ },

/***/ 928:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _TableComponent = __webpack_require__(929);

	var _TableComponent2 = _interopRequireDefault(_TableComponent);

	var _SettingsComponent = __webpack_require__(917);

	var _SettingsComponent2 = _interopRequireDefault(_SettingsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TablePaneComponent = function (_Component) {
	    _inherits(TablePaneComponent, _Component);

	    function TablePaneComponent(props, context) {
	        _classCallCheck(this, TablePaneComponent);

	        return _possibleConstructorReturn(this, (TablePaneComponent.__proto__ || Object.getPrototypeOf(TablePaneComponent)).call(this, props, context));
	    }

	    _createClass(TablePaneComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: '_renderHeader',
	        value: function _renderHeader() {
	            var _this2 = this;

	            var _props = this.props;
	            var $widget = _props.$widget;
	            var wId = _props.wId;

	            var widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(this.context.$template));
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { main: 'justify', cross: 'center', style: styles.header },
	                _lib2.default.createElement(
	                    _lib.Text,
	                    null,
	                    widget.getName()
	                ),
	                _lib2.default.createElement(_base.IconLink, { className: 'setting-font', onPress: function onPress() {
	                        _lib.Portal.showModal('TableComponent', _lib2.default.createElement(_SettingsComponent2.default, {
	                            key: 'TableComponent',
	                            $widget: _this2.props.$widget,
	                            wId: _this2.props.wId,
	                            height: 0,
	                            onComplete: function onComplete(opt) {
	                                _lib.Portal.closeModal('TableComponent');
	                                _this2.context.actions.updateWidget(opt.$widget, opt.wId);
	                            },
	                            onReturn: function onReturn() {
	                                _lib.Portal.closeModal('TableComponent');
	                            }
	                        }));
	                    } })
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props;
	            var width = _props2.width;
	            var height = _props2.height;
	            var $widget = _props2.$widget;
	            var wId = _props2.wId;

	            return _lib2.default.createElement(
	                _layout.Layout,
	                { dir: 'top', box: 'fist' },
	                this._renderHeader(),
	                _lib2.default.createElement(_TableComponent2.default, {
	                    width: width,
	                    height: height - _data.Sizes.HEADER_HEIGHT,
	                    $widget: $widget,
	                    wId: wId
	                })
	            );
	        }
	    }]);

	    return TablePaneComponent;
	}(_lib.Component);

	TablePaneComponent.contextTypes = {
	    $template: _lib2.default.PropTypes.object,
	    actions: _lib2.default.PropTypes.object
	};

	_reactMixin2.default.onClass(TablePaneComponent, _core.ReactComponentWithImmutableRenderMixin);

	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        position: 'relative'
	    },
	    header: {
	        paddingLeft: 4,
	        paddingRight: 4,
	        height: _data.Sizes.HEADER_HEIGHT
	    }
	});
	exports.default = TablePaneComponent;

/***/ },

/***/ 929:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _TableComponentHelper = __webpack_require__(930);

	var _TableComponentHelper2 = _interopRequireDefault(_TableComponentHelper);

	var _TableComponentWidthHelper = __webpack_require__(931);

	var _TableComponentWidthHelper2 = _interopRequireDefault(_TableComponentWidthHelper);

	var _TableCell = __webpack_require__(932);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _TableHeader = __webpack_require__(933);

	var _TableHeader2 = _interopRequireDefault(_TableHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableComponent = function (_Component) {
	    _inherits(TableComponent, _Component);

	    function TableComponent(props, context) {
	        _classCallCheck(this, TableComponent);

	        var _this = _possibleConstructorReturn(this, (TableComponent.__proto__ || Object.getPrototypeOf(TableComponent)).call(this, props, context));

	        _this.state = {
	            data: []
	        };
	        return _this;
	    }

	    _createClass(TableComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._fetchData(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (!(0, _core.immutableShallowEqual)(nextProps, this.props)) {
	                this._fetchData(nextProps);
	                this._changed = true;
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            if (this._changed) {
	                this._changed = false;
	                return false;
	            }
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {}
	    }, {
	        key: '_fetchData',
	        value: function _fetchData(props) {
	            var _this2 = this;

	            var $widget = props.$widget;
	            var wId = props.wId;

	            var widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(this.context.$template));
	            console.log(widget.$get().toJS());
	            return widget.getData().then(function (data) {
	                _this2.setState({ data: data });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var width = _props.width;
	            var height = _props.height;var data = this.state.data;

	            this._tableHelper = new _TableComponentHelper2.default(this.props, this.context);
	            this._widthHelper = new _TableComponentWidthHelper2.default(this._tableHelper, this.props.width);
	            this._tableHelper.setData(data);
	            var items = this._tableHelper.getItems();
	            this._widthHelper.setItems(items);
	            return _lib2.default.createElement(_widgets.TableWidget, {
	                width: width,
	                height: height,
	                freezeCols: this._tableHelper.isFreeze() ? [0] : [],
	                columnSize: this._widthHelper.getWidth(),
	                header: this._tableHelper.getHeader(),
	                items: items,
	                groupHeader: this._tableHelper.getGroupHeader(),
	                groupItems: this._tableHelper.getGroupItems()
	                /**groupHeader={[{text: 1}, {text: 2}]}
	                 groupItems={[{children:[{text: 'A', children: [{text: 'A1'}, {text: 'A2'}]}, {text: 'B'}]}]}**/
	                , groupHeaderCellRenderer: function groupHeaderCellRenderer(_ref) {
	                    var colIndex = _ref.colIndex;

	                    var cell = _objectWithoutProperties(_ref, ['colIndex']);

	                    return _lib2.default.createElement(_TableHeader2.default, cell);
	                },
	                groupItemsCellRenderer: function groupItemsCellRenderer(_ref2) {
	                    var cell = _objectWithoutProperties(_ref2, []);

	                    return _lib2.default.createElement(_TableHeader2.default, cell);
	                },
	                headerCellRenderer: function headerCellRenderer(_ref3) {
	                    var colIndex = _ref3.colIndex;

	                    var cell = _objectWithoutProperties(_ref3, ['colIndex']);

	                    return _lib2.default.createElement(_TableHeader2.default, cell);
	                },
	                itemsCellRenderer: function itemsCellRenderer(_ref4) {
	                    var colIndex = _ref4.colIndex;
	                    var rowIndex = _ref4.rowIndex;

	                    var cell = _objectWithoutProperties(_ref4, ['colIndex', 'rowIndex']);

	                    return _lib2.default.createElement(_TableCell2.default, cell);
	                }
	            });
	        }
	    }]);

	    return TableComponent;
	}(_lib.Component);
	// mixin.onClass(TableComponent, ReactComponentWithImmutableRenderMixin);

	TableComponent.contextTypes = {
	    $template: _lib2.default.PropTypes.object
	};
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        position: 'relative'
	    },
	    header: {
	        paddingLeft: 4,
	        paddingRight: 4,
	        flexDirection: 'row',
	        alignItems: 'center',
	        justifyContent: 'space-between'
	    }
	});
	exports.default = TableComponent;

/***/ },

/***/ 930:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	var _data = __webpack_require__(780);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TableComponentHelper = function () {
	    function TableComponentHelper(props, context) {
	        _classCallCheck(this, TableComponentHelper);

	        var $widget = props.$widget;
	        var wId = props.wId;

	        this.widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(context.$template));
	        this.data = [];
	    }

	    _createClass(TableComponentHelper, [{
	        key: 'setData',
	        value: function setData(data) {
	            this.data = data;
	        }
	    }, {
	        key: 'getHeader',
	        value: function getHeader() {
	            var _this = this;

	            var ids = this.widget.getAllUsedTargetIds();
	            var result = [{
	                text: '行表头'
	            }];
	            ids.forEach(function (id) {
	                var $$dim = _this.widget.get$DimensionOrTargetById(id);
	                result.push({
	                    text: _data.DimensionFactory.createDimension($$dim).getName()
	                });
	            });
	            return result;
	        }
	    }, {
	        key: 'getItems',
	        value: function getItems() {
	            var dimensionIds = this.widget.getAllUsedDimensionIds();
	            var targetIds = this.widget.getAllUsedTargetIds();
	            var result = [];
	            var track = function track(node, layer) {
	                if (!node) {
	                    return;
	                }
	                if (node.n) {
	                    if (!result[0]) {
	                        result[0] = [];
	                    }
	                    result[0].push({
	                        dId: dimensionIds[layer],
	                        layer: layer,
	                        text: node.n
	                    });
	                    if (node.s) {
	                        node.s.forEach(function (v, idx) {
	                            if (!result[idx + 1]) {
	                                result[idx + 1] = [];
	                            }
	                            result[idx + 1].push({
	                                dId: targetIds[idx],
	                                text: v
	                            });
	                        });
	                    }
	                }
	                if (node.c) {
	                    node.c.forEach(function (child) {
	                        track(child, layer + 1);
	                    });
	                }
	                // if (!node.n) {
	                //     if (!result[0]) {
	                //         result[0] = [];
	                //     }
	                //     // result[0].push({
	                //     //     text: '汇总'
	                //     // });
	                //     if (node.s) {
	                //         node.s.forEach((v, idx)=> {
	                //             if (!result[idx + 1]) {
	                //                 result[idx + 1] = [];
	                //             }
	                //             result[idx + 1].push({
	                //                 dId: targetIds[idx],
	                //                 text: v
	                //             })
	                //         })
	                //     }
	                // }
	            };
	            track(this.data.data, -1);
	            return result;
	        }
	    }, {
	        key: 'getGroupHeader',
	        value: function getGroupHeader() {
	            var _this2 = this;

	            var result = [];
	            var ids = this.widget.getRowDimensionIds();
	            (0, _core.each)(ids, function (id) {
	                var dimension = _data.DimensionFactory.createDimension(_this2.widget.get$DimensionById(id));
	                result.push({
	                    text: dimension.getName()
	                });
	            });
	            return result;
	        }

	        //交叉表表头

	    }, {
	        key: 'getGroupItems',
	        value: function getGroupItems() {
	            return [];
	        }
	    }, {
	        key: 'isFreeze',
	        value: function isFreeze() {
	            return this.widget.isFreeze();
	        }
	    }]);

	    return TableComponentHelper;
	}();

	exports.default = TableComponentHelper;

/***/ },

/***/ 931:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var REMAIN_WIDTH = 8;

	function sumBy(array, it) {
	    var res = 0;
	    (0, _core.each)(array, function (width, i) {
	        res += it(width, i);
	    });
	    return res;
	}

	//最小二乘法  fx=bx+a
	function fit(widths) {
	    if (widths.length < 2) {
	        return { a: widths[0], b: 0 };
	    }
	    var $11 = widths.length;
	    var $12 = (1 + widths.length) * widths.length / 2;
	    var $21 = $12;
	    var $22 = sumBy(widths, function (width, i) {
	        return (i + 1) * (i + 1);
	    });
	    var f1 = _core.math.sum(widths);
	    var f2 = sumBy(widths, function (width, i) {
	        return (i + 1) * width;
	    });
	    return {
	        a: (f2 * $12 - f1 * $22) / ($12 * $21 - $11 * $22),
	        b: (f2 * $11 - f1 * $21) / ($11 * $22 - $21 * $12)
	    };
	}

	//获取字符宽度
	function getGBWidth(str) {
	    str = str + '';
	    str = str.replace(/[^\x00-\xff]/g, 'xx');
	    return Math.ceil(str.length / 2);
	}

	var TableComponentWidthHelper = function () {
	    function TableComponentWidthHelper(helper, width) {
	        var _this = this;

	        _classCallCheck(this, TableComponentWidthHelper);

	        this.width = width;
	        this.helper = helper;
	        this.header = helper.getHeader();
	        this.items = [];
	        (0, _core.each)(this.header, function (item, i) {
	            _this.items[i] = [item];
	        });
	    }

	    _createClass(TableComponentWidthHelper, [{
	        key: 'setItems',
	        value: function setItems(items) {
	            var _this2 = this;

	            if (items.length > 0) {
	                this.items = [];
	                (0, _core.each)(this.header, function (item, i) {
	                    _this2.items[i] = [_this2.header[i]].concat(items[i]);
	                });
	            }
	        }
	    }, {
	        key: 'getWidthsByOneCol',
	        value: function getWidthsByOneCol(col) {
	            var widths = [];
	            (0, _core.each)(col, function (item) {
	                widths.push(getGBWidth(item.text));
	            });
	            return widths;
	        }
	    }, {
	        key: 'adjustWidth',
	        value: function adjustWidth(widths) {
	            if (widths.length < 1) {
	                return [];
	            }
	            if (widths.length === 1) {
	                return [this.width];
	            }
	            var allWidth = _core.math.sum(widths);
	            if (this.helper.isFreeze()) {
	                var halfWidth = _core.math.floor(this.width / 2);
	                if (widths[0] > halfWidth) {
	                    if (allWidth + halfWidth - widths[0] < this.width) {
	                        var shared = Math.floor(halfWidth - (allWidth - widths[0] / (widths.length - 1)));
	                        for (var i = 1; i < widths.length; i++) {
	                            widths[i] += shared;
	                        }
	                        //把偏差加到最后一列
	                        widths[widths.length - 1] += halfWidth - (allWidth - widths[0]) - (shared * widths.length - 1);
	                    }
	                    widths[0] = halfWidth;
	                } else {
	                    if (allWidth < this.width) {
	                        var _shared = _core.math.floor((this.width - allWidth) / widths.length);
	                        for (var _i = 0; _i < widths.length; _i++) {
	                            widths[_i] += _shared;
	                        }
	                        if (widths[0] > halfWidth) {
	                            widths[widths.length - 1] += widths[0] - halfWidth;
	                            widths[0] = halfWidth;
	                        }
	                        widths[widths.length - 1] += this.width - allWidth - _shared * widths.length;
	                    }
	                }
	            } else {
	                if (allWidth < this.width) {
	                    var _shared2 = _core.math.floor((this.width - allWidth) / widths.length);
	                    for (var _i2 = 0; _i2 < widths.length; _i2++) {
	                        widths[_i2] += _shared2;
	                    }
	                    widths[widths.length - 1] += this.width - allWidth - _shared2 * widths.length;
	                }
	            }
	            return widths;
	        }
	    }, {
	        key: 'getWidth',
	        value: function getWidth() {
	            var _this3 = this;

	            var result = [];
	            (0, _core.each)(this.items, function (col) {
	                var fx = fit(_this3.getWidthsByOneCol(col));
	                result.push(_core.math.ceil((fx.a + fx.b * _core.math.ceil((1 + col.length) / 2)) * 16 * 1.2) + REMAIN_WIDTH);
	            });
	            return this.adjustWidth(result);
	        }
	    }]);

	    return TableComponentWidthHelper;
	}();

	exports.default = TableComponentWidthHelper;

/***/ },

/***/ 932:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableCell = function (_Component) {
	    _inherits(TableCell, _Component);

	    function TableCell(props, context) {
	        _classCallCheck(this, TableCell);

	        var _this = _possibleConstructorReturn(this, (TableCell.__proto__ || Object.getPrototypeOf(TableCell)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TableCell, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            return _lib2.default.createElement(
	                _lib.View,
	                { style: [styles.region, {
	                        paddingLeft: props.layer * 30 + 4
	                    }] },
	                _lib2.default.createElement(
	                    _lib.Text,
	                    { numberOfLines: 2 },
	                    props.text
	                )
	            );
	        }
	    }]);

	    return TableCell;
	}(_lib.Component);

	TableCell.propTypes = {};
	TableCell.defaultProps = {
	    layer: 0
	};

	_reactMixin2.default.onClass(TableCell, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    region: {
	        padding: '0 4px 0 4px',
	        width: '100%',
	        height: '100%',
	        justifyContent: 'center'
	    }
	});
	exports.default = TableCell;

/***/ },

/***/ 933:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableHeader = function (_Component) {
	    _inherits(TableHeader, _Component);

	    function TableHeader(props, context) {
	        _classCallCheck(this, TableHeader);

	        var _this = _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TableHeader, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            return _lib2.default.createElement(
	                _lib.View,
	                { style: styles.region },
	                _lib2.default.createElement(
	                    _lib.Text,
	                    { numberOfLines: 2 },
	                    props.text
	                )
	            );
	        }
	    }]);

	    return TableHeader;
	}(_lib.Component);

	TableHeader.propTypes = {};
	TableHeader.defaultProps = {};

	_reactMixin2.default.onClass(TableHeader, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    region: {
	        padding: '0 4px 0 4px',
	        width: '100%',
	        height: '100%',
	        justifyContent: 'center'
	    }
	});
	exports.default = TableHeader;

/***/ },

/***/ 934:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _layout = __webpack_require__(801);

	var _base = __webpack_require__(813);

	var _widgets = __webpack_require__(895);

	var _DetailTableComponent = __webpack_require__(935);

	var _DetailTableComponent2 = _interopRequireDefault(_DetailTableComponent);

	var _SettingsComponent = __webpack_require__(917);

	var _SettingsComponent2 = _interopRequireDefault(_SettingsComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DetailTablePaneComponent = function (_Component) {
	    _inherits(DetailTablePaneComponent, _Component);

	    function DetailTablePaneComponent(props, context) {
	        _classCallCheck(this, DetailTablePaneComponent);

	        return _possibleConstructorReturn(this, (DetailTablePaneComponent.__proto__ || Object.getPrototypeOf(DetailTablePaneComponent)).call(this, props, context));
	    }

	    _createClass(DetailTablePaneComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: '_renderHeader',
	        value: function _renderHeader() {
	            var _this2 = this;

	            var _props = this.props;
	            var $widget = _props.$widget;
	            var wId = _props.wId;

	            var widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(this.context.$template));
	            return _lib2.default.createElement(
	                _layout.Layout,
	                { main: 'justify', cross: 'center', height: _data.Sizes.HEADER_HEIGHT, style: styles.header },
	                _lib2.default.createElement(
	                    _lib.Text,
	                    null,
	                    widget.getName()
	                ),
	                _lib2.default.createElement(_base.IconLink, { className: 'setting-font', onPress: function onPress() {
	                        _lib.Portal.showModal('DetailTableComponent', _lib2.default.createElement(_SettingsComponent2.default, {
	                            key: 'DetailTableComponent',
	                            $widget: _this2.props.$widget,
	                            wId: _this2.props.wId,
	                            height: 0,
	                            onComplete: function onComplete(opt) {
	                                _lib.Portal.closeModal('DetailTableComponent');
	                                _this2.context.actions.updateWidget(opt.$widget, opt.wId);
	                            },
	                            onReturn: function onReturn() {
	                                _lib.Portal.closeModal('DetailTableComponent');
	                            }
	                        }));
	                    } })
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props;
	            var width = _props2.width;
	            var height = _props2.height;
	            var $widget = _props2.$widget;
	            var wId = _props2.wId;

	            return _lib2.default.createElement(
	                _layout.Layout,
	                { dir: 'top', box: 'first' },
	                this._renderHeader(),
	                _lib2.default.createElement(_DetailTableComponent2.default, {
	                    width: width,
	                    height: height - _data.Sizes.HEADER_HEIGHT,
	                    $widget: $widget,
	                    wId: wId
	                })
	            );
	        }
	    }]);

	    return DetailTablePaneComponent;
	}(_lib.Component);

	DetailTablePaneComponent.contextTypes = {
	    $template: _lib2.default.PropTypes.object,
	    actions: _lib2.default.PropTypes.object
	};

	_reactMixin2.default.onClass(DetailTablePaneComponent, _core.ReactComponentWithImmutableRenderMixin);

	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        position: 'relative'
	    },
	    header: {
	        paddingLeft: 4,
	        paddingRight: 4,
	        height: _data.Sizes.HEADER_HEIGHT
	    }
	});
	exports.default = DetailTablePaneComponent;

/***/ },

/***/ 935:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _base = __webpack_require__(813);

	var _layout = __webpack_require__(801);

	var _widgets = __webpack_require__(895);

	var _DetailTableComponentHelper = __webpack_require__(936);

	var _DetailTableComponentHelper2 = _interopRequireDefault(_DetailTableComponentHelper);

	var _TableComponentWidthHelper = __webpack_require__(931);

	var _TableComponentWidthHelper2 = _interopRequireDefault(_TableComponentWidthHelper);

	var _TableCell = __webpack_require__(932);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _TableHeader = __webpack_require__(933);

	var _TableHeader2 = _interopRequireDefault(_TableHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColumnGroup = _base.Table.ColumnGroup;
	var Column = _base.Table.Column;
	var Cell = _base.Table.Cell;

	var DetailTableComponent = function (_Component) {
	    _inherits(DetailTableComponent, _Component);

	    function DetailTableComponent(props, context) {
	        _classCallCheck(this, DetailTableComponent);

	        var _this = _possibleConstructorReturn(this, (DetailTableComponent.__proto__ || Object.getPrototypeOf(DetailTableComponent)).call(this, props, context));

	        _this.state = {
	            data: []
	        };
	        return _this;
	    }

	    _createClass(DetailTableComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._fetchData(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (!(0, _core.immutableShallowEqual)(nextProps, this.props)) {
	                this._fetchData(nextProps);
	                this._changed = true;
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            if (this._changed) {
	                this._changed = false;
	                return false;
	            }
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {}
	    }, {
	        key: '_fetchData',
	        value: function _fetchData(props) {
	            var _this2 = this;

	            var $widget = props.$widget;
	            var wId = props.wId;

	            var widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(this.context.$template));
	            return widget.getData().then(function (data) {
	                _this2.setState({ data: data });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var width = _props.width;
	            var height = _props.height;var data = this.state.data;

	            this._tableHelper = new _DetailTableComponentHelper2.default(this.props, this.context);
	            this._widthHelper = new _TableComponentWidthHelper2.default(this._tableHelper, this.props.width);
	            this._tableHelper.setData(data);
	            var items = this._tableHelper.getItems();
	            this._widthHelper.setItems(items);

	            return _lib2.default.createElement(_widgets.TableWidget, {
	                width: width,
	                height: height - _data.Sizes.HEADER_HEIGHT,
	                freezeCols: this._tableHelper.isFreeze() ? [0] : [],
	                columnSize: this._widthHelper.getWidth(),
	                header: this._tableHelper.getHeader(),
	                items: items,
	                headerCellRenderer: function headerCellRenderer(_ref) {
	                    var colIndex = _ref.colIndex;

	                    var cell = _objectWithoutProperties(_ref, ['colIndex']);

	                    return _lib2.default.createElement(_TableHeader2.default, cell);
	                },
	                itemsCellRenderer: function itemsCellRenderer(_ref2) {
	                    var colIndex = _ref2.colIndex;
	                    var rowIndex = _ref2.rowIndex;

	                    var cell = _objectWithoutProperties(_ref2, ['colIndex', 'rowIndex']);

	                    return _lib2.default.createElement(_TableCell2.default, cell);
	                }
	            });
	        }
	    }]);

	    return DetailTableComponent;
	}(_lib.Component);
	// mixin.onClass(DetailTableComponent, ReactComponentWithImmutableRenderMixin);

	DetailTableComponent.contextTypes = {
	    $template: _lib2.default.PropTypes.object
	};
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        position: 'relative'
	    },
	    header: {
	        paddingLeft: 4,
	        paddingRight: 4,
	        flexDirection: 'row',
	        alignItems: 'center',
	        justifyContent: 'space-between'
	    }
	});
	exports.default = DetailTableComponent;

/***/ },

/***/ 936:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(329);

	var _data = __webpack_require__(780);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DetailTableComponentHelper = function () {
	    function DetailTableComponentHelper(props, context) {
	        _classCallCheck(this, DetailTableComponentHelper);

	        var $widget = props.$widget;
	        var wId = props.wId;

	        this.widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(context.$template));
	        this.data = [];
	    }

	    _createClass(DetailTableComponentHelper, [{
	        key: 'setData',
	        value: function setData(data) {
	            this.data = data;
	        }
	    }, {
	        key: 'getHeader',
	        value: function getHeader() {
	            var _this = this;

	            var ids = this.widget.getAllUsedDimensionAndTargetIds();
	            var result = [];
	            ids.forEach(function (id) {
	                var $$dim = _this.widget.get$DimensionOrTargetById(id);
	                result.push({
	                    text: _data.DimensionFactory.createDimension($$dim).getName()
	                });
	            });
	            return result;
	        }
	    }, {
	        key: 'getItems',
	        value: function getItems() {
	            var result = [];
	            if ((0, _core.isEmpty)(this.data)) {
	                return [];
	            }
	            (0, _core.each)(this.data.data.value, function (rows, i) {
	                (0, _core.each)(rows, function (v, j) {
	                    if (!result[j]) {
	                        result[j] = [];
	                    }
	                    result[j][i] = {
	                        text: v,
	                        value: v
	                    };
	                });
	            });
	            return result;
	        }
	    }, {
	        key: 'isFreeze',
	        value: function isFreeze() {
	            return this.widget.isFreeze();
	        }
	    }]);

	    return DetailTableComponentHelper;
	}();

	exports.default = DetailTableComponentHelper;

/***/ },

/***/ 937:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _base = __webpack_require__(813);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 文本组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Young's on 2016/10/10.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ContentComponent = function (_Component) {
	    _inherits(ContentComponent, _Component);

	    function ContentComponent(props, context) {
	        _classCallCheck(this, ContentComponent);

	        var _this = _possibleConstructorReturn(this, (ContentComponent.__proto__ || Object.getPrototypeOf(ContentComponent)).call(this, props, context));

	        _this.state = { content: '' };
	        return _this;
	    }

	    _createClass(ContentComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var $widget = _props.$widget;
	            var wId = _props.wId;

	            var widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(this.context.$template));
	            var style = widget.getStyle();
	            return _lib2.default.createElement(_lib.TextInput, {
	                style: _extends({ height: this.props.height }, styles.wrapper, style),
	                ref: 'content',
	                autoCapitalize: 'none',
	                multiline: 'true',
	                value: widget.getContent(),
	                editable: 'true'
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return ContentComponent;
	}(_lib.Component);

	_reactMixin2.default.onClass(ContentComponent, _core.ReactComponentWithPureRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        flex: 1
	    }
	});
	exports.default = ContentComponent;

/***/ },

/***/ 938:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _base = __webpack_require__(813);

	var _WidgetFactory = __webpack_require__(783);

	var _WidgetFactory2 = _interopRequireDefault(_WidgetFactory);

	var _TemplateFactory = __webpack_require__(781);

	var _TemplateFactory2 = _interopRequireDefault(_TemplateFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 图片组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Young's on 2016/10/10.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ImageComponent = function (_Component) {
	    _inherits(ImageComponent, _Component);

	    function ImageComponent(props, context) {
	        _classCallCheck(this, ImageComponent);

	        return _possibleConstructorReturn(this, (ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).call(this, props, context));
	    }

	    _createClass(ImageComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var $widget = _props.$widget;
	            var wId = _props.wId;

	            var widget = _WidgetFactory2.default.createWidget($widget, wId, _TemplateFactory2.default.createTemplate(this.context.$template));
	            return _lib2.default.createElement(_lib.Image, {
	                style: _extends({ height: this.props.height }, styles.wrapper),
	                source: widget.getSrc(),
	                resizeMode: widget.getSizeMode()
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return ImageComponent;
	}(_lib.Component);

	_reactMixin2.default.onClass(ImageComponent, _core.ReactComponentWithPureRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        flex: 1
	    }
	});
	exports.default = ImageComponent;

/***/ },

/***/ 939:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _base = __webpack_require__(813);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Web组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Young's on 2016/10/20.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var WebComponent = function (_Component) {
	    _inherits(WebComponent, _Component);

	    function WebComponent(props, context) {
	        _classCallCheck(this, WebComponent);

	        var _this = _possibleConstructorReturn(this, (WebComponent.__proto__ || Object.getPrototypeOf(WebComponent)).call(this, props, context));

	        _this.state = { content: '' };
	        return _this;
	    }

	    _createClass(WebComponent, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var $widget = _props.$widget;
	            var wId = _props.wId;

	            var widget = _data.WidgetFactory.createWidget($widget, wId, _data.TemplateFactory.createTemplate(this.context.$template));
	            return _lib2.default.createElement(_lib.WebView, {
	                style: _extends({ height: this.props.height }, styles.wrapper),
	                src: widget.getUrl()
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return WebComponent;
	}(_lib.Component);

	_reactMixin2.default.onClass(WebComponent, _core.ReactComponentWithPureRenderMixin);
	var styles = _lib.StyleSheet.create({
	    wrapper: {
	        flex: 1
	    }
	});
	exports.default = WebComponent;

/***/ },

/***/ 940:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactMixin = __webpack_require__(206);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _reactDom = __webpack_require__(34);

	var _immutable = __webpack_require__(200);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _core = __webpack_require__(329);

	var _lib = __webpack_require__(208);

	var _lib2 = _interopRequireDefault(_lib);

	var _data = __webpack_require__(780);

	var _base = __webpack_require__(813);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LayoutDemo = function (_Component) {
	    _inherits(LayoutDemo, _Component);

	    function LayoutDemo(props, context) {
	        _classCallCheck(this, LayoutDemo);

	        var _this = _possibleConstructorReturn(this, (LayoutDemo.__proto__ || Object.getPrototypeOf(LayoutDemo)).call(this, props, context));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(LayoutDemo, [{
	        key: '_getNextState',
	        value: function _getNextState(props) {
	            var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _objectWithoutProperties(this.props, []);
	            var state = _objectWithoutProperties(this.state, []);

	            return _lib2.default.createElement(
	                _lib.ScrollView,
	                null,
	                _lib2.default.createElement(
	                    _base.CenterLayout,
	                    { style: styles.item },
	                    _lib2.default.createElement(
	                        _lib.Text,
	                        { style: { backgroundColor: _data.Colors.HIGHLIGHT } },
	                        '123'
	                    )
	                ),
	                _lib2.default.createElement(
	                    _base.HorizontalCenterLayout,
	                    { style: styles.item },
	                    _lib2.default.createElement(
	                        _lib.Text,
	                        { style: { backgroundColor: _data.Colors.HIGHLIGHT } },
	                        '123'
	                    )
	                ),
	                _lib2.default.createElement(
	                    _base.VerticalCenterLayout,
	                    { style: styles.item },
	                    _lib2.default.createElement(
	                        _lib.Text,
	                        { style: { backgroundColor: _data.Colors.HIGHLIGHT } },
	                        '123'
	                    )
	                ),
	                _lib2.default.createElement(
	                    _base.Layout,
	                    { dir: 'left', box: 'justify', style: styles.item },
	                    _lib2.default.createElement(
	                        _base.CenterLayout,
	                        { style: { width: 100, backgroundColor: _data.Colors.PRESS } },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            null,
	                            '123'
	                        )
	                    ),
	                    _lib2.default.createElement(
	                        _base.CenterLayout,
	                        { style: { backgroundColor: _data.Colors.HIGHLIGHT } },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            null,
	                            '456'
	                        )
	                    ),
	                    _lib2.default.createElement(
	                        _base.CenterLayout,
	                        { style: { width: 100, backgroundColor: _data.Colors.PRESS } },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            null,
	                            '789'
	                        )
	                    )
	                ),
	                _lib2.default.createElement(
	                    _base.Layout,
	                    { dir: 'left', main: 'justify', style: styles.item },
	                    _lib2.default.createElement(
	                        _base.CenterLayout,
	                        { style: { width: 100, backgroundColor: _data.Colors.PRESS } },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            null,
	                            '123'
	                        )
	                    ),
	                    _lib2.default.createElement(
	                        _base.CenterLayout,
	                        { style: { backgroundColor: _data.Colors.HIGHLIGHT } },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            null,
	                            '456'
	                        )
	                    ),
	                    _lib2.default.createElement(
	                        _base.CenterLayout,
	                        { style: { width: 100, backgroundColor: _data.Colors.PRESS } },
	                        _lib2.default.createElement(
	                            _lib.Text,
	                            null,
	                            '789'
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return LayoutDemo;
	}(_lib.Component);

	LayoutDemo.propTypes = {};
	LayoutDemo.defaultProps = {};

	_reactMixin2.default.onClass(LayoutDemo, _core.ReactComponentWithImmutableRenderMixin);
	var styles = _lib.StyleSheet.create({
	    item: {
	        height: 100,
	        borderBottomColor: _data.Colors.BORDER,
	        borderBottomWidth: 1 / _lib.PixelRatio.get()
	    }
	});
	exports.default = LayoutDemo;

/***/ },

/***/ 941:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(942);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(633)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./../autoprefixer-loader/index.js?browsers=last 2 version!./reset.css", function() {
				var newContent = require("!!./../css-loader/index.js!./../autoprefixer-loader/index.js?browsers=last 2 version!./reset.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 942:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(632)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", ""]);

	// exports


/***/ },

/***/ 943:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(944);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(633)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./common.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./common.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 944:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(632)();
	// imports


	// module
	exports.push([module.id, "/****添加计算宽度的--运算符直接需要space****/\n/****** common color(常用颜色,可用于普遍场景) *****/\n/**** custom color(自定义颜色,用于特定场景) ****/\n.base-disabled {\n  cursor: default !important;\n  color: #c4c6c6 !important;\n}\n.base-disabled .b-font:before {\n  color: #c4c6c6 !important;\n}\n.base-invalid {\n  cursor: default !important;\n}\n.clearfix {\n  *zoom: 1;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n  line-height: 0;\n}\n.clearfix:after {\n  clear: both;\n}\n", ""]);

	// exports


/***/ },

/***/ 945:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(946);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(633)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./font.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./font.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 946:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(632)();
	// imports


	// module
	exports.push([module.id, "/****** common color(常用颜色,可用于普遍场景) *****/\n/**** custom color(自定义颜色,用于特定场景) ****/\n.tool-filter-font .b-font:before {\n  content: '\\E624';\n  color: #808080;\n}\n.tool-filter-font:active .b-font:before {\n  content: '\\E624';\n  color: #009de3;\n}\n.tool-filter-font.disabled .b-font:before {\n  content: '\\E624';\n  color: #808080;\n}\n.node-fold-font .b-font:before {\n  content: '\\E610';\n  color: #808080;\n}\n.node-fold-font:active .b-font:before {\n  content: '\\E610';\n  color: #808080;\n}\n.node-fold-font.active .b-font:before {\n  content: '\\E611';\n  color: #808080;\n}\n.node-fold-font.disabled .b-font:before {\n  content: '\\E610';\n  color: #808080;\n}\n.setting-font .b-font:before {\n  content: '\\E62A';\n  color: #808080;\n}\n.setting-font.disabled .b-font:before {\n  content: '\\E62A';\n  color: #808080;\n}\n.single-select-font .b-font:before {\n  content: '\\E618';\n  color: #ffffff;\n}\n.single-select-font.active .b-font:before {\n  content: '\\E618';\n  color: #009de3;\n}\n.single-select-font.disabled .b-font:before {\n  content: '\\E618';\n  color: #ffffff;\n}\n.draggable-font .b-font:before {\n  content: '\\E62C';\n  color: #808080;\n}\n.draggable-font.disabled .b-font:before {\n  content: '\\E62C';\n  color: #808080;\n}\n.asc-sort-font .b-font:before {\n  content: '\\E62D';\n  color: #808080;\n}\n.asc-sort-font.disabled .b-font:before {\n  content: '\\E62D';\n  color: #808080;\n}\n.dsc-sort-font .b-font:before {\n  content: '\\E62B';\n  color: #808080;\n}\n.dsc-sort-font.disabled .b-font:before {\n  content: '\\E62B';\n  color: #808080;\n}\n", ""]);

	// exports


/***/ },

/***/ 947:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(948);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(633)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./icon.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./icon.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 948:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(632)();
	// imports


	// module
	exports.push([module.id, ".drag-handler-icon .x-icon {\n  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M0 7.5v5h50v-5H0zm0 15v5h50v-5H0zm0 15v5h50v-5H0z\" color=\"#000\"/></svg>');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n", ""]);

	// exports


/***/ },

/***/ 949:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(950);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(633)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./background.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./background.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 950:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(632)();
	// imports


	// module
	exports.push([module.id, ".base-line-conn-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/icon/tree-vertical-line-1.png') repeat-y 0 0;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/icon/tree-vertical-line-1.png');\n  _background: none;\n}\n.first-line-conn-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/icon/tree-vertical-line-2.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/icon/tree-vertical-line-2.png');\n  _background: none;\n}\n.last-line-conn-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/icon/tree-vertical-line-4.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/icon/tree-vertical-line-4.png');\n  _background: none;\n}\n.mid-line-conn-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/icon/tree-vertical-line-3.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/icon/tree-vertical-line-3.png');\n  _background: none;\n}\n.loading-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/icon/loading.gif') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/icon/loading.gif');\n  _background: none;\n}\n.loading-background-f25 {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/F.25.gif') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/F.25.gif');\n  _background: none;\n}\n.loading-background-e50 {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/E.50.gif') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/E.50.gif');\n  _background: none;\n}\n.loading-background-d100 {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/D.100.gif') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/D.100.gif');\n  _background: none;\n}\n.axis-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/axis.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/axis.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.axis-accu-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/axis_accu.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/axis_accu.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.axis-percent-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/axis_percent.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/axis_percent.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.axis-compare-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/axis_compare.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/axis_compare.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.axis-fall-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/axis_fall.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/axis_fall.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.bubble-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/bubble.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/bubble.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.bubble-force-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/bubble_force.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/bubble_force.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.dashboard-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/dashboard.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/dashboard.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.donut-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/donut.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/donut.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.funnel-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/funnel.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/funnel.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.map-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/map.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/map.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.map-gis-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/map_gis.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/map_gis.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.map-svg-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/map_svg.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/map_svg.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.map-svg-c-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/map_svg_c.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/map_svg_c.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.map-svg-g-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/map_svg_g.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/map_svg_g.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.pie-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/pie.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/pie.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.radar-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/radar.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/radar.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.radar-accu-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/radar_accu.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/radar_accu.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.area-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/area.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/area.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.area-accu-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/area_accu.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/area_accu.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.area-compare-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/area_compare.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/area_compare.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.area-percent-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/area_percent.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/area_percent.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.area-range-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/area_range.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/area_range.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.bar-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/bar.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/bar.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.bar-accu-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/bar_accu.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/bar_accu.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.bar-compare-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/bar_compare.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/bar_compare.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.combine-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/combine.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/combine.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.combine-m-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/combine_m.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/combine_m.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.line-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/line.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/line.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.scatter-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/scatter.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/scatter.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.table-complex-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/table_complex.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/table_complex.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.table-cross-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/table_cross.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/table_cross.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.table-group-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/table_group.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/table_group.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.table-detail-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/table_detail.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/table_detail.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.axis-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/axis_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/axis_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.axis-accu-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/axis_accu_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/axis_accu_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.axis-percent-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/axis_percent_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/axis_percent_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.axis-compare-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/axis_compare_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/axis_compare_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.axis-fall-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/axis_fall_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/axis_fall_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.bubble-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/bubble_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/bubble_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.bubble-force-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/bubble_force_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/bubble_force_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.dashboard-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/dashboard_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/dashboard_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.donut-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/donut_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/donut_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.funnel-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/funnel_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/funnel_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.map-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/map_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/map_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.map-gis-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/map_gis_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/map_gis_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.map-svg-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/map_svg_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/map_svg_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.map-svg-c-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/map_svg_c_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/map_svg_c_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.map-svg-g-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/map_svg_g_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/map_svg_g_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.pie-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/pie_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/pie_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.radar-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/radar_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/radar_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.radar-accu-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/radar_accu_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/radar_accu_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.area-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/area_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/area_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.area-accu-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/area_accu_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/area_accu_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.area-compare-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/area_compare_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/area_compare_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.area-percent-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/area_percent_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/area_percent_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.area-range-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/area_range_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/area_range_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.bar-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/bar_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/bar_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.bar-accu-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/bar_accu_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/bar_accu_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.bar-compare-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/bar_compare_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/bar_compare_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.combine-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/combine_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/combine_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.combine-m-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/combine_m_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/combine_m_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.line-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/line_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/line_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.scatter-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/text/scatter_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/text/scatter_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.table-complex-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/table_complex_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/table_complex_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.table-cross-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/table_cross_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/table_cross_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.table-group-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/table_group_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/table_group_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.table-detail-text-tip-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/table_detail_text.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/charts/text/table_detail_text.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.data-miss-background {\n  background: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/data_miss.png') no-repeat center center;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/images/background/data_miss.png');\n  _background: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n", ""]);

	// exports


/***/ },

/***/ 951:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(952);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(633)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./base.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./base.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 952:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(632)();
	// imports


	// module
	exports.push([module.id, "/****添加计算宽度的--运算符直接需要space****/\n/****** common color(常用颜色,可用于普遍场景) *****/\n/**** custom color(自定义颜色,用于特定场景) ****/\n@font-face {\n  font-family: 'h5';\n  src: url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/resources/fonts/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/resources/fonts/iconfont.woff') format('woff'), /* chrome、firefox */ url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/resources/fonts/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/ url('${servletURL}?op=resource&resource=/com/fr/bi/h5/dist/resources/fonts/iconfont.svg#svgFontName') format('svg');\n  \n  /*  iOS 4.1- */\n}\n.b-font {\n  font-family: \"h5\";\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\nhtml {\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 0;\n  background-repeat: repeat;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  color: #1a1a1a;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-decoration: none;\n  -kthml-user-focus: normal;\n  -moz-user-focus: normal;\n  -moz-outline: 0 none;\n  outline: 0 none;\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\na {\n  outline: none;\n  text-decoration: none;\n}\na:focus {\n  outline: 0;\n}\ninput,\ntextarea {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: 1px solid #cccccc;\n}\nul,\nol {\n  margin: 0;\n  padding: 0;\n}\nul {\n  list-style: disc;\n}\nli {\n  list-style-type: none;\n}\ni {\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\na,\nimg,\nbutton,\ninput,\ntextarea,\n* {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n}\ninput,\ntextarea {\n  -webkit-appearance: none;\n}\n", ""]);

	// exports


/***/ }

});