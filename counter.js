let deadline = new Date("aug 31, 2024 15:37:25").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    if (t < 0) {
        clearInterval(x);
        document.getElementById("welcome-message").innerHTML = "We have already launched";
        document.getElementById("days-value").innerHTML = 0;
        document.getElementById("hours-value").innerHTML = 0;
        document.getElementById("minutes-value").innerHTML = 0;
        document.getElementById("seconds-value").innerHTML = 0;

    } else {
        document.getElementById("days-value").innerHTML = days;
        document.getElementById("hours-value").innerHTML = hours;
        document.getElementById("minutes-value").innerHTML = minutes;
        document.getElementById("seconds-value").innerHTML = seconds;
    }

}, 1000);
