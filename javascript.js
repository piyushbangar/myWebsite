function show() {
    var openbutton = document.getElementById("opener");
    if (document.getElementById('benefits').style.display == 'none') {

        document.getElementById('benefits').style.display = 'block';
        document.getElementById('opener').style.display = 'none';
    }
    return false;
}

function showhidenav() {
    // console.log("hello");
    let pagesNav = document.getElementById("pages-nav");
    if (pagesNav.style.display === "none")
        pagesNav.style.display = "block";
    else
        pagesNav.style.display = "none";
}

window.addEventListener("click", function(e) {
    let pagesNav = document.getElementById("pages-nav");
    let pagesNavItem = document.getElementById("pages-nav-item");
    if (e.target !== pagesNav && e.target !== pagesNavItem)
        pagesNav.style.display = "none";
});

var i = 0;
var ids = [];
var time = 5000;
var j = 0;

ids[0] = "a1";
ids[1] = "a2";
ids[2] = "a3";

function changeImgto(k) {
    document.getElementById(ids[k]).style.display = 'block';
    document.getElementById(ids[j]).style.display = 'none';
    document.getElementById(ids[i]).style.display = 'none';

    if (k < ids.length - 1) {
        i = k + 1;
    } else {
        i = 0;
    }

}

function changeImg() {
    document.getElementById(ids[j]).style.display = 'none'
    document.getElementById(ids[i]).style.display = 'block';
    j = i;
    if (i < ids.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg;