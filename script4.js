const section = document.getElementById("manipulation")

const list = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")

section.appendChild(list)

li1.textContent = "druckit kaffe"
list.appendChild(li1)

li2.textContent = "kodat"
list.appendChild(li2)

li3.textContent = "pausat"
list.appendChild(li3)

li4.textContent = "lärt mig"
list.appendChild(li4)

li5.textContent = "testat övningar"
list.appendChild(li5)
