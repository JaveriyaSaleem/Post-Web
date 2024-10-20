document.getElementById('submit').addEventListener("click",function(){
    // document.getElementById('right-section') = 
})
let bgVar = document.getElementsByName('option-bg')
bgVar.forEach((value)=>{
    console.log(value.value)
    value.addEventListener("click",function(){
        
      let classVar = document.getElementById('right-section').classList[3]
      document.getElementById('right-section').classList.replace(classVar,value.value)
    }
)
})