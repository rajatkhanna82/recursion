// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var resultElements = [];
	var rootNode =  document.body;
	var checkNodes = function(rootNode){
		 // check Each sibling node
		_.each(rootNode.childNodes,function(node){                      
			if(node.classList && node.classList.contains(className)){
				resultElements.push(node);
			}
		// check for Child Nodes	
			if(node.hasChildNodes()){
				
				 checkNodes(node);
			}
		});

	}
	checkNodes(rootNode);
	
	return resultElements;

};
