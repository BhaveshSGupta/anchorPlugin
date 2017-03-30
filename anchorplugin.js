(function($) {
    $.fn.anchorplugin = function() {
        Array.from(document.querySelectorAll('a')).forEach( a => {
            a.classList.add( location.hostname === a.hostname || !a.hostname.length ? 'apLocal' : 'apExternal' );
        });
        this.filter("a.apExternal").each(function() {
            $(this).attr({target:"_blank",title:"Opens in a new window"});
        });
        return this;
    };
}(jQuery));