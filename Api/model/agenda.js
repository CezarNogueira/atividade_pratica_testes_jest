import connection from "../database/db";

export class Agenda {
    async getAgendaById(id) {
        const [rows] = await connection.query('SELECT * FROM agenda WHERE id_agenda = ?', [id]);
        return rows[0];
    }

    async updateAgendaById(id, novosDados) {
        return await connection.query('UPDATE agenda SET ? WHERE id_agenda = ?', [novosDados, id]);
    }

    async deleteAgendaById(id) {
        const [rows] = await connection.query('DELETE FROM agenda WHERE id_agenda = ?', [id]);
        return rows.affectedRows > 0; // Retorna true se uma linha foi deletada
    }
} 
