
// https://meet.google.com/* 
// works on google meet window when in a meet
function toggleVoice (){
    let voice =0;
    document.getElementsByClassName("q2u11")[0].children[voice].children[0].children[0].children[0].click();

}

function toggleVideo (){
    let video =0;
    document.getElementsByClassName("q2u11")[0].children[video].children[0].children[0].children[0].click();

}

// listener for tab, so we know if a user exits the game
function meetTabListener ()
{
    var urlRegex = "https://meet.google.com/*";
    // '*' can be replace by googleMeet link
chrome.tabs.onRemoved.addListener(function(tabId, info) {
    chrome.tabs.get(tabId, function(tab) {
        if (urlRegex.test(tab.url)) {
            /* The tab with ID `tabId`, with a web-page in the
             * `google.com` domain, is being closed. Let's do something... */
            
        }
    });
});
}

// listener for user tap on video or audio button
function audioVideoTapListener(){

}

// to accept or deny joining request
// 0 for deny, 1 to accept
function acceptUser(accept = 1){
    document.getElementsByClassName("XfpsVe J9fJmf")[0].children[accept].click()
}








module.export = {
    toggleVideo,
    toggleVoice,
    acceptUser,
    meetTabListener,
    audioVideoTapListener
    
};

