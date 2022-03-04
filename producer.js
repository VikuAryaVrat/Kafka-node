const { Kafka } = require("kafkajs");

async function produce() {
    const kafka = new Kafka({
        clientId: "test",
        brokers: ["192.168.1.140:9092", "192.168.1.140:9092"],
        connectionTimeout: 3000,
        authenticationTimeout: 1000,
        reauthenticationThreshold: 10000,
    });

    const jerseyNumber = process.argv[2];

    const producer = kafka.producer();
    await producer.connect();
    console.log("Producer connected");

    const players1 = {
        name: "Vikrant",
        Company: "Aryavrat infotech",
        Technique: "Node Js",
        Address: "Aurangabad Bihar",
        Pincode: "824101",
    };
    const players = {
        7: "Dhoni",
        119: "Virat",
        12: "Yuvraj",
        10: "Sachin",
        45: "Rohit",
    };

    const producedData = await producer.send({
        topic: "Arya",
        
        messages: [
            {
                value: JSON.stringify(players),
            },
        ],
    });
    const producedData1 = await producer.send({
        topic: "Arya1",
        messages: [
            {
                value: JSON.stringify(players1),
            },
        ],
    });
    console.log(`Produced data ${JSON.stringify(producedData)}`);
    console.log(`Produced1 data ${JSON.stringify(producedData1)}`);
}

produce();





// const kafka = require ('kafka-node');
// // const bp = require('body-parser');
// const config = require('./config');
// try {
// const Producer = kafka.Producer;
// const client = new kafka.KafkaClient(config.kafka_server);
// const producer = new Producer(client);
// const kafka_topic = 'example';
// const msg ={Name:"parveen",age:20}
// // console.log(kafka_topic);
// let payloads = [
// {
// topic: config.kafka_topic,
// messages: [JSON.stringify(msg)],
// partition:0
// }];
// producer.on('ready', async function() {
// let push_status = producer.send(payloads, (err, data) => {
// if (err) {
// console.log('[kafka-producer -> '+kafka_topic+']: broker failed');
// } else {
// console.log('[kafka-producer -> '+kafka_topic+']: broker success');
// }
// });
// });
// producer.on('error', function(err) {
// console.log(err);
// console.log('[kafka-producer -> '+kafka_topic+']: connection error');
// throw err;
// });
// }
// catch(e) {
// console.log(e);
// }