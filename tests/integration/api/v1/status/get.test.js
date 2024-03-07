test("GET to api/v1/status should return 200", async () => {
  //é igual ao CURL o fetch
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  const rbUpdateAt = responseBody.update_at;
  const rbDatabaseVersion = responseBody.dependencies.database.version;
  const rbMaxConnections = responseBody.dependencies.database.max_connections;
  const rbActiveConnections =
    responseBody.dependencies.database.active_connections;

  expect(rbUpdateAt).toBeDefined();
  expect(rbDatabaseVersion).toBeDefined();
  expect(rbMaxConnections).toBeDefined();
  expect(rbActiveConnections).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.update_at).toISOString();
  expect(rbUpdateAt).toEqual(parsedUpdatedAt);
  expect(rbDatabaseVersion).toEqual("16.0");
});

/*
ler a implementacao da documentacao node-postgres
verificar o database.js
*/
