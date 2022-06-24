import { Fighter } from './character.js';
import { Goblin } from './enemy.js';

export function Combat() {
  let player = new Fighter("Bigby");
  let enemy = new Goblin(15, 5, 2, 4, 1);

  while (enemy.HP > 0 && player.HP > 0) {
    let playerDamage = player.attack();
    enemy.HP -= (Math.max(playerDamage - enemy.DEF, 0));

    let enemyDamage = enemy.attack();
    player.HP -= (Math.max(enemyDamage - player.DEF, 0));

    console.log("player hp: ", player.HP);
    console.log("enemy hp: ", enemy.HP);
  }
}
