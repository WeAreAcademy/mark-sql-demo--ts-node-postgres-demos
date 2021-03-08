import pg, { Client } from "pg";

async function doDemo() {
  const client = new Client();
  await client.connect();

  // res is of type : pg.QueryResult<any>
  // You can use intellisense to see the properties it has.
  const res = await client.query("SELECT * from words where category_id = $1", [1]);
  console.log(res.rows);

  await client.end();
}

doDemo();
