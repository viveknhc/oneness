
// MOUSE POINTER


// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});


document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})



// On scroll Roatation

$(window).scroll(function () {
    var theta = $(window).scrollTop() / 600 % Math.PI;
    $('#about-img').css({ transform: 'rotate(' + theta + 'rad)' });
});


// VIDEO MODEL



document.querySelectorAll(".lvideo").forEach((d) => d.addEventListener("click", playVideos));
const body = document.body;

function playVideos(e) {
    lvideo(e.currentTarget.dataset.url);

    body.classList.add("lvideo-active");

    var lvideoWrap = document.createElement("DIV");
    lvideoWrap.setAttribute("id", "lvideo-wrap");
    document.body.appendChild(lvideoWrap);

    // console.log(this.dataset.url)
    // console.log(this.dataset.video)

    const wrapper = document.getElementById("lvideo-wrap");
    wrapper.classList.add("active");

    const url = this.dataset.url;

    const startModal = `<span onclick="lvideoClose();" class="lvideo-overlay"></span> <div class="lvideo-container">`;
    const finishModal = `</div><button onclick="lvideoClose();" class="lvideo-close">x</button>`;

    // if (url.indexOf("youtube") !== -1) {
    if (url.indexOf("youtube") !== -1 || url.indexOf("youtu") !== -1) {
        //console.log("is youtube")

        const ytUrl = [this.dataset.url];

        var i,
            r,
            regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

        for (i = 0; i < ytUrl.length; ++i) {
            r = ytUrl[i].match(regExp);
            //console.log(r[1])

            document.getElementById(
                "lvideo-wrap"
            ).innerHTML = `${startModal}<iframe width="560" height="315" title="YouTube Video" src='https://www.youtube.com/embed/${r[1]}?rel=0&autoplay=1&mute=1&loop=1&playlist=${r[1]}' frameborder="0" allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>${finishModal}`;
        }
    } else if (url.indexOf("vimeo") !== -1) {
        // console.log("is Vimeo")

        const vimeoURL = this.dataset.url;
        const regExp = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;

        const match = vimeoURL.match(regExp);

        if (match) {
            document.getElementById(
                "lvideo-wrap"
            ).innerHTML = `${startModal}<iframe title="Vimeo" src="https://player.vimeo.com/video/${match[2]}?autoplay=1&loop=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>${finishModal}`;
        } else {
            alert("Not a Vimeo!  URL example:\n https://vimeo.com/120206922");
        }

    } else if (url.indexOf("mp4") !== -1 || url.indexOf("m4v") !== -1) {

        document.getElementById(
            "lvideo-wrap"
        ).innerHTML = `${startModal}<video controls loop playsinline autoplay><source src='${this.dataset.url}' type="video/mp4"></video>${finishModal}`;
    } else {
        alert("No video link found.");
    }
}

// CLOSE MODAL LVIDEO
const lvideoClose = () => {
    body.classList.remove("lvideo-active");

    const wrapper = document.getElementById("lvideo-wrap");
    wrapper.parentNode.removeChild(wrapper);
};

// LAUNCH
function lvideo() { }