var a = 5
var b = 1;
var c = 1;
var d = 1;


for(b=1; b <= a; b++){
    d = 0
    while(d != (a-b)){
        document.write("<br>")
        d++
    }

    for(c=1; c <= (2*b) - 1; c++){
        if(c==1 || c==((2*b)-1)){
            document.write(b)
        }else {
            document.write("  ")
        }
    }

}