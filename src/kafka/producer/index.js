const {producerConnect} = require('../kafkaConnect');
const { CompressionTypes } = require('kafkajs')

const KAFKA_TOPIC = 'CARD_PGT';

async function start(payloadRequest, response) {
    const producer = await producerConnect();
    
    const responseKafka = await producer.send({
        topic: KAFKA_TOPIC,
        //compression: CompressionTypes.GZIP,
        messages: [
            { value: JSON.stringify(payloadRequest.body) },
        ],
    })
    
    await producer.disconnect();
    
    return response.send(responseKafka);
}

module.exports = {
    start
}
