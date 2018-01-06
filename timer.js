var timeinterval = 0;
var clock = null;

function getTimeSince(startTime) {
    var t = Date.parse(new Date()) - Date.parse(startTime);

    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, starttime) {
    if (clock == null) {
        clock = document.getElementById(id);
    }

    if (timeinterval != 0) {
        clearInterval(timeinterval);
        clock.innerHTML = '0 seconds';
    }

    timeinterval = setInterval(function () {
        var t = getTimeSince(starttime);
        clock.innerHTML = '';
        if (t.days > 1) {
            clock.innerHTML += t.days + ' days, ';
        } else if (t.days > 0) {
            clock.innerHTML += t.days + ' day, ';
        }

        if (t.hours > 1) {
            clock.innerHTML += t.hours + ' hours, ';
        } else if (t.hours > 0) {
            clock.innerHTML += t.hours + ' hour, ';
        }

        if (t.minutes > 1) {
            clock.innerHTML += t.minutes + ' minutes, ';
        } else if (t.minutes > 0) {
            clock.innerHTML += t.minutes + ' minute, ';
        }

        if (t.seconds > 1) {
            clock.innerHTML += t.seconds + ' seconds';
        } else {
            clock.innerHTML += t.seconds + ' second';
        }

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}