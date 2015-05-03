angular.module('app.services').service('exampleService', ['$log', function ($log) {
    $log.debug('Example Service initialized');
}]);