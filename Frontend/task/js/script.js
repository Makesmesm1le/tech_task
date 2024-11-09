
    // slides info
    const slides = [
        {
            photo: "images/Ellipse14.png",
            name: "Albert Abello",
            position: "Director of Growth",
            quote: "This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.",
        },
        {
            photo: "images/Ellipse14.png",
            name: "Elizabeth Draw",
            position: "CTO",
            quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero ratione ipsum.",
        },
        {
            photo: "images/Ellipse14.png",
            name: "Victor Cramnik",
            position: "Sale manager",
            quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero ratione ipsum deserunt doloribus aut explicabo enim incidunt repellat.",
        },
        {
            photo: "images/Ellipse14.png",
            name: "Daria Levina",
            position: "Product manager",
            quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero ratione ipsum deserunt doloribus aut explicabo enim incidunt repellat.",
        }
    ];

    let currentSlide = 0;

    // slider
    function showSlide(index) {
        const slide = slides[index];
        document.getElementById("author-photo").src = slide.photo;
        document.getElementById("author-name").textContent = slide.name;
        document.getElementById("author-position").textContent = slide.position;
        document.getElementById("quote-text").textContent = slide.quote;
        document.getElementById("slide-counter").textContent = `0${index + 1} / 0${slides.length}`;
    }

    // next slide
    function prevSlide() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    }

    // prev slide
    function nextSlide() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    
    function toggleSpoiler(clickedSpoiler) {

        const allSpoilers = document.querySelectorAll('.spoiler-container');
    
        allSpoilers.forEach(spoiler => {
    
            const isClickedSpoiler = spoiler === clickedSpoiler;
            
        
            if (isClickedSpoiler) {
                spoiler.classList.toggle('open');
            } else {
                spoiler.classList.remove('open'); 
            }
    
            // +-
            const toggleIcon = spoiler.querySelector('.toggle-icon');
            toggleIcon.textContent = spoiler.classList.contains('open') ? '×' : '+';
        });
    }

    //form
 const emailInput = document.getElementById('email');
 const errorMessage = document.getElementById('error-message');

 // email validation
 emailInput.addEventListener('input', function() {
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     
     if (emailPattern.test(emailInput.value)) {
         emailInput.classList.remove('invalid');
         emailInput.classList.add('valid');
         errorMessage.style.display = 'none';
     } else {
         emailInput.classList.remove('valid');
         emailInput.classList.add('invalid');
         errorMessage.style.display = 'block';
     }
 });

 
 

 const sideMenu = document.getElementById('sideMenu');
    
 // side-menu
 function toggleMenu() {
     sideMenu.classList.toggle('open');
 }

 // close menu
 document.addEventListener('click', function(event) {
     const isClickInside = sideMenu.contains(event.target) || event.target.classList.contains('burger-icon');
     
     if (!isClickInside) {
         sideMenu.classList.remove('open');
     }
 });
