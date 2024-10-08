import { Agenda } from '../model/agenda.js'; 

const agendaModel = new Agenda();

export const getAgendaById = async (req, res) => {
    try {
        const { id } = req.params;
        const agenda = await agendaModel.getAgendaById(id);

        if (!agenda) {
            return res.status(404).json({ message: 'Agenda não encontrada' });
        }

        return res.status(200).json(agenda);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar agenda', error: error.message });
    }
};

// Função para atualizar a agenda por ID
export const updateAgendaById = async (req, res) => {
    try {
        const { id } = req.params; // Pega o ID da URL
        const novosDados = req.body; // Dados atualizados da agenda

        const result = await agendaModel.updateAgendaById(id, novosDados);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Agenda não encontrada' });
        }

        return res.status(200).json({ message: 'Agenda atualizada com sucesso' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar agenda', error: error.message });
    }
};

// Função para deletar a agenda por ID
export const deleteAgendaById = async (req, res) => {
    try {
        const { id } = req.params; // Pega o ID da URL
        const result = await agendaModel.deleteAgendaById(id);

        if (!result) {
            return res.status(404).json({ message: 'Agenda não encontrada' });
        }

        return res.status(200).json({ message: 'Agenda deletada com sucesso' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar agenda', error: error.message });
    }
};