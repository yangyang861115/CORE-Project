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
    }
})();