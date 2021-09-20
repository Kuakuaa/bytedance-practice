(async ()=> {
  const mysql = require('mysql2/promise');
  // 设置连接配置
  const cfg = {
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'kaikeba'
  }
  
  const connection = await mysql.createConnection(cfg);
  let ret = await connection.execute(`CREATE TABLE IF NOT EXISTs test(
    id INT NOT NULL AUTO_INCREMENT,
    message VARCHAR(45) NULL,
    PRIMARY KEY (id))`);
  console.log('create', ret);
  ret = await connection.execute(`INSERT INTO test(message) VALUES(?)`,["abc"]);
  console.log("insert", ret);
  // 结果集
  // a b
  // 1 2
  // 3 4
  const [rows, fields] = await connection.execute('SELECT * FROM test');
  console.log('select', JSON.stringify(rows));
})();