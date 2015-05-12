/**
 * Created by otuzgen on 11.05.2015.
 */
(function(){
    'use strict';

    angular.module('app')
        .controller('welcome3',[welcome3]);

    function welcome3(){
        var vm = this;
        var computerChosen = false;
        vm.selectedComputer= "";

        vm.activate = activate;

        activate();

        function activate(){
            vm.computerOptions = {
                dataSource : {
                    data: [
                        {name: "Macbook Pro", id: 1},
                        {name: "Macbook Air", id: 2},
                        {name: "Mac Pro", id: 3}
                    ]
                },
                dataTextField: "name",
                dataValueField: "id",
                optionLabel: "Select a computer..."
            };

            vm.computerChange = function(e){
                console.log(e.sender.text());
                vm.computerChosen = true;
                if (e.sender.text() == "Select a computer..."){
                    vm.computerChosen = false;
                }
            }
        }
    }
})();
