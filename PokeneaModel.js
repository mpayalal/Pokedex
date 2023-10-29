const express = require('express')
const app = express()
const port = 3000

const pokenea = [
    {
        id: 1,
        name: "Rattata",
        height: 0.3,
        skill: "Fuga",
        image: "",
        phrase: "No mires hacia atrás, Pikachu, el futuro es tan brillante como un día soleado en Medellín.",
    },
    
    {
        id: 2,
        name: "Wigglytuff",
        height: 1.0,
        skill: "Gran encanto",
        image: "",
        phrase: "La diversidad es lo que hace que el mundo Pokémon sea hermoso, al igual que nuestras arepas y empanadas.",
    },

    {
        id: 3,
        name: "Gastly",
        height: 1.3,
        skill: "Levitación",
        image: "",
        phrase: "La vida es como un Pokéball, a veces se abre y otras veces se cierra, pero siempre hay algo valioso adentro.",
    },

    {
        id: 4,
        name: "Hitmonchan",
        height: 1.4,
        skill: "Vista lince",
        image: "",
        phrase: "Recuerda, Bulbasaur, la belleza está en la simplicidad, como una tarde tranquila en el campo paisa.",
    },

    {
        id: 5,
        name: "Jynx",
        height: 1.4,
        skill: "Despiste",
        image: "",
        phrase: "Nuestro viaje en la vida es como una Pokédex, siempre buscando nuevos conocimientos y experiencias.",
    },

    {
        id: 6,
        name: "Meganium",
        height: 1.8,
        skill: "Espesura",
        image: "",
        phrase: "La belleza de la naturaleza Pokémon es un reflejo de la belleza en nuestro propio mundo.",
    },

    {
        id: 7,
        name: "Bellossom",
        height: 0.4,
        skill: "Clorofila",
        image: "",
        phrase: "El poder de la amistad es como la unión de los paisas en una feria de las flores.",
    },

    {
        id: 8,
        name: "Aipom",
        height: 0.8,
        skill: "Fuga",
        image: "",
        phrase: "El café caliente en una mañana fría es como un abrazo cálido en el Pueblito Paisa.",
    },

    {
        id: 9,
        name: "Slowking",
        height: 2.0,
        skill: "Despiste",
        image: "",
        phrase: "El tiempo es como una partida de Pokemón en el parque, siempre en movimiento, siempre presente.",
    },

    {
        id: 10,
        name: "Misdreavus",
        height: 0.7,
        skill: "Levitación",
        image: "",
        phrase: "No importa cuántas veces te caigas, levántate como un Charizard y sigue volando alto.",
    },


]