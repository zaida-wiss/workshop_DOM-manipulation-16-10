const section = document.getElementById("manipulation");

const rubrikBtn = document.createElement("button");
rubrikBtn.textContent = "Byt rubrik";
section.appendChild(rubrikBtn);
    const rubrik = document.createElement("h1");
    rubrik.textContent = "Gammal rubrik";
    section.appendChild(rubrik);


const paragrafBtn = document.createElement("button");
paragrafBtn.textContent = "Ändra paragraf";
section.appendChild(paragrafBtn);
    const paragraf = document.createElement("p");
    paragraf.textContent = "Det här är den gamla texten";
    section.appendChild(paragraf);


const rubrikColorBtn = document.createElement("button");
rubrikColorBtn.textContent = "Byt färg på rubriken";
section.appendChild(rubrikColorBtn);
    

