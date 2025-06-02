const cursor = document.getElementById('cursor');
document.addEventListener('mousemove',(e)=>{
        let x = e.x;
        let y = e.y;
        cursor.style.top = (y-cursor.offsetHeight/2)+"px";
        cursor.style.left = (x-cursor.offsetWidth/2)+"px";
}
);

const contChildrens = document.querySelector('.container').children;
console.log(contChildrens);
for (let i = 0; i < contChildrens.length; i++) {
        contChildrens[i].addEventListener('mouseover',(e)=>{
                cursor.style.transform = "scale(2)";
        });
        contChildrens[i].addEventListener('mouseout', (e) => {
                cursor.style.transform = "scale(1)";
        });
}
