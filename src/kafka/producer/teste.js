const {producerConnect} = require('../kafkaConnect');
const { CompressionTypes } = require('kafkajs')

const KAFKA_TOPIC = 'CARD_PGT';

const payload = {
    TypePgt: "credit card",
    Value: "36.30",
    Installment: "5",
    Tid: "33d99177-26c3-4c2f-a2b3-fb3ac27e8999",
    CustomerID: "02-362457",
    index: ""
}

async function start() {
    const producer = await producerConnect();
    
    for (let index = 0; index < 10; index++) {
        
        payload.index = index;

        await producer.send({
            topic: KAFKA_TOPIC,
            //compression: CompressionTypes.GZIP,
            messages: [
                { value: JSON.stringify(payload) },
            ],
        })
    }
        
    await producer.disconnect();
}

start(); 
