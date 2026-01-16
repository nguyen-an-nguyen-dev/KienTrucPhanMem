require('dotenv').config();
const queueService = require('./services/queue.service');

async function startWorker() {
  console.log('Worker started...');

  while (true) {
    const message = await queueService.popMessage();

    console.log('Received message:', message);

    // Giả lập xử lý
    await new Promise((r) => setTimeout(r, 1000));

    console.log('Processed:', message.content);
  }
}

startWorker();
