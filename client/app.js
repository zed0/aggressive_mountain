(function() {
'use strict';

angular.module('aggressiveMountain', [
	'ui.router',
	'aggressiveMountain.components.header',
	'aggressiveMountain.components.footer',
	'aggressiveMountain.views.frontPage',
	'aggressiveMountain.views.gettingStarted',
	'aggressiveMountain.views.todoList',
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/frontPage');

	$stateProvider
	.state({
		name:     'frontPage',
		url:      '/frontPage',
		template: '<front-page></front-page>',
	})
	.state({
		name:     'gettingStarted',
		url:      '/gettingStarted',
		template: '<getting-started></getting-started>',
	})
	.state({
		name:     'todoList',
		url:      '/todoList',
		template: '<todo-list></todo-list>',
	})
	;
}])

})();
