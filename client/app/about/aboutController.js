angular.module('app.controllers').controller('aboutController', ['userService',
    '$log', function (userService, $log) {
        $log.debug('here is my second log');
    }
]);