import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', alunoController.store);

router.put('/:id', alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', alunoController.delete);

export default router;

/*
index -> Lista todos usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
updated -> atualiza um usuário -> PATCH ou PUT
*/
