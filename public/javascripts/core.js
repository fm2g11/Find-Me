(function ( angular ) {
	var app = angular.module( 'fm2g11', [
		'templateController', 'homeController',
		'ui.router'] );

	app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
      // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
       	url: '/home',
        templateUrl: '/partials/home.html'
      });
});

})( angular );