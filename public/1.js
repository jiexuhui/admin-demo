webpackJsonp([1],{

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(110)
/* script */
var __vue_script__ = __webpack_require__(211)
/* template */
var __vue_template__ = __webpack_require__(227)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\common\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e508ac9", Component.options)
  } else {
    hotAPI.reload("data-v-4e508ac9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


// 使用 Event Bus
var bus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();

/* harmony default export */ __webpack_exports__["a"] = (bus);

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_vue__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Sidebar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tags_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tags_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Tags_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bus__ = __webpack_require__(210);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            tagsList: [],
            collapse: false
        };
    },

    components: {
        vHead: __WEBPACK_IMPORTED_MODULE_0__Header_vue___default.a, vSidebar: __WEBPACK_IMPORTED_MODULE_1__Sidebar_vue___default.a, vTags: __WEBPACK_IMPORTED_MODULE_2__Tags_vue___default.a
    },
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_3__bus__["a" /* default */].$on('collapse', function (msg) {
            _this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        __WEBPACK_IMPORTED_MODULE_3__bus__["a" /* default */].$on('tags', function (msg) {
            var arr = [];
            for (var i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            _this.tagsList = arr;
        });
    }
});

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(213)
}
var normalizeComponent = __webpack_require__(110)
/* script */
var __vue_script__ = __webpack_require__(215)
/* template */
var __vue_template__ = __webpack_require__(216)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7bba84f7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\common\\Header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bba84f7", Component.options)
  } else {
    hotAPI.reload("data-v-7bba84f7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(108)("4bce3fa3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bba84f7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bba84f7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "\n.header[data-v-7bba84f7] {\n    position: relative;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 100%;\n    height: 70px;\n    font-size: 22px;\n    color: #fff;\n}\n.collapse-btn[data-v-7bba84f7]{\n    float: left;\n    padding: 0 21px;\n    cursor: pointer;\n    line-height: 70px;\n}\n.header .logo[data-v-7bba84f7]{\n    float: left;\n    width:250px;\n    line-height: 70px;\n}\n.header-right[data-v-7bba84f7]{\n    float: right;\n    padding-right: 50px;\n}\n.header-user-con[data-v-7bba84f7]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 70px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.btn-fullscreen[data-v-7bba84f7]{\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    margin-right: 5px;\n    font-size: 24px;\n}\n.btn-bell[data-v-7bba84f7], .btn-fullscreen[data-v-7bba84f7]{\n    position: relative;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    border-radius: 15px;\n    cursor: pointer;\n}\n.btn-bell-badge[data-v-7bba84f7]{\n    position: absolute;\n    right: 0;\n    top: -2px;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    background: #f56c6c;\n    color: #fff;\n}\n.btn-bell .el-icon-bell[data-v-7bba84f7]{\n    color: #fff;\n}\n.user-name[data-v-7bba84f7]{\n    margin-left: 10px;\n}\n.user-avator[data-v-7bba84f7]{\n    margin-left: 20px;\n}\n.user-avator img[data-v-7bba84f7]{\n    display: block;\n    width:40px;\n    height:40px;\n    border-radius: 50%;\n}\n.el-dropdown-link[data-v-7bba84f7]{\n    color: #fff;\n    cursor: pointer;\n}\n.el-dropdown-menu__item[data-v-7bba84f7]{\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_bus__ = __webpack_require__(210);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            collapse: false,
            fullscreen: false,
            name: 'linxin',
            message: 2
        };
    },

    computed: {
        username: function username() {
            var username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        // 用户名下拉菜单选择事件
        handleCommand: function handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username');
                this.$router.push('/login');
            }
        },

        // 侧边栏折叠
        collapseChage: function collapseChage() {
            this.collapse = !this.collapse;
            __WEBPACK_IMPORTED_MODULE_0__common_bus__["a" /* default */].$emit('collapse', this.collapse);
        },

        // 全屏事件
        handleFullScreen: function handleFullScreen() {
            var element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted: function mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
});

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "header" }, [
    _c(
      "div",
      { staticClass: "collapse-btn", on: { click: _vm.collapseChage } },
      [_c("i", { staticClass: "el-icon-menu" })]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "logo" }, [_vm._v("后台管理系统")]),
    _vm._v(" "),
    _c("div", { staticClass: "header-right" }, [
      _c(
        "div",
        { staticClass: "header-user-con" },
        [
          _c(
            "div",
            {
              staticClass: "btn-fullscreen",
              on: { click: _vm.handleFullScreen }
            },
            [
              _c(
                "el-tooltip",
                {
                  attrs: {
                    effect: "dark",
                    content: _vm.fullscreen ? "取消全屏" : "全屏",
                    placement: "bottom"
                  }
                },
                [_c("i", { staticClass: "el-icon-rank" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-bell" },
            [
              _c(
                "el-tooltip",
                {
                  attrs: {
                    effect: "dark",
                    content: _vm.message
                      ? "有" + _vm.message + "条未读消息"
                      : "消息中心",
                    placement: "bottom"
                  }
                },
                [
                  _c("router-link", { attrs: { to: "/tabs" } }, [
                    _c("i", { staticClass: "el-icon-bell" })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.message
                ? _c("span", { staticClass: "btn-bell-badge" })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "el-dropdown",
            {
              staticClass: "user-name",
              attrs: { trigger: "click" },
              on: { command: _vm.handleCommand }
            },
            [
              _c("span", { staticClass: "el-dropdown-link" }, [
                _vm._v("\n                    " + _vm._s(_vm.username) + " "),
                _c("i", { staticClass: "el-icon-caret-bottom" })
              ]),
              _vm._v(" "),
              _c(
                "el-dropdown-menu",
                { attrs: { slot: "dropdown" }, slot: "dropdown" },
                [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "http://blog.gdfengshuo.com/about/",
                        target: "_blank"
                      }
                    },
                    [_c("el-dropdown-item", [_vm._v("关于作者")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/lin-xin/vue-manage-system",
                        target: "_blank"
                      }
                    },
                    [_c("el-dropdown-item", [_vm._v("项目仓库")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-dropdown-item",
                    { attrs: { divided: "", command: "loginout" } },
                    [_vm._v("退出登录")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "user-avator" }, [
      _c("img", { attrs: { src: "static/img/img.jpg" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7bba84f7", module.exports)
  }
}

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(218)
}
var normalizeComponent = __webpack_require__(110)
/* script */
var __vue_script__ = __webpack_require__(220)
/* template */
var __vue_template__ = __webpack_require__(221)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c1b3083c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\common\\Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1b3083c", Component.options)
  } else {
    hotAPI.reload("data-v-c1b3083c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(108)("936c7e22", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c1b3083c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c1b3083c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "\n.sidebar[data-v-c1b3083c]{\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 70px;\n    bottom:0;\n    overflow-y: scroll;\n}\n.sidebar[data-v-c1b3083c]::-webkit-scrollbar{\n    width: 0;\n}\n.sidebar-el-menu[data-v-c1b3083c]:not(.el-menu--collapse){\n    width: 250px;\n}\n.sidebar > ul[data-v-c1b3083c] {\n    height:100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_bus__ = __webpack_require__(210);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            collapse: false,
            items: [{
                icon: 'el-icon-setting',
                index: 'dashboard',
                title: '系统首页'
            }, {
                icon: 'el-icon-tickets',
                index: 'table',
                title: '基础表格'
            }, {
                icon: 'el-icon-message',
                index: 'tabs',
                title: 'tab选项卡'
            }, {
                icon: 'el-icon-date',
                index: '3',
                title: '表单相关',
                subs: [{
                    index: 'form',
                    title: '基本表单'
                }, {
                    index: 'editor',
                    title: '富文本编辑器'
                }, {
                    index: 'markdown',
                    title: 'markdown编辑器'
                }, {
                    index: 'upload',
                    title: '文件上传'
                }]
            }, {
                icon: 'el-icon-star-on',
                index: 'charts',
                title: 'schart图表'
            }, {
                icon: 'el-icon-rank',
                index: 'drag',
                title: '拖拽列表'
            }, {
                icon: 'el-icon-warning',
                index: 'permission',
                title: '权限测试'
            }, {
                icon: 'el-icon-error',
                index: '404',
                title: '404页面'
            }]
        };
    },

    computed: {
        onRoutes: function onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created: function created() {
        var _this = this;

        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        __WEBPACK_IMPORTED_MODULE_0__common_bus__["a" /* default */].$on('collapse', function (msg) {
            _this.collapse = msg;
        });
    }
});

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "sidebar" },
    [
      _c(
        "el-menu",
        {
          staticClass: "sidebar-el-menu",
          attrs: {
            "default-active": _vm.onRoutes,
            collapse: _vm.collapse,
            "background-color": "#324157",
            "text-color": "#bfcbd9",
            "active-text-color": "#20a0ff",
            "unique-opened": "",
            router: ""
          }
        },
        [
          _vm._l(_vm.items, function(item) {
            return [
              item.subs
                ? [
                    _c(
                      "el-submenu",
                      { key: item.index, attrs: { index: item.index } },
                      [
                        _c("template", { slot: "title" }, [
                          _c("i", { class: item.icon }),
                          _c(
                            "span",
                            { attrs: { slot: "title" }, slot: "title" },
                            [_vm._v(_vm._s(item.title))]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._l(item.subs, function(subItem, i) {
                          return _c(
                            "el-menu-item",
                            { key: i, attrs: { index: subItem.index } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(subItem.title) +
                                  "\n                    "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]
                : [
                    _c(
                      "el-menu-item",
                      { key: item.index, attrs: { index: item.index } },
                      [
                        _c("i", { class: item.icon }),
                        _c(
                          "span",
                          { attrs: { slot: "title" }, slot: "title" },
                          [_vm._v(_vm._s(item.title))]
                        )
                      ]
                    )
                  ]
            ]
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c1b3083c", module.exports)
  }
}

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(223)
}
var normalizeComponent = __webpack_require__(110)
/* script */
var __vue_script__ = __webpack_require__(225)
/* template */
var __vue_template__ = __webpack_require__(226)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\common\\Tags.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ecf9d03", Component.options)
  } else {
    hotAPI.reload("data-v-3ecf9d03", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(108)("3094911e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ecf9d03\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tags.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ecf9d03\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tags.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "\n.tags {\n    position: relative;\n    height: 30px;\n    overflow: hidden;\n    background: #fff;\n    padding-right: 120px;\n}\n.tags ul {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n}\n.tags-li {\n    float: left;\n    margin: 3px 5px 2px 3px;\n    border-radius: 3px;\n    font-size: 12px;\n    overflow: hidden;\n    cursor: pointer;\n    height: 23px;\n    line-height: 23px;\n    border: 1px solid #e9eaec;\n    background: #fff;\n    padding: 0 5px 0 12px;\n    vertical-align: middle;\n    color: #666;\n    -webkit-transition: all .3s ease-in;\n    transition: all .3s ease-in;\n}\n.tags-li:not(.active):hover {\n    background: #f8f8f8;\n}\n.tags-li.active {\n    color: #fff;\n}\n.tags-li-title {\n    float: left;\n    max-width: 80px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    margin-right: 5px;\n    color: #666;\n}\n.tags-li.active .tags-li-title {\n    color: #fff;\n}\n.tags-close-box {\n    position: absolute;\n    right: 0;\n    top: 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-top: 1px;\n    text-align: center;\n    width: 110px;\n    height: 30px;\n    background: #fff;\n    -webkit-box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);\n            box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);\n    z-index: 10;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bus__ = __webpack_require__(210);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            tagsList: []
        };
    },

    methods: {
        isActive: function isActive(path) {
            return path === this.$route.fullPath;
        },

        // 关闭单个标签
        closeTags: function closeTags(index) {
            var delItem = this.tagsList.splice(index, 1)[0];
            var item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
            if (item) {
                delItem.path === this.$route.fullPath && this.$router.push(item.path);
            } else {
                this.$router.push('/');
            }
        },

        // 关闭全部标签
        closeAll: function closeAll() {
            this.tagsList = [];
            this.$router.push('/');
        },

        // 关闭其他标签
        closeOther: function closeOther() {
            var _this = this;

            var curItem = this.tagsList.filter(function (item) {
                return item.path === _this.$route.fullPath;
            });
            this.tagsList = curItem;
        },

        // 设置标签
        setTags: function setTags(route) {
            var isExist = this.tagsList.some(function (item) {
                return item.path === route.fullPath;
            });
            !isExist && this.tagsList.push({
                title: route.meta.title,
                path: route.fullPath,
                name: route.matched[1].components.default.name
            });
            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('tags', this.tagsList);
        },
        handleTags: function handleTags(command) {
            command === 'other' ? this.closeOther() : this.closeAll();
        }
    },
    computed: {
        showTags: function showTags() {
            return this.tagsList.length > 0;
        }
    },
    watch: {
        $route: function $route(newValue, oldValue) {
            this.setTags(newValue);
        }
    },
    created: function created() {
        this.setTags(this.$route);
    }
});

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showTags
    ? _c("div", { staticClass: "tags" }, [
        _c(
          "ul",
          _vm._l(_vm.tagsList, function(item, index) {
            return _c(
              "li",
              {
                key: index,
                staticClass: "tags-li",
                class: { active: _vm.isActive(item.path) }
              },
              [
                _c(
                  "router-link",
                  { staticClass: "tags-li-title", attrs: { to: item.path } },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.title) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "tags-li-icon",
                    on: {
                      click: function($event) {
                        _vm.closeTags(index)
                      }
                    }
                  },
                  [_c("i", { staticClass: "el-icon-close" })]
                )
              ],
              1
            )
          })
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "tags-close-box" },
          [
            _c(
              "el-dropdown",
              { on: { command: _vm.handleTags } },
              [
                _c("el-button", { attrs: { size: "mini", type: "primary" } }, [
                  _vm._v("\n                标签选项"),
                  _c("i", { staticClass: "el-icon-arrow-down el-icon--right" })
                ]),
                _vm._v(" "),
                _c(
                  "el-dropdown-menu",
                  {
                    attrs: { slot: "dropdown", size: "small" },
                    slot: "dropdown"
                  },
                  [
                    _c("el-dropdown-item", { attrs: { command: "other" } }, [
                      _vm._v("关闭其他")
                    ]),
                    _vm._v(" "),
                    _c("el-dropdown-item", { attrs: { command: "all" } }, [
                      _vm._v("关闭所有")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ecf9d03", module.exports)
  }
}

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _c("v-head"),
      _vm._v(" "),
      _c("v-sidebar"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "content-box",
          class: { "content-collapse": _vm.collapse }
        },
        [
          _c("v-tags"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "content" },
            [
              _c(
                "transition",
                { attrs: { name: "move", mode: "out-in" } },
                [
                  _c(
                    "keep-alive",
                    { attrs: { include: _vm.tagsList } },
                    [_c("router-view")],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e508ac9", module.exports)
  }
}

/***/ })

});