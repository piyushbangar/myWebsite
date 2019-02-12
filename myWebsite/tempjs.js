// Carousal
class carousel {


    constructor(cls_name, prnt_name) {
        this.slideIndex = 1;
        this.prev_slide = 0;
        this.dots = [];
        this.slides = document.getElementsByClassName(this.cls_name);
        if (this.slides.length > 1) {
            this.db = document.createElement("div");
            this.db.classList.add("dot-box");
            document.getElementsByClassName(this.prnt_name)[0].appendChild(db);

            for (let j = 0; j < this.slides.length; j++) {
                let d = document.createElement("span");
                d.classList.add("dot");
                this.db.appendChild(d);
                d.addEventListener('click', currentSlide.bind(null, j))
            }

            this.dots = document.getElementsByClassName("dot");
            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = "none";
            }
            this.slides[0].style.display = "block";
            this.dots[0].className += " active";
            this.Interval = setInterval(this.showSlides, 2000);
        }
    };

    showSlides() {
        if (this.slideIndex > this.slides.length - 1) { this.slideIndex = 0 }
        if (this.prev_slide > -1) {
            slides[this.prev_slide].style.display = "none";
            dots[this.prev_slide].className = this.dots[this.prev_slide].className.replace(" active", "");
        }

        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].className += " active";
        this.prev_slide = this.slideIndex;
        this.slideIndex++;
    };

    currentSlide(index) {
        if (index > this.slides.length) { index = 0 } else if (index < 0) { index = slides.length - 1 }

        this.slides[this.prev_slide].style.display = "none";
        this.dots[this.prev_slide].className = this.dots[this.prev_slide].className.replace(" active", "");

        this.slides[index].style.display = "block";
        this.dots[index].className += " active";
        this.prev_slide = index;
        this.slideIndex = index + 1;
        this.clearInterval(this.Interval);
        this.Interval = setInterval(this.showSlides, 2000);
    };

}






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

function initialize_slides(cls_name, prnt_name, cr_time) {
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
        Interval = setInterval(showSlides, cr_time);
    }
}

let Interval;
window.onload = function() {
    initialize_slides("grid-container", "slideshow-container", 2000);
}