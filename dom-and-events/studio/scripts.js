// Write your JavaScript code here.
// Remember to pay attention to page loading!

function launch() {
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort")
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.styles.position = absolute;
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    

    takeOffButton.addEventListener("click", function() {
        const takeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeOff === true) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "Blue";
            spaceShuttleHeight.innerHTML =+ 10000;
    }
    });

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "Green";
        spaceShuttleHeight.innerHTML = 0;
    });
    
    abortButton.addEventListener("click", function() {
        const abortMiss = window.confirm("Confirm that you want to abort the mission?");
        if (abortMiss === true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "Green";
            spaceShuttleHeight.innerHTML = 0;
        }

    
    })

    upButton.addEventListener("click", function() {
        shuttleBackground.style.position = ("up:10");

    })
};

window.addEventListener("load", launch);