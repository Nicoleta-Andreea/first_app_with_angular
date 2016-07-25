/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
menuHorizontalModule.directive('menuHorizontalRight',[
    function(){
        return{
            restrict:'E',
            templateUrl:'modules/menu-horizontal/view/menu-horizontal-right.template.html',
            controller:'MenuRightCtrl',
            
            link: function(scope, el, attr, MenuRightCtrl){
                scope.rightMenuItems  = MenuRightCtrl.rightMenuItems;             
                
                var searchText = el.find('#searchText');
                
                searchText.keyup(function(){
                    var searchListItems   = MenuRightCtrl.displaySearchListOptions();
                    scope.searchMenuItems = searchListItems;                    
                });
                
                searchText.focusin(scope.displaySearchList);
                console.log(scope.searchListDisplayed);
                
                searchText.focusout(scope.displaySearchList);
                console.log(scope.searchListDisplayed);
            }
        };
    }
]);

