// JavaScript FILE CONTAINING FUNCTIONS RELATED TO EXTRACTING INFORMATION FROM USER ENTERED URL LINKS
/* 
    1. LOOK FOR SITES NAME (YOUTUBE, SPOTIFY, SOUNDCLOUD, VIMEO)
    2. GET UNIQUE IDENTIFIER OF MEDIA FROM LINK OR HOST SITES API
    3. DEPENDING ON (1) GENERATE EMBED CODE (AUTO PLAY, SHOW CONTROLS, )
*/

//GENERAL

var myId;

function getSite(domain) {
    //var url = document.getElementById('myUrl').value;
    //var regExp = /^.*()([^#\&\?]*).*/;
    //var match = url.match(regExp);

    //if (match == 'youtube') {
    //    loadYT();
    //} else if (match == 'vimeo') {
    //    loadVIMEO();
    //} else {
    //    return 'error';
    //}

    if (domain == 'youtube' || domain == 'youtu') {
        loadYT();
    } else if (domain == 'vimeo') {
        loadVIMEO();
    } else {
        return 'error';
    }
}
function domain_from_url() {
    var url = document.getElementById('myUrl').value;
    var result
    var match
    if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)\./im)) {
        result = match[1]
        if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
            result = match[1]
        }
    }
    document.getElementById('myDomain').innerHTML = result;
    getSite(result);
}

//YOUTUBE
function getYTid(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}


function loadYT() {
    var myUrl = document.getElementById('myUrl').value;
    myId = getYTid(myUrl);

    document.getElementById('myId').innerHTML = myId;
    
    document.getElementById('main-player').innerHTML ='<iframe width="560" height="315" src="//www.youtube.com/embed/' + myId + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
}


//VIMEO
function getVIMEOid(url) {
    var regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
    var match = url.match(regExp);
    if (match[3].length == 9) {
        return match[3];
    } else {
        return 'error';
    }
}


function loadVIMEO() {
    var myUrl = document.getElementById('myUrl').value;
    myId = getVIMEOid(myUrl);

    document.getElementById('myId').innerHTML = myId;

    document.getElementById('main-player').innerHTML = '<iframe width="560" height="315" src="http://player.vimeo.com/video/' + myId + '?autoplay=1&title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" frameborder="0" allowfullscreen></iframe>';
}
