function vote(){
    var name = document.getElementsById("name").value;
    var age= document.getElementsById("age").value;
    var res=document.getElementsById("res") 
    if(age>=18){
        res.innerHTML =name+" "+"eligible to vote";
}else{
        res.innerHTML =name+" "+" not eligible to vote";

}

}
