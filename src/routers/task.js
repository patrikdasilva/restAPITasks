import { Router } from 'express';
import TaskController from '../controllers/Task.js';

const router  = Router();

router.get('/:limit/:page', TaskController.getAll);
router.get('/:id', TaskController.getOne);
router.post('/', TaskController.create);
router.put('/:id', TaskController.updateAllAttributes);
router.patch('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);

export default router;