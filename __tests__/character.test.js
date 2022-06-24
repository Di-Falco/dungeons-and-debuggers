import {Character, Fighter, Ranger, Wizard} from '../src/js/character.js';

describe ('Character', () => {
 
  let fighter;
  let ranger;
  let wizard;

  beforeEach(() => {
    fighter = new Fighter;
    ranger = new Ranger;
    wizard = new Wizard;
  });

  test('should return a character object with default stats', () => {
    const character = new Character(50, 10, 10, 1, "Bigby");
    expect(character.baseHP).toEqual(50);
    expect(character.baseATK).toEqual(10);
    expect(character.baseDEF).toEqual(10);
    expect(character.baseLVL).toEqual(1);
    expect(character.name).toEqual("Bigby");
    expect(character.HP).toEqual(50);
    expect(character.ATK).toEqual(10);
    expect(character.DEF).toEqual(10);
    expect(character.XP).toEqual(0);
  });
});

test('should return the damage after an attack', () => {
  const character = new Character(50, 10, 10, 1, "Bigby");
  expect(character.attack()).toEqual(10);
});

test('should increase HP by 5 if baseHP is down by 5 or more points', () => {
  const character = new Character(50, 10, 10, 1, "Bigby");
  character.HP -= 6;
  expect(character.heal()).toEqual(49);
});

test('should return baseHP if HP points are missing less than 5 points', () => {
  const character = new Character(50, 10, 10, 1, "Bigby");
  character.HP -= 3;
  expect(character.heal()).toEqual(50);
});

test('should return a fighter object with default stats', () => {
  const fighter = new Fighter("Bigby")
  expect(fighter.baseHP).toEqual(50);
  expect(fighter.baseATK).toEqual(10);
  expect(fighter.baseDEF).toEqual(4);
  expect(fighter.baseLVL).toEqual(1);
  expect(fighter.HP).toEqual(50);
  expect(fighter.ATK).toEqual(10);
  expect(fighter.DEF).toEqual(4);
  expect(fighter.XP).toEqual(0);
  expect(fighter.name).toEqual("Bigby");
});

test('should increase DEF by 1', () => {
  const fighter = new Fighter("Bigby")
  fighter.guard();
  expect(fighter.DEF).toEqual(5);
});

test('should return ATK + 6, and DEF - 2', () => {
  const fighter = new Fighter("Bigby");
  expect(fighter.heavyAttack()).toEqual(16);
  expect(fighter.DEF).toEqual(2);
});

test('should return a Ranger object with defualt stats', ()=> {
  const ranger = new Ranger("Mo");
  expect(ranger.baseHP).toEqual(30);
  expect(ranger.baseATK).toEqual(8);
  expect(ranger.baseDEF).toEqual(2);
  expect(ranger.baseLVL).toEqual(1);
  expect(ranger.name).toEqual("Mo");
  expect(ranger.HP).toEqual(30);
  expect(ranger.ATK).toEqual(8);
  expect(ranger.DEF).toEqual(2);
  expect(ranger.XP).toEqual(0);
  expect(ranger.critChance).toEqual(5);
  expect(ranger.critMultiplier).toEqual(1.5);

});

test('should return a number between 1 to 100', () => {
  const ranger = new Ranger("Mo");
  expect(ranger.crit()).toBeGreaterThanOrEqual(1);
  expect(ranger.crit()).toBeLessThanOrEqual(100);
});
