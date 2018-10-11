var app = angular.module('adminApp', []);
app.controller('globalCtrl', function ($scope) {

});

/**
 * 
 * @param {String} obj 
 */
function objectToQueryString (obj) {
    var result = '';
    var keys = Object.keys(obj);
    keys.map(function (val, i) {
        result += val + '=' + obj[val] + (keys.length - 1 === i ? '' : '&');
    });

    return result;
}