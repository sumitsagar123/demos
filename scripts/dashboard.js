let LSData = JSON.parse(localStorage.getItem("hotel_data")) || []
let Tbody = document.querySelector("tbody")
let Filter_DOM = document.getElementById("filter")
let search=document.getElementById("search")
let LSData_delete = JSON.parse(localStorage.getItem("hotel_delete")) || []
let newdata=[]
function showDOM(data) {
    Tbody.innerHTML = null
    data.forEach(function (element,index) {
        let tr = document.createElement("tr")

        let name = document.createElement("td")
        name.innerText = element.guestName

        let Room = document.createElement("td")
        Room.innerText = element.roomSize

        let Room_type = document.createElement("td")
        Room_type.innerText = element.roomType

        let Price = document.createElement("td")
        Price.innerText = element.price

        let Exrta_service = document.createElement("td")
        Exrta_service.innerText = element.extra

        let Remove = document.createElement("td")
        Remove.innerText = "Remove"
        Remove.style.backgroundColor = "red"
        Remove.style.color = "white"
        Remove.style.cursor = "pointer"
        
        Remove.addEventListener("click", function (event) {

            event.target.parentNode.remove()

            let filter = LSData.filter(function (ele, i) {
                if (index == i) {
                    return false
                } else {
                    return true
                }
            })
            // newdata.push(element)
            localStorage.setItem("hotel_delete", JSON.stringify(filter))
            localStorage.setItem("hotel_data", JSON.stringify(filter))
            // console.log("filter")
           // showDOM(LSData)
        })


        tr.append(name, Room, Room_type, Price, Exrta_service, Remove)
        Tbody.append(tr)
    });
}
showDOM(LSData)

search.addEventListener("input",function(){
    let item=LSData.filter(function(el){
        return el.guestName.toLowerCase().includes(search.value.toLowerCase())
    })
    showDOM(item)
})



document.getElementById('filter').addEventListener("change",function(){
    let filtered=LSData.filter(function(el){
        console.log(el.roomType)

                if(el.roomType===Filter_DOM.value){

                    return true
                }else{
                    return false
                }
            })
             showDOM(filtered)
        
})


document.getElementById('search').addEventListener("input",function(){
    let filtered=LSData.filter(function(el){
        console.log(el.roomType)

                if(el.roomType===Filter_DOM.value){

                    return true
                }else{
                    return false
                }
            })
             showDOM(filtered)
        
})


