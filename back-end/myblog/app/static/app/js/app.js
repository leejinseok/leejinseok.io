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

/**
 * 
 * @param {*} cname 
 */
function getCookie (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}