const Modifier = {
    imgShowcaseThumbnailActive : 'img-showcase__thumbnail-active',
    lightboxOpne: 'lightbox--open'
}


// SHOPPING CART 
const elSiteHeaderCartLink = document.querySelector(".js-site-header__cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal")

if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function (e) {
        e.preventDefault();

        elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open')
        // const elIcon = document.querySelector('.site-header__card-icon')
        // const elCart = document.querySelector('.site-header__cart-modal')

        // elIcon.addEventListener('click', function() {
        //     console.log('heee');
        //     elCart.classList.toggle('opener')
        // })
    })
}


// showcase button 
const elImgShowcaseActiveImg = document.querySelector(".img-showcase__active-img")
const elsImgShowcaseThubmnailButton = document.querySelectorAll(".js-img-showcase__thubmnail-button")
const elProductPageGallary = document.querySelector(".product-page__gallary")
const elsImgShowcaseThumbnail = elProductPageGallary.querySelectorAll(".img-showcase__thumbnail")

elsImgShowcaseThubmnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        
        elsImgShowcaseThumbnail.forEach(function (elThumb) {
            // remove active 
            elThumb.classList.remove(Modifier.imgShowcaseThumbnailActive)
        })
            // add active
        elButton.parentElement.classList.add(Modifier.imgShowcaseThumbnailActive)

        elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    })
})





// LIGHTBOX 
const elLightboxToggle = document.querySelector(".js-lightbox-toggle")
const elLightbox = document.querySelector(".lightbox")
const elLightboxCloce = document.querySelector(".lightbox__cloce")

if (elLightboxToggle) {
    elLightboxToggle.addEventListener('click', function () {
        elLightbox.classList.add(Modifier.lightboxOpne) 

    // remove    
    elLightboxCloce.addEventListener('click', function () {
        elLightbox.classList.remove(Modifier.lightboxOpne) 
    })
    })
}

// LIGHTBOX SHOWCASE
const elImglightboxShowcaseActiveImg = elLightbox.querySelector(".img-showcase__active-img")
const elsImgLightboxShowcaseThubmnailButton = elLightbox.querySelectorAll(".js-img-lightbox__thubmnail-button")
const elsImgLightboxShowcaseThumbnail = elLightbox.querySelectorAll(".img-showcase__thumbnail")

elsImgLightboxShowcaseThubmnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        
        elsImgLightboxShowcaseThumbnail.forEach(function (elThumb) {
            // remove active 
            elThumb.classList.remove(Modifier.imgShowcaseThumbnailActive)
        })
            // add active
        elButton.parentElement.classList.add(Modifier.imgShowcaseThumbnailActive)

        elImglightboxShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImglightboxShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    })
})


// LIGHTBOX CONTROL 
const elLightboxControlPrev = elLightbox.querySelector(".js-lightbox-control-prev")
const elLightboxControlNext = elLightbox.querySelector(".js-lightbox-control-next")

elLightboxControlNext.addEventListener('click', function () {
    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail-active')
    // remove active 
    elActiveItem.classList.remove(Modifier.imgShowcaseThumbnailActive)


    let elNextactiveItem;
    if(elActiveItem.nextElementSibling === null) {
        elNextactiveItem = elsImgLightboxShowcaseThumbnail[0]
        elsImgLightboxShowcaseThumbnail[0].classList.add(Modifier.imgShowcaseThumbnailActive)
    } 
    else {
        elNextactiveItem =  elActiveItem.nextElementSibling
    
    }
    elNextactiveItem.classList.add(Modifier.imgShowcaseThumbnailActive)

    elImglightboxShowcaseActiveImg.src = elNextactiveItem.children[0].dataset.imgShowcaseBig;
    elImglightboxShowcaseActiveImg.srcset = `${elNextactiveItem.children[0].dataset.imgShowcaseBig} 1x, 
    ${elNextactiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
})


elLightboxControlPrev.addEventListener('click', function () {
    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail-active')
    // remove active 
    elActiveItem.classList.remove(Modifier.imgShowcaseThumbnailActive)


    let elNextactiveItem;
    if(elActiveItem.previousElementSibling === null) {
        elNextactiveItem = elsImgLightboxShowcaseThumbnail[elsImgLightboxShowcaseThumbnail.length -1]
    } 
    else {
        elNextactiveItem =  elActiveItem.previousElementSibling
    
    }
    elNextactiveItem.classList.add(Modifier.imgShowcaseThumbnailActive)

    elImglightboxShowcaseActiveImg.src = elNextactiveItem.children[0].dataset.imgShowcaseBig;
    elImglightboxShowcaseActiveImg.srcset = `${elNextactiveItem.children[0].dataset.imgShowcaseBig} 1x, 
    ${elNextactiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
})