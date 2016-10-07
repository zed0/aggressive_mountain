(function() {
'use strict';

angular.module('aggressiveMountain.views.todoList', [
])

.component('todoList', {
	templateUrl: 'views/todoList/todoList.html',
	controller:  function() {
		const $ctrl = this;

		// This function automatically gets called by angular
		// when the component has finished being created
		$ctrl.$onInit = function() {
			$ctrl.todoList = [];
			$ctrl.newTodoName = '';
		};

		$ctrl.createTodo = function() {
			$ctrl.todoList.push({
				name: $ctrl.newTodoName,
				done: false,
			});

			$ctrl.newTodoName = '';
		};

		$ctrl.countDone = function(list) {
			let done = 0;
			list.forEach(function(item) {
				if(item.done)
					++done;
			});
			return done;
		};
	}
})

})();
