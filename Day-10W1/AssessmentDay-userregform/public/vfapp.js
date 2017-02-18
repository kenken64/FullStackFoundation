(function() {
	var ServiceVFormApp = angular.module("ServiceVFormApp", []);


	var ServiceVFormAppSvc = function($http) {
		var ServiceVFormAppSvc = this;

		var getPhotos = function(base, symbol) {
			var myparams = {};

			if (base)
				myparams.base = base.toUpperCase();

			if (symbols)
				myparams.symbols = symbols.toUpperCase();

			// GET /latest photos
			var promise = $http.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK", { 
					params: myparams
				}
			);

			return (promise);
		}

		ServiceVFormAppSvc.getMandatory = function(base, symbols, fn) {

			var promise = getPhotos(base, symbols);

			promise.then(function(result) {
				fn(result.data);
			});
		};

		ServiceVFormAppSvc.getMan = function(base, symbols) {

			var promise = getPhotos(base, symbols);

			var promise2 = promise.then(function(result) {
				var ratesOnly = result.data;
				return (ratesOnly);
			});

			return (promise2);
		}
	}

	//ServiceVFormApp.$inject = [ "$http" ];
	//ServiceVFormApp.service("ServiceVFormAppSvc", ServiceVFormAppSvc);

	ServiceVFormApp.service("ServiceVFormAppSvc", ["$http", ServiceVFormAppSvc]);
})();
