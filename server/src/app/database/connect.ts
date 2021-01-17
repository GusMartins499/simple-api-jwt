import { createConnection } from 'typeorm';

createConnection().then(() =>
  console.log('SUCCESSFULLY CONNECTED WITH DATABASE 🔥️'),
);
