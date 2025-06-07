const express = require('express');
const cors = require('cors');
const path = require('path');  // <-- importe o path
const { PrismaClient } = require('@prisma/client');

const app = express();
const PORT = 4000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Linha para servir imagens estáticas da pasta uploads
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Rotas da API (mantém tudo igual)
app.get('/games', async (req, res) => {
    try {
        const games = await prisma.game.findMany();
        res.json(games);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar jogos' });
    }
});

// ... todas as outras rotas seguem igual

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
