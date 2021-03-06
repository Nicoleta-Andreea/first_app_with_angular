/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var initAskQuestionsClass = function(config){    
    var extern = {},
        askQuestionsContainer    =  $('.questions-wrapper'),    
        messageContainer         =  askQuestionsContainer.find(".subscribe-message"),
        submit_button            =  askQuestionsContainer.find(".submit-button"),  
        messageContainer         =  askQuestionsContainer.find(".subscribe-message"),
        url                      =  (typeof config !== 'undefined' && typeof config.url !== 'undefined') ? config.url : '',
        askForm                  =  askQuestionsContainer.find("#askForm");
    
    extern.setNLUrl = function(newUrl) {
        url = newUrl;
    };
    
    var askQuestionsSubscriptionMessage = function(data){
        messageContainer.toggleClass("displayblock");
        messageContainer.html(data);
    };
    
    extern.setUrl = function(url){
        this.url = url;
        return url;
    };
    
    extern.askQuestionsSubscription = function(){              
        askForm.validate();       
        if((askForm).valid()){
            $.ajax({
                  url: url,
                  success:function(data) {
                     askQuestionsSubscriptionMessage(data.message);
                   },
                   error: function(xhr) {
                       console.log(xhr);
                   }
            });  
        }
    };
    
    var attachHandlers = function(){      
        submit_button.click(extern.askQuestionsSubscription);
    };
    
    var _init = function(){
       attachHandlers();   
    };
    
    _init();

    
    return extern;   
    
};

