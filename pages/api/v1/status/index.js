import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 as message");
  console.log(result.rows);
  response.status(200).json({ status: "alive" });
}

export default status;
