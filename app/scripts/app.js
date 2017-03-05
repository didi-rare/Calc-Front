'use strict';

//declare a model
var calcModel = {
    currentNumber: 0,
    currentDisplay: "",

    reset: function () {
        this.currentNumber = "0";
        this.currentDisplay = "";
    }
};


// Declare app level module which depends on views, and components
angular.module('CalcApp', ['calcModule']);
var calcModule = angular.module('calcModule', []);


calcModule.controller('calcController', ['$scope', function ($scope) {
    $scope.calculator = calcModel;
    $scope.numBtnClicked = function (clickedNumber) {
        if (calcModel.currentNumber === "0"){
            calcModel.currentNumber = "";
            calcModel.currentDisplay = "";
        }

        calcModel.currentNumber += clickedNumber;
        calcModel.currentDisplay += clickedNumber;
    };

    $scope.resetClicked = function () {
        calcModel.reset();
    }
}]);
