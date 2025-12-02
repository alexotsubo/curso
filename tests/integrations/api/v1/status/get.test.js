test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  // Valida se updated_at está definido
  expect(responseBody.updated_at).toBeDefined();

  // Valida se updated_at é uma data válida no formato ISO 8601
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  // TESTE 1: Valida a estrutura de dependencies.database.version
  // Verifica se a versão do PostgreSQL está presente na resposta
  expect(responseBody.dependencies.database.version).toBeDefined();
  // Garante que a versão é uma string (ex: "16.0")
  expect(responseBody.dependencies.database.version).toEqual("16.0");

  // TESTE 2: Valida dependencies.database.max_connections
  // Verifica se o número máximo de conexões está presente
  expect(responseBody.dependencies.database.max_connections).toBeDefined();
  // Garante que max_connections é um número
  expect(typeof responseBody.dependencies.database.max_connections).toBe(
    "number",
  );
  // Valida que o valor é maior que 0 (configuração válida do PostgreSQL)
  expect(responseBody.dependencies.database.max_connections).toBeGreaterThan(0);

  // TESTE 3: Valida dependencies.database.opened_connections
  // Verifica se o número de conexões abertas está presente
  expect(responseBody.dependencies.database.opened_connections).toBeDefined();
  // Garante que opened_connections é um número
  expect(typeof responseBody.dependencies.database.opened_connections).toBe(
    "number",
  );
  // Valida que existe pelo menos 1 conexão aberta (a própria consulta)
  expect(
    responseBody.dependencies.database.opened_connections,
  ).toBeGreaterThanOrEqual(1);
  // Valida que opened_connections não ultrapassa max_connections
  expect(
    responseBody.dependencies.database.opened_connections,
  ).toBeLessThanOrEqual(responseBody.dependencies.database.max_connections);
});
