const {consumerConnect} = require('../kafkaConnect');
const {mongodbSave} = require('../../controller/cardController');

const KAFKA_TOPIC = 'CARD_PGT';

async function start() {
    const consumer = await consumerConnect('card-grupId');

    await consumer.subscribe({ topic: KAFKA_TOPIC });
  
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        let cardConsumer = JSON.parse(message.value);
        console.log(cardConsumer);
        // save msg in mongodb
        //mongodbSave(cardConsumer);
      },
    });
}

start();