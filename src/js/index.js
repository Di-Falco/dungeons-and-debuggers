import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { Fighter, Ranger, Wizard } from './character.js';
import { Combat } from './combat.js';
// import { Goblin, Slime } from './enemy.js';


$(document).ready(function(){

  $("form#character-creation").submit(function(event){
    event.preventDefault();
    let playerClass = $("input:radio[name=player-class]:checked").val();
    let playerName = $("#player-name").val();
    let player;
  
    switch(playerClass) {
    case('fighter'):
      player = new Fighter(playerName);
      break;
    case('ranger'):
      player = new Ranger(playerName);
      break;
    case('wizard'):
      player = new Wizard(playerName);
      break;
    }

    $("#character-name").html(`<strong>Name:</strong> ${player.name}<br>`);
    $("#character-hp").html(`<strong>HP:</strong> ${player.HP}<br>`);
    $("#character-atk").html(`<strong>Attack Power:</strong> ${player.ATK}<br>`);
    $("#character-def").html(`<strong>Defense:</strong> ${player.DEF}<br>`);
    if (playerClass === 'fighter') {
      $("#special-1").text("Guard");
    } else if (playerClass === 'ranger') {
      $("#character-crit").html(`<strong>Crit chance:</strong> ${player.critChance}%<br>`);
      $("#special-1").text("Ranged Attack");
    } else if (playerClass === 'wizard') {
      $("#character-mana").html(`<strong>MP:</strong> ${player.MP}<br>`);
      $("#special-1").text("Magic Missile");
    }

    $("#special-1").show();

    console.log(player);

    $("form#character-creation").slideUp();


    Combat(player);

  });

});