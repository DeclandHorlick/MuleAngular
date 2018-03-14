"use strict";

(function () {

    function Dal ($http, $q, $log) {
    	
        this.http = (function serviceCaller() {
            return {

                GET: function (apiPath) {
                    var deferred = $q.defer();
                    $log.log("Dal get");
                    $http.get(apiPath).then(function (result) {
                        deferred.resolve(result.data);
                    }, function (e) {
                        deferred.reject(e);
                    });
                    return deferred.promise;
                },

                POST: function (apiPath, itemToSave) {
					$log.log("user in post: "+JSON.stringify(itemToSave).toString());
                    var deferred = $q.defer();
					$log.log("deferred: "+deferred);
                    $http(
                        {
                            method: "post",
                            url: apiPath,
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
							data: JSON.stringify(itemToSave)
                        }
                    ).then(function (results) {
                            deferred.resolve(results.data);
                        }, function (e) {
                            deferred.reject(e);
                        });
                    return deferred.promise;
                },

                PUT: function (apiPath, itemToSave) {
                    var deferred = $q.defer();
                    $http(
                        {
							
                            method: "put",
                            url: apiPath,
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Content-Type": "application/json;charset=UTF-8"
                            },
                            data: JSON.stringify(itemToSave)
                        }
                    ).then(function (results) {
                            deferred.resolve(results);
                        }, function (e) {
                            deferred.reject(e);
                        });
                    return deferred.promise;
                },

                DELETE: function (apiPath, itemToDelete) {
                    var deferred = $q.defer();
                    $http.delete(apiPath + itemToDelete.id).then(function () {
                        deferred.resolve();
                    }, function (e) {
                        deferred.reject(e);
                    });
                    return deferred.promise;
                }
            }
        })();
        
        $log.debug("DAL Instantiated");
    }
    angular.module("emailApp").service("dal", ["$http", "$q", "$log", Dal]);
}());