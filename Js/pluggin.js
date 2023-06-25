// Get Slider Items
let imgs = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
let slidesCount = imgs.length;
console.log(slidesCount)

// Set Current Slide
let currentSlide = 1

// NUmber of Slide
let slideNum = document.getElementById('slide-number');

// Prev & Next Buttons
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Handle Click on Prev & Next Buttons
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Create Main UL Elem
let paginatinEl = document.createElement('ul');
paginatinEl.setAttribute('id', 'paginatin-ul');

// Create Multiple Li
for (let i = 1; i <= slidesCount; i++) {
    let el = document.createElement('li');
    let textNode = document.createTextNode(i);
    el.setAttribute('data-index', i);
    paginatinEl.appendChild(el);
    el.appendChild(textNode);
    // console.log(el)
}

// Add Created UL to the Page
let indEl = document.getElementById('indicators');
indEl.appendChild(paginatinEl);

// Get The Paginated UL
let paginatedUl = document.getElementById('paginatin-ul');

// Get Pagination Items
let Bullets = Array.from(document.querySelectorAll('#paginatin-ul li'));

// Loop Through Bullets
for (let bullet of Bullets) {
    bullet.addEventListener('click', function () {
        currentSlide = Number(this.getAttribute('data-index'));
        Checker();
    })
}

// Trigger The Checker Func
Checker();

// Next Slide Func
function nextSlide() {
    next.classList.contains('disabled') ? false :  currentSlide++ ; Checker();
}

// Prev Slide Func
function prevSlide() {
    prev.classList.contains('disabled') ? false :  currentSlide-- ; Checker();
}

// Create The Checker Func
function Checker() {
    // Set The Slide Number
    slideNum.textContent = `Slide #${currentSlide} of ${slidesCount}`;

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class On Current Slide
    imgs[currentSlide - 1].setAttribute('class', 'active');

    // Set active class on Current Pagination Item
    paginatedUl.children[currentSlide - 1].className += 'active';

    // Check if The First item is active
    currentSlide == 1 ? prev.classList.add('disabled') : prev.classList.remove('disabled');

    // Check if The Last item is active
    currentSlide == slidesCount ? next.classList.add('disabled') : next.classList.remove('disabled');
}

// Remove All Active Classes From Images & Pagination Bullets
function removeAllActive(e) {
    // Loop Through Images
    imgs.forEach(elem => {
        elem.setAttribute('class', '');
    });
    
    // Loop Through Bullets
    Bullets.forEach(elem => {
        elem.setAttribute('class', '');
    });
}