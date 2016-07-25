/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

menuHorizontalModule.directive('menuHorizontal', [   
    function(){
        return {
            restrict: 'E',
            controller:'horizontalMenuItemsCtrl',
            templateUrl:'modules/menu-horizontal/view/menu-horizontal.template.html',         
        };
    }
 ]);
       
menuHorizontalModule.directive('search',[
    function(){
        return{
            restrict:'E',
            templateUrl:'modules/menu-horizontal/view/search-list.template.html'      
        };
    }
]);
    
