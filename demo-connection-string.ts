import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config(); //read any .env file(s)

if (!process.env.DATABASE_URL) {
    throw "No DATABASE_URL env var provided.  Did you create an .env file?"
}

const config = {
    connectionString: process.env.DATABASE_URL
};


async function doDemo() {
    const client = new Client(config);
    await client.connect();
    const res = await client.query("SELECT * from words");
    console.log(res.rows);
    await client.end();
}

doDemo();
