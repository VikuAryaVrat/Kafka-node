const { Kafka } = require("kafkajs");

async function createPartition() {
    const kafka = new Kafka({
        clientId: "test",
        brokers: ["192.168.1.140:9092"],
    });

    const admin = kafka.admin();
    await admin.connect();
    console.log("hii");
    const abc = await admin.createTopics({
        topics: [
            {
                topic: 'task',
                numPartitions: 2,
            },
        ],
    });
    console.log("2 Partitions created", abc);
    await admin.disconnect();
}

createPartition();
