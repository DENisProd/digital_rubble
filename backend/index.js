import fastify from 'fastify'()
import Blockchain from './blockchain'
import Block from './block'

const blockchain = new Blockchain();

fastify.get('/blocks', (request, reply) => {
  reply.send(blockchain.chain);
});

fastify.post('/mineBlock', (request, reply) => {
  const newBlockData = request.body.data;
  const newBlock = new Block(
    blockchain.getLatestBlock().index + 1,
    new Date().toLocaleString(),
    newBlockData
  );
  blockchain.addBlock(newBlock);
  reply.send(newBlock);
});

fastify.get('/isValid', (request, reply) => {
  reply.send({ isValid: blockchain.isChainValid() });
});

const start = async () => {
  try {
    await fastify.listen(8080);
    console.log('Server listening on port 3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
