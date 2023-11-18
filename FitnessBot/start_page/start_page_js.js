// Made by Uzman Arfan
var count=5;
var counter=setInterval(timer, 1000);

function timer(){
    count=count-1;
    if (count <= 0){
        clearInterval(counter);
        window.location.href = "../main_web_page/main_web_page_html.html";
        return;
    }
}
