function SprayCanTool(){
    this.name = "spraycantool";
    this.icon = "assets/sprayCan.jpg";

    var points = 13;
    var spread = 10;

    this.draw = function(){
        var r = random(5,10);
        if(mouseIsPressed){
            for(var i = 0; i < points; i++) {
                point(random(mouseX-spread, mouseX + spread), 
                    random(mouseY-spread, mouseY+spread));

            }
        }
    };
}

// //spray can object literal
// sprayCan = {
//     name: "sprayCanTool",
//     icon: "assets/sprayCan.jpg",
//     points: 13,
//     spread: 10,
//     draw: function(){
//         //if the mouse is pressed paint on the canvas
//         //spread describes how far to spread the paint from the mouse pointer
//         //points holds how many pixels of paint for each mouse press.
//         if(mouseIsPressed){
//             for(var i = 0; i < this.points; i++){
//                 point(random(mouseX-this.spread, mouseX + this.spread), 
//                     random(mouseY-this.spread, mouseY+this.spread));
//             }
//         }
//     }
// };