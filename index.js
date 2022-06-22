let result=''
function captur(id){
    result+=document.getElementById(id).innerHTML
    input.value=result
   
}

const input=document.getElementById('num')

function slove(){
    result=eval(result)
    input.value=result
    

}

function clean(){
   

    result=''
    input.value=result

    }
