var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")

menuicon.addEventListener("click", function(){
  sidenav.style.right = 0
})

closenav.addEventListener("click", function(){
  sidenav.style.right = "-50%"
})

var search = document.getElementById("search")
var container = document.getElementById("product-container")
search.addEventListener("keyup",function(){
  var enteredValue = event.target.value.toLowerCase()
  var productList = container.querySelectorAll("div")
  // console.log(h1List)
  for(var i=0;i<productList.length;i++){
    var item =  productList[i].querySelector("h1")
    if(item.textContent.toLowerCase().indexOf(enteredValue) < 0){
      productList[i].style.display = "none"
    } else{
      productList[i].style.display = "block"
    }
  }
})