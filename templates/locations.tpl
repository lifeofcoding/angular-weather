<ul ng-repeat="location in viewportCtl.locationResults">
  <li><a href="" ng-click="viewportCtl.getWeather(location.geometry.location.lat, location.geometry.location.lng)">{{location.formatted_address}}</a></li>
</ul>
