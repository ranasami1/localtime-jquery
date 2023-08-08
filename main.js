$(document).ready(function(){
    function showTime(){
        var time = new Date();
        
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds(); 
        var period ="am";
        

        if(hours == 0){
            hours =12;
            $("#good").text("Good Morning")
        }
        if(hours >12){
            period="pm";
            $("#good").text("Good Evening");
        }
        if (hours > 12) {
            hours = hours - 12;
          }
       
        hours = hours < 10? "0" + hours :hours;
        minutes = minutes < 10? "0" + minutes :minutes;
        seconds = seconds < 10? "0" + seconds : seconds;

        $("#hr").text(hours);
        $("#min").text(minutes);
        $("#sec").text(seconds);
        $("#per").text(period);
        setTimeout(showTime, 1000);
    }
    showTime();
});