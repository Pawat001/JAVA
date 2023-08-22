function convertToMinutes(hours, minutes) {
    return hours * 60 + minutes;
}

// Test cases
const hours1 = 2;
const minutes1 = 30;

const hours2 = 1;
const minutes2 = 45;

const totalMinutes1 = convertToMinutes(hours1, minutes1);
const totalMinutes2 = convertToMinutes(hours2, minutes2);

console.log(`${hours1} hours and ${minutes1} minutes is ${totalMinutes1} minutes.`);
console.log(`${hours2} hours and ${minutes2} minutes is ${totalMinutes2} minutes.`);
