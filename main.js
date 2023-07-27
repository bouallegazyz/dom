var favs=Array.from(document.querySelectorAll(".fa.heart"));
var minusbtns=Array.from(document.querySelectorAll(".fa-minus-circle"));
var plusbtns=Array.from(document.querySelectorAll("fa-plus-circle"));
var deletebtns=Array.from(document.querySelectorAll(".fa-trash.alt"));
var cards=Array.from(document.querySelectorAll("card"));

for(let fav of favs) {
    fav.addEventListener("click", function() {
            if(fav.style.color=="black"){
                fav.style.color="red";
            } else{
                fav.style.color="black";
            }
    })
}
for(let i in deletebtns){
    deletebtns[i].addEventListener("click", function() {
        cards[i].remove();
        total()
    })
}
for(let i in plusbtns){
    plusbtns[i].addEventListener("click", function() {
            plusbtns.nextElementSibling.innerHTML++-
            total()
    })
}
for(let i in minusbtns){
    minusbtns[i].addEventListener("click", function() {
        plusbtns.nextElementSibling.innerHTML <0?
        plusbtns.nextElementSibling.innerHTML--:
        null;
        total()
    })
}
function total(){
    let qte=Array.from(document.querySelectorAll(".qute"))
    let price=Array.from(document.querySelectorAll(".unitt-price"))
    let s=0
    for( i=0; i<qte.length; i++){
        s=s+price[i].innerHTML*qte[i].innerHTML
    }
    document.getElementById("total-price").innerHTML=s;
}
