const banner=document.getElementsByClassName('banner')[0];
const blocks=document.getElementsByClassName('blocks');
for(var i=1; i< 400;i++){
    banner.innerHTML +="<div class='blocks'></div>";
    var duration=Math.random()*5;
    blocks[i].styles.animationDuration = duration+'s';
    blocks[i].styles.animationDuration = duration+'s';
}