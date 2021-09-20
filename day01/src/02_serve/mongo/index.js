(async () => {
  console.log("mongodb begin");
  const { MongoClient } = require('mongodb');
  const client = new MongoClient(
    'mongodb://localhost:27017',
    {
      useNewUrlParser: true
    }
  );
  let ret = await client.connect();
  const db = client.db('test');
  const fruits = db.collection('fruits');
  console.log(fruits.findOne());
  // 添加文档
  // ret = await fruits.insertOne({
  //   name: "苹果",
  //   price: 3.14
  // });
  // console.log('insert:', ret);
})()