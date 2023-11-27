/* eslint-disable no-console */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  try {
    await server.start();
    console.log(`Server berjalan di ${server.info.uri}`);
  } catch (error) {
    console.error('Terjadi kesalahan saat mencoba menjalankan server:', error);
    process.exit(1);
  }
};

init();
