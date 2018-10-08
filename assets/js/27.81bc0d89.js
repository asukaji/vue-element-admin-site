(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{203:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("Router and Nav are the key skeleton for organizing a management system.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("First let us know what configuration items are provided config route.")]),t._v(" "),t._m(3),n("br"),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[n("strong",[t._v("asyncRouterMap:")]),t._v(" represents pages that require dynamic judgment permissions and are dynamically added through "),n("code",[t._v("addRouters")]),t._v(". The details will be introduced on the "),n("router-link",{attrs:{to:"./permission.html"}},[t._v("permission")]),t._v(".")],1),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("All routing pages here use the "),n("code",[t._v("router lazy loading")]),t._v(", as described in "),n("router-link",{attrs:{to:"/guide/advanced/lazy-loading.html"}},[t._v("document")])],1),t._v(" "),n("p",[t._v("If you want to know more about browserHistory and hashHistory, please refer to "),n("router-link",{attrs:{to:"./deploy.html"}},[t._v("Build & Deploy")]),t._v(".")],1)]),t._v(" "),n("p",[t._v("The other configurations are no different from the "),n("a",{attrs:{href:"https://router.vuejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router"),n("OutboundLink")],1),t._v(" official, so check the documentation for yourself.")]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("There is one thing to be careful about is that the 404 page must be the last to load, if it is declared in constantRouterMap. Later declared pages will be blocked to 404, see the details of the problem: "),n("a",{attrs:{href:"https://github.com/vuejs/vue-router/issues/1176",target:"_blank",rel:"noopener noreferrer"}},[t._v("addRoutes when you've got a wildcard route for 404s does not work"),n("OutboundLink")],1)])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("Also introduced in the front, the sidebar is generated dynamically by reading the route and combined with the permission judge, but also need to support the infinite nesting of routes, so here is also used to the recursive components.")]),t._v(" "),n("blockquote",[n("p",[t._v("Code: "),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/views/layout/components/Sidebar",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/views/layout/components/Sidebar"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("This also modify many default sidebar styles of "),n("code",[t._v("element-ui")]),t._v(". All css can be found in "),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/styles/sidebar.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/styles/sidebar.scss"),n("OutboundLink")],1),t._v(" and can be modified to suit your needs.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),n("p",[t._v("Before using the development model of spa(single page application), each time the user clicks the sidebar will request this page again, the user gradually developed the habit of clicking the current route in the sidebar to refresh the view. But now the spa is not the same, the user clicks the currently highlighted route and does not refresh the view, because the vue-router will intercept your routing, it determines your url does not change, so it will not trigger any hook or view changes."),n("a",{attrs:{href:"https://github.com/vuejs/vue-router/issues/296",target:"_blank",rel:"noopener noreferrer"}},[t._v("Related issue"),n("OutboundLink")],1),t._v(", the community has also heated discussions on the issue.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),n("p",[t._v("You can know from the previous issue that there are many other options. In my company project, the solution adopted is to determine whether the currently clicked menu route is consistent with the current route. However, when it is consistent, it will jump to a dedicated Redirect page, which will redirect the route to Go to the page, this will have a refresh effect.")]),t._v(" "),n("br"),t._v(" "),t._m(21),t._v(" "),n("p",[t._v("This project also packages a breadcrumb navigation, which is also dynamically generated by the watch $route change. It is the same with the menu, you can also config it in the routing. You can also add some custom attributes to your business needs in route.meta attr.")]),t._v(" "),t._m(22),t._v(" "),n("blockquote",[n("p",[t._v("Corresponding code: "),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/Breadcrumb/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/components/Breadcrumb"),n("OutboundLink")],1)])]),t._v(" "),t._m(23),t._v(" "),n("p",[t._v("Previous versions of scroll were handled with css")]),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Code")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/layout/components/Sidebar/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/components/Sidebar"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"sidebar-external-link"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sidebar-external-link","aria-hidden":"true"}},[t._v("#")]),t._v(" Sidebar external-link "),n("Badge",{attrs:{text:"v3.8.2+"}})],1),t._v(" "),t._m(27),t._v(" "),n("p",[t._v("E.g.")]),t._v(" "),t._m(28)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"router-and-nav"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-and-nav","aria-hidden":"true"}},[this._v("#")]),this._v(" Router and Nav")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This project router and nav are bound together, so you only have to configure the route under "),s("code",[this._v("@/router/index.js")]),this._v(" and the sidebar nav will be dynamically generated automatically. This greatly reduces the workload of manually editing the sidebar nav. Of course, so you need to follow many conventions in configuring the route.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[this._v("#")]),this._v(" Config")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// if set to true, lt will not appear in sidebar nav.")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// e.g. login or 401 page or as some editing pages /edit/1 (Default: false)")]),t._v("\nhidden"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// this route cannot be clicked in breadcrumb navigation when noredirect is set")]),t._v("\nredirect"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" noredirect\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// when you route a children below the declaration of more than one route,")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// it will automatically become a nested mode - such as the component page")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// when there is only one, the child route will be displayed as the root route")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// if you want to display your root route")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// regardless of the number of children declarations under the route")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// you can set alwaysShow: true")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// so that it will ignore the previously defined rules and always show the root route")]),t._v("\nalwaysShow"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// set router name. It must be set，in order to avoid problems with <keep-alive>.")]),t._v("\nname"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'router-name'")]),t._v("\n\nmeta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// required roles to navigate to this route. Support multiple permissions stacking.")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// if not set means it doesn't need any permission.")]),t._v("\n  roles"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'admin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'editor'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// the title of the route to show in various components (e.g. sidebar, breadcrumbs).")]),t._v("\n  title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'title'")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// svg icon class")]),t._v("\n  icon"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'svg-name'")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// when set true, the route will not be cached by <keep-alive>. Default false")]),t._v("\n  noCache"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Example：")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/permission'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Layout"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  redirect"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/permission/index'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hidden"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  alwaysShow"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" roles"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'admin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v("'editor'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// you can set roles in root nav")]),t._v("\n  children"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'index'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'permission/index'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'permission'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'permission'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      icon"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'lock'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      roles"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'admin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v("'editor'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// or you can only set roles in sub nav")]),t._v("\n      noCache"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router","aria-hidden":"true"}},[this._v("#")]),this._v(" Router")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("There are two types of routes here , "),s("code",[this._v("constantRouterMap")]),this._v(" and "),s("code",[this._v("asyncRouterMap")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("constantRouterMap:")]),this._v(" represents routes that do not require dynamic access, such as login page, 404, general page, and so on.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sidebar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sidebar","aria-hidden":"true"}},[this._v("#")]),this._v(" Sidebar")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The project sidebar is mainly based on the "),s("code",[this._v("el-menu")]),this._v(" of element-ui.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Here need to pay attention")]),this._v(". The general sidebar has two forms, "),s("code",[this._v("submenu")]),this._v(" and"),s("code",[this._v("el-menu-item")]),this._v(". One is a nested submenu, the other is a direct link. As shown below:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://wpimg.wallstcn.com/e94739d6-d701-45c8-8c6e-0f4bb10c3b46.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The sidebar has already helped you to make a judgment. When you route a children below the declaration of more than >1 routes, it will automatically become a nested mode. If the sub-route is exactly equal to one, the sub-route is displayed as a root route in the sidebar by default. If you do not want to, you can disable this feature by setting "),s("code",[this._v("alwaysShow: true")]),this._v(" in the root route. Such as:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// no submenu, because children.length===1")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/icon'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Layout"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'index'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'svg-icons/index'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'icons'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'icons'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'icon'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// has submenu, because children.length>=1")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/components'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Layout"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'component-demo'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'components'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icon"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'component'")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'tinymce'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'components-demo/tinymce'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'tinymce-demo'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'tinymce'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'markdown'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'components-demo/markdown'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'markdown-demo'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'markdown'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"click-the-sidebar-to-refresh-the-current-route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#click-the-sidebar-to-refresh-the-current-route","aria-hidden":"true"}},[this._v("#")]),this._v(" Click the sidebar to refresh the current route")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://wpimg.wallstcn.com/5d0b0391-ea6a-45f2-943e-aff5dbe74d12.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("yyx990803")]),this._v("also said that he wanted to add a way to brighten the view, but later he changed his mind again/(ㄒ o ㄒ)/~~ But demand is here, what should we do? He said it would not trigger anything without changing the current URL, so can I force the trigger? The hack is simple. By changing the url query to trigger the view changes。We listen to each link's click event on the sidebar, each click will push a different query for the router to ensure that the view is refreshed.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("clickLink")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    query"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("//Ensure that each click, query is not the same")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("//to ensure that refresh the view")]),t._v("\n      t"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ps: Don't forget to add a unique "),s("code",[this._v("key")]),this._v(" to "),s("code",[this._v("router-view")]),this._v(", such as "),s("code",[this._v('<router-view :key="$route.path"></router-view>')]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("But there's also a drawback the ugly "),s("code",[this._v("query")]),this._v(" suffix behind url, such as "),s("code",[this._v("xxx.com/article/list?t=1496832345025")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"breadcrumb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumb","aria-hidden":"true"}},[this._v("#")]),this._v(" Breadcrumb")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://wpimg.wallstcn.com/4c60b3fc-febd-4e22-9150-724dcbd25a8e.gif",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sidebar-scroll-problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sidebar-scroll-problem","aria-hidden":"true"}},[this._v("#")]),this._v(" Sidebar scroll problem")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token property"}},[t._v("overflow-y")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" scroll"),n("span",{attrs:{class:"token selector"}},[t._v(";\n\n::-webkit-scrollbar")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("But hack by css has some problems, in Firefox or other lower versions of the browser will be less beautiful.\nSecond, in the case of sidebar collapses, limited to "),s("code",[this._v("menu")]),this._v(" of"),s("code",[this._v("element-ui")]),this._v(", can not be handled in this way.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("So the current version uses "),s("code",[this._v("el-scrollbar")]),this._v(" to handle the sidebar scrolling problem.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can also configure an external-link in the sidebar. As long as you fill in the legal url path in "),s("code",[this._v("path")]),this._v(", you will be able to open this page when you click on the sidebar.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"path"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"external-link"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"component"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Layout"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"children"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token property"}},[t._v('"path"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"https://github.com/PanJiaChen/vue-element-admin"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token property"}},[t._v('"meta"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v('"title"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"externalLink"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v('"icon"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"link"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="router-and-nav.md";s.default=e.exports}}]);