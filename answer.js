//question 1:

function describeValue(value) {
  return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}

// question 2:

function getDayType(day){
    switch(day.toLowerCase()){
        case "friday":
            return "Weekend";
        case "saturday":
            return "Weekend";
        case "sunday":
            return "Working Day";
        case "monday":
            return "Working Day";
        case "tuesday":
            return "Working Day";
        case "wednesday":
            return "Working Day";
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";

    }
}


//question 3:

function validateUsername(username){
    if (username.length < 4) return "Too Short";
    if (username.includes(" ") === true) return "No Space Allowed";
    if (username.toLowerCase().includes("admin")) return "Reserved Word";
    return "Available";
}


// question 4:


function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let totalFare = 0;
    if (distance > 2){
        totalFare = 50 + (distance - 2) * 15;
    }
    else{totalFare = 50;}
    if (isNight === true) totalFare *= 1.2;
    if (waitingMinutes > 0) totalFare += waitingMinutes * 2;
    return totalFare;
} 

