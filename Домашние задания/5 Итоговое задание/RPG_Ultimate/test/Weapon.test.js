import Weapon from '../src/Weapon.js';

const sword = new Weapon('Меч', 25, 500, 1);

console.log(sword); 
sword.takeDamage(50);
console.log('Прочность после 50 урона:', sword.durability); 
console.log('Урон оружия:', sword.getDamage()); 
sword.takeDamage(400);
console.log('Прочность после 400 урона:', sword.durability); 
console.log('Урон оружия:', sword.getDamage()); 
sword.takeDamage(100);
console.log('Прочность после 100 урона:', sword.durability); 
console.log('Оружие сломано?:', sword.isBroken()); 
import { Arm, Bow, Sword, Knife, Staff } from '../src/Weapon.js';

const armWeapon = new Arm();
console.log(armWeapon); // Ожидаем { name: 'Рука', attack: 1, durability: Infinity, range: 1 }

const bowWeapon = new Bow();
console.log(bowWeapon); // Ожидаем { name: 'Лук', attack: 10, durability: 200, range: 3 }

const swordWeapon = new Sword();
console.log(swordWeapon); // Ожидаем { name: 'Меч', attack: 25, durability: 500, range: 1 }

const knifeWeapon = new Knife();
console.log(knifeWeapon); // Ожидаем { name: 'Нож', attack: 5, durability: 300, range: 1 }

const staffWeapon = new Staff();
console.log(staffWeapon); // Ожидаем { name: 'Посох', attack: 8, durability: 300, range: 2 }
import { LongBow, Axe, StormStaff } from '../src/Weapon.js';

const longBow = new LongBow();
console.log(longBow); // Ожидаем { name: 'Длинный лук', attack: 15, durability: 200, range: 4 }

const axe = new Axe();
console.log(axe); // Ожидаем { name: 'Секира', attack: 27, durability: 800, range: 1 }

const stormStaff = new StormStaff();
console.log(stormStaff); // Ожидаем { name: 'Посох Бури', attack: 10, durability: 300, range: 3 }

