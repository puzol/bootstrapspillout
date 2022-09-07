window.onload = function(){

    bssInit();

    var spillAnim = document.querySelector('#spillAnim');

    var options = {
        root: null,
        threshold: 0,
        rootMargin: '-200px',
    }

    var animObserver = new IntersectionObserver( function (entries, observer) {
        entries.forEach(function(entry) {
            if(entry.isIntersecting) {
                spillAnim.classList.add('spill-6-end');
                spillAnim.classList.remove('spill-6-none');
            } else {
                spillAnim.classList.add('spill-6-none');
                spillAnim.classList.remove('spill-6-end');
            }
        });
    },
    options);
    animObserver.observe(spillAnim);
}


