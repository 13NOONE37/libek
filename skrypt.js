var i = 0;
var txt = "Hi, my name is Murray Rothbard";
var speed = 100;

function typeWriter() {
    if(i < txt.length) {
        document.querySelector('#hi').innerHTML +=txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter;

function main(value)
{
    if(value==1){
        alert('left');
            document.querySelector('.book:nth-child(1)').style['order']='3';
            document.querySelector('.book:nth-child(2)').style['order']='3';
            document.querySelector('.book:nth-child(3)').style['order']='3';
       
    } else if(value==2) {
        alert('right');
    }
    
}
