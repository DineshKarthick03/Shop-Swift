var products = document.getElementById("products-item")
var search = document.getElementById("search-box")
var listproducts = products.querySelectorAll("div")

search.addEventListener("keyup", function (event) {
    var input = event.target.value.toUpperCase()

    for (i = 0; i < listproducts.length; i++) {
        var name = listproducts[i].querySelector("p").textContent

        if (name.toUpperCase().indexOf(input) < 0) {
            listproducts[i].style.display = "none"
        }
        else {
            listproducts[i].style.display = "block"
        }
    }
})



var sidenavbar=document.querySelector(".side-navbar")
function showNavbar(){
    sidenavbar.style.right="0"
}
function closeNavbar(){
    sidenavbar.style.right="-35%"
}