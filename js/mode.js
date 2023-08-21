
function setDisplayAppreance(self){
    const body = document.querySelector('body');
    const btn = document.getElementById('btnDisplayMode');
    if(self.value==='다크모드 전환'){
        body.style.backgroundImage = "url(./img/2.gif)";
        body.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.style.backgroundColor = "hotpink";
        self.value = '라이트모드 전환'
    } else{
        body.style.backgroundImage = "url(./img/1.gif)";
        body.style.backgroundColor = "rgb(255, 8, 169)";
        btn.style.color = "white";
        btn.style.backgroundColor = "black";
        self.value = '다크모드 전환'
    }
}
