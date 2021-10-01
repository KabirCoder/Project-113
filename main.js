function setup(){
    canvas=createCanvas(640,400)
    Canvas.position(150,150);
    video=createcapture(VIDEO);
    video.hide();

}

Fill(255,0,0);
Stroke(255,0,0);
Circle(50, 50, 80)

circle(30, 30, 20);

Fill(0,128,0)
Stroke(0,128,0)
rect(90,40,460,20)

rect(90,420,460,20)







Webcam.set({
    width:350,
    height:350, 
    image_format:'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("output").innerHTML="<img id='capture_image' src='"+data_uri+"'>";
            
        });

 }
 function check(){
    var img1=document.getElementById("capture_image");
    classifier.classify(img1, gotResult);
    }