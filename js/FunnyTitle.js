var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://emojipedia-us.s3.amazonaws.com/source/skype/289/cherries_1f352.png");
        document.title = 'πθ·εͺιε»δΊ~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "https://emojipedia-us.s3.amazonaws.com/source/skype/289/cherries_1f352.png");
        document.title = 'πζε°δ½ ε¦~'
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});