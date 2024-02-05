import express from 'express';
import { registerUser, loginUser } from './backend/Controllers/User.js'; 

const app = express();
app.use(express.json());

app.post('/register', registerUser);
app.post('/login', loginUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
