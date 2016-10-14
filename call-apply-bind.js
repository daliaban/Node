var name = "Global";
var Tester = function(name){
	this.name = name; 
    	this.sayHello= function(){
        	console.log("Hello "+this.name);
    	}
}

var testobj = new Tester("Dalia");
var obj1 = {};
var obj2 = {};
Tester.call(obj1, "Banerjee");
Tester.apply(obj2, ["Singh"]);
var unbound = testobj.sayHello;
var bound1 = unbound.bind(testobj);
var bound2 = unbound.bind(obj1);


testobj.sayHello();  //Hello Dalia
obj1.sayHello();  //Hello Banerjee
obj2.sayHello(); //Hello Singh
unbound();  //Hello Global
bound1();  //Hello Dalia
bound2();  //Hello Banerjee

