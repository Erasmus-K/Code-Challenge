function checkSpeed(speed){
    if (speed <= 70){
        return "ok"
    }else {
        let points = Math.floor((speed - 70) );
        if (points >12){
            return "License suspended";
        }else{
            return "points: " + points
        }
    }
}
let speed = Number(prompt("Enter car speed (km/h):"));
if (isNaN(speed) || speed < 0 ){
alert("Please enter a valid speed.");
}else {
    let result = checkSpeed(speed)
    alert(result);
}
    
