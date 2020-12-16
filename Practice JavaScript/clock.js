window.onload = function() {
    const clock = document.querySelector("#clock");

    function printClock() {
    
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth()+1;
        let date = time.getDate();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
    
        let dates = `${year}년 ${month}월 ${date}일`;
        let times = `${hours}시 ${minutes}분 ${seconds}초`;
    
        clock.innerHTML = dates + "<br>" + times;
        setTimeout(printClock, 500);
    }
    printClock();
}