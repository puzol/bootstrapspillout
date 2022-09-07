function bssInit(){
    var bssRoot = document.documentElement;
    var bssA;
    
    function getScrollbarWidth() {
        return (window.innerWidth - document.documentElement.clientWidth);
    }

    bssRoot.style.setProperty('--scrollbar-width', getScrollbarWidth() + 'px');

    window.onresize = function(){
        clearTimeout(bssA);
        bssA = setTimeout(function(){
            bssRoot.style.setProperty('--scrollbar-width', getScrollbarWidth() + 'px');
        }, 200);
    }
}