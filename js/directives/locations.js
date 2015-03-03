(function(App){
  'use strict';
  App.directive('locations', [
    function() {
        return {
            restrict: 'E',
            require: '^viewportController',
            controllerAs: 'viewportCtl',
            templateUrl: './templates/locations.tpl?cache=2'
        }
    }
  ]);
})(App);
