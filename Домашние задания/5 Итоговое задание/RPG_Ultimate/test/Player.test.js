import Player from '../src/Player.js';

const player = new Player(10, 'Хоббит');
console.log(player); 

console.log('Удача:', player.getLuck()); 
console.log('Урон при расстоянии 1:', player.getDamage(1)); // Рассчитываем урон при расстоянии 1
console.log('Урон при расстоянии 2:', player.getDamage(2)); // Рассчитываем урон при расстоянии 2 (рука не достаёт)

player.takeDamage(10);
console.log('Здоровье после урона 10:', player.life); // Ожидаем 90
player.takeDamage(90);
console.log('Здоровье после урона 90:', player.life); // Ожидаем 0
console.log('Мёртв ли игрок:', player.isDead()); // Ожидаем true
