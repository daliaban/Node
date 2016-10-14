var add = (function(){
	var counter = 0;
        return function(){
        	return counter++;
           }
})();

console.log(add()); //0
console.log(add()); //1
console.log(add()); //2

