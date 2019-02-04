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
class carousel {


    constructor(cls_name, prnt_name) {
        this.slideIndex = 1;
        this.prev_slide = 0;
        this.dots = [];
        this.slides = document.getElementsByClassName(cls_name);
        if (this.slides.length > 1) {
            this.db = document.createElement("div");
            this.db.classList.add("dot-box");
            this.parent_cont = document.getElementsByClassName(prnt_name)[0];
            this.parent_cont.appendChild(this.db);

            for (let j = 0; j < this.slides.length; j++) {
                this.d = document.createElement("span");
                this.d.classList.add("dot");
                this.db.appendChild(this.d);
                // d.addEventListener('click', this.currentSlide.bind(null, j));
                this.d.addEventListener('click', () => this.currentSlide(j));
            }

            this.dots = document.getElementsByClassName("dot");
            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = "none";
            }
            this.slides[0].style.display = "block";
            this.dots[0].className += " active";
            this.Interval = setInterval(() => { this.showSlides() }, 2000);
        }
    };

    showSlides() {
        if (this.slideIndex > this.slides.length - 1) { this.slideIndex = 0 }
        // if (this.prev_slide > -1) {
        this.slides[this.prev_slide].style.display = "none";
        this.dots[this.prev_slide].className = this.dots[this.prev_slide].className.replace(" active", "");
        // }

        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].className += " active";
        this.prev_slide = this.slideIndex;
        this.slideIndex++;
    };

    currentSlide(index) {
        if (index > this.slides.length) { index = 0 } else if (index < 0) { index = this.slides.length - 1 }

        this.slides[this.prev_slide].style.display = "none";
        this.dots[this.prev_slide].className = this.dots[this.prev_slide].className.replace(" active", "");

        this.slides[index].style.display = "block";
        this.dots[index].className += " active";
        this.prev_slide = index;
        this.slideIndex = index + 1;
        this.clearInterval(this.Interval);
        this.Interval = setInterval(() => { this.showSlides() }, 2000);
    };

}

let carousel1 = new carousel("grid-container", "slideshow-container");