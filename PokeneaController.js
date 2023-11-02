const PokeneaModel = require('./PokeneaModel');
const os = require("os");

class PokeneaController{

    static index(req, res){
        let id = Math.floor(Math.random() * PokeneaModel.pokeneasList.length);
        let pokenea = PokeneaModel.pokeneasList[id];
        let response = {
            id: pokenea.getId(),
            name: pokenea.getName(),
            height: pokenea.getHeight(),
            skill: pokenea.getSkill(),
            containerId: os.hostname()
        };
        res.json(response);
    };

    static show(req, res){
        let id = Math.floor(Math.random() * PokeneaModel.pokeneasList.length);
        let pokenea = PokeneaModel.pokeneasList[id];
        let viewData = {
            image: pokenea.getImage(),
            phrase: pokenea.getPhrase(),
            containerId: os.hostname()
        };

        res.render('showPokenea', viewData);
    };

};

module.exports = PokeneaController;