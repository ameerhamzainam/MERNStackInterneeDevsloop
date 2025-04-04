async function fetchdata() {
    try {
        const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if (!response.ok) {
            throw new Error("Could not Find the Data");
        }
        const data = await response.json();
        // console.log(data);
        const pokemon_front_image = await data.sprites.front_shiny;
        const pokemon_back_image = await data.sprites.back_shiny;

        // console.log(pokemon_image);
        const img1 = document.getElementById("pokemon-name-image1");
        const img2 = document.getElementById("pokemon-name-image2");

        img1.src = pokemon_front_image;
        img1.style.display = "flex"
        // img1.style.border = " 1px solid black"
        img2.src = pokemon_back_image;
        img2.style.display = "flex"
        // img2.style.border = " 1px solid black"

    }
    catch (err) {
        console.log(err);
    }
}
