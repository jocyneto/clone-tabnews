import database from "infra/database.js";

//api/status
async function status(request, response) {
  const updateAt = new Date().toISOString();
  const databaseVersion = await database.query("SHOW server_version;");
  const databaseMaxConnections = await database.query("SHOW max_connections;");
  const databaseActiveConnections = await database.query(
    "SELECT COUNT(*) as active_connections FROM pg_stat_activity WHERE state = 'active'",
  );

  const databaseVersionResult = databaseVersion.rows[0].server_version;

  const databaseMaxConnectionsResult =
    databaseMaxConnections.rows[0].max_connections;

  const databaseActiveConnectionsResult =
    databaseActiveConnections.rows[0].active_connections;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionResult,
        max_connections: databaseMaxConnectionsResult,
        active_connections: databaseActiveConnectionsResult,
      },
    },
  });
}

export default status;
