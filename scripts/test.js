$(function() {
    $("ul.topnav li:has(.subnav)").hover(function() {
        $("ul.subnav", this).slideDown('fast').show();
    }, function() {
        $("ul.subnav", this).slideUp('slow');
    });
});