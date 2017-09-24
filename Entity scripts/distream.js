//  distream.js
//
//  

(function(){
    
    var WANT_DEBUG = true;
    function debugPrint(string) {
        if (WANT_DEBUG) {
            print("ambientSound | " + string);
        }
    }

    var _this = this;
    _this.clickDownOnEntity = function(entityID, event){
            debugPrint("I was clicked again!");
        }

})
