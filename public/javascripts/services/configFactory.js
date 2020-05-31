app.factory('configFactory', ['$http',($http) => {
	const getConfig = () => {
		return new Promise((resolve, reject) => {
			$http
				.get('/')
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				})
		});
	};

	return {
		getConfig
	}
}]);
