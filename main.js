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
