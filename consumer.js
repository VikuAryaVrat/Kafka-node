// var Kafka = require('node-rdkafka');
// var consumer = Kafka.KafkaConsumer({
//   'group.id': 'pkkk',
//   'metadata.broker.list': '192.168.1.116:9092'
// }, {});

// consumer.connect();
// try {
//   consumer.on('ready', () => {
//     // Subscribe to the librdtesting-01 topic
//     // This makes subsequent consumes read from that topic.
//     console.log("ready.......");
//     consumer.subscribe(['Yadav1']);

//     // Read one message every 1000 milliseconds
//     console.log("ghjg");
//     consumer.consume();
//   }).on('data', (data) => {


//     console.log("hji");
//     // console.log('Message found!  Contents below.');
//     console.log(`received mesage :${data.value}`);
//   });
// } catch (error) {
//   console.log(error);
// }



const { Kafka } = require("kafkajs");

async function consume() {
  const kafka = new Kafka({
    clientId: "test",
    brokers: ["192.168.1.116:9092"],
    // connectionTimeout: 3000,
    // authenticationTimeout: 10000,
    // reauthenticationThreshold: 10000,
  });

  const consumer = kafka.consumer({ groupId: "vikrant" });
  await consumer.connect();
  console.log("Consumer connected");
//subscribe from topic match
  await consumer.subscribe({
    topic: "Arya",
    fromBeginning: true,
  });
  await consumer.subscribe({
    topic: "Arya",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      // 1. topic
      // 2. partition
      // 3. messages

      console.log(
        `To ${topic} -> message ${message.value.toString()}`
      );
    },
  });

}
consume();



// const kafka = require ('kafka-node');
// // const bp = require('body-parser');
// const config = require('./config');
// // const { KafkaConsumer } = require('node-rdkafka');
// try {
// // const consumers = kafka.Consumer;
// const client = new kafka.KafkaClient(config.kafka_server);
// let consumer = new kafka.Consumer(
// client,
// [{ topic: config.topic, partition: 0 }],
// {
// autoCommit: false,
// fetchMaxWaitMs: 1000,
// fetchMaxBytes: 1024 * 1024,
// encoding: 'utf8',
// fromOffset: false
// }
// );
// consumer.on('message', async function(message) {
// // console.log('here');
// console.log(
// 'kafka-> ',
// message.value
// );
// })
// consumer.on('error', function(err) {
// console.log('error', err);
// });
// }
// catch(e) {
// console.log(e);
// }