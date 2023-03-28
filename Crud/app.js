const tbody = document.querySelector("tbody")
const button = document.querySelector(".btn")


let input = document.querySelectorAll("input")

button.addEventListener("click", () => {
    var tr = document.createElement("tr");

    for (let i = 0; i < input.length; i++) {
        if (input[i].value == "") {
            alert("input daxil edin")
            break;
        }
        else {
            if (input[i].getAttribute("type") !== "radio") {
                let td = document.createElement("td")
                tr.appendChild(td)
                td.innerHTML = input[i].value
                input[i].value = ""
            }
            else {
                if (input[i].checked) {
                    let td = document.createElement("td")
                    tr.appendChild(td)
                    td.innerHTML = input[i].value
                    input[i].checked = false;
                }
            }
        }
    }
    console.log(tr)
    tbody.appendChild(tr);

})