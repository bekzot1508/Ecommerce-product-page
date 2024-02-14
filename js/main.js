
const elSiteHeaderCartLink = document.querySelector(".js-site-header__cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal")


if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function (e) {
        e.preventDefault();

        elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open')
    })
}


// const elIcon = document.querySelector('.site-header__card-icon')
// const elCart = document.querySelector('.site-header__cart-modal')

// elIcon.addEventListener('click', function() {
//     console.log('heee');
//     elCart.classList.toggle('opener')
// })

