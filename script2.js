function key(event) {

    if (event.which == 13) {

        if (rw == 0) {


            fid = f();
            rw = setInterval(run, 100);
            rs.play();

            bw = setInterval(ba, 100);
            sw = setInterval(updateScore, 100);
            fw = setInterval(move, 100);
            
        }
    }

    if (event.which == 32) {

        if (jw == 0) {

           

            clearInterval(rw);
            rs.pause();

            jw = setInterval(jump, 100);
            js.play();

            clearInterval(sn);
        }
    }

}


var fid = 0;
var p = 800;

function f() {

    for (var y = 0; y < 10; y++) {
        var i = document.createElement("img");
        i.src = "flame.gif";
        i.className = "f";
        i.style.marginLeft = p + "px";

        if (y <= 5) {
            p = p + 500;
        }
        if (y >= 6) {
            p = p + 200;
        }

        i.id = "d" + y;

        document.getElementById("b").appendChild(i);
    }
}




var rw = 0;
var r = 1;

function run() {

    var rimg = document.getElementById("boy");
    r = r + 1;
    if (r == 9) {
        r = 1;
    }

    rimg.src = "Run (" + r + ").png";
}


var ew = 0;
var e = 0;

function idle() {

    var eimg = document.getElementById("boy");
    e = e + 1;

    if (e == 11) {
        e = 1;
    }
    eimg.src = "Idle (" + e + ").png"
}

function idleMove() {
    ew = setInterval(idle, 100);
}


var bw = 0;
var u = 0;

function ba() {
    u = u - 20;
    document.getElementById("b").style.backgroundPositionX = u + "px";
}



var sw = 0;
var a = 0;

function updateScore() {
    a = a + 5;
    document.getElementById("score").innerHTML = a;

    if (a == 700) {
        won();

        
                clearInterval(rw);
                rs.pause();

                clearInterval(jw);
                j = -1;
                clearInterval(sw);
                clearInterval(fw);
                clearInterval(bw);
                clearInterval(dw);
                ds.pause();
    }
}


var fw = 0;

function move() {

    for (var y = 0; y < 10; y++) {
        var z = getComputedStyle(document.getElementById("d" + y));
        var p = parseInt(z.marginLeft) - 20;

        document.getElementById("d" + y).style.marginLeft = p + "px";


        // 20   140
        if (p >= 20 & p <= 110) {

            if (mt > 290) {

                
                clearInterval(rw);
                rs.pause();

                clearInterval(jw);
                j = -1;
                clearInterval(sw);
                clearInterval(fw);
                clearInterval(bw);

                dw = setInterval(dead, 100);
                ds.play();
            }
        }
    }
}




var jw = 0;
var j = 1;
var mt = 320; // boy margintop in css

function jump() {
    var jimg = document.getElementById("boy");

    if (j <= 6) { // 1 - 6 images
        mt = mt - 30;
    }
    if (j >= 7) {
        mt = mt + 30;
    }
    jimg.style.marginTop = mt + "px";


    j = j + 1;

    if (j == 13) {
        j = 1;

        clearInterval(jw);
        rw = setInterval(run, 100);
        rs.play();

        jw = 0;

        if (fid == 0) {
            fid = f();
        }
        if (bw == 0) {
            bw = setInterval(ba, 100);
        }
        if (sw == 0) {
            sw = setInterval(updateScore, 100);
        }
        if (fw == 0) {
            fw = setInterval(move, 100);
        }
    }
    jimg.src = "Jump (" + j + ").png";
}



var dw = 0;
var d = 0;

function dead() {

    var dimg = document.getElementById("boy");

    d = d + 1;

    if (d == 11) {
        d = 10;

        dimg.style.marginTop = "370px";

        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = a;

        

    }
    dimg.src = "Dead (" + d + ").png";
}




function re() {
    location.reload();
}




var rs = new Audio("walk.wav");
var js = new Audio("jump.mp3");
var ds = new Audio("dead.mp3");
var ws = new Audio("win2.wav");



function won() {

    document.getElementById("won").style.visibility = "visible";
    document.getElementById("endscore").innerHTML = a;

    ws.play();
}



