angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/landing/");

        $stateProvider.state('landing', {
            url: "/landing/",
            templateUrl: "../app/landing/landing.html",
            controller: 'landingController',
            controllerAs: 'landing'
        });

        $stateProvider.state('about', {
            url: "/about/",
            templateUrl: "../app/about/about.html",
            controller: 'aboutController',
            controllerAs: 'about'
        });

    }
]);