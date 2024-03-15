// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Construct mailto URL with input values
    var mailtoURL = 'mailto:chaseishere25@gmail.com?subject=O and S - Multi Service Feedback&body=Name: ' + encodeURIComponent(name) + '%0AEmail: ' + encodeURIComponent(email) + '%0APhone: ' + encodeURIComponent(phone) + '%0AMessage: ' + encodeURIComponent(message);

    // Open email app with prefilled data
    window.location.href = mailtoURL;
    });