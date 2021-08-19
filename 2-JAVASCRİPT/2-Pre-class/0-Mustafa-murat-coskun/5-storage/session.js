// session key-value


//butonları secmek

const addBtn = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// inputlar

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");

addBtn.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

function addItem(e){
    sessionStorage.setItem(addKey.addValue, addValue.value)
}
function deleteItem(e){

}
function clearItems(e){

}