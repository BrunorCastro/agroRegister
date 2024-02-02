 const express = require('express');       
 const app = express();

 
 const admin = require('firebase-admin');
 const serviceAccount = require('./backend/agro-6ffc8-firebase-adminsdk-hvck8-8366ff3a8e.json');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar rotas
const animalRouter = require('./backend/Routes/animalRouter.js ');
const historico_pesagemRouter = require('./backend/Routes/historico_pesagemRouter.js ');
const lotesRouter = require('./backend/Routes/lotes ');
const reproducaoRouter = require ('./backend/Routes/reproducaoRouter.js');
const saudeRouter = require('./backend/Routes/saudeRouter.js');
const userRouter = require('./backend/Routes/userRouter.js');

//usar rotas
app.use('/api', animalRouter);
app.use('/api', historico_pesagemRouter);
app.use('/api', lotesRouter);
app.use('/api', reproducaoRouter);
app.use('/api', saudeRouter);
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${3000}`);
  });



  