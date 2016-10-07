(function() {
'use strict';

angular.module('aggressiveMountain.components.header', [
])

.component('amHeader', {
	templateUrl: 'components/header/header.html',
	bindings: {
		pages: '<',
	},
})

})();
