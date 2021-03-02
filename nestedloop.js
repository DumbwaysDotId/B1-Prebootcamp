// for (counter = 1; counter <= 4; counter++){
//     console.log("Counter from 1 to 4")
//     for(counter2 = 1; counter2 <= 4; counter2++){
//         console.log(counter2)
//     }
// }

// function loop(){
//     var text = ""
//     var i;
//     var j;
//     for(i = 0; i < 5; i++){
//         for(j=0; j < 2; j++){
//             text += "The number is i = " + i + " and j = " + j
//         }
//     }

//     console.log(text)
// }

// var height = 2;
// var width = 8;

// var  col = 0;
// var row = 0;

// while (row < height){
//     col = 0

//     while(col < width){
//         document.write("#")
//         col++
//     }
//     document.write("<br>");
//     row++
// }
//  document.write("End Loops")


var value1 = 0;
var value2 = 0;
var value3 = 0;
var value4 = 0;

    do{
        do{
            do{
                do{
                    document.write("***")
                    document.write("<br>")
                    value4 ++
                }while(value4 < 2)
                value3++
            }while(value3 < 2)
            value2++
        }while(value2 < 2)
        value1++
    }while(value1 < 2)