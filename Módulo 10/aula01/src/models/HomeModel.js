const mongooose = require('mongoose');

const HomeSchema = new mongooose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongooose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;