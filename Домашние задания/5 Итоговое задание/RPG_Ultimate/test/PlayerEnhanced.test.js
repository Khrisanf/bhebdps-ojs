import { Dwarf, Crossbowman, Demiurge } from '../src/Player.js';

const dwarf = new Dwarf(5, 'Гимли');
console.log(dwarf); 
dwarf.takeDamage(50);
console.log('Здоровье гнома после урона 50:', dwarf.life); // Проверяем работу особенностей takeDamage

const crossbowman = new Crossbowman(10, 'Робин Гуд');
console.log(crossbowman); 
console.log('Урон арбалетчика на расстоянии 2:', crossbowman.getDamage(2)); // Проверяем формулу урона

const demiurge = new Demiurge(15, 'Прометей');
console.log(demiurge); 
console.log('Урон демиурга на расстоянии 1:', demiurge.getDamage(1)); // Проверяем формулу урона с усилением
