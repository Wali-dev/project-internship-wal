require('./config/prisma');
require('./config/mysql');
const app = require('./app');

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
