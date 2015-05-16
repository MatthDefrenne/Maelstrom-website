angular.module('app.controllers').controller('aboutController', ['exampleService',
    '$log', function (exampleService, $log) {
        var self = this;
        $log.debug('here is my second log');
    }
]);