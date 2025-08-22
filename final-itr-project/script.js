


function toggleProfileCard() {
    let card = document.getElementById("profileCard");
    card.style.display = (card.style.display === "none" || card.style.display === "") ? "block" : "none";
}

function closeCard() {
    document.getElementById("profileCard").style.display = "none";
}






// Select all activity cards
const activityCards = document.querySelectorAll('.activity-card');

// Select hero section
const heroSection = document.querySelector('.hero-section');

// Add click event to each card
activityCards.forEach(card => {
  card.addEventListener('click', () => {
    // Get the background image from the clicked card
    const Image = card.style.backgroundImage;

    // Apply it to hero section
    heroSection.style.backgroundImage = Image;
  });
});


