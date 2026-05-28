function scrollTo(id) {
    document.getElementById(id).scrollIntoView();
}

function showMsg() {
    alert('Thanks for contacting! We will reply soon.');
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#0f0f1e';
    } else {
        nav.style.background = '#1a1a2e';
    }
});
