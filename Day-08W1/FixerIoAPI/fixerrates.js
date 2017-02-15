(function() {
	var ViewRatesApp = angular.module("ViewRatesApp", []);

	var ViewRatesCtrl = function($http) {
		var ViewRatesCtrl = this;

		ViewRatesCtrl.orders = [];

		ViewRatesCtrl.getOrders = function() {
			$http.get("http://api.fixer.io/latest?symbols=SGD,HKD")
				.then(function(res) {
					ViewRatesCtrl.orders = res.data;
				});
		};

		//Load the first order
		//ViewRatesCtrl.getOrders();
	};
	ViewRatesCtrl.$inject = [ "$http" ];

	ViewRatesApp.controller("ViewRatesCtrl", ViewRatesCtrl);
})();
