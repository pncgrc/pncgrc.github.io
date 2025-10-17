const wishlistButton = document.getElementById("wishlist");
const wishlistImage = wishlistButton.getElementsByTagName("img")[0];
let wishlistCheck = true;

changeWishlistIcon();

function changeWishlistIcon() {
    let wishlistedImageSource = "../assets/images/icons/icon-heart-red.png";
    let wishlistImageSource = "../assets/images/icons/icon-heart-white.png";
    wishlistButton.addEventListener("click", function(){
            if (wishlistCheck) {
                wishlistImage.src = wishlistedImageSource;
                wishlistCheck = false;
            } else {
                wishlistImage.src = wishlistImageSource;
                wishlistCheck = true;
            }

        
        
    });
}