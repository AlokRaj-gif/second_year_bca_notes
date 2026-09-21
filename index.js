window.addEventListener('scroll', function () {
    document.body.classList.toggle('has-scrolled', window.scrollY > 0);
});

function selectSem(button) {
    const parent = button.closest('.segmented-bar');
    parent.querySelectorAll('.seg-btn').forEach(function (item) {
        item.classList.remove('active');
    });
    button.classList.add('active');
}
