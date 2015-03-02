(function(App){
  'use strict';
  App.directive('viewport', [
    function() {
        return {
            restrict: 'E',
            templateUrl: './templates/viewport.tpl',
            controller: 'viewportController as viewportCtl'
        }
    }
  ]);
})(App);
