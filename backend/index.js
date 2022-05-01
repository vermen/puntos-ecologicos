import express from 'express';
import conectarDB from './config/bd.js';
import router from './routes/index.routes.js';
import cors from 'cors';

const app = express();
app.use(express.json()); //para recibir informacion
conectarDB();

app.use(cors()).use('/api', router)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});