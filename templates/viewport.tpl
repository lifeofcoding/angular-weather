<h1>Check some weather:</h1>
<input type="text" ng-model="viewportCtl.location"><button ng-click="viewportCtl.showLocations()">Show Locations</button>
<locations></locations>

<div class="weather" ng-if="viewportCtl.weather">
  <span ng-repeat="location in viewportCtl.weather"><br>{{location.summary}}</span>
</div>
