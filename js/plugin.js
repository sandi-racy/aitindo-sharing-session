var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

var Name = Vue.extend({
	template: '<h1>Hello World</h1>'
});

Vue.component('name', Name);

var Foo = Vue.extend({
    template: '<name></name><p>This is foo 2!</p><router-view></router-view>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

var App = Vue.extend({})

var router = new VueRouter()

router.map({
    '/foo': {
        component: Foo,
        subRoutes: {
	      '/bar': {
	        // Bar will be rendered inside Foo's <router-view>
	        // when /foo/bar is matched
	        component: Bar
	      }
	    }
    }
})

router.start(App, '#plugin')