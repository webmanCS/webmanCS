/* document.addEventListener("DOMContentLoaded", () => {
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); */

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let index = 0;

    function updateGallery() {
        const offset = -index * 100;
        gallery.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateGallery();
    });

    nextBtn.addEventListener('click', () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateGallery();
    });
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  // Function to display popup message based on status
  function displayMessage() {
    var status = getParameterByName('status');
    if (status === 'success') {
      alert('Your message has been sent successfully!');
    } else if (status === 'error') {
      alert('There was an error sending your message. Please try again.');
    }
  }

  // Call displayMessage function when the page loads
  window.onload = function() {
    displayMessage();
  };

  document.getElementById('textField').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('hidden');
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});

document.getElementById('txt_gallery').addEventListener('click', function() {
    document.getElementById('gal_popup').classList.remove('hidden');
});

document.getElementById('gal_closePopup').addEventListener('click', function() {
    document.getElementById('gal_popup').classList.add('hidden');
});



/* document.addEventListener("DOMContentLoaded", function() {
    const imageDiv = document.getElementById("imageDiv");
    const content = imageDiv.querySelector(".content");

    imageDiv.addEventListener("click", function() {
        if (content.style.display === "block") {
            content.style.display = "none"; // Collapse
        } else {
            content.style.display = "block"; // Expand
        }
    });
}); */

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }

function imgWindow() 
{
    window.open("image") 
}