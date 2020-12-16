window.addEventListener("load", function() {

    const boxDivs = document.querySelectorAll(".box");
    const endDiv = document.querySelector("#end");
    const replayBtn = document.querySelector("#replay");

    let boxArr = [];
    for(let i=0; i<boxDivs.length; i++) {
        boxArr[i] = 0;
    }

    let count = 1;
    for(let i=0; i<boxDivs.length; i++) {
        boxDivs[i].addEventListener("click", function() {

            if(boxArr[i]==0) {
                if(count>0) {
                    boxDivs[i].innerHTML = "O";
                    boxArr[i] = 1;
                    count *= -1;
                    if(checkWinner()) {
                        endDiv.innerHTML = '<div id="endDiv"><p>O Win!!</p><div>';
                        replayBtn.style.visibility = "visible";
                    } else if(checkTie()) {
                        endDiv.innerHTML = '<div id="endDiv"><p>Tie!!</p><div>';
                        replayBtn.style.visibility = "visible";
                    }
                } else {
                    boxDivs[i].innerHTML = "X";
                    boxArr[i] = -1;
                    count *= -1;
                    if(checkWinner()) {
                        endDiv.innerHTML = '<div id="endDiv">X Win!!<div>';
                        replayBtn.style.visibility = "visible";
                    } else if(checkTie()) {
                        endDiv.innerHTML = '<div id="endDiv"><p>Tie!!</p><div>';
                        replayBtn.style.visibility = "visible";
                    }
                }
            } else alert("이미 선택된 자리입니다.");

        });
    }

    function checkWinner() {
        if(boxArr[1]!=0 && (boxArr[0]==boxArr[1] && boxArr[1]==boxArr[2])) {
            return true;
        } else if(boxArr[4]!=0 && (boxArr[3]==boxArr[4] && boxArr[4]==boxArr[5])) {
            return true;
        } else if(boxArr[7]!=0 && (boxArr[6]==boxArr[7] && boxArr[7]==boxArr[8])) {
            return true;
        } else if(boxArr[3]!=0 && (boxArr[0]==boxArr[3] && boxArr[3]==boxArr[6])) {
            return true;
        } else if(boxArr[4]!=0 && (boxArr[1]==boxArr[4] && boxArr[4]==boxArr[7])) {
            return true;
        } else if(boxArr[5]!=0 && (boxArr[2]==boxArr[5] && boxArr[5]==boxArr[8])) {
            return true;
        } else if(boxArr[4]!=0 && (boxArr[0]==boxArr[4] && boxArr[4]==boxArr[8])) {
            return true;
        } else if(boxArr[4]!=0 && (boxArr[2]==boxArr[4] && boxArr[4]==boxArr[6])) {
            return true;
        } else {
            return false;
        }
    }

    function checkTie() {
        for(let i=0; i<boxArr.length; i++) {
            if(boxArr[i]==0) {
                return false;
            }
        }
        return true;
    }
});