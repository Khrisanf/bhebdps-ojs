import { Warrior, Archer, Mage } from '../src/Player.js';

const warrior = new Warrior(0, 'Алёша');
const mage = new Mage(10, 'Гендальф');
const archer = new Archer(5, 'Леголас');

const players = [warrior, mage, archer];

// Ход каждого игрока
players.forEach((player) => player.turn(players));

// Проверка здоровья игроков после хода
players.forEach((player) => {
  console.log(`${player.name}: Здоровье: ${player.life}, Позиция: ${player.position}`);
});
