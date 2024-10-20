
document.getElementById('submit').addEventListener("click",function(){
 let description = document.getElementById('Description')
let title = document.getElementById('title')
    document.getElementById('right-section').innerHTML += `<div class="container mb-2 my-border p-4 rounded text-white">
                <h3 class="fw-medium m-0 text-center color-pink">${title.value}</h3>
                <p class="fw-medium m-0">${description.value}</p>
                <div class="pt-2"><button type="button" class="btn bg-pink text-light" name="delete">Delete</button></div>
            </div>`
            document.getElementsByName('delete').forEach((value)=>{
           console.log(value)
           value.addEventListener("click",function(){
            this.parentNode.parentNode.remove()
           })
            })
           
            // document.getElementByName('delete').addEventListener("click",function(e){
            //     console.log("hi")
            //     this.parentNode.parentNode.remove();
            // })
})


// changing bg 
let bgVar = document.getElementsByName('option-bg')
bgVar.forEach((value)=>{
    // console.log(value.value)
    value.addEventListener("click",function(){
        
      let classVar = document.getElementById('right-section').classList[3]
      document.getElementById('right-section').classList.replace(classVar,value.value)
    }
)
})