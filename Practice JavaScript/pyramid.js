window.addEventListener("load", function() {
    let PyraInput = document.querySelector("#PyraInput");
    let PyraBtn = document.querySelector("#PyraBtn");
    let PyraDiv = document.querySelector("#PyraDiv");

    PyraBtn.addEventListener("click", function() {
        let height = parseInt(PyraInput.value);
        let pyramid = "";
        if(height>8 || height<1) {
            pyramid = "1~8 사이의 값을 입력하세요."
        } else {
            for(let i =0; i<height; i++) {
                for(let j=0; j<2*(i+1)-1; j++) {
                    pyramid += "*";
                };
                pyramid += "<br>";
            };
        }

        PyraDiv.innerHTML = pyramid;
    });
})