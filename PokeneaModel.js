class Pokenea{
    constructor(id, name, height, skill, image, phrase){
        this.id = id;
        this.name = name;
        this.height = height;
        this.skill = skill;
        this.image = image;
        this.phrase = phrase;
    }

    get getId(){
        return this.id;
    }

    set setName(name){
        this.name = name;
    }

    get getName(){
        return this.name;
    }

    set setHeight(height){
        this.height = height;
    }

    get getHeight(){
        return this.height;
    }

    set setSkill(skill){
        this.skill = skill;
    }

    get getSkill(){
        return this.skill;
    }

    set setImage(image){
        this.image = image;
    }

    get getImage(){
        return this.image;
    }

    set setPhrase(phrase){
        this.phrase = phrase;
    }

    get getPhrase(){
        return this.phrase;
    }

};

pokeneas = [
    new Pokenea(1, "Rattata", 0.3, "Fuga", "https://storage.googleapis.com/pokeneas_fotos/Rattata.png", "No mires hacia atrás, Pikachu, el futuro es tan brillante como un día soleado en Medellín."),
    new Pokenea(2, "Wigglytuff", 1.0, "Gran encanto", "https://storage.googleapis.com/pokeneas_fotos/Wigglytuff.png","La diversidad es lo que hace que el mundo Pokémon sea hermoso, al igual que nuestras arepas y empanadas."),
    new Pokenea(3, "Gastly", 1.3, "Levitación", "https://storage.googleapis.com/pokeneas_fotos/Gastly.png", "La vida es como un Pokéball, a veces se abre y otras veces se cierra, pero siempre hay algo valioso adentro."),
    new Pokenea(4, "Hitmonchan", 1.4, "Vista lince", "https://storage.googleapis.com/pokeneas_fotos/Hitmonchan.png", "Recuerda, Bulbasaur, la belleza está en la simplicidad, como una tarde tranquila en el campo paisa."),
    new Pokenea(5, "Jynx", 1.4, "Despiste", "https://storage.googleapis.com/pokeneas_fotos/Jynx.png", "Nuestro viaje en la vida es como una Pokédex, siempre buscando nuevos conocimientos y experiencias."),
    new Pokenea(6, "Meganium", 1.8, "Espesura", "https://storage.googleapis.com/pokeneas_fotos/Meganium.png", "La belleza de la naturaleza Pokémon es un reflejo de la belleza en nuestro propio mundo."),
    new Pokenea(7, "Bellossom", 0.4, "Clorofila", "https://storage.googleapis.com/pokeneas_fotos/Bellossom.png", "El poder de la amistad es como la unión de los paisas en una feria de las flores."),
    new Pokenea(8, "Aipom", 0.8, "Fuga", "https://storage.googleapis.com/pokeneas_fotos/Aipom.png", "El café caliente en una mañana fría es como un abrazo cálido en el Pueblito Paisa."),
    new Pokenea(9, "Slowking", 2.0, "Despiste", "https://storage.googleapis.com/pokeneas_fotos/Slowking.png", "El tiempo es como una partida de Pokemón en el parque, siempre en movimiento, siempre presente."),
    new Pokenea(10, "Misdreavus", 0.7, "Levitación", "https://storage.googleapis.com/pokeneas_fotos/Misdreavus.png", "No importa cuántas veces te caigas, levántate como un Charizard y sigue volando alto.")
];

module.exports = {Pokenea, pokeneas};