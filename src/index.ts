import { fastify } from 'fastify';
import dotenv from 'dotenv';
import pino from 'pino';

dotenv.config();
const Port = process.env.PORT || 7000;

const server = fastify({
  logger: pino({ level: 'info' })
});

const start = async () => {
  try {
    await server.listen(Port);
    console.log('Server started successfully');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
