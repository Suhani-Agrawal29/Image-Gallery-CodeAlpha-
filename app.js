let Images = document.querySelectorAll("img");
let fullImgBox = document.getElementById("fullImgBox");
let imgfullImgBox = document.getElementById("fullImg");
let close = document.querySelector("span");

Images.forEach((img, index) =>{
    img.addEventListener("click", () => {
        openModal(`Images/image${index}.jpg`);
    });
});

close.addEventListener("click", () => (fullImgBox.style.display = 'none'));

function openModal(picture) {
    fullImgBox.style.display = 'flex';
    imgfullImgBox.src = picture;
}