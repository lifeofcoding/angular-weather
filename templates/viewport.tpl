<div class="page-header">
  <h1>Check some weather</h1>
</div>
<div ng-if="viewportCtl.error" class="alert alert-danger" role="alert">
  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
  <span class="sr-only">Error:</span>
  {{viewportCtl.error}}
</div>

<input type="text" class="form-control address" ng-model="viewportCtl.location">
<button class="btn btn-default weather-btn" ng-click="viewportCtl.showLocations()">Show Locations</button>

<locations></locations>

<div ng-if="viewportCtl.weather.currently">
  <div class="weather well">
    <strong>Date:</strong> {{viewportCtl.currentDate}}<br>
    <strong>Address:</strong> {{viewportCtl.location}}<br>
    <strong>Coordinates:</strong> {{viewportCtl.gps.lat}} {{viewportCtl.gps.lng}}<br>

    <strong>Weather Summary:</strong><br><span ng-repeat="location in viewportCtl.weather">{{location.summary}}<br></span>
  </div>
</div>
