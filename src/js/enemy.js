export class Enemy {
  constructor(hp, atk, def, ap, lvl) {
    this.baseHP = hp;
    this.baseATK = atk;
    this.baseDEF = def;
    this.AP = ap;
    this.baseLVL = lvl;

    this.HP = this.baseHP;
    this.ATK = this.baseATK;
    this.DEF = this.baseDEF;
  }

  attack() {
    let damage = this.ATK;
    this.AP + 1;
    return damage;
  }

  smartAI() {
    let decision = parseInt(Math.random()*20);
    return decision;
  }
}

export class Goblin extends Enemy {
  constructor(hp, atk, def, ap, lvl) {
    super(hp, atk, def, ap, lvl);
  // (15, 5, 3, 6, 1)
  }

  enemyTurn(){  //Goblin Logic
    let move = this.smartAI();
    if (this.AP >= 4) {
      if (this.HP < 7){
        if (move >= 14) {
          return this.doubleAttack();
        } else {
          return this.callHelp();
        }
      } else if (move > 17) {
        return this.callHelp();
      } else if (move < 8) {
        return this.attack();
      } else {
        return this.doubleAttack();
      }
    } else if (this.AP > 0) {
      if (move > 11) {
        return this.doubleAttack();
      } else {
        return this.attack();
      }
    } else {
      return this.attack();
    }
  }

  doubleAttack () {
    let damage = this.attack();
    damage += this.attack();
    return damage;
  }

  callHelp () {
    this.AP -= 4;
    new Goblin(this.baseHP, this.baseATK, this.baseDEF, 2, this.baseLVL);
    return 0;
  }
}

export class Slime extends Enemy {
  constructor(hp, atk, def, ap, lvl, size) {
    super(hp, atk, def, ap, lvl); //(56, 9, 7, 8, 2, 2)
    this.size = size;
  }

  enemyTurn() {  //Slime Logic
    let move = this.smartAI();
    if (this.AP > 0) {
      if (this.size > 1 && move >=16) {
        return this.split;
      } else if (move > 17) {
        return this.goop();
      } else if (move > 10) {
        return this.jiggle();
      } else if ( move >= 2) {
        return this.bite();
      } else {
        return this.goop();
      }
    } else {
      return this.attack();
    }
  }

  split() {
    this.HP = (this.HP / 2) + 1;
    this.baseHP = this.hp;
    this.baseATK -= 2;
    this.ATK = this.baseATK - 1;
    this.baseDEF = this.baseDEF - 1;
    this.DEF = this.baseDEF;
    this.AP = (this.AP / 2);
    this.AP -= 1;
    this.size -= 1;
    new Slime(this.baseHP, this.baseATK, this.baseDEF, this.AP, this.baseLVL, this.size);
    return 0;
  }

  goop() {
    // this.AP -= 1;
    // lower opponent defense
    return this.attack();
  }

  jiggle() {
    if ((this.baseHP - this.HP) >= 5){
      this.HP += 5;
    } else if ((this.baseHP - this.HP) > 0) {
      this.HP = this.maxHP;
      this.ATK += 1;
    } else {
      this.baseHP += 2; 
      this.HP += 2;
      this.ATK += 1;
    }
    this.DEF += 1;
    return 0;
  }

  bite() {
    this.AP -= 2;
    if ((this.baseHP - this.HP) >= (this.ATK / 2)){
      this.HP += (this.ATK / 2);
      return this.attack();
    } else {
      if ((this.baseHP - this.HP) <= 2 && this.ATK >= 4) {
        this.baseHP += 1;
      }
      this.HP = this.baseHP;
      return this.attack();
    }
  }
}

export class Thief extends Enemy {
  constructor(hp, atk, def, ap, lvl) {
    super(hp, atk, def, ap, lvl);  // (40, 12, 5, 5, 1)
  }

  enemyTurn() {  //Thief Logic
    let move = this.smartAI();
    if (this.AP > 2) {
      if (move >= 12) {
        return this.slash();
      } else if (move > 6) {
        return this.swipe();
      } else {
        return this.doge();
      }
    } else {
      return this.swipe();
    }
  }

  slash() {
    this.AP -= 2;
    this.DEF = this.baseDEF;
    let damage = this.baseATK + this.baseLVL;
    return damage;
  }

  doge() {
    this.AP -= 1;
    this.DEF += 100;
  }

  swipe() {
    this.DEF = this.baseDEF;
    let damage = this.ATK;
    this.AP + 1;
    return damage;
  }
}