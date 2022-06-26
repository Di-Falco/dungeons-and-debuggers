// logic for Character class (applies to each player class)
export class Character {
  constructor(hp, atk, def, lvl, name) {
    this.baseHP = hp;
    this.baseATK = atk;
    this.baseDEF = def;
    this.baseLVL = lvl;

    this.HP = this.baseHP;
    this.ATK = this.baseATK;
    this.DEF = this.baseDEF;
    this.XP = 0;

    this.name = name;
  }

  attack() {
    let damage = this.ATK;
    return damage;
  }

  heal() {
    let health = this.HP;
    if ((this.baseHP - health) >= 5) {
      health += 5;
      return health;
    } else if ((this.baseHP - health) > 0) {
      health = this.baseHP;
      return health;
    }
    return health;
  }
}

// Logic for Fighter player class
export class Fighter extends Character {
  constructor(name) {
    super(50, 10, 4, 1, name);
  }

  special1() {
    this.DEF += 1;
  }

  special2() {
    let damage = this.ATK + 6;
    this.DEF -= 2;
    return damage;
  }
}

// Logic for Ranger player class
export class Ranger extends Character{
  constructor(name) {
    super(30, 8, 2, 1, name);

    this.critChance = 5;
    this.critMultiplier = 1.5;
  }

  special1() {
    this.ATK += 8;
    if (this.crit() < this.critChance) {
      this.ATK = Math.floor(this.ATK * this.critMultiplier);
    }
    this.attack();
  }

  crit() {
    let critRoll = parseInt((Math.random()* 100) + 1);
    return critRoll;
  }
}

// Logic for Wizard player class
export class Wizard extends Character {
  constructor(name) {
    super(25, 6, 1, 1, name);

    this.baseMP = 20;
    this.MP = this.baseMP;
  }

  special1() {
    this.ATK += 10;
    this.attack();
    this.MP -= 2;
  }

  special2() {
    this.ATK += 14;
    this.attack();
    this.MP -= 6;
  }

  special3() {
    this.ATK += 20;
    this.attack();
    this.MP -= 8;
  }
}