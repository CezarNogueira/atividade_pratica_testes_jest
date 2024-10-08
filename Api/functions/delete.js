import connection from "../database/db";

async function deleteAgendaById(id) {
    const [rows] = await connection.query('DELETE FROM agenda WHERE id_agenda = ?', [id]);
    return rows.affectedRows > 0; // Retorna true se uma linha foi deletada
}

export default deleteAgendaById;