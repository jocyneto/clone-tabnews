test("GET to api/v1/status should return 200", async () => {
  //é igual ao CURL o fetch
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
