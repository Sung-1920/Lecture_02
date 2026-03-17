// სავარჟიშო #1
function roundUp(num) {
    return Math.ceil(num);
}

console.log(roundUp(2.8))
console.log(roundUp(15.8))
console.log(roundUp(25.8))

// სავარჟიშო #2

function roundDown(num) {
    return Math.floor(num);
}

console.log(roundDown(10.3))
console.log(roundDown(19.20))
console.log(roundDown(20.5))

// სავარჟიშო #3

function roundNumber(num) {
    return Math.round(num);
}

console.log(roundNumber(5.3))
console.log(roundNumber(19.99))
console.log(roundNumber(20.5))

// სავარჟიშო #4

function roundNumber(num, roundUp) {
    return roundUp ? Math.ceil(num) : Math.floor(num);
}

console.log(roundNumber(4.3, true));
console.log(roundNumber(4.8, false));

// სავარჟიშო #5

function randomNumber() {
    console.log(Math.random());
}

randomNumber();

// სავარჯიშო #6

function randomNumbers() {
    let num = Math.random() * (50 - 5) + 5;
    console.log(num);
}

randomNumbers();

// სავარჯიშო #7

function randomBetween(a, b) {
    let num = Math.random() * (b - a) + a;
    console.log(num);
}

randomBetween(5, 10);

// სავარჯიშო #8

function randomIntBetween(a, b) {
    let num = Math.floor(Math.random() * (b - a + 1)) + a;
    console.log(num);
}

randomIntBetween(5, 10);

// სავარჯიშო #9

function randomTenNumbers(a, b) {
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * (b - a + 1)) + a;
        console.log(num);
    }
}

randomTenNumbers(1, 100)

//სავარჯიშო #10

function randomNNumbers(n, a, b) {
    for (let i = 0; i < n; i++) {
        let num = Math.floor(Math.random() * (b - a + 1)) + a;
        console.log(num);
    }
}


randomNNumbers(7, 1, 10)

// სავარჯიშო #11

function weekDays() {
    let days = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"];
    
    let randomIndex = Math.floor(Math.random() * days.length);
    
    console.log(days[randomIndex]);
}

weekDays();