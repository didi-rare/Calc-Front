'use strict';

//declare a model
var calcModel = {
    currentNumber: 0,
    currentDisplay: "",

    reset: function () {
        this.currentNumber = "0";
        this.currentDisplay = "";
    },

    setOperator : function (operatorToSet) {
        this.operation = operatorToSet;
        if(calcModel.currentNumber === "0") {
            this.currentDisplay += "0";
        }
        this.currentDisplay += " " + this.operation + " ";
        this.currentNumber = calcModel.currentNumber
    }
};

/*var serviceModel = {

    Number : calcModel.currentNumber,

    operator :
    }
};*/


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

    $scope.operationButtonClicked = function (operatorClicked) {
        calcModel.setOperator(operatorClicked);
        console.log(calcModel.currentNumber);
        console.log(operatorClicked);
    };

    $scope.resetClicked = function () {
        calcModel.reset();
    }
}]);

calcModule.service('calcService', function ($http) {

});
