// Base de dados de Pokémon
const pokemonDatabase = [
    {
        id: 1,
        name: 'Bulbassauro',
        type: 'grass',
        hp: 45,
        attack: 49,
        defense: 49,
        spAtk: 65,
        spDef: 65,
        speed: 45,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        moves: [
            { name: 'Poder Vegetal', type: 'grass', power: 75, accuracy: 100 },
            { name: 'Chicote de Vinha', type: 'grass', power: 45, accuracy: 100 },
            { name: 'Raio Solar', type: 'grass', power: 120, accuracy: 100 },
            { name: 'Crescimento', type: 'normal', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 4,
        name: 'Charmander',
        type: 'fire',
        hp: 39,
        attack: 52,
        defense: 43,
        spAtk: 60,
        spDef: 50,
        speed: 65,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        moves: [
            { name: 'Chama de Fogo', type: 'fire', power: 90, accuracy: 100 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 },
            { name: 'Chama Cíclone', type: 'fire', power: 35, accuracy: 85 },
            { name: 'Destruir', type: 'normal', power: 120, accuracy: 100 }
        ]
    },
    {
        id: 7,
        name: 'Squirtle',
        type: 'water',
        hp: 44,
        attack: 48,
        defense: 65,
        spAtk: 50,
        spDef: 64,
        speed: 43,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        moves: [
            { name: 'Hidro Bomba', type: 'water', power: 110, accuracy: 80 },
            { name: 'Jato de Água', type: 'water', power: 40, accuracy: 100 },
            { name: 'Concha Afiada', type: 'water', power: 75, accuracy: 95 },
            { name: 'Defesa de Proteção', type: 'water', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 25,
        name: 'Pikachu',
        type: 'electric',
        hp: 35,
        attack: 55,
        defense: 40,
        spAtk: 50,
        spDef: 50,
        speed: 90,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        moves: [
            { name: 'Raio Trovão', type: 'electric', power: 90, accuracy: 100 },
            { name: 'Parafuso Elétrico', type: 'electric', power: 25, accuracy: 100 },
            { name: 'Choque do Trovão', type: 'electric', power: 40, accuracy: 100 },
            { name: 'Investida Rápida', type: 'normal', power: 40, accuracy: 100 }
        ]
    },
    {
        id: 39,
        name: 'Jigglypuff',
        type: 'normal',
        hp: 115,
        attack: 40,
        defense: 20,
        spAtk: 45,
        spDef: 25,
        speed: 20,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
        moves: [
            { name: 'Rolagem', type: 'normal', power: 30, accuracy: 90 },
            { name: 'Canção de Ninar', type: 'normal', power: 0, accuracy: 55 },
            { name: 'Dança da Ira', type: 'normal', power: 0, accuracy: 100 },
            { name: 'Trovão', type: 'electric', power: 90, accuracy: 100 }
        ]
    },
    {
        id: 50,
        name: 'Diglett',
        type: 'ground',
        hp: 10,
        attack: 55,
        defense: 25,
        spAtk: 35,
        spDef: 45,
        speed: 95,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
        moves: [
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Escavação Rápida', type: 'ground', power: 80, accuracy: 100 },
            { name: 'Rejeição', type: 'normal', power: 0, accuracy: 100 },
            { name: 'Defesa de Pedra', type: 'rock', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 63,
        name: 'Abra',
        type: 'psychic',
        hp: 25,
        attack: 20,
        defense: 15,
        spAtk: 105,
        spDef: 30,
        speed: 90,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
        moves: [
            { name: 'Psicocinese', type: 'psychic', power: 90, accuracy: 100 },
            { name: 'Explosão Psíquica', type: 'psychic', power: 100, accuracy: 100 },
            { name: 'Teletransporte', type: 'psychic', power: 0, accuracy: 100 },
            { name: 'Foco Concentrado', type: 'psychic', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 88,
        name: 'Grimer',
        type: 'poison',
        hp: 80,
        attack: 80,
        defense: 50,
        spAtk: 40,
        spDef: 50,
        speed: 25,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
        moves: [
            { name: 'Lama Ácida', type: 'poison', power: 80, accuracy: 100 },
            { name: 'Viscosidade Tóxica', type: 'poison', power: 75, accuracy: 100 },
            { name: 'Corrosão', type: 'poison', power: 0, accuracy: 90 },
            { name: 'Recuperação', type: 'normal', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 95,
        name: 'Onix',
        type: 'rock',
        hp: 35,
        attack: 95,
        defense: 150,
        spAtk: 40,
        spDef: 30,
        speed: 70,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
        moves: [
            { name: 'Raiva de Rocha', type: 'rock', power: 75, accuracy: 90 },
            { name: 'Trituração', type: 'rock', power: 80, accuracy: 100 },
            { name: 'Estrutura de Defesa', type: 'normal', power: 0, accuracy: 100 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 }
        ]
    },
    {
        id: 98,
        name: 'Krabby',
        type: 'water',
        hp: 30,
        attack: 105,
        defense: 90,
        spAtk: 25,
        spDef: 25,
        speed: 50,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
        moves: [
            { name: 'Pinça Cruzada', type: 'water', power: 75, accuracy: 100 },
            { name: 'Garra de Tesoura', type: 'bug', power: 60, accuracy: 95 },
            { name: 'Concha Afiada', type: 'water', power: 75, accuracy: 95 },
            { name: 'Investida de Carapaça', type: 'water', power: 40, accuracy: 100 }
        ]
    },
    {
        id: 133,
        name: 'Eevee',
        type: 'normal',
        hp: 55,
        attack: 55,
        defense: 50,
        spAtk: 45,
        spDef: 65,
        speed: 55,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
        moves: [
            { name: 'Investida Rápida', type: 'normal', power: 40, accuracy: 100 },
            { name: 'Bola de Sombra', type: 'ghost', power: 80, accuracy: 100 },
            { name: 'Dupla Ação', type: 'normal', power: 15, accuracy: 100 },
            { name: 'Construção Defensiva', type: 'normal', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 147,
        name: 'Dratini',
        type: 'dragon',
        hp: 41,
        attack: 64,
        defense: 45,
        spAtk: 50,
        spDef: 50,
        speed: 50,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
        moves: [
            { name: 'Fúria do Dragão', type: 'dragon', power: 100, accuracy: 100 },
            { name: 'Hidro Bomba', type: 'water', power: 110, accuracy: 80 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Encontro de Dragão', type: 'dragon', power: 85, accuracy: 100 }
        ]
    }
];

// Estado Global
let gameState = {
    currentScreen: 'home',
    rooms: [],
    currentRoom: null,
    currentPlayer: null,
    selectedPokemon: [],
    battleState: null,
    socket: null
};

// NAVEGAÇÃO ENTRE TELAS
function goHome() {
    switchScreen('home');
}

function goToRooms() {
    switchScreen('rooms');
    loadRooms();
}

function switchScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenName + 'Screen').classList.add('active');
    gameState.currentScreen = screenName;
}

// SALAS
function loadRooms() {
    const roomsList = document.getElementById('roomsList');
    roomsList.innerHTML = '';

    // Simular salas (em um app real, isso viria de um servidor)
    if (gameState.rooms.length === 0) {
        roomsList.innerHTML = '<p style="grid-column: 1/-1; color: #999;">Nenhuma sala disponível. Crie uma!</p>';
        return;
    }

    gameState.rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';
        roomCard.innerHTML = `
            <h3>${room.name}</h3>
            <p>Criador: ${room.creator}</p>
            <p>Jogadores: ${room.players.length}/2</p>
            <span class="room-status ${room.status === 'waiting' ? 'status-waiting' : 'status-playing'}">
                ${room.status === 'waiting' ? 'Esperando Jogador' : 'Em Jogo'}
            </span>
        `;

        if (room.status === 'waiting') {
            roomCard.style.cursor = 'pointer';
            roomCard.onclick = () => enterRoom(room.id);
        } else {
            roomCard.style.opacity = '0.6';
        }

        roomsList.appendChild(roomCard);
    });
}

function createRoom() {
    const roomNameInput = document.getElementById('roomName');
    const roomName = roomNameInput.value.trim();

    if (!roomName) {
        alert('Digite um nome para a sala!');
        return;
    }

    const newRoom = {
        id: gameState.rooms.length + 1,
        name: roomName,
        creator: 'Você',
        players: ['Você'],
        status: 'waiting',
        player1: null,
        player2: null
    };

    gameState.rooms.push(newRoom);
    gameState.currentRoom = newRoom;
    gameState.currentPlayer = 1;
    roomNameInput.value = '';

    enterRoom(newRoom.id);
}

function enterRoom(roomId) {
    const room = gameState.rooms.find(r => r.id === roomId);
    if (!room) return;

    gameState.currentRoom = room;
    gameState.currentPlayer = room.players.length === 1 ? 2 : 1;

    if (!room.players.includes('Você')) {
        room.players.push('Você');
    }

    switchScreen('select');
    document.getElementById('roomInfo').textContent = `Sala: ${room.name} - Você é o Jogador ${gameState.currentPlayer}`;
    loadPokemonSelection();
}

// SELEÇÃO DE POKÉMON
function loadPokemonSelection() {
    const pokemonList = document.getElementById('pokemonList');
    pokemonList.innerHTML = '';

    pokemonDatabase.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}" onerror="this.src='https://via.placeholder.com/100'">
            <h4>${pokemon.name}</h4>
            <p>Tipo: <strong>${pokemon.type.toUpperCase()}</strong></p>
            <p>HP: ${pokemon.hp}</p>
            <div class="selection-count" style="display: none;">0</div>
        `;

        card.onclick = () => togglePokemonSelection(card, pokemon);
        pokemonList.appendChild(card);
    });
}

function togglePokemonSelection(card, pokemon) {
    if (gameState.selectedPokemon.length < 3) {
        if (!card.classList.contains('selected')) {
            card.classList.add('selected');
            const count = card.querySelector('.selection-count');
            count.style.display = 'block';
            count.textContent = gameState.selectedPokemon.length + 1;
            gameState.selectedPokemon.push(pokemon);

            if (gameState.selectedPokemon.length === 3) {
                document.getElementById('startBattle').disabled = false;
            }
        }
    } else if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        card.querySelector('.selection-count').style.display = 'none';
        gameState.selectedPokemon = gameState.selectedPokemon.filter(p => p.id !== pokemon.id);
        
        // Reindexar contadores
        document.querySelectorAll('.pokemon-card.selected').forEach((selectedCard, index) => {
            selectedCard.querySelector('.selection-count').textContent = index + 1;
        });

        document.getElementById('startBattle').disabled = gameState.selectedPokemon.length < 3;
    }
}

// BATALHA
function startBattle() {
    if (gameState.selectedPokemon.length < 3) {
        alert('Selecione 3 Pokémon!');
        return;
    }

    gameState.currentRoom.status = 'playing';
    switchScreen('battle');
    initializeBattle();
}

function initializeBattle() {
    // Simular Pokémon do oponente
    const opponentPokemon = pokemonDatabase
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    gameState.battleState = {
        player1: {
            name: gameState.currentPlayer === 1 ? 'Você' : 'Oponente',
            team: gameState.currentPlayer === 1 ? [...gameState.selectedPokemon] : opponentPokemon,
            currentPokemonIndex: 0,
            score: 0
        },
        player2: {
            name: gameState.currentPlayer === 2 ? 'Você' : 'Oponente',
            team: gameState.currentPlayer === 2 ? [...gameState.selectedPokemon] : opponentPokemon,
            currentPokemonIndex: 0,
            score: 0
        },
        turn: 1,
        battleLog: []
    };

    displayBattle();
    updateMoves();
}

function displayBattle() {
    const state = gameState.battleState;
    const p1 = state.player1;
    const p2 = state.player2;

    // Pokémon atuais
    const p1Current = p1.team[p1.currentPokemonIndex];
    const p2Current = p2.team[p2.currentPokemonIndex];

    // Atualizar dados do jogador 1
    document.getElementById('player1Name').textContent = p1.name;
    document.getElementById('player1PokemonImg').src = p1Current.img;
    document.getElementById('player1PokemonName').textContent = p1Current.name;
    document.getElementById('player1HPText').textContent = `HP: ${p1Current.hp}/${p1Current.hp}`;
    document.getElementById('player1HP').style.width = '100%';

    // Atualizar dados do jogador 2
    document.getElementById('player2Name').textContent = p2.name;
    document.getElementById('player2PokemonImg').src = p2Current.img;
    document.getElementById('player2PokemonName').textContent = p2Current.name;
    document.getElementById('player2HPText').textContent = `HP: ${p2Current.hp}/${p2Current.hp}`;
    document.getElementById('player2HP').style.width = '100%';

    // Renderizar times
    renderTeam(p1, 'player1');
    renderTeam(p2, 'player2');

    // Log inicial
    if (state.battleLog.length === 0) {
        addLog(`${p1Current.name} do ${p1.name} vs ${p2Current.name} do ${p2.name}!`, 'status');
    }
}

function renderTeam(player, playerId) {
    const teamDiv = document.getElementById(playerId + 'Team');
    teamDiv.innerHTML = '';

    player.team.forEach((pokemon, index) => {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.className = 'team-pokemon' + (index === player.currentPokemonIndex ? ' active' : '');
        if (pokemon.fainted) pokemonDiv.classList.add('fainted');

        pokemonDiv.innerHTML = `<img src="${pokemon.img}" alt="${pokemon.name}" onerror="this.src='https://via.placeholder.com/50'">`;
        teamDiv.appendChild(pokemonDiv);
    });
}

function updateMoves() {
    const state = gameState.battleState;
    const p1Current = state.player1.team[state.player1.currentPokemonIndex];
    const movesList = document.getElementById('movesList');
    movesList.innerHTML = '';

    p1Current.moves.forEach((move, index) => {
        const btn = document.createElement('button');
        btn.className = 'move-btn';
        btn.innerHTML = `
            <div>${move.name}</div>
            <div class="move-type type-${move.type}">${move.type.toUpperCase()}</div>
            <div style="font-size: 0.8em; color: #666;">Poder: ${move.power || 'Status'}</div>
        `;
        btn.onclick = () => executeBattleMove(move, p1Current);
        movesList.appendChild(btn);
    });
}

function executeBattleMove(move, attacker) {
    const state = gameState.battleState;
    const defender = state.player2.team[state.player2.currentPokemonIndex];

    // Calcular dano
    const damage = calculateDamage(attacker, defender, move);
    const hitChance = Math.random() * 100;

    // Verificar acerto
    if (hitChance > move.accuracy) {
        addLog(`${attacker.name} tentou usar ${move.name}, mas errou!`, 'miss');
    } else if (damage === 0) {
        addLog(`${attacker.name} usou ${move.name}!`, 'status');
    } else {
        // Aplicar dano
        defender.hp -= damage;
        if (defender.hp < 0) defender.hp = 0;

        addLog(`${attacker.name} usou ${move.name}! Causou ${damage} de dano!`, 'damage');

        // Verificar se foi derrotado
        if (defender.hp === 0) {
            addLog(`${defender.name} foi derrotado!`, 'damage');
            state.player1.score++;

            // Próximo Pokémon do defensor
            const nextAlive = state.player2.team.findIndex((p, i) => i > state.player2.currentPokemonIndex && p.hp > 0);
            if (nextAlive !== -1) {
                state.player2.currentPokemonIndex = nextAlive;
                defender.hp = state.player2.team[nextAlive].hp;
                addLog(`${state.player2.name} enviou ${state.player2.team[nextAlive].name}!`, 'status');
            } else {
                endBattle('Você venceu!');
                return;
            }
        }
    }

    // Ataque do oponente
    setTimeout(() => {
        const opponentMove = defender.moves[Math.floor(Math.random() * defender.moves.length)];
        const p1Current = state.player1.team[state.player1.currentPokemonIndex];
        
        const opponentDamage = calculateDamage(defender, p1Current, opponentMove);
        const opponentHit = Math.random() * 100;

        if (opponentHit > opponentMove.accuracy) {
            addLog(`${defender.name} tentou usar ${opponentMove.name}, mas errou!`, 'miss');
        } else if (opponentDamage === 0) {
            addLog(`${defender.name} usou ${opponentMove.name}!`, 'status');
        } else {
            p1Current.hp -= opponentDamage;
            if (p1Current.hp < 0) p1Current.hp = 0;

            addLog(`${defender.name} usou ${opponentMove.name}! Causou ${opponentDamage} de dano!`, 'damage');

            if (p1Current.hp === 0) {
                addLog(`${p1Current.name} foi derrotado!`, 'damage');
                state.player2.score++;

                const nextAlive = state.player1.team.findIndex((p, i) => i > state.player1.currentPokemonIndex && p.hp > 0);
                if (nextAlive !== -1) {
                    state.player1.currentPokemonIndex = nextAlive;
                    p1Current.hp = state.player1.team[nextAlive].hp;
                    addLog(`${state.player1.name} enviou ${state.player1.team[nextAlive].name}!`, 'status');
                } else {
                    endBattle('Você perdeu!');
                    return;
                }
            }
        }

        displayBattle();
        updateMoves();
    }, 1000);

    displayBattle();
}

function calculateDamage(attacker, defender, move) {
    if (move.power === 0) return 0; // Movimentos de status

    const level = 50;
    const random = (Math.random() * 15) + 85; // 85-100%

    let damage = (((2 * level / 5 + 2) * move.power * attacker.attack / defender.defense) / 50) + 2;
    damage = damage * (random / 100);
    damage = Math.floor(damage);

    // Modificador de tipo (simplificado)
    const effectiveness = getTypeEffectiveness(move.type, defender.type);
    damage = Math.floor(damage * effectiveness);

    return Math.max(1, damage);
}

function getTypeEffectiveness(attackType, defendType) {
    const typeChart = {
        fire: { grass: 2, bug: 2, steel: 2, ice: 2, water: 0.5 },
        water: { fire: 2, ground: 2, rock: 2, grass: 0.5 },
        grass: { water: 2, ground: 2, rock: 2, fire: 0.5 },
        electric: { water: 2, flying: 2, grass: 0.5 },
        psychic: { fighting: 2, poison: 2, dark: 0.5 },
        ground: { fire: 2, electric: 2, poison: 2, rock: 2 },
        rock: { fire: 2, flying: 2, bug: 2, ice: 2 },
        flying: { grass: 2, fighting: 2, bug: 2, rock: 0.5 },
        bug: { grass: 2, psychic: 2, dark: 2, fire: 0.5 },
        poison: { grass: 2, bug: 2, poison: 0.5 },
        dragon: { dragon: 2 },
        ice: { flying: 2, ground: 2, grass: 2, dragon: 2, fire: 0.5 },
        fighting: { normal: 2, ice: 2, rock: 2, dark: 2, flying: 0.5 },
        ghost: { ghost: 2, psychic: 2, normal: 0 },
        steel: { ice: 2, rock: 2, fairy: 2, fire: 0.5, grass: 0.5 },
        fairy: { fighting: 2, dragon: 2, dark: 2, poison: 0.5 }
    };

    return typeChart[attackType]?.[defendType] || 1;
}

function addLog(message, type = '') {
    const battleLog = document.getElementById('battleLog');
    const p = document.createElement('p');
    p.className = 'log-' + type;
    p.textContent = message;
    battleLog.appendChild(p);
    battleLog.scrollTop = battleLog.scrollHeight;

    gameState.battleState.battleLog.push({ message, type });
}

function endBattle(result) {
    const resultScreen = document.getElementById('resultScreen');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');

    resultTitle.textContent = result;
    resultMessage.textContent = `Pontuação: ${gameState.battleState.player1.score} - ${gameState.battleState.player2.score}`;

    resultScreen.style.display = 'flex';

    // Limpar sala
    gameState.rooms = gameState.rooms.filter(r => r.id !== gameState.currentRoom.id);
    gameState.selectedPokemon = [];
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    switchScreen('home');
});
