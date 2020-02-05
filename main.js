var project={
    sand4:"pictures/sand4.jpeg",
    sand3:"pictures/sand3.jpeg",
    sand2:"pictures/sand2.jpeg",
    sand1:"pictures/sand1.jpeg",
    image1:"pictures/lightning1.png",
    image2:"pictures/lightning2.png",


    poem1:"I AM FOREVER walking upon these shores,<br>Betwixt the sand and the foam,<br>The high tide will erase my foot-prints,<br>And the wind will blow away the foam.<br>But the sea and the shore will remain<br>Forever.<br><br>Once I filled my hand with mist.<br>Then I opened it and look, the mist was a worm.<br>And I closed and opened my hand again, and behold there was a bird.<br>And again I closed and opened my hand, and in its hollow stood a man with a sad face, turned upward.<br>And again I closed my hand, and when I opened it there was naught but mist.<br>But I heard a song of exceeding sweetness.<br><br>It was but yesterday I thought myself a fragment quivering without rhythm in the sphere of life.<br>Now I know that I am the sphere, and all life in rhythmic fragments moves within me.<br><br>They say to me in their awakening, \"You and the world you live in are but a grain of sand upon the infinite shore of an infinite sea.\"<br>And in my dream I say to them, \"I am the infinite sea, and all worlds are but grains of sand upon my shore.\"",
    poem2:"我永远在沙岸上行走，<br><br>在沙土和泡沫的中间。<br><br>高潮会抹去我的脚印，<br><br>风也会把泡沫吹走。<br><br>但是海洋和沙岸<br><br>却将永远存在。<br><br><br><br>我曾抓起一把烟雾。<br><br>然后我伸掌一看，哎哟，烟雾变成一个虫子。<br><br>我把手握起再伸开一看，手里却是一只鸟。<br><br>我再把手握起又伸开，在掌心里站着一个容颜忧郁，向天仰首的人。<br><br>我又把手握起，当我伸掌的时候，除了烟雾以外，一无所有。<br><br>但是我听到了一支绝顶甜柔的歌曲。<br><br><br><br>仅仅在昨天，我认为我自己只是一个碎片，无韵律地在生命的穹苍中颤抖。<br><br>现在我晓得，我就是那穹苍，一切生命都是在我里面有韵律地转动的碎片。<br><br>他们在觉醒的时候对我说：\"你和你所居住的世界，只不过是无边海洋的无边沙岸上的一粒沙子。\"<br><br>在梦里我对他们说：\"我就是那无边的海洋，大千世界只不过是我的沙岸上的沙粒。\""

}




/*//////////////////////////dotgrid/////////////////////////////////////*////
var project={
    text:".",
    preview1:"pictures/preview1.png"
  }
  
  
for (var i = 0; i < 7000; i++) {
  
  
      var container=document.querySelector(".grid");
      var dot = document.createElement("p");
      container.appendChild(dot);
      dot.innerHTML=project.text; 
      dot.className="div"+i;
      var hidden=".div"+i;
      console.log("drawing!")
  
    }
  
    var name
    var name2
    var name3
    var name4
    var i=0;
function findXY(){
  var x =event.pageX;
  var y =event.pageY;
  
  name=(x-5)*(y-5)/100;
  name2=".div"+Math.round(name-100);
  name3=".div"+Math.round(name-5);
  name4=".div"+Math.round(name+200);
  


  var sand=document.querySelector("#sand")
  var opacity= x/window.innerWidth;
  var opacity2= y/window.innerHeight;
  sand.style.opacity=opacity*0.9-opacity2*0.01

if(opacity2<0.4){
 
  document.querySelector("#sand").style.zIndex=10;
  document.querySelector("#sand").src=project.sand1; 
  i=1
}



if(opacity<0.3){
  document.querySelector("#sand").style.zIndex=10;
  document.querySelector("#sand").src=project.sand3;
  i=3
}

if(opacity>0.7){
document.querySelector("#sand").style.zIndex=10;
document.querySelector("#sand").src=project.sand2;
 i=4;
}


  console.log("x: "+x+"y: "+y +"name: "+name2)
  return name, name2, name3, name4, x, y;
  }


function dotPosition(){

  document.querySelector(name2).style.color="purple";
  document.querySelector(name2).style.transform="scale(2, 2)";
  document.querySelector(name2).style.position="relative"
  document.querySelector(name2).style.left=30+"px"
  
  document.querySelector(name3).style.color="blue";
  document.querySelector(name3).style.transform="scale(1.1, 1.1)";
  document.querySelector(name3).style.position="relative"
  document.querySelector(name3).style.top=30+"px"
  
  document.querySelector(name4).style.color="red";
  document.querySelector(name4).style.position="relative"
  document.querySelector(name4).style.left=-30+"px"
  document.querySelector(name2).style.transform="scale(0.6, 0.6)";
}




// setTimeout(function dotending(){

//     // document.querySelector(name2).style.marginTop=-10+"px";
//     document.querySelector(name2).style.position="relative"
//     document.querySelector(name2).style.left=-30+"px"
//     document.querySelector(name2).style.transform="scale(0.8, 0.8)";
//     document.querySelector(name3).style.transform="scale(2, 2)";
//     document.querySelector(name3).style.position="relative"
//     document.querySelector(name3).style.top=-50+"px"
//     document.querySelector(name4).style.color="red";
// },2000)




  /*/////////////////////////title//////////////////////////////////////*////


  function titlechange(){

    document.querySelector(".WYY").style.backgroundImage="radial-gradient(circle,grey,white)"
    console.log("colorchange!")
    document.querySelector(".web").style.color="white"
    document.querySelector(".WYY").style.color="white"
}

function titlechange2(){

    document.querySelector(".WYY").style.backgroundImage="none"
    console.log("colorchangeagain!")
    document.querySelector(".web").style.color="white"
}

/*/////////////////////////drop preview//////////////////////////////////////*////


function dropview(){

console.log("dropview")

}
/*/////////////////////////sand////////////////////////////////*/

var i=0
var counter=0;
var counter1=0
function sandclick(){

if(counter==0){
var container=document.querySelector(".grid")
var content=container.innerHTML;
container.innerHTML=content;
var elmnt = document.querySelector(".div2");
// elmnt.scrollTop=600;
$(".div2").animate({scrollTop:380}, 800, 'swing', );
}
if(counter!=0&&counter1==0){
  document.querySelector("#poem1").style.display="block"
  counter1+=1;

}
if(counter==1&&counter1!=0){
  document.querySelector("#poem1").style.display="block"
  counter=+1

}
if(counter==2){
  document.querySelector("#poem1").style.display="none";

}
counter+=1
i+=1
console.log(counter)
return counter, counter1
}
/*/////////////////////////droppreview////////////////////////////////*/

function preview1(){

    document.querySelector(".preview1").style.display="block";
    // document.querySelector(".preview1").style.zIndex=100;
}

function removepreview1(){

    document.querySelector(".preview1").style.display="none";
    // document.querySelector(".preview1").style.opacity=0.2;
    // document.querySelector(".preview1").style.zIndex=1;
}

function preview2(){

    document.querySelector(".preview2").style.display="block";
    // document.querySelector(".preview2").style.zIndex=100;
}

function removepreview2(){

    document.querySelector(".preview2").style.display="none";
    // document.querySelector(".preview2").style.opacity=0.2;
    // document.querySelector(".preview2").style.zIndex=1;
}
function preview3(){

    document.querySelector(".preview3").style.display="block";
    // document.querySelector(".preview3").style.zIndex=100;
}

function removepreview3(){

    document.querySelector(".preview3").style.display="none";
    // document.querySelector(".preview3").style.opacity=0.2;
    // document.querySelector(".preview3").style.zIndex=1;
}


function preview4(){

    document.querySelector(".preview4").style.display="block";
    document.querySelector(".preview4").style.zIndex=100;
}

function removepreview4(){

    document.querySelector(".preview4").style.display="none";
    // document.querySelector(".preview4").style.opacity=0.2;
    // document.querySelector(".preview4").style.zIndex=1;
}

var project={
        sand4:"pictures/sand4.jpeg",
        sand3:"pictures/sand3.jpeg",
        sand2:"pictures/sand2.jpeg",
        sand1:"pictures/sand1.jpeg",
        image1:"pictures/lightning1.png",
        image2:"pictures/lightning2.png"}



function opacity(){


console.log("changeopacity")

}


/*/////////////////////////lightning////////////////////////////////*/

var counter2=0
function lightning(){
if(counter==0){

    $(".div2").animate({scrollTop:380}, 800, 'swing', );

    }



if(counter2==1 &&counter!=0){
  

  document.querySelector("#dian2").style.display="block";
  document.querySelector("#dian3").style.display="block";
  document.querySelector(".lightning").style.display="block";
  document.body.style.backgroundColor="black";
  counter2+=1
}
if(counter2==0 &&counter==1){
  

  document.querySelector("#dian2").style.display="block";
  document.querySelector("#dian3").style.display="block";
  document.querySelector(".lightning").style.display="block";
  document.body.style.backgroundColor="black";
  counter2+=1
}

if(counter2==0 &&counter!=0){
  

  document.querySelector(".lightning").style.display="block";

  document.querySelector("#dian2").style.display="block";
  document.querySelector("#dian3").style.display="block";
  document.body.style.backgroundColor="black";

  counter2+=1
}

if(counter2==2){

  document.querySelector("#dian2").style.display="none";
  document.querySelector("#dian3").style.display="none";
  document.querySelector(".lightning").style.display="none"
  document.body.style.backgroundColor="white";
  document.querySelector("#sand").style.display="block"
  counter2+=1
}
 
counter+=1
console.log("lightning: "+counter2)
return counter2, counter



 }



function horse(){
  $("#horseicon").click(function horse() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#pagetwo").offset().top
    }, 1000);
});
  
}

function number3(){
  $("#number3").click(function number3() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#pagetwo").offset().top
    }, 1000);
});
  
}




function horseback(){
  $("#horsetext").click(function horseback() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".title").offset().top
    }, 1000);
});
  

}



window.setInterval(function(){
  myDate()  }, 1000);

function myDate(){
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var myDate = document.querySelector("#time")
myDate.innerHTML =
h + ":" + m + ":" + s;

console.log("clock")


}



//////////////////////////////////////////////////



var tancounter=0
var times =0
function tanhua(){  


if(tancounter<10 && times==0){
  tancounter+=1
    var image=document.querySelector(".flo1");
  image.src="pictures/tan"+tancounter+".png";
  var opacity=tancounter/10;
  var color="rgb("+0+","+0+","+0+","+opacity+")"
  document.querySelector(".page3").style.backgroundColor=color}
if(tancounter==10){
    var image=document.querySelector(".flo1");
  image.src="pictures/tan8.png";
  document.querySelector(".page3").style.backgroundColor="rgb(0,0,0,0.8)"
  times=1
  tancounter-=2

}

if(tancounter<10 &&times==1&&tancounter>1){
   tancounter-=1
   var image=document.querySelector(".flo1");
  image.src="pictures/tan"+tancounter+".png";
  var opacity=tancounter/10;
  var color="rgb("+0+","+0+","+0+","+opacity+")"
  document.querySelector(".page3").style.backgroundColor=color
  
}

if(tancounter==1 && times==1){
    var image=document.querySelector(".flo1");
    image.src="";
    times=0;
}
return tancounter,times
}

function flower(){

  $("#flowericon").click(function flower() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#wikipage").offset().top
    }, 1000);
});

}



