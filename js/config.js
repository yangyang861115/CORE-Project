/**
 * Created by yangyang on 2/25/16.
 */
/**
 * Configure the Routes
 */
(function () {
    angular
        .module('tutorialWebApp')
        .config(configuration);

    function configuration($routeProvider){
        $routeProvider
            // Home
            .when("/", {
                templateUrl: "partials/home.html",
                controller: "HomeCtrl"
            })
            // Registration
            .when("/registration", {
                templateUrl: "partials/registration.html",
                controller: "RegiCtrl"
            })
            // Cart
            .when("/cart", {
                templateUrl: "partials/cart.html",
                controller:"CartCtrl"
            })
            // Contact
            .when("/contact", {
                templateUrl: "partials/contact.html",
                controller: "ContactCtrl"
            })
            .when("/cart2", {
                templateUrl: "partials/cart2.html",
                controller: "CartCtrl2"
            })
            // else 404
            .when("/404", {
                templateUrl: "partials/404.html",
                controller: "PageCtrl"
            })
            .otherwise({
                redirectTo: "/404"
            });
    }
})();