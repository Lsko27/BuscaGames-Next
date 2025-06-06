const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const PORT = 4000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rota GET para listar todos os jogos
app.get('/games', async (req, res) => {
    try {
        const games = await prisma.game.findMany();
        res.json(games);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar jogos' });
    }
});

// Rota GET para buscar jogo por ID
app.get('/games/:id', async (req, res) => {
    try {
        const game = await prisma.game.findUnique({
            where: { id: req.params.id }
        });
        if (game) {
            res.json(game);
        } else {
            res.status(404).json({ message: 'Jogo não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar jogo' });
    }
});

// Rota POST para criar um novo jogo
app.post('/games', async (req, res) => {
    try {
        const {
            title,
            description,
            image,
            price,
            originalPrice,
            rating,
            platforms,
            genres,
            releaseDate,
            developer,
            publisher,
            tags
        } = req.body;

        const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

        const newGame = await prisma.game.create({
            data: {
                title,
                description,
                image,
                price,
                originalPrice,
                discount,
                rating,
                platforms,
                genres,
                releaseDate: new Date(releaseDate),
                developer,
                publisher,
                tags
            }
        });

        res.status(201).json(newGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar jogo' });
    }
});

// Rota PUT para atualizar um jogo existente
app.put('/games/:id', async (req, res) => {
    try {
        const data = req.body;

        // Se price e originalPrice estiverem presentes, recalcula o desconto
        if (data.price && data.originalPrice) {
            data.discount = Math.round(((data.originalPrice - data.price) / data.originalPrice) * 100);
        }

        // Se releaseDate for string, converte para Date
        if (data.releaseDate) {
            data.releaseDate = new Date(data.releaseDate);
        }

        const updatedGame = await prisma.game.update({
            where: {
                id: req.params.id
            },
            data: {
                title: req.body.title,
                description: req.body.description,
                image: req.body.image,
                price: req.body.price,
                originalPrice: req.body.originalPrice,
                discount: req.body.discount,
                rating: req.body.rating,
                platforms: req.body.platforms,
                genres: req.body.genres,
                releaseDate: req.body.releaseDate,
                developer: req.body.developer,
                publisher: req.body.publisher,
                tags: req.body.tags
            }
        });

        res.json(updatedGame);
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Jogo não encontrado para atualização' });
        }
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar jogo' });
    }
});

// Rota DELETE para remover um jogo
app.delete('/games/:id', async (req, res) => {
    try {
        await prisma.game.delete({
            where: { id: req.params.id }
        });
        res.status(204).send(); // 204 No Content
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar jogo' });
    }
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
