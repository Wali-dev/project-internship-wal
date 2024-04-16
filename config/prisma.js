const { PrismaClient } = require('@prisma/client');
const config = require('.');

const prisma = new PrismaClient();
prisma
  .$connect()
  .then(() => {
    console.log(
      `Prisma connected to the ${config.get(
        'databaseNameTimeSheet'
      )} database successfull`
    );
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the application if unable to connect to the database
  });
module.exports = prisma;
