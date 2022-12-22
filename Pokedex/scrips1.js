const getPokemons = async ()=>{
    try{
        //Llamada a la api
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const datos = await response.json();
        console.log(datos.result[0].url);

        //incluye html
        let pokemons = ''; 
        for (const pokemon of datos.results){
            let response_detail = await fetch(pokemon.url);
            pokemon_data = await response_detail.json()

            let types = [];
            console.log(pokemon_data.types);
            for (const item of pokemon_data.types) {
                types.push(item.type.name);
            }
            types_str = types.join(', ');
            pokemons = pokemons + `<div class='pokemon' style='background-color: rgb(222,253,224');'>
            <div class='img-container'>
            <img src='${pokemon_data.sprites.front_default}' alt='Bulbasaur'>
            </div>
            <div class='info'>
            <span class='number'>${pokemon_data.id}</span>
            <h3 class='name'>${pokemon_data.name}</h3>
            <small class='type'>Types: <span>${types_str}</span></small>
            </div>
            </div>`
        }
        document.getElementById('poke-container').innerHTML = pokemons
    }
    catch(error){
        console.log(error);
    }
}
getPokemons();