(function () {
    var divReference = document.getElementById('divReference');
divReference.addEventListener('click', function (e) {
    e.preventDefault();
    var iframe = document.querySelector('iframe');
    iframe.src = e.target.href;
})
})();
var buttV = document.getElementById('buttV');
// Переключение между скрытием и отображением элемента:
function myFunc() {
    var myP = document.getElementById("myP");
    if(myP.style.visibility === "hidden") {
        myP.style.visibility = "visible";
    } else {
        myP.style.visibility = "hidden";
    }
}
buttV.addEventListener('click', myFunc);

