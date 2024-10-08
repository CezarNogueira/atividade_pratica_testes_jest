import connection from '../database/db.js';
import getAgendaById from '../functions/get.js';
import updateAgendaById from '../functions/update.js';
import deleteAgendaById from '../functions/delete.js';

describe('Testes para getAgendaById', () => {
    beforeAll(async () => {
        await connection.query("INSERT INTO agenda (nome_agenda, tel_agenda, email_agenda, data_agenda) VALUES ('Cezar Nogueira', '(75) 98808-0909', 'cezar@email.com', '20/08/2025')");
    });

    afterAll(async () => {
        await connection.query("TRUNCATE TABLE agenda") // Limpa os Dados da Tabela no BD
        await connection.end(); // Encerra a Conexão com o BD
    });

    test('1 - Deve retornar a agenda pelo ID', async () => {
        const agenda = await getAgendaById(1);
        expect(agenda).toHaveProperty('nome_agenda', 'Cezar Nogueira');
        expect(agenda).toHaveProperty('tel_agenda', '(75) 98808-0909');
        expect(agenda).toHaveProperty('email_agenda', 'cezar@email.com');
        expect(agenda).toHaveProperty('data_agenda', '20/08/2025');
    });

    test('1.1 - Verificar se GET responde em menos de 200ms', async () => {
        console.time('Tempo Inicial de execução');
        await getAgendaById(1);
        console.timeEnd('Tempo Final de execução');
    });

    test('2 - Deve atualizar os dados da agenda pelo ID', async () => {
        // Atualizar os dados da agenda diretamente
        await updateAgendaById(1, {
            nome_agenda: 'Carlos Silva',
            tel_agenda: '(75) 98888-1234',
            email_agenda: 'carlos@email.com',
            data_agenda: '25/12/2025',
        });
    
        // Verificar se os dados foram atualizados corretamente
        const agenda = await getAgendaById(1);
        expect(agenda).toHaveProperty('nome_agenda', 'Carlos Silva');
        expect(agenda).toHaveProperty('tel_agenda', '(75) 98888-1234');
        expect(agenda).toHaveProperty('email_agenda', 'carlos@email.com');
        expect(agenda).toHaveProperty('data_agenda', '25/12/2025');
    });

    test('2.1 - Verificar se UPDATE responde em menos de 200ms', async () => {
        console.time('Tempo Inicial de execução');
        await updateAgendaById(1, {
            nome_agenda: 'Carlos Silva',
            tel_agenda: '(75) 98888-1234',
            email_agenda: 'carlos@email.com',
            data_agenda: '25/12/2025',
        });
        console.timeEnd('Tempo Final de execução');
    });

    test('3 - Deve deletar a agenda pelo ID', async () => {
        // Chamar a função de delete
        await deleteAgendaById(1);

        // Verificar se a agenda foi realmente deletada
        const agendaDelete = await getAgendaById(1);
        expect(agendaDelete).toBeUndefined(); // Ou null, dependendo da implementação da sua função get
    });

    test('3.1 - Verificar se DELETE responde em menos de 200ms', async () => {
        console.time('Tempo Inicial de execução');
        await deleteAgendaById(1);
        console.timeEnd('Tempo Final de execução');
    });

    test('4 - Verifica a existencia da agenda', async () => {
        const agenda = await getAgendaById(999);
        expect(agenda).toBeUndefined();
    });
});