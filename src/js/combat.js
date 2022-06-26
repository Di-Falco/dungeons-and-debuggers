import $ from 'jquery';
import { Goblin } from './enemy.js';

export function Combat(player) {
  let enemy = new Goblin(15, 5, 2, 4, 1);

  while (enemy.HP > 0 && player.HP > 0) {

    /*


      $("#attack").click(function(){
        player.attack();
      });

      $("#heal").click(function(){
        player.heal();
      });

      $("#special-1").click(function(){
        player.special1();
      });

      $("#special-2").click(function(){
        player.special2();
      });

      $("#special-3").click(function(){
        player.special3();
      });

    */

    let playerDamage = player.attack();
    enemy.HP -= (Math.max(playerDamage - enemy.DEF, 0));

    let enemyDamage = enemy.attack();
    player.HP -= (Math.max(enemyDamage - player.DEF, 0));

    $("#event-text").append(`player hp: ${player.HP}<br>`);
    $("#event-text").append(`enemy hp: ${enemy.HP}<br>`);
  }
}
