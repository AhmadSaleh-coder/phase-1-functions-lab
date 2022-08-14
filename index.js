// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    let distanceInBlocks;
    if (pickup > 42 && pickup < 50)
        distanceInBlocks = 1;
    else
        distanceInBlocks = 8;

    return distanceInBlocks;
}

function distanceFromHqInFeet(dis) {
    let distanceInFeet = distanceFromHqInBlocks(dis) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        let dis = destination - start;
        return dis * 264;
    }
    else {
        let dis = start - destination;
        return dis * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let price;
    if (distance <= 400) {
        price = 0;
        return price;
    }
    else if (distance > 400 && distance < 2000) {
        price = ((distance - 400) * 0.02);
        return price;
    }
    else if (distance > 2000 && distance < 2500) {
        price = 25;
        return price;
    }
    else {
        return "cannot travel that far";
    }

}
