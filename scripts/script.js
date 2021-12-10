function showImg(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

const form = document.getElementById("form");

form.addEventListener("submit", function () {
    alert("Reservation made! We will contact you for confirmation");
});