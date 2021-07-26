//console.log("hello")
var a=document.getElementsByTagName("li");
//console.log(a)
var b=a[0].style;
var prev=null;
var prev2=null;
var prev3=null;
for(var i=0;i<a.length;i++){
  a[i].addEventListener('mouseover',function1);
  a[i].addEventListener('mouseout',function2);
  a[i].addEventListener('click',function3);
}
function function1(e){
  this.style.backgroundColor="#ff0066";
}
function function2(e) {
  this.style=b;
}
function function3(e){
  if(prev2!=null){
    prev2.pause();
    prev2.currentTime=0;
  }
  var z=document.getElementsByTagName('audio');
  //console.log(z)
  var y=this.getAttribute("data-key");
  //console.log(y);
  for(var i=0;i<z.length;i++){
    if(z[i].getAttribute("data-key")===y){
      prev2=z[i];
      z[i].currentTime=0;
      z[i].play();
      for(var j=0;j<a.length;j++){
        if(a[j].getAttribute("data-key")==z[i].getAttribute("data-key")){
          a[j].style.border="3px solid #ffff00";
          a[j].style.boxShadow="0 0 10px #ffff1a";
        }
      }
    }
  }
} 
var x=document.querySelectorAll('audio');
//console.log(x)
var y=x[0].getAttribute("data-key")
//console.log(y)
var alpha=null;
window.addEventListener('keydown',function4);
function function4(e) {
  if(prev3!=null)
    prev3.style=b;
  if(alpha!=null){
    clearTimeout(alpha);
    alpha=null;
  }
  //console.log(e.key);
  for(var i=0;i<x.length;i++){
    var z=x[i].getAttribute("data-key");
    if(z===e.key){
      if(prev!=null){
        prev.pause();
        prev.currentTime=0;
      }
      prev=x[i];
      x[i].currentTime=0;//rewind the audio to the start
      x[i].play();
      for(var j=0;j<a.length;j++){
        if(a[j].getAttribute("data-key")==x[i].getAttribute("data-key")){
          a[j].style.border="3px solid #ffff00";
          a[j].style.boxShadow="0 0 10px #ffff1a";
          a[j].style.backgroundColor="#ff0066";
          prev3=a[j];
          var c=x[i].duration*1000+500;
          alpha=setTimeout(function(){
           prev3.style=b;
          },c);
        }
      }
    }
  }
  return;
}