function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  var lis = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n;
  }
}

function deepestChild(){
  var node = document.getElementById("grand-node").querySelectorAll("div");
  var child;
  
  for (let i = 0; i < node.length-1; i++){
    child = node[i].querySelector("div") //defining child as whatever is inside the first div we come to
  }
return child;
}