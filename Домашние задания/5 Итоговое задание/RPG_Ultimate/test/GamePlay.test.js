import play from '../src/Game.js';
import { Warrior, Archer, Mage } from '../src/Player.js';

const warrior = new Warrior(0, 'Алёша');
const mage = new Mage(10, 'Гендальф');
const archer = new Archer(5, 'Леголас');

const players = [warrior, mage, archer];

play(players);
// Сделали персонажей