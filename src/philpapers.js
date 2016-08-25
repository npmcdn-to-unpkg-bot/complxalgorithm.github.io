// this api is the work of the PhilPapers team (http://philpapers.org). all rights reserved.

var xpapers_embed_buffer = '';
xpapers_embed_buffer += "<ol class='xpapers_entryList'> <li id='eSANADO-9' class='xpapers_entry'><span class=\"xpapers_citation\"><a class='xpapers_title' href=\"http://philpapers.org/rec/SANADO-9\" target=\"_blank\">A Defense of Modest Foundationalism.</a><span class='xpapers_pubInfo'></span></span><div class=\"xpapers_extras\"></div></li> ";
xpapers_embed_buffer += "<li id='eSANATS-2' class='xpapers_entry'><span class=\"xpapers_citation\"><a class='xpapers_title' href=\"http://philpapers.org/rec/SANATS-2\" target=\"_blank\">Applying the Social Contract Theory in Opposing Animal Rights.</a><span class='xpapers_pubInfo'></span></span><div class=\"xpapers_extras\"></div></li> ";
xpapers_embed_buffer += "<li id='eSANERI-2' class='xpapers_entry'><span class=\"xpapers_citation\"><a class='xpapers_title' href=\"http://philpapers.org/rec/SANERI-2\" target=\"_blank\">Empathy&#39;s Role in Understanding the World.</a><span class='xpapers_pubInfo'></span></span><div class=\"xpapers_extras\"></div></li> ";
xpapers_embed_buffer += "<li id='eSANJTO' class='xpapers_entry'><span class=\"xpapers_citation\"><a class='xpapers_title' href=\"http://philpapers.org/rec/SANJTO\" target=\"_blank\">Jewish Teachings of Mankind and God in the Book of Genesis 1-3.</a><span class='xpapers_pubInfo'></span></span><div class=\"xpapers_extras\"></div></li> ";
function xpapers_embed_init() {
    if (arguments.callee.done) return;
    arguments.callee.done = true;
    var el = document.getElementById('xpapers_gadget');
    if (el) {
        el.innerHTML = xpapers_embed_buffer + "<div style='font-size:smaller;padding-top:12.5px;padding-right:25px;text-align:center'>powered by <a href='http://philpapers.org'>PhilPapers</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href='http://philpapers.org/profile/207902/myworks.pl?refresh=1'>Refresh</a>";
    }
}

if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', xpapers_embed_init, false);
}
(function() {
    /*@*/
    try {
        document.body.doScroll('up');
        return xpapers_embed_init();
    } catch(e) {}
    /* (false) @*/
    if (/loaded|complete/.test(document.readyState)) return xpapers_embed_init();
    /* @*/
    if (!xpapers_embed_init.done) setTimeout(arguments.callee, 30);
})();

if (window.addEventListener) {
    window.addEventListener('load', xpapers_embed_init, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', xpapers_embed_init);
}