var singleton = (function(){
			var instance;
            var create = function (){
            	var counter = 0;
            	return {
                	sayHello: function (){
                        counter +=1;
                    	console.log("hello " + counter);
                    }
                }
            }
            return {
            	getInstance: function(){
            			if(!instance){
            				instance = create();
            			} 
            			return instance;
                }        
            }
})();

singleton.getInstance().sayHello();
singleton.getInstance().sayHello();
singleton.getInstance().sayHello();
