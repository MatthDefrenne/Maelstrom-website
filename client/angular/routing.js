angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/landing/");

        $stateProvider.state('landing', {
            url: "/landing/",
            templateUrl: "angular/app/landing/landing.html",
            controller: 'landingController',
            controllerAs: 'landing'
        });

        $stateProvider.state('about', {
            url: "/about/",
            templateUrl: "angular/app/about/about.html",
            controller: 'aboutController',
            controllerAs: 'about'
        });

    }
]);