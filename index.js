// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
    return Math.abs(264*(distance - 42));
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(264*(start-end));
}

// function calculatesFarePrice(start, destination) {
//     let distance = Math.abs(264*(start-destination))
//     if (distance < 400) {
//         return 0
//     }
//     if (400 < distance && distance < 2000) {
//         return 0.02*(distance-400)
//     }
//     if (2000 < distance && distance <2500) {
//         return 25
//     }
//     if (2500 < distance) {
//         return "cannot travel that far"
//     }
// }

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(264*(start-destination))
    if (distance > 2500) {
        return "cannot travel that far"
    } else if (distance > 2000) {
        return 25
    } else if (distance > 400) {
        return 0.02*(distance-400)
    } else {
        return 0
    }
}

