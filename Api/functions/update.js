import connection from "../database/db";

async function updateAgendaById(id, novosDados) {
    return await connection.query('UPDATE agenda SET ? WHERE id_agenda = ?', [novosDados, id]);
}

export default updateAgendaById;