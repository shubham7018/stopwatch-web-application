let time = document.getElementById('time')
let a, lapse = "00:00:00";
let count = 0, sec = 0; min = 0, hr = 0;
function start1() {
    a = setInterval(() => {
        count++
        if (count == 100) {
            count = 0
            sec++
            if (sec == 60) {
                sec = 0
                min++

                if (min == 60) {
                    min = 0;
                    hr++;

                }
            }
        }
        let seconds = String(sec).padStart(2, "0");
        let minute = String(min).padStart(2, "0");
        let hour = String(hr).padStart(2, "0");
        let mili = String(count).padStart(2, "0");
        lapse = time.innerHTML = `${hour}:${minute}:${seconds}:${mili}`
        console.log(`${hour}:${minute}:${seconds}:${mili}`)
    },10);
}
function stop1() {
    clearInterval(a)
}
function reset1() {
    sec = 0;
    min = 0,
        hr = 0;
    hour = 0;
    minute = 0;
    seconds = 0;
    time.innerHTML = "00:00:00:00"
    stop1();
}
function lapse1() {
    document.getElementById('lapse-txt').innerHTML += lapse + "<br>"
}