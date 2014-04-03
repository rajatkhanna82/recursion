// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var stringified;
  switch(typeof obj){
  	
  	case "number":
  	case "boolean":
  	  stringified = '' + obj ;
  	  break;
	case "string":
	  stringified = '"' + obj + '"';
	  break;
	case "undefined":
	  	stringified = '';
	  	break;
	// OBJECTS ....
	case "object":
	 // NULL
	    if (!obj) { 
	      stringified = '' + obj ;
	    } 
	    // ARRAYS ...[ call stringifyJSON on each ]
	    else if (obj instanceof Array) { 
	      stringified = '[';
	      obj.forEach(function(x,i,obj){
	      	stringified += stringifyJSON(x);
	        if (obj.length > 1 && i < (obj.length-1)) { 
	          stringified += ',';
	        }
	      });
	      stringified += ']';
	    } 
	    // Objecrs ..{  "key" : stingifyJSON (value)  }
	    else { 
	      stringified = '{';
	      var j = 0;
	      for (var key in obj) {
	      	// Do Nothing for function and undefined
	        if (typeof obj[key] != "function" && typeof obj[key] != "undefined") {
	          if (j > 0) { 
	            
	            stringified += ',';
	           }          
	          stringified += '"' + key + '"' + ':' + stringifyJSON(obj[key]);
	       	  j++;
	        }  
	        
	      }
	      stringified += '}';    
	    }
	    break; // end of case "object" 
  
  }

  return stringified;
};
