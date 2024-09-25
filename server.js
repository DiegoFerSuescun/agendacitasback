const express = require('express');
const sequelize = require('./config/database.js');
const Event = require('./models/Events.js');
const eventsROuter = require('./src/routes/eventsRoutes.js');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(cors());
app.use('/api', eventsROuter)

sequelize.sync().then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.log("no se pudo conectar ", err))

    
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
