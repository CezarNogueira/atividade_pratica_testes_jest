import express from 'express';
import { getAgendaById, updateAgendaById, deleteAgendaById } from '../controller/agendaController.js';

const router = express.Router();

// Rota para buscar agenda pelo ID
router.get('/agenda/:id', getAgendaById);

// Rota para atualizar agenda pelo ID
router.put('/agenda/:id', updateAgendaById);

// Rota para deletar agenda pelo ID
router.delete('/agenda/:id', deleteAgendaById);

export default router;
