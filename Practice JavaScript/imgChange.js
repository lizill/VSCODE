window.addEventListener('load', function(){
    let btn = document.querySelector("#imgBtn");
    changeImg.src = "./beach3.jpg";

    let page = 1;
    btn.addEventListener("click", function(){
        if(page>0) {
            changeImg.src = "./lasvegas.jpg";
            page *= -1;
        } else {
            changeImg.src = "./beach3.jpg";
            page *= -1;
        }
    })
});