


const getPersonajes = async()=>{

    try{

        const response = await fetch("https://rickandmortyapi.com/api/character") 
        const data = await response.json();
        
        return data.results;

    }catch(error){ console.log(`el error es : ${error}`);
    }

}

const crearCards = (results = [] )=>{
    let getPersonajes = document.getElementById("personajesRow");
    results.map ( (results)=>{
    const {id , name, image, species , status, location} = results;
    const { name : nameLocation } = location;

    const divCol = document.createElement("div");
    divCol.classList.add("col-xl-3");
    divCol.classList.add("col-lg-3");
    divCol.classList.add("col-md-3");
    divCol.classList.add("col-sm-3");
    divCol.classList.add("col-sm-12");
    divCol.classList.add("col-xs-12");
    divCol.classList.add("mt-2");    
    divCol.classList.add("mb-2");


        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src=image;
        img.alt = `Imagen de ${name}`;
        img.classList.add ("card-body");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("H5");
        title.classList.add("text-title");
        title.textContent = `Nombre : ${name}`;

        const subTitle = document.createElement("p");
        subTitle.classList.add("text-title");
        subTitle.textContent = `Especie : ${species}`;

        
        const subTitle2 = document.createElement("p");
        subTitle.classList.add("text-title");
        subTitle.textContent = `Especie : ${species}`;
        subTitle2.textContent = `Status : ${status}`;


        const nLocation = document.createElement("p");
        nLocation.classList.add("text-title");
        nLocation.textContent = `Localizacion : ${nameLocation}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn","btn-success");
        btnVer.textContent = "Ver mas";
        btnVer.addEventListener("click", ()=> {
            console.log(`El id es : ${id}`);
            console.log(`El nombre es : ${name}`);
            console.log(`La imagen es : ${image}`);
            console.log(`La especie es : ${species}`);
            console.log(`status ${status}`);
            console.log(`La localizacion es : ${location}`);

        });

        divCol.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        card.appendChild(title);
        card.appendChild(subTitle);
        card.appendChild(subTitle2);
        card.appendChild(nLocation);
        card.appendChild(btnVer);


        personajesRow.appendChild(divCol);

})

}

getPersonajes()     
    .then((data)=>{crearCards(data);
    })
    .catch((error)=>{console.log(`el error es : ${error}`);
    })

