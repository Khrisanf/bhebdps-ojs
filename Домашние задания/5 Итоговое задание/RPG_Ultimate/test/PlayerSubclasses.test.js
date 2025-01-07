import { Warrior, Mage, Archer } from '../src/Player.js';

const warrior = new Warrior(10, 'Алёша Попович');
console.log(warrior); 
warrior.takeDamage(50);
console.log('Здоровье воина после урона 50:', warrior.life, 'Мана:', warrior.magic); // Проверяем работу особенности takeDamage

const mage = new Mage(15, 'Гендальф');
console.log(mage); 
mage.takeDamage(50);
console.log('Здоровье мага после урона 50:', mage.life, 'Мана:', mage.magic); // Проверяем работу особенности takeDamage

const archer = new Archer(20, 'Леголас');
console.log(archer); 
console.log('Урон лучника на расстоянии 1:', archer.getDamage(1)); // Проверяем формулу урона лучника
