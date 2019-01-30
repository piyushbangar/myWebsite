// Read more Button
function show() {
    let openbtn = document.getElementById("opener");
    let extradesc = document.getElementById("description");
    if (openbtn.innerHTML == "Read More") {
        extradesc.style.maxHeight = "150px";
        openbtn.innerHTML = "Show Less";
    } else if (openbtn.innerHTML = "Show Less") {
        extradesc.style.maxHeight = "65px";
        openbtn.innerHTML = "Read More";
    }
}

// Pages in Navbar
function showhidenav() {
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


// Modal
function imageShow(event) {
    document.getElementById('id01').style.display = 'block';
    document.getElementById("modal-image").src = event.target.src;
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function hideModal() {
    document.getElementById('id01').style.display = 'none';
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}


// Scroll to top
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//Ajax for form submission
function loadText() {
    var xhr = new XMLHttpRequest();
    var url = "/resume";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    xhr.onload = function() {
        let response = JSON.parse(xhr.responseText);
        if (response.success === "false") {
            alert(response.error);
        } else {
            alert("Form was sucessfully submitted");
        }
    }

    let form = "";
    form += "name=" + document.getElementsByName("Name")[0].value + "&";
    form += "email=" + document.getElementsByName("Email")[0].value + "&";
    form += "phone=" + document.getElementsByName("Phone")[0].value + "&";
    form += "message=" + document.getElementsByName("Message")[0].value;
    xhr.send(form);
    clearForm();
}

function clearForm() {
    document.getElementById('inp-form-name').value = "";
    document.getElementById('inp-form-email').value = "";
    document.getElementById('inp-form-phone').value = "";
    document.getElementById('inp-form-message').value = "";
}
document.getElementById("submit-form").addEventListener('click', loadText);


// Carousal
var slideIndex = 1;
var prev_slide = 0;
var slides;
var dots;

function showSlides() {
    if (slideIndex > slides.length - 1) { slideIndex = 0 }
    if (prev_slide > -1) {
        slides[prev_slide].style.display = "none";
        dots[prev_slide].className = dots[prev_slide].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    prev_slide = slideIndex;
    slideIndex++;
}

function currentSlide(index) {
    if (index > slides.length) { index = 0 } else if (index < 0) { index = slides.length - 1 }

    slides[prev_slide].style.display = "none";
    dots[prev_slide].className = dots[prev_slide].className.replace(" active", "");

    slides[index].style.display = "block";
    dots[index].className += " active";
    prev_slide = index;
    slideIndex = index + 1;
    clearInterval(Interval);
    Interval = setInterval(showSlides, 2000);
}

function initialize_slides(cls_name, prnt_name) {
    slides = document.getElementsByClassName(cls_name);
    if (slides.length > 1) {
        var db = document.createElement("div");
        db.classList.add("dot-box");
        document.getElementsByClassName(prnt_name)[0].appendChild(db);

        for (let j = 0; j < slides.length; j++) {
            var d = document.createElement("span");
            d.classList.add("dot");
            // d.attributes('index', j);
            db.appendChild(d);
            d.addEventListener('click', currentSlide.bind(null, j))
        }

        dots = document.getElementsByClassName("dot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[0].style.display = "block";
        dots[0].className += " active";
        Interval = setInterval(showSlides, 2000);
    }
}

let Interval;
window.onload = function() {
    initialize_slides("grid-container", "slideshow-container");
}