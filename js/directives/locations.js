(function(App){
  'use strict';
  App.directive('locations', [
    function() {
        return {
            restrict: 'E',
            templateUrl: './templates/locations.tpl',
            controller: 'viewportController as viewportCtl'
        }
    }
  ]);
})(App);
