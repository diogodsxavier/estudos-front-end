const mongooose = require('mongoose');
const { type } = require('os');

const HomeSchema = new mongooose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongooose.model('Home', HomeSchema);