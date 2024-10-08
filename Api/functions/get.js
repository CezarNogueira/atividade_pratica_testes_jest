import connection from "../database/db";

async function getAgendaById(id) {
    const [rows] = await connection.query('SELECT * FROM agenda WHERE id_agenda = ?', [id]);
    return rows[0];
}

export default getAgendaById;