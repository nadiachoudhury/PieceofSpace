function getDistanceFromSun(celestialBody) {
    const distances = {
        Mercury: 57.9,
        Venus: 108.2,
        Earth: 149.6,
        Mars: 227.9,
        Jupiter: 778.3,
        Saturn: 1427,
        Uranus: 2871,
        Neptune: 4495,
        Sun: 0,
        Moon: 0.384 // distance from Earth
    };
    return distances[celestialBody];
}

function convertDistance(distance, unit) {
    const conversionRates = {
        kilometers: 1e6,
        miles: 6.21e5, // 1 km = 0.621371 miles
        busses: 13333, // 1 km = 13.333 school busses (average length ~ 12m)
        empire: 4724, // 1 km = 4,724 Empire State Buildings (381m tall)
        everest: 145, // 1 km = 145 Mount Everests (8,848m tall)
    };
    return distance * conversionRates[unit];
}

function calculateDistance() {
    const body1 = document.getElementById('body1').value;
    const body2 = document.getElementById('body2').value;
    const unit = document.getElementById('unit').value;

    let distance = Math.abs(getDistanceFromSun(body1) - getDistanceFromSun(body2));
    if (body1 === "Moon" || body2 === "Moon") {
        distance += 0.384; // Adding Moon's distance from Earth
    }
    distance = convertDistance(distance, unit);

    document.getElementById('result').innerText = `The distance between ${body1} and ${body2} is approximately ${distance.toLocaleString()} ${unit}.`;
}
