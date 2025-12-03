import database from "infra/database.js";

async function status(request, response) {
  // Captura a data e hora atual no formato ISO 8601
  // Exemplo: "2024-12-02T10:30:45.123Z"
  const updateAt = new Date().toISOString();

  // CONSULTA 1: Versão do PostgreSQL
  // O comando SHOW é específico do PostgreSQL para mostrar configurações
  const databaseVersionResult = await database.query("SHOW server_version;");
  // O resultado vem em um array de objetos, pegamos o primeiro [0]
  // e acessamos a propriedade server_version
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  // CONSULTA 2: Número máximo de conexões permitidas
  // Esta configuração define quantos clientes podem se conectar simultaneamente
  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );
  // Convertemos o resultado de string para número inteiro com parseInt()
  const databaseMaxConnectionsValue = parseInt(
    databaseMaxConnectionsResult.rows[0].max_connections,
  );

  // CONSULTA 3: Conexões atualmente abertas no banco
  // Primeiro, pegamos o nome do banco das variáveis de ambiente
  const databaseName = process.env.POSTGRES_DB;

  // pg_stat_activity é uma tabela do sistema que mostra todas as conexões ativas
  // Filtramos apenas as conexões do nosso banco específico (WHERE datname = $1)
  // O $1 é substituído pelo valor em 'values' (parâmetro seguro contra SQL injection)
  // ::int converte o resultado da contagem para inteiro no próprio PostgreSQL
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  // Pegamos o resultado da contagem
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  // Retorna a resposta em formato JSON com status HTTP 200 (sucesso)
  response.status(200).json({
    updated_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: databaseMaxConnectionsValue,
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}

export default status;
