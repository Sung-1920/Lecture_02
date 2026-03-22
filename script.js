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


// სავარჯიშო #12

function randomPhoto() {
    let photos = [
        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg",
        "photo4.jpg",
        "photo5.jpg",
        "photo6.jpg",
        "photo7.jpg",
        "photo8.jpg",
        "photo9.jpg",
        "photo10.jpg",
    ];

    let randomIndex = Math.floor(Math.random() * photos.length);
    console.log(photos[randomIndex]);
}

randomPhoto();

// სავარჯიშო #13

function randomPhotos() {
    let photos = [
        "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg",
        "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg", "photo10.jpg",
        "photo11.jpg", "photo12.jpg", "photo13.jpg", "photo14.jpg", "photo15.jpg",
        "photo16.jpg", "photo17.jpg", "photo18.jpg", "photo19.jpg", "photo20.jpg"
    ];

    for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * photos.length);
        console.log(photos[randomIndex]);
        photos.splice(randomIndex, 1);
    }
}

randomPhotos();

// სავარჯიშო #14

function randomDayWithPhoto() {
    let days = [
        { day: "ორშაბათი", photo: "mon.jpg" },
        { day: "სამშაბათი", photo: "tue.jpg" },
        { day: "ოთხშაბათი", photo: "wed.jpg" },
        { day: "ხუთშაბათი", photo: "thu.jpg" },
        { day: "პარასკევი", photo: "fri.jpg" },
        { day: "შაბათი", photo: "sat.jpg" },
        { day: "კვირა", photo: "sun.jpg" }
    ];

    let randomIndex = Math.floor(Math.random() * days.length);

    console.log(days[randomIndex].day);
    console.log(days[randomIndex].photo);
}

randomDayWithPhoto();

// სავარჯიშო #15

function randomDaysWithPhotos() {
    let photos = [
        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg",
        "photo4.jpg",
        "photo5.jpg"
    ];

    let days = [
        "ორშაბათი", "სამშაბათი", "ოთხშაბათი",
        "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"
    ];

    let randomDayIndex = Math.floor(Math.random() * days.length);
    let randomPhotoIndex = Math.floor(Math.random() * photos.length);

    console.log(days[randomDayIndex]);
    console.log(photos[randomPhotoIndex]);
}

randomDaysWithPhotos();

// სავარჯიშო #16


function randomMonth() {
    let month = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "jun",
        "jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];

    let randomIndex = Math.floor(Math.random() * month.length);
    console.log(month[randomIndex]);
}

randomMonth();

// სავარჯიშო #17

function randomDateWithPhoto() {
    let photos = [
        "photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg",
        "photo6.jpg","photo7.jpg","photo8.jpg","photo9.jpg","photo10.jpg"
    ];

    let randomDay = Math.floor(Math.random() * 31) + 1;
    let randomPhotoIndex = Math.floor(Math.random() * photos.length);

    console.log("დღე:", randomDay);
    console.log("ფოტო:", photos[randomPhotoIndex]);
}

randomDateWithPhoto();

// სავარჯიშო #17

function tablePhotos() {
    let photos = [
        "photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg",
        "photo6.jpg","photo7.jpg","photo8.jpg","photo9.jpg","photo10.jpg",
        "photo11.jpg","photo12.jpg","photo13.jpg","photo14.jpg","photo15.jpg",
        "photo16.jpg","photo17.jpg","photo18.jpg","photo19.jpg","photo20.jpg"
    ];

    for (let i = 0; i < 3; i++) {
        let row = "";
        for (let j = 0; j < 4; j++) {
            let randomIndex = Math.floor(Math.random() * photos.length);
            row += photos[randomIndex] + " ";
        }
        console.log(row);
    }
}

tablePhotos();