const Modifier = {
    imgShowcaseThumbnailActive : 'img-showcase__thumbnail-active'
}


// SHOPPING CART 
const elSiteHeaderCartLink = document.querySelector(".js-site-header__cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal")

if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function (e) {
        e.preventDefault();

        elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open')
    })
}


// showcase button 
const elImgShowcaseActiveImg = document.querySelector(".img-showcase__active-img")
const elsImgShowcaseThubmnailButton = document.querySelectorAll(".js-img-showcase__thubmnail-button")
const elsImgShowcaseThumbnail = document.querySelectorAll(".img-showcase__thumbnail")

elsImgShowcaseThubmnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        
        elsImgShowcaseThumbnail.forEach(function (elThumb) {
            // remove active 
            elThumb.classList.remove(Modifier.imgShowcaseThumbnailActive)
        })
        elButton.parentElement.classList.add(Modifier.imgShowcaseThumbnailActive)
        elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;

        console.log(elImgShowcaseActiveImg.src);
        console.log(elButton.dataset.imgShowcaseBig);
        console.log(elButton.dataset.imgShowcaseRetina);
    })
})

// const elIcon = document.querySelector('.site-header__card-icon')
// const elCart = document.querySelector('.site-header__cart-modal')

// elIcon.addEventListener('click', function() {
//     console.log('heee');
//     elCart.classList.toggle('opener')
// })

