!function(){var e,t,n,o,d,c;new Swiper(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},simulateTouch:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoheight:!0}),e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")},t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),(d=document.querySelector("[data-menu-open]")).addEventListener("click",(function(){d.classList.toggle("is-open")})),"function"!=typeof(c=window.Element.prototype).matches&&(c.matches=c.msMatchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof c.closest&&(c.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active")}))})),document.getElementById("modal-buy-now-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-buy-now-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-read-more-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-read-more-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-location-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-location-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-franchise-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-franchise-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-ingredients-top-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-ingredients-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-ingredients-mid-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-ingredients-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-ingredients-bot-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-ingredients-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("overlay-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")}))}();
//# sourceMappingURL=index.71d46d7a.js.map
