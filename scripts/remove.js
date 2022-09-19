let LSData_delete = JSON.parse(localStorage.getItem("hotel_delete")) || []
let Tbody = document.querySelector("tbody")

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

        tr.append(name, Room, Room_type, Price, Exrta_service)
        Tbody.append(tr)
    })}

    showDOM(LSData_delete)