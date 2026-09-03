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
