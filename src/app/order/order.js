/*
 * Created by otuzgen on 07.05.2015.
 */
(function(){
    'use strict';

    angular.module('app')
        .controller('order',['$timeout',order]);

    function order($timeout){
        var vm = this;

        vm.activate = activate;
        vm.comments = "";
        vm.submitOrderClick = submitOrderClick;
        vm.status="Ready";
        vm.runProgressBar = runProgressBar;
        vm.statusLabels = [
            "Validating Order",
            "Validating Credit",
            "Checking Inventory",
            "Creating work order",
            "Finalizing work order",
            "Order entered"
        ]
        vm.orderProgress = 0;



        activate();

        var counter = 0;
        function runProgressBar(){
            counter +=5;
            vm.orderProgress = counter;
            vm.status = vm.statusLabels[Math.floor(counter/20)];
            $timeout(runProgressBar,400);
        }

        function submitOrderClick(){
            runProgressBar();
        }

        function activate(){
            vm.computerOptions = {
                dataSource: {
                    data: [
                        {name: "MacBook",id:1001},
                        {name: "MacBook Pro",id:1002},
                        {name: "Mac Mini",id:1003},
                        {name: "Mac Pro",id:1004},
                        {name: "iMac",id:1005},
                    ]
                },
                dataTextField: "name",
                dataValueField: "id",
                optionLabel:"Select a model..."
            };
            vm.RamOptions = {
                min:4,
                max:32,
                smallStep:4,
                largeStep:4,
                orientation:'horizontal',
                value: 8
            };

            vm.selectOptions = {
                placeholder : "Select options...",
                dataTextField: "ProductName",
                dataValueField: "ProductID",
                autoBind: false,
                dataSource: {
                    type: 'odata',
                    serviceFiltering: true,
                    transport:{
                        read:{
                            url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
                        }
                    }
                }
            };

            vm.deliveryDatePickerOptions = {
                format:'MM/dd',
                start: 'month',
                value: new Date(2015,6,6),
                change: "notification1.show('Date verified','error')"
            }
        }
    }
})();
