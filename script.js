const axios = require('axios');

axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(function (resp){
        console.log(resp.data.facts[0]);
    })
    .catch(function (err){
        console.log(err);
    })