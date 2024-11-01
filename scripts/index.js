
    import renderAbilities from "./abilities.js";
    import renderItems from "./items.js";
    import renderStats from "./stats.js";
    
    const inputData = document.querySelector('.js-pokemon-name');
    const checkBtn = document.querySelector('.js-pokemon-check-btn');
    let title = document.querySelector('.js-pokemon---name');
    let abilitiesText = document.querySelector('.js-abilities');
    let itemsText = document.querySelector('.js-items');
    let pokemonStats = document.querySelector('.js-base-stats');
    abilitiesText.innerHTML = `<strong> Abilities: </strong> `;
    itemsText.innerHTML = `<strong> Items: </strong> `;
    pokemonStats.innerHTML = `<strong> Stats: </strong>`


    async function fetchData(name){
        const imageElement = document.getElementById('pokemonSprite');
       
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if(!response.ok){
                title.innerHTML = `nie odnaleziono takiego pokemona:${name} `
                imageElement.src = "../images/question-mark.png";
                itemsText.style.display = "none"  
                abilitiesText.style.display = "none"
                pokemonStats.style.display = "none";
                throw new Error("Could not fetch resource");  
               
            }
            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;
           
            imageElement.src = pokemonSprite;
            imageElement.style.display = "block";
            title.innerHTML = data.name.toUpperCase();
        
            const abilities = data.abilities;
            renderAbilities(abilities)

            const items = data.held_items;
            renderItems(items)
        
           const stats = data.stats;
           renderStats(stats)
        }
        catch(error){
            console.log(error);
        }
    }

    function displayPokemon(){
        if(!inputData.value){
            return
        }
        abilitiesText.innerHTML = `<strong> Abilities: </strong> `;
        itemsText.innerHTML = `<strong> Items: </strong> `;
        pokemonStats.innerHTML = `<strong> Stats: </strong>`
  
        fetchData( inputData.value.toLowerCase());
        inputData.value = "";
    }

    checkBtn.addEventListener('click', displayPokemon)

    window.addEventListener('keydown', ()=>{
        if(event.key === "Enter"){
            displayPokemon()
        }
    })


