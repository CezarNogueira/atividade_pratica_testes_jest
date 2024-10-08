import express from 'express';

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());

app.get('/agenda/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const agenda = await getAgendaById(id);
        if (agenda) {
            res.json(agenda);
        } else {
            res.status(404).json({ message: 'Agenda não existe' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro de Conexão' });
    }
});

console.timeEnd('Tempo para subir o Servidor');

export default app;