/*
All credit to: 
 ________   __        _______   ______   ______   _________   ______   __  __   ___   __      
/_______/\ /_/\     /_______/\ /_____/\ /_____/\ /________/\ /_____/\ /_/\/_/\ /__/\ /__/\    
\::: _  \ \\:\ \    \::: _  \ \\::::_\/_\:::_ \ \\__.::.__\/ \::::_\/_\:\ \:\ \\::\_\\  \ \   
 \::(_)  \ \\:\ \    \::(_)  \/_\:\/___/\\:(_) ) )_ \::\ \    \:\/___/\\:\ \:\ \\:. `-\  \ \  
  \:: __  \ \\:\ \____\::  _  \ \\::___\/_\: __ `\ \ \::\ \    \_::._\:\\:\ \:\ \\:. _    \ \ 
   \:.\ \  \ \\:\/___/\\::(_)  \ \\:\____/\\ \ `\ \ \ \::\ \     /____\:\\:\_\:\ \\. \`-\  \ \
    \__\/\__\/ \_____\/ \_______\/ \_____\/ \_\/ \_\/  \__\/     \_____\/ \_____\/ \__\/ \__\/
  
  (Albert Sun)
  
  github.com/albertsun0
*/

let headers =  document.getElementsByClassName("bucket-header");

for(let i = 0; i< headers.length; i++){
    headers[i].click();
}
let items = document.getElementsByClassName("feed_item");

let index = 0;

const int = setInterval(read, 1500);



function read () {
    items[index].children[0].click();
    index++;
    if(index == items.length){
        clearInterval(int);
    }
}
