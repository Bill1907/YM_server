import { fastify } from 'fastify';
import dotenv from 'dotenv';
import pino from 'pino';
import crawling from './helper/crawling';

dotenv.config();
const Port = process.env.PORT || 7000;

const server = fastify({
  logger: pino({ level: 'info' })
});

const url = `https://map.naver.com/v5/`;
crawling(url);

const start = async () => {
  try {
    server.listen(() => Port);
    console.log(`Server started successfully`);
    console.log(`Port is ${Port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
