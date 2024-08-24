function pro(){
    var name1= prompt("Enter the full name:","abc");

if (name1=="null"|| name1== "" ){
    document.getElementById("msg").innerHTML="you did you not enter  any things" ;
} else {
    document.getElementById("msg").innerHTML="Hellow "+name1+" how are you today" ;
}
}