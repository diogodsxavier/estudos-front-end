import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Denize',
      sobrenome: 'Xavier',
      email: 'denize@gmail.com',
      idade: 37,
      peso: 80,
      altura: 1.65,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
