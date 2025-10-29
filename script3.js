const section = document.getElementById("manipulation");
let isColored = false;

const rubrikBtn = document.createElement("button");
rubrikBtn.textContent = "Byt rubrik";
section.appendChild(rubrikBtn);
    const rubrik = document.createElement("h1");
    rubrik.textContent = "Gammal rubrik";
    section.appendChild(rubrik);
        rubrikBtn.addEventListener("click", () => {
            rubrik.textContent = "Ny rubrik -nu händer det saker";
        });


const paragrafBtn = document.createElement("button");
paragrafBtn.textContent = "Ändra paragraf";
section.appendChild(paragrafBtn);
    const paragraf = document.createElement("p");
    paragraf.textContent = "Det här är den gamla texten";
    section.appendChild(paragraf);
        paragrafBtn.addEventListener("click", () => {
            paragraf.textContent = "Nu är det en ny text här.";
        });


const rubrikColorBtn = document.createElement("button");
rubrikColorBtn.textContent = "Byt färg på rubriken";
section.appendChild(rubrikColorBtn);
        rubrikColorBtn.addEventListener("click", () => {
            if (isColored) 
                {rubrik.style.color = "#000000";} 
            else {rubrik.style.color ="#167e95ff";}
            isColored = !isColored;
        });
    

