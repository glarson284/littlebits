function list(string) {
  string = string.split(".");
  // console.log(string)
  var node = document.createElement("li");

  for (i=0; i < string.length; i++){
    // if (i===0){
      console.log(string[i])
      var textnode = document.createTextNode(string[i]);
      node.appendChild(textnode)
      // node2.appendChild(textnode)
      document.getElementById("myList").appendChild(node); 
    // }
  }
}

$(document).ready( function() {
  list("content.landingpages.podcasts");
  // var para = document.createElement("p");
  // var node = document.getElementsByTagName("body")
  // para.appendChild(node);
    

});