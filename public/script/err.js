function errListener(e) {
    let reqErr = new XMLHttpRequest(),
    date = new Date,
    msg = e.error + ', filename: ' + e.filename + ' in line: ' + e.lineno,
    errText = `date=${encodeURIComponent(date.toLocaleString(['uk']))}&error=${encodeURIComponent(msg)}&uri=${encodeURIComponent(window.location.href)}`;
    reqErr.open("POST", "/logerror", true);
    reqErr.onload = function(){
        if(reqErr.response === '500') console.log('Sent errors from errListener() is broken!');
    }
    reqErr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    reqErr.send(errText);
}
window.addEventListener('error', errListener);