/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app=angular.module('angular-first-app',[
       'menu-vertical',
       'calendar-module',
       'menu-horizontal-module'       
]);

app.config(function($stateProvider, $urlRouterProvider) {    
    $urlRouterProvider.otherwise('/home');     
    $stateProvider   
        .state('home',{          
             url:'',
         })
        .state('external',{
            url: 'https://www.google.com',
            external: true
        })
        .state('store',{
            url:'http://www.w3schools.com',
            external:true
        })
        .state('quote',{
            url:'/quote',           
            templateUrl:'modules/quote/view/quote.template.html'           
        })
        .state('contact',{
            url:'/contact',    
            templateUrl:'modules/contact/view/contact.template.html',
        })
        .state('shoppingCartExternal',{
            url:'https://www.tutorialspoint.com',
            external:true
        })
        .state('sign-in',{
            url:'/sign-in',
            templateUrl:'modules/sign-in/view/sign-in.template.html'       
        })
        .state('join-newsletter',{
            url:'/newsletter',
            templateUrl:'modules/newsletter/view/newsletter.template.html'          
        })
        .state('blog',{
                url:"/blog",                   
                templateUrl:'modules/post/view/post.template.html'                
        })
        .state('social-media',{
            url:'/social-media',
            views:{
                'social-media-view':{
                    templateUrl:'modules/social-menu/view/socialMenu.html'
                },
                'social-widgets-view':{
                    templateUrl:'modules/social-widget/view/socialWidget.html'
                }
            }
        });         
});


app.run(function($rootScope, $window) {
  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams) {
      if (toState.external) {
         event.preventDefault();
         $window.open(toState.url, '_blank');         
    }      
    
        
     if(!($('.toggleable-container').hasClass("hidden"))){
           $('.toggleable-container').addClass("hidden");
     }
   })       
});
