import { Client } from "pg";

async function query(queryObject) {
  let client;
  try {
    client = await getNewClient();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  } finally {
    await client.end();
  }
}

async function getNewClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    ssl: getSSLValues(),
  });

  await client.connect();

  return client;
}

export default {
  query,
  getNewClient,
};

function getSSLValues() {
  return process.env.NODE_ENV == "production" ? true : false;
}
