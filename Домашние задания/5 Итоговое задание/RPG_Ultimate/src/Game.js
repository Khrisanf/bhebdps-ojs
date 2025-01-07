import { Dwarf, Crossbowman, Demiurge, Warrior, Archer, Mage } from './Player.js';

function play(players) {
  console.log('Начало боя!');
  let round = 1;

  while (players.filter((player) => !player.isDead()).length > 1) {
    console.log(`Раунд ${round}`);
    players.forEach((player) => {
      if (!player.isDead()) {
        player.turn(players);
      }
    });

    // Выводим состояние всех игроков после раунда
    players.forEach((player) => {
      console.log(`${player.name}: Здоровье: ${player.life.toFixed(2)}, Позиция: ${player.position}`);
    });

    round++;
  }

  const winner = players.find((player) => !player.isDead());
  console.log(`Победитель: ${winner.name} с ${winner.life.toFixed(2)} здоровья!`);




  // Преобразование победителя в улучшенный класс
  if (winner instanceof Warrior) {
    const upgradedWinner = new Dwarf(winner.position, winner.name);
    console.log(`${winner.name} преобразован в Гнома!`);
    return upgradedWinner; 
  } else if (winner instanceof Archer) {
    const upgradedWinner = new Crossbowman(winner.position, winner.name);
    console.log(`${winner.name} преобразован в Арбалетчика!`);
    return upgradedWinner; 
  } else if (winner instanceof Mage) {
    const upgradedWinner = new Demiurge(winner.position, winner.name);
    console.log(`${winner.name} преобразован в Демиурга!`);
    return upgradedWinner; 
  }

  return winner; // Если класс не подлежит улучшению, возвращаем победителя как есть
}

export default play;
