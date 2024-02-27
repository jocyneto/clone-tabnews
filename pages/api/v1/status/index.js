import database from "../../../../infra/database.js";

//api/status
async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "está funcionando óhj!" });
}

export default status;
