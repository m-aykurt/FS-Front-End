// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);
// const firstname = urlParams.get("firstname");
// const lastname = urlParams.get("lastname");
// alert("welcome " + firstname + " " + lastname);
const updateProductQuantity = (quantityInput) => {
    alert(quantityInput.value);
}
document.querySelectorAll(".product-quantity input").forEach(function(input){
    input.addEventListener("change", function(){
        updateProductQuantity(this);
    });
});
const removeProduct = (removeButton) => {
    let productRow = removeButton.parentElement.parentElement;
    productRow.remove();
}
document.querySelectorAll(".product-removal button").forEach(function(button){
    button.addEventListener("click", function(){
        removeProduct(this);
    });
});