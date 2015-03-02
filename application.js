window.App = angular.module('WeatherApp', []);

(function(App){
  'use strict';
  App.controller('viewportController', ['$http', function($http) {
    var _this = this;
    this.location = 'America!';
    this.weather = {};
    this.locationResults  = [];

    this.getWeather = function(lat, long){
      var apiKey = '27e8c45d861b3f25630f9fee10b64db3';

      $http.jsonp('https://api.forecast.io/forecast/' + apiKey + '/' + lat + ',' + long + '?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
        _this.weather = data;
      }).error(function(data, status, headers, config) {
        console.warn('Error fetching jsonp response');
      });
    }
    this.showLocations = function(){
      $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + _this.location).success(function(data, status, headers, config) {
        _this.locationResults = data.results;
      }).error(function(data, status, headers, config) {
        console.warn('Error fetching response from google');
      });
    }
  }]);
})(App);

(function(App){
  'use strict';
  App.directive('locations', [
    function() {
        return {
            restrict: 'E',
            require: '^viewportController',
            controllerAs: 'viewportCtl',
            templateUrl: './templates/locations.tpl'
        }
    }
  ]);
})(App);

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
