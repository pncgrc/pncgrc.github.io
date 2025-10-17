const form = document.getElementById("review-form");
const reviewsContainer = document.getElementById("user-reviews");
const submitButton = document.getElementsByClassName("form-submit")[0];

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const username = form.elements["review-username"];
    const review = form.elements["review-text"];

    const reviewBody = document.createElement("article");
    const postedUsername = document.createElement("p");
    const postedReview = document.createElement("p");

    postedUsername.innerText = username.value;
    postedReview.innerText = review.value;

    reviewBody.appendChild(postedUsername);
    reviewBody.appendChild(postedReview);
    reviewsContainer.appendChild(reviewBody);
  });