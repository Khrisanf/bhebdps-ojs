import { Arm, Sword, Knife } from './Weapon.js';

class Player {
  constructor(position, name) {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = 'Игрок';
    this.weapon = new Arm(); // По умолчанию игрок вооружён рукой
    this.position = position; // Передаётся в конструктор
    this.name = name; // Передаётся в конструктор
  }

  getLuck() {
    const randomNumber = Math.random() * 100;
    return (randomNumber + this.luck) / 100;
  }

  getDamage(distance) {    
    if (distance > this.weapon.range) {
      return 0; // Оружие не достаёт
    }
    const weaponDamage = this.weapon.getDamage();
    return (this.attack + weaponDamage) * this.getLuck() / distance;
  }

  takeDamage(damage) {
    this.life -= damage;
    if (this.life < 0) {
      this.life = 0;
    }
    console.log(`${this.name} теряет ${damage.toFixed(2)} здоровья.`);
  }

  isDead() {
    return this.life === 0;
  }

  moveLeft(distance) {
    const moveDistance = Math.min(distance, this.speed);
    this.position -= moveDistance;    
  }

  moveRight(distance) {
    const moveDistance = Math.min(distance, this.speed);
    this.position += moveDistance;
    console.log(`${this.name} перемещается вправо на ${moveDistance}. Новая позиция: ${this.position}`);
  }

  move(distance) {
    if (distance <= 0) {
      this.moveLeft(-distance);
    } else {
      this.moveRight(distance);
    }
  }

  isAttackBlocked() {
    return this.getLuck() > (100 - this.luck) / 100;
  }

  dodged() {
    return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
  }

  checkWeapon() {
    if (this.weapon.isReplaceable()) {
      console.log(`Оружие ${this.name} сломано! Меняем на другое. `);
      if (this.weapon instanceof Sword) {
        this.weapon = new Knife();
        console.log(`${this.name} теперь использует Нож.`);
      } else if (this.weapon instanceof Knife) {
        this.weapon = new Arm();
        console.log(`${this.name} теперь использует Руку.`);
      } else {
        console.log(`${this.name} уже использует Руки. Оружие больше недоступно.`);
      }
    }
  }

  takeAttack(damage) {
    console.log(`${this.name} атакован, урон: ${damage.toFixed(2)}`);
    if (this.isAttackBlocked()) {
      console.log(`${this.name} блокирует атаку. Урон не нанесён.`);
      this.weapon.takeDamage(10); // Если атака заблокирована, повреждается оружие
    } else if (this.dodged()) {
      console.log(`${this.name} уклоняется от атаки. Урон не нанесён.`);
    } else {
      this.takeDamage(damage); // Урон наносится персонажу
      this.checkWeapon(); // Проверяем износ оружия
    }
  }

  chooseEnemy(players) {
    return players
      .filter((player) => !player.isDead() && player !== this)
      .sort((a, b) => {
        const distanceA = Math.abs(this.position - a.position);
        const distanceB = Math.abs(this.position - b.position);
        if (distanceA === distanceB) {
          return a.life - b.life; // Если расстояние одинаковое, выбираем с минимальным здоровьем
        }
        return distanceA - distanceB; // Выбираем ближнего
      })[0];
  }

  moveToEnemy(enemy) {
    const distance = Math.abs(this.position - enemy.position);    
    if (distance > 0) {
      if (this.position > enemy.position) {
        this.moveLeft(distance - 1); 
      } else {
        this.moveRight(distance - 1); 
      }
    }
  }

  turn(players) {
    const enemy = this.chooseEnemy(players); // Выбираем врага
    if (!enemy) return; // Если врагов нет, ничего не делаем
    this.moveToEnemy(enemy); // Двигаемся к врагу
    this.tryAttack(enemy); // Атакуем врага
  }

  tryAttack(enemy) {
    console.log(`Попытка атаки. Позиция ${this.name}: ${this.position}, Позиция ${enemy.name}: ${enemy.position}`);
    const distance = Math.abs(this.position - enemy.position);

    // Если дальность оружия меньше расстояния, атака не засчитывается
    if (distance > this.weapon.range) {
        console.log(`${this.name} не достаёт до ${enemy.name}`);
        return;
    }

    // Износ оружия на 10 * getLuck()
    const wear = 10 * this.getLuck();
    this.weapon.takeDamage(wear);
    console.log(`${this.name} наносит износ оружию: ${wear.toFixed(2)}`);

    // Нанесение урона противнику
    const damage = this.getDamage(distance);
    console.log(`${this.name} атакует ${enemy.name} на расстоянии ${distance}, урон: ${damage.toFixed(2)}`);

    // Если игроки на одной позиции, происходит отскок. Но он ниогда не происходит тк позиция не может быть равна нулю
    // (иначе бесконечный дамаг по формуле)
    // тем не менеее, в ТЗ есть про отскок пункт. оставлю его здесь 
    console.log(`Позиция ${this.name}: ${this.position}, Позиция ${enemy.name}: ${enemy.position}`);
    if (this.position === enemy.position) {
        console.log(`${enemy.name} отскакивает на одну позицию вправо!`);
        enemy.moveRight(1); // Враг отскакивает на 1 позицию вправо
        enemy.takeAttack(damage * 2); // Урон удваивается
    } else {
        enemy.takeAttack(damage);
    }
}
}

export default Player;

import { Bow, Staff } from './Weapon.js';

class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120; 
    this.speed = 2; 
    this.attack = 10; 
    this.description = 'Воин';
    this.weapon = new Sword(); 
  }

  takeDamage(damage) {
    if (this.life <= 60 && this.getLuck() > 0.8 && this.magic > 0) {
      this.magic -= damage;
      if (this.magic < 0) {
        this.magic = 0;
        this.life += this.magic; // Остаток урона идёт по жизни
      }
    } else {
      super.takeDamage(damage);
    }
  }
}

class Archer extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 80; 
    this.magic = 35; 
    this.attack = 5; 
    this.agility = 10; 
    this.description = 'Лучник';
    this.weapon = new Bow(); // Основное оружие
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0; // Оружие не достаёт
    }
    const weaponDamage = this.weapon.getDamage();
    return (this.attack + weaponDamage) * this.getLuck() * distance / this.weapon.range;
  }
}

class Mage extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 70; 
    this.magic = 100; 
    this.attack = 5; 
    this.agility = 8; 
    this.description = 'Маг';
    this.weapon = new Staff(); 
  }

  takeDamage(damage) {
    if (this.magic > 50) {
      this.life -= damage / 2;
      this.magic -= 12;
      if (this.life < 0) this.life = 0;
    } else {
      super.takeDamage(damage);
    }
  }
}

export { Warrior, Archer, Mage };

import { Axe, LongBow, StormStaff } from './Weapon.js';

class Dwarf extends Warrior {
  constructor(position, name) {
    super(position, name);
    this.life = 130; 
    this.attack = 15; 
    this.luck = 20; 
    this.description = 'Гном';
    this.weapon = new Axe(); 
  }

  takeDamage(damage) {
    const randomHitCount = Math.floor(Math.random() * 6) + 1; // Каждый 6-й удар
    if (randomHitCount === 6 && this.getLuck() > 0.5) {
      damage /= 2; // Урон в 2 раза меньше
    }
    super.takeDamage(damage);
  }
}

class Crossbowman extends Archer {
  constructor(position, name) {
    super(position, name);
    this.life = 85; 
    this.attack = 8; 
    this.agility = 20; 
    this.luck = 15; 
    this.description = 'Арбалетчик';
    this.weapon = new LongBow(); 
  }
}

class Demiurge extends Mage {
  constructor(position, name) {
    super(position, name);
    this.life = 80; 
    this.magic = 120; 
    this.attack = 6; 
    this.luck = 12; 
    this.description = 'Демиург';
    this.weapon = new StormStaff(); 
  }

  getDamage(distance) {
    if (this.magic > 0 && this.getLuck() > 0.6) {
      return super.getDamage(distance) * 1.5; // Урон увеличен на 50%
    }
    return super.getDamage(distance);
  }
}

export { Dwarf, Crossbowman, Demiurge };
