function createCard(title, chname, views, monthsOld, duration, thumbnail) {
    let viewStr
    if (views < 100000) {
        viewStr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K"
    }
    let actualDuration

    if (duration < 60) {
        actualDuration = "00 :" + duration;
        // console.log(actualDuration)

    }
    else if (duration >= 60 && duration < 3600) {
        // console.log(parseInt(duration / 60) + ":" )
        actualDuration = parseInt(duration / 60) + ":" +( duration % 60 === 0 ? "00" : duration % 60)
        console.log("This" +(duration % 60 === 0 ? "00" : duration % 60))
        // console.log(actualDuration)
    }

    else {
       actualDuration = parseInt(duration/3600) + ":" + duration % 3600 + ":" + duration
    //    console.log(actualDuration)

    }
    let html = `<div class="card">
            <div class="img">
                <img src="${thumbnail}"
                    alt="">
                    <div class="capsule">${actualDuration}</div>
            </div>
            <div class="text">
                <h1> ${title}</h1>
                <p>${chname} .${viewStr} views . ${monthsOld} month ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML += html;
}


let title = prompt("Enter Video Title");
let chname = prompt("Enter Channel name");
let views = prompt("Enter number of views");
let monthsOld = prompt("Enter Months old duration(Months)");
let duration = prompt("Enter Video Duration");
let thumbnail = prompt("Enter Video Thumbnail");

createCard(title, chname, views, monthsOld, duration, thumbnail);
