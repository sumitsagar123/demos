let LSData=JSON.parse(localStorage.getItem("hotel_data"))||[]
let form=document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj={
        guestName:form.guestName.value,
        roomSize:form.roomSize.value,
        roomType:form.roomType.value,
        price:form.price.value,
        extra:form.extra.value
    }
    for(let key in obj){
        if(obj[key]==""){
            alert("Fill all the details.")
            return
        }
    }
    LSData.push(obj)
    localStorage.setItem("hotel_data",JSON.stringify(LSData))
    
})
