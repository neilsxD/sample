window.onload = () =>{
    const button = document.createElement('button');
    button.id = "darkModeButton";
    button.textContent = "dark";

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'darkSetting';




//     const darkModeCheckbox = document.createElement('input');
//     darkModeCheckbox.type = 'checkbox';
//     darkModeCheckbox.id = 'darkSetting';

    
    document.querySelector('#end').prepend(button,input,"save");

    button.addEventListener('click',()=>{ enableDarkMode(); });
    input.addEventListener('click', ()=> storeSetting());

    checkSetting();
};

function checkSetting(){
    chrome.storage.local.get(['enabled'], result =>{
        const isEnabled = result.enabled;
        console.log(isEnabled);

        document.getElementById('darkSetting').checked = isEnabled;

        if(isEnabled) {
            enableDarkMode();
        }
    });
}

function enableDarkMode(){
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor = "grey";
}

function storeSetting(){
    const isEnabled = document.getElementById('darkSetting').checked;
    const setting = {enabled: isEnabled};

    chrome.storage.local.set(setting,()=>{
        console.log(`stored`, setting );
    })
}
    
//     darkModeCheckbox.addEventListener('click',()=>{

//         let isEnabled = document.getElementById("darkSetting");
//         chrome.storage.sync.set({darkModeSetting: isEnabled}, function(result) {
//             console.log( `stored ${result.darkModeSetting}` );
//           });
//     })

//     //checking if settings are enabled or not
//        chrome.storage.sync.get(['darkModeSetting'], function(result) {
//         console.log(result.darkModeSetting);
//      });
    

// }

// function makeBgDark()
// {
//     // document.getElementsByTagName('ytd-app')[0].style.backgroundColor = "grey";
// }