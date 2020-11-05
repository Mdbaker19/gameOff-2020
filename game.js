(function(){
    "use strict";
    const canvas = document.getElementById("gameC");
    const ctx = canvas.getContext("2d");
    const c = {
        w: canvas.width,
        h: canvas.height
    }
    const moon = {
        r: 8,
        x: c.w/2 - 8,
        y: c.h/2 - 8,
        color: "#939292"
    }
    let shot = false;
    setInterval(run, 50);
    function run(){
        draw();
        fire();
        if(shot){
            fillR(0, 0, c.w, c.h, "#000000");
            draw();
        }
    }
    function fire(input){
        if(input === " "){
            moon.r++;
            shot = true;
        }
    }
    window.addEventListener("keydown", function(evt){
        const key = evt.key;
        fire(key);
    });
    function draw(){
        circle(moon.x, moon.y, moon.r, moon.color);
    }
    function fillR(lx, ty, w, h, c){
        ctx.fillStyle = c;
        ctx.fillRect(lx, ty, w, h);
    }
    function circle(x, y, r, c){
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.stroke();
        ctx.fill();
    }
})();