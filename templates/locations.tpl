<ul class="list-group location-list">
  <li class="list-group-item list-item" ng-repeat="location in viewportCtl.locationResults"><a href="" ng-click="viewportCtl.getWeather(location.geometry.location.lat, location.geometry.location.lng, location.formatted_address)">{{location.formatted_address}}</a></li>
</ul>
