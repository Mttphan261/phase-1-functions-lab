// Code your solution in this file!
function distanceFromHqInBlocks(number) {
   return Math.abs(number - 42);
}

function distanceFromHqInFeet(number) {
    return distanceFromHqInBlocks(number) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    if (Math.abs(start - destination) * 264  <= 400) {
        return 0;
    }
    else if (Math.abs(start - destination) * 264  > 2500) {
        return 'cannot travel that far';
    }
    else if (Math.abs(start - destination) * 264  > 2000) {
        return 25;
    }
        else if (Math.abs(start - destination) * 264 > 400 && 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    }    
}