(function ( angular ) {
  var mod = angular.module( 'homeController', ['parserFactory'] );

  mod.controller( 'HomeCtrl', function ( $scope, $log, $window, ParserFactory ) {
  	$scope.key = "";
  	$scope.val = "";

  	$scope.add = function(){
  		if ($scope.key.length > 0 && $scope.val.length > 0){
  			if (localStorage.getItem($scope.key) && $scope.key != $scope.editKey){
  				var r = confirm($scope.key + " already exist. Do you want to replace it?");
					if (r === false) return;
  			}
	  		localStorage.setItem($scope.key, $scope.val);
  			$scope.get();
  			$scope.key = "";
  			$scope.val = "";
  			$scope.editKey = "";
  		}
  	};

  	$scope.get = function(){
  		$scope.items = [];
  		for (var i = 0; i < localStorage.length; i++){
		  	$scope.items.push( {
		  		key: localStorage.key(i),
		  		val: localStorage.getItem(localStorage.key(i))
		  	});
		  }
  	};

  	$scope.canAdd = function(){
  		return !($scope.key.length > 0 && $scope.val.length > 0);
  	};

  	$scope.edit = function(index) {
  		$scope.key = localStorage.key(index);
  		$scope.val = localStorage.getItem($scope.key);
  		$scope.editKey = $scope.key;
  		$window.scrollTo(0, 0);
  	};

  	$scope.delete = function(index) {
  		var r = confirm("Are you sure you want to remove it?");
			if (r === true) {
				localStorage.removeItem(localStorage.key(index));
				$scope.get();
			}
  	};

  	$scope.parse = function(text){
  		return ParserFactory.parse(text);
  	};

  	$scope.get();
    
  } );

})( angular );