angular.module('filters', []).filter('diminuir_string', function () {
    return function (string) {
        if (string.length > 23) {
            return string.slice(0, 20) + "...";
        } else {
            return string;
        }
    }
});