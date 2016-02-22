/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', ['ngMaterial', 'ngRoute','checklist-model']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {
            templateUrl: "partials/home.html"
        })
        // Registration
        .when("/registration", {
            templateUrl: "partials/registration.html"
        })
        // Cart
        .when("/cart", {
            templateUrl: "partials/cart.html"
        })
        // Contact
        .when("/contact", {
            templateUrl: "partials/contact.html"
        })
        // else 404
        .when("/404", {
            templateUrl: "partials/404.html",
            controller: "PageCtrl"
        })
        .otherwise({
            redirectTo: "/404"
        });

}]);