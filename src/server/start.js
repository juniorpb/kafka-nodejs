const express = require('express');

const producer = require('../kafka/producer')

const routes = express.Router()
routes.post('/api/card', producer.start);

const server = express();

//server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333, () => console.log("🔥  Server Started at http://localhost:3333/"));