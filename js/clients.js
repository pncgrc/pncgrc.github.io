const body = document.getElementById("klanten");
const title = document.createElement("h1");
title.innerText = "Leer onze klanten kennen!";
body.appendChild(title);
generateClients();

async function generateClients() {
    try {
        const apiResults = 12;
        const apiUrl = `https://randomuser.me/api/?results=${apiResults}`;
        const response = await fetch(apiUrl);
        const client = await response.json();

        for (let i = 0; i < apiResults; i++) {
            const imageSrc = client.results[i].picture.large;
            const title = client.results[i].name.title;
            const firstname = client.results[i].name.first;
            const lastname = client.results[i].name.last;
            const country = client.results[i].location.country;

            generateClientElement(imageSrc, title, firstname, lastname, country);
        }
        
    } catch (error) {
    console.error('Oepsie! Foutje:', error.message);
  }
}

function generateClientElement(imageSrc, title, firstname, lastname, country) {
    const clientBody = document.createElement("article");
    const clientImage = document.createElement("img");
    const clientName = document.createElement("h3");
    const clientCountry = document.createElement("p");

    clientImage.src = imageSrc;
    clientName.innerText = `${title} ${firstname} ${lastname}`;
    clientCountry.innerText = `Land: ${country}`;

    clientBody.appendChild(clientImage);
    clientBody.appendChild(clientName);
    clientBody.appendChild(clientCountry);

    body.appendChild(clientBody);

}