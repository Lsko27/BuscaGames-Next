const express = require('express');
const cors = require('cors');
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 4000;

app.use(cors());

const games = [
    {
        id: uuidv4(),
        title: 'God of War Ragnarok',
        description: 'Embarque com Kratos e Atreus em uma jornada épica em busca de respostas antes do profetizado Ragnarök. Juntos, pai e filho devem arriscar tudo nos Nove Reinos.',
        image: '/images/game12.png',
        price: 124.95,
        originalPrice: 249.90,
        discount: 50,
        rating: 4.5,
        platforms: ['PlayStation', 'PC'],
        genres: ['Ação', 'Aventura', 'RPG'],
        releaseDate: '2022-11-09',
        developer: 'Santa Monica Studio',
        publisher: 'Sony Interactive Entertainment',
        tags: ['featured', 'bestseller']
    },
    {
        id: uuidv4(),
        title: 'Ghost of Tsushima',
        description: 'No final do século XIII, o império mongol devastou nações inteiras. A Ilha de Tsushima é tudo o que está entre o Japão continental e uma gigantesca frota invasora mongol.',
        image: '/images/game13.png',
        price: 49.99,
        originalPrice: 199.99,
        discount: 75,
        rating: 4.9,
        platforms: ['PlayStation', 'PC'],
        genres: ['Ação', 'Mundo Aberto', 'Samurai'],
        releaseDate: '2020-07-17',
        developer: 'Sucker Punch Productions',
        publisher: 'Sony Interactive Entertainment',
        tags: ['new']
    },
    {
        id: uuidv4(),
        title: 'The Witcher 3: Wild Hunt',
        description: 'Você é Geralt de Rívia, mercenário matador de monstros. Diante de você está um continente devastado pela guerra e infestado de monstros para você explorar à vontade.',
        image: '/images/game4.png',
        price: 79.99,
        originalPrice: 199.99,
        discount: 60,
        rating: 5.0,
        platforms: ['PC', 'PlayStation', 'Xbox'],
        genres: ['RPG', 'Fantasia', 'Aventura'],
        releaseDate: '2015-05-19',
        developer: 'CD Projekt RED',
        publisher: 'CD Projekt',
        tags: ['featured', 'bestseller']
    },
    {
        id: uuidv4(),
        title: 'Mortal Kombat 1',
        description: 'Descubra um Universo Mortal Kombat renascido, criado pelo Deus do Fogo Liu Kang. O Mortal Kombat 1 inaugura um novo era da franquia icônica com um novo sistema de luta e modos de jogo.',
        image: '/images/game14.png',
        price: 99.90,
        originalPrice: 299.90,
        discount: 67,
        rating: 4.7,
        platforms: ['PC', 'PlayStation', 'Xbox'],
        genres: ['Luta', 'Ação', 'Violência'],
        releaseDate: '2023-09-19',
        developer: 'NetherRealm Studios',
        publisher: 'Warner Bros. Games',
        tags: ['featured', 'new']
    },
    {
        id: uuidv4(),
        title: 'Cyberpunk 2077',
        description: 'Cyberpunk 2077 é um RPG de ação e aventura de mundo aberto ambientado em Night City, uma megalópole obcecada por poder, glamour e modificação corporal.',
        image: '/images/game2.png',
        price: 149.90,
        originalPrice: 199.90,
        discount: 25,
        rating: 4.0,
        platforms: ['PC', 'PlayStation', 'Xbox'],
        genres: ['RPG', 'Ação', 'Futurista', 'Ficção Científica'],
        releaseDate: '2020-12-10',
        developer: 'CD Projekt RED',
        publisher: 'CD Projekt',
        tags: ['featured']
    },
    {
        id: uuidv4(),
        title: 'Grand Theft Auto 5',
        description: 'Quando um jovem traficante, um ladrão de bancos aposentado e um psicopata aterrorizante se veem encrencados com algumas das figuras mais assustadoras do submundo do crime...',
        image: '/images/game3.png',
        price: 89.90,
        originalPrice: 129.90,
        discount: 30,
        rating: 4.7,
        platforms: ['PC', 'PlayStation', 'Xbox'],
        genres: ['Ação', 'Mundo Aberto'],
        releaseDate: '2013-09-17',
        developer: 'Rockstar North',
        publisher: 'Rockstar Games',
        tags: ['bestseller']
    },
    {
        id: uuidv4(),
        title: 'Red Dead Redemption 2: Ultimate Edition',
        description: 'Estados Unidos, 1899. O fim da era do Velho Oeste começou. Após um assalto dar errado na cidade de Blackwater...',
        image: '/images/game5.png',
        price: 239.90,
        originalPrice: 299.90,
        discount: 20,
        rating: 5.0,
        platforms: ['PC', 'PlayStation', 'Xbox'],
        genres: ['Ação', 'Aventura', 'Velho Oeste', 'Mundo Aberto'],
        releaseDate: '2018-10-26',
        developer: 'Rockstar Studios',
        publisher: 'Rockstar Games',
        tags: ['featured']
    },
    {
        id: uuidv4(),
        title: 'Rainbow Six Siege',
        description: 'Rainbow Six Siege é um jogo tático de tiro focado em estratégia, equipes e combate entre operadores.',
        image: '/images/game7.png',
        price: 249.90,
        originalPrice: 329.90,
        discount: 24,
        rating: 4.8,
        platforms: ['PC', 'PlayStation', 'Xbox'],
        genres: ['Ação', 'Tiro', 'Estratégia'],
        releaseDate: '2022-02-25',
        developer: 'Ubisoft Montreal',
        publisher: 'Ubisoft',
        tags: ['bestseller']
    },
    {
        id: uuidv4(),
        title: 'Resident Evil 4 Remake',
        description: 'Seis anos se passaram desde o desastre biológico em Raccoon City. O agente Leon S. Kennedy é enviado para resgatar a filha do presidente...',
        image: '/images/game16.png',
        price: 199.90,
        originalPrice: 249.90,
        discount: 20,
        rating: 4.6,
        platforms: ['PC', 'PlayStation', 'Xbox'],
        genres: ['Terror', 'Sobrevivência', 'Ação'],
        releaseDate: '2023-03-24',
        developer: 'Capcom',
        publisher: 'Capcom',
        tags: ['new']
    },
    {
        id: uuidv4(),
        title: 'Tomb Raider',
        description: 'Tomb Raider é um jogo de ação e aventura que acompanha Lara Croft em expedições cheias de exploração, combate e enigmas.',
        image: '/images/game10.png',
        price: 62.40,
        originalPrice: 62.40,
        discount: 0,
        rating: 4.2,
        platforms: ['PC', 'Xbox'],
        genres: ['RPG', 'Espaço', 'Exploração'],
        releaseDate: '2023-09-06',
        developer: 'Bethesda Game Studios',
        publisher: 'Bethesda Softworks',
        tags: ['']
    },
    {
        id: uuidv4(),
        title: 'Spider-Man 2',
        description: 'Peter Parker e Miles Morales retornam para uma nova e emocionante aventura na aclamada franquia Marvel\'s Spider-Man para PS5.',
        image: '/images/game14.jpg',
        price: 349.90,
        originalPrice: 349.90,
        discount: 0,
        rating: 4.7,
        platforms: ['PlayStation'],
        genres: ['Ação', 'Aventura', 'Super-heróis'],
        releaseDate: '2023-10-20',
        developer: 'Insomniac Games',
        publisher: 'Sony Interactive Entertainment',
        tags: ['new', 'featured']
    },
    {
        id: uuidv4(),
        title: 'FC 25',
        description: 'A próxima geração do futebol chega com FC 25, trazendo gráficos realistas, jogabilidade aprimorada e clubes atualizados para uma experiência autêntica.',
        image: '/images/game17.png',
        price: 299.90,
        originalPrice: 349.90,
        discount: 14,
        rating: 4.5,
        platforms: ['PlayStation', 'Xbox', 'PC'],
        genres: ['Esportes', 'Multijogador', 'Competitivo'],
        releaseDate: '2024-09-27',
        developer: 'EA Sports',
        publisher: 'Electronic Arts',
        tags: ['featured']
    },
    {
        id: uuidv4(),
        title: 'Call of Duty: Black Ops 6',
        description: 'Black Ops 6 leva os jogadores a missões secretas intensas com ação tática, narrativa envolvente e o retorno do clássico modo Zumbis.',
        image: '/images/game18.jpg',
        price: 349.90,
        originalPrice: 379.90,
        discount: 8,
        rating: 4.6,
        platforms: ['PlayStation', 'Xbox', 'PC'],
        genres: ['Tiro', 'Ação', 'Multiplayer'],
        releaseDate: '2024-11-08',
        developer: 'Treyarch',
        publisher: 'Activision',
        tags: ['new', 'featured']
    },
    {
        id: uuidv4(),
        title: 'Until Dawn',
        description: 'Em Until Dawn, cada escolha pode ser a diferença entre a vida e a morte em uma experiência de terror interativa com múltiplos finais.',
        image: '/images/game19.png',
        price: 199.90,
        originalPrice: 249.90,
        discount: 20,
        rating: 4.3,
        platforms: ['PlayStation'],
        genres: ['Terror', 'Aventura', 'Narrativo'],
        releaseDate: '2015-08-25',
        developer: 'Supermassive Games',
        publisher: 'Sony Interactive Entertainment',
        tags: ['featured']
    },
    {
        id: uuidv4(),
        title: 'Assassin’s Creed Shadows',
        description: 'Viva o Japão feudal em Assassin’s Creed Shadows, explorando um mundo aberto riquíssimo com stealth, combate e dois protagonistas distintos.',
        image: '/images/game20.png',
        price: 349.90,
        originalPrice: 399.90,
        discount: 13,
        rating: 4.8,
        platforms: ['PlayStation', 'Xbox', 'PC'],
        genres: ['Ação', 'Aventura', 'Mundo Aberto'],
        releaseDate: '2024-11-15',
        developer: 'Ubisoft Quebec',
        publisher: 'Ubisoft',
        tags: ['new', 'featured']
    },
    {
        id: uuidv4(),
        title: 'The Last of Us Part I',
        description: 'Reviva a emocionante jornada de Joel e Ellie em The Last of Us Part I, com gráficos remasterizados e gameplay aprimorado para nova geração.',
        image: '/images/game11.png',
        price: 299.90,
        originalPrice: 349.90,
        discount: 14,
        rating: 4.9,
        platforms: ['PlayStation', 'PC'],
        genres: ['Ação', 'Aventura', 'Zumbis'],
        releaseDate: '2022-09-02',
        developer: 'Naughty Dog',
        publisher: 'Sony Interactive Entertainment',
        tags: ['featured']
    },
    {
        id: uuidv4(),
        title: 'Black Myth: Wukong',
        description: 'Baseado na lenda do Rei Macaco, Black Myth: Wukong combina ação intensa e narrativa épica em um mundo mitológico belamente detalhado.',
        image: '/images/game21.png',
        price: 349.90,
        originalPrice: 399.90,
        discount: 13,
        rating: 4.7,
        platforms: ['PlayStation', 'Xbox', 'PC'],
        genres: ['Ação', 'RPG', 'Fantasia'],
        releaseDate: '2024-08-20',
        developer: 'Game Science',
        publisher: 'Game Science',
        tags: ['new', 'featured']
    }
];

app.get('/games', (req, res) => {
    res.json(games);
});

app.get('/games/:id', (req, res) => {
    const game = games.find(g => g.id === req.params.id);
    if (game) {
        res.json(game);
    } else {
        res.status(404).json({ message: 'Jogo não encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
