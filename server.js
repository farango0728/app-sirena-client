const express = require('express');
const cors = require('cors')

const app = express();
const { port } = require('./config');
const userRoutes = require('./src/routers/user');

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server listen on por ${port}`);
});