const section= document.getElementById("manipulation");
const h1 = document.querySelector("h1");


const rubrik = document.createElement("h2");
const paragraf = document.createElement("p")
const today = new Date();
const datum = today.toLocaleDateString("sv-SE");

rubrik.textContent= "Min rubrik för dagen";
section.appendChild(rubrik);
rubrik.style.color="#1e3a8a";
rubrik.style.backgroundColor="#107787";
rubrik.style.padding="20px";
rubrik.style.textAlign="center";
section.appendChild(paragraf);
paragraf.textContent= "Idag är det: " + datum;
paragraf.style.color="#7f1bb4ff";
paragraf.style.fontSize="20px";
paragraf.style.textAlign="center";
h1.style.textAlign="center";
