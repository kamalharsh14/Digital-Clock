function getTime(){
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var sess = "AM";
    if(hrs > 12){
        sess = "PM";
        hrs = hrs - 12;
    } else{
        sess = "AM";
    }

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("session").innerHTML = sess;
}

setInterval(getTime, 10);