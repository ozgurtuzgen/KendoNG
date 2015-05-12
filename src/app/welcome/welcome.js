/**
 * Created by otuzgen on 07.05.2015.
 */
(function(){
    'use strict';

    angular.module('app')
        .controller('welcome',[welcome]);

    function welcome(){
        var vm = this;

        vm.activate = activate;

        activate();

        function activate(){
            vm.computers = [
                {name: "Macbook Pro", id:1},
                {name: "Macbook Air", id:2},
                {name: "Mac Pro", id:3}
            ]
        }
    }
})();
