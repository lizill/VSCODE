window.addEventListener("load", function() {
    let PtagInput = document.querySelector("#PtagInput");
    let PtagBtn = document.querySelector("#PtagBtn");
    let WPtag = document.querySelector("#WPtag");

    PtagBtn.addEventListener("click", function() {
        WPtag.innerHTML = PtagInput.value;
    });
});