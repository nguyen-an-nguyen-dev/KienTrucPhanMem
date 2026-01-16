const redis = require('../config/redis');

const QUEUE = process.env.QUEUE_NAME;

exports.pushMessage = async (message) => {
  await redis.lPush(QUEUE, JSON.stringify(message));
};

exports.popMessage = async () => {
  const result = await redis.brPop(QUEUE, 0);
  return JSON.parse(result.element);
};
