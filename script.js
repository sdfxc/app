// Get the modal
var modal = document.getElementById("storyModal");

// Get the image and insert it inside the modal
var storyImages = document.querySelectorAll(".story-item img");
var modalImg = document.getElementById("storyImage");
var captionText = document.querySelector(".caption");

storyImages.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
};

// JavaScript for showing text overlay on story item click
document.querySelectorAll(".story-item").forEach(item => {
    item.addEventListener("click", () => {
        const textButton = item.querySelector(".story-text-button");
        textButton.style.display = 'block'; // Show the text button
        setTimeout(() => {
            textButton.style.display = 'none'; // Hide after a short time
        }, 3000); // Adjust time as needed
    });
});
