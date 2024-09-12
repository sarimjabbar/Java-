var activeFan = 
"https://cdn.dribbble.com/users/2667830/screenshots/5420086/fanjj.gif";
 function handleFan(ahmed){
    if (ahmed.src == activeFan) {
        ahmed.src = "fan stop.PNG"
    } else ahmed.src = activeFan;
        
    }
 