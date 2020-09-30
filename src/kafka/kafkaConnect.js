const { Kafka, logLevel } = require('kafkajs')
const {kafkaConfig} = require('../config/env.json')

const kafka = new Kafka({
    clientId: 'api',
    brokers: [`${kafkaConfig.hostname}:${kafkaConfig.port}`],
    logLevel: logLevel.WARN,
    retry: {
      initialRetryTime: 300,
      retries: 2
    },
});

async function producerConnect() {
    const producer = kafka.producer();
    await producer.connect();
    return producer;
}

async function consumerConnect(groupIdParams) {
    const consumer = kafka.consumer({ groupId: groupIdParams })
    await consumer.connect();
    return consumer; 
}

module.exports = {
    producerConnect,
    consumerConnect
}
