test("/api/v1/status should be 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  responseBody = await response.json();

  // Assertions

  //updated_at
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  //.dependencies.database.version
  expect(responseBody.dependencies.database.version).toBe(checkDBVersion());

  console.log(responseBody);
});

function checkDBVersion() {
  return process.env.NODE_ENV == "development" ? "17.6" : "16.0";
}
