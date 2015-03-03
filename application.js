window.App = angular.module('WeatherApp', []);

(function(App){
  'use strict';
  App.controller('viewportController', ['$http', '$interval', '$filter', function($http, $interval, $filter) {
    var _this = this;
    this.location = 'America!';
    this.weather = {};
    this.locationResults  = [];
    this.error = '';
    this.date = new Date();
    this.gps = {
      lat: '',
      lng: ''
    }

    $interval(function() {
      _this.currentDate = _this.getTime();
    }, 1000);

    this.getTime = function(){
      _this.date = new Date();

      return $filter('date')(_this.date, 'MMM d, y h:mm:ss a');
    }
    this.getWeather = function(lat, long, addr){
      var apiKey = '27e8c45d861b3f25630f9fee10b64db3';
      _this.location = addr;
      _this.gps = {
        lat: lat,
        lng: long
      }
      $http.jsonp('https://api.forecast.io/forecast/' + apiKey + '/' + lat + ',' + long + '?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
        _this.weather = data;

      }).error(function(data, status, headers, config) {
        console.warn('Error fetching jsonp response');
        _this.error = 'Error fetching jsonp response';
      });
    }
    this.showLocations = function(){
      if(_this.location === ''){
        _this.error = 'Error please input an address or location';
        return;
      }else{
        _this.error = '';
        $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + _this.location).success(function(data, status, headers, config) {
          _this.locationResults = data.results;
        }).error(function(data, status, headers, config) {
          console.warn('Error fetching response from google');
          _this.error = 'Error fetching response from google';
        });
      }
    }
    this.currentDate = this.getTime();
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
            templateUrl: './templates/locations.tpl?cache=2'
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
