const section= document.getElementById("manipulation");
const bgColorBtn = document.createElement("button");
const newParagrafBtn = document.createElement("button");
const removeParagraf = document.createElement("button");
const toNamesBtn = document.createElement("button");


bgColorBtn.textContent = "Byt bakgrundsfärg";
section.appendChild(bgColorBtn);
bgColorBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#e0f2fe";
});

newParagrafBtn.textContent = "Ny paragraf";
section.appendChild(newParagrafBtn);
newParagrafBtn.addEventListener("click",() => {
    const nyParagraf = document.createElement("p");
    nyParagraf.textContent = "Jag sov 7 timmar i natt!";
    section.appendChild(nyParagraf);
})

removeParagraf.textContent = "Radera senaste paragraf";
section.appendChild(removeParagraf);
removeParagraf.addEventListener("click" , () => {
    const senasteParagraf = section.querySelector("p:last-of-type");
    if(senasteParagraf) {
        senasteParagraf.remove();
    }
})


toNamesBtn.textContent = "Byt till era namn";
section.appendChild(toNamesBtn);
toNamesBtn.addEventListener("click",() => {
    const h1=document.querySelector("h1");
    h1.textContent="Zaida, Zaida, Zaida";
})



bgColorBtn.style.backgroundColor="#555555";


