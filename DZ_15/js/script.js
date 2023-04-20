class CharacterClass {

   #name;
   #healthPoints;
   #manaPoints;
   #level;
   #attackAmount;
   #maxHealthPoints;
   #maxManaPoints;

   constructor (name, level, maxHealthPoints, maxManaPoints, healthPoints, manaPoints, attackAmount) {
      this.#name = name;
      this.#level = level;
      this.#maxHealthPoints = maxHealthPoints;
      this.#maxManaPoints = maxManaPoints;
      this.#healthPoints = healthPoints;
      this.#manaPoints = manaPoints;
      this.#attackAmount = attackAmount;
      
   }
   

   get getName() {
      return this.#name;
   }

   set setName(name) {
      this.#name = name;
   }

   get getHealthPoints() {
      return this.#healthPoints;
   }

   set setHealthPoints(healthPoints) {
      if (healthPoints < 0){  // Если устанавливаемое значения здоровья меньше 0, то устанавливаем = 0, если больше максимального, то максимальное
         this.#healthPoints = 0;
      } else if (healthPoints > this.#maxHealthPoints) {
         this.#healthPoints = this.#maxHealthPoints;
      } else this.#healthPoints = healthPoints;
   }

   get getManaPoints() {
      return this.#manaPoints;
   }

   set setManaPoints(manaPoints) {
      if (manaPoints < 0) {
         this.#manaPoints = 0
      } else if (manaPoints > this.#maxManaPoints) {
         this.#manaPoints = this.#maxManaPoints;
      } else this.#manaPoints = manaPoints;
   }

   get getLevel() {
      return this.#level;
   }

   set setLevel(level) {
      if (level < 1) {
         this.#level = 1;
      } else this.#level = level;
   }

   get getAttackAmount() {
      return this.#attackAmount;
   }

   set setAttackAmount(attackAmount) {
      if (attackAmount < 0) {
         console.log("Вы не можете аттаковать меньше нуля!")
      } else this.#attackAmount = attackAmount;
   }

   get getMaxHealthPoints() {
      return this.#healthPoints;
   }

   set setMaxHealthPoints(maxHealthPoints) {
      this.#maxHealthPoints = maxHealthPoints;
   }

   get getMaxManaPoints() {
      return this.#maxManaPoints;
   }

   set setMaxManaPoints(maxManaPoints) {
      this.#maxManaPoints = maxManaPoints;
   }


   attack(targetAttack){
      targetAttack.loseHealth(this.getAttackAmount);
      console.log(this.#name + " Аттакует " + targetAttack.getName + " и наносит " + this.getAttackAmount + " урона\n" + 
      " Здоровье цели " + targetAttack.getHealthPoints);
      
   };
   restoreHealth(amount) {
      this.setHealthPoint = this.#healthPoints + amount;
   };
   loseHealth(amount) {
      this.setHealthPoints = this.#healthPoints - amount;
   };
   restoreMana(amount) {
      this.setManaPoints = this.#manaPoints + amount;
   };
   loseMana(amount) {
      this.setManaPoints = this.#manaPoints - amount;
   };
   levelUp() {

   };
   info() {
      console.log("Имя " + this.#name + " Текущее ХП " + this.#healthPoints + " Текущее МП " + this.#manaPoints + " Левел = " + this.#level + " Сила атаки " + this.#attackAmount)
   };


}

class MonsterClass {
   
   #name;
   #healthPoints;
   #level;
   #attackAmount;
   #maxHealthPoints;

   constructor (name, level, maxHealthPoints, healthPoints, attackAmount) {
      this.#name = name;
      this.#level = level;
      this.#maxHealthPoints = maxHealthPoints;
      this.#healthPoints = healthPoints;
      this.#attackAmount = attackAmount;
      
   }
   

   get getName() {
      return this.#name;
   }

   set setName(name) {
      this.#name = name;
   }

   get getHealthPoints() {
      return this.#healthPoints;
   }

   set setHealthPoints(healthPoints) {
      if (healthPoints < 0){  // Если устанавливаемое значения здоровья меньше 0, то устанавливаем = 0, если больше максимального, то максимальное
         this.#healthPoints = 0;
      } else if (healthPoints > this.#maxHealthPoints) {
         this.#healthPoints = this.#maxHealthPoints;
      } else this.#healthPoints = healthPoints;
   }


   get getLevel() {
      return this.#level;
   }

   set setLevel(level) {
      if (level < 1) {
         this.#level = 1;
      } else this.#level = level;
   }

   get getAttackAmount() {
      return this.#attackAmount;
   }

   set setAttackAmount(attackAmount) {
      if (attackAmount < 0) {
         console.log("Вы не можете аттаковать меньше нуля!")
      } else this.#attackAmount = attackAmount;
   }

   get getMaxHealthPoints() {
      return this.#healthPoints;
   }

   set setMaxHealthPoints(maxHealthPoints) {
      this.#maxHealthPoints = maxHealthPoints;
   }

   attack(targetAttack){
      if (this.getHealthPoints > 0) {
         targetAttack.loseHealth(this.getAttackAmount);
      console.log(this.#name + " Аттакует " + targetAttack.getName + " и наносит " + this.getAttackAmount + " урона\n" + 
      " Здоровье цели " + targetAttack.getHealthPoints);
      } else {
         console.log("Цель убита!")
         return;
      }
      
   };
   restoreHealth(amount) {
      this.setHealthPoints = this.#healthPoints + amount;
   };
   loseHealth(amount) {
      this.setHealthPoints = this.#healthPoints - amount;
   };

   info() {
      console.log("Имя " + this.#name + " Текущее ХП " + this.#healthPoints + " Левел = " + this.#level + " Сила атаки " + this.#attackAmount)
   };
}


class Party {

   #partyMembers;
   #dungeon;

   constructor () {
      this.#partyMembers = [];
   }

   get getPartyMembers() {
      return this.#partyMembers;
   }

   set setPartyMembers(partyMembers) {
      this.#partyMembers = partyMembers;
   }

   get getDungeon() {
      return this.#dungeon;
   }

   set setDungeon(dungeon) {
      this.#dungeon = dungeon.getDungeonName;
   }

   inviteParty(member) {
      this.#partyMembers.push(member);
   }

   enterDungeon(dungeon) {
      return dungeon.open(this);
   }

   runDungeon(dungeon) {
      console.log("Проходим подземелье!");
      for (let i = 0; i < dungeon.getDungeonMonster.length; i++) {
         for(let j = 0; j < this.#partyMembers.length; j++) {
            this.#partyMembers[j].attack(dungeon.getDungeonMonster[i]);
            dungeon.getDungeonMonster[i].attack(this.#partyMembers[j]);
         }
      }


   }

   info() {
      for (let i = 0; i < this.#partyMembers.length; i++) {
         this.#partyMembers[i].info();
      }
   }

}

class Dungeon {

   #name;
   #dungeonMonsters;

   constructor(name) {
      this.#name = name;
      this.#dungeonMonsters = [];
   }

   open(party) {
      let isOpened = false;

      if (party.getPartyMembers.length < 3) {
         console.log("Слишком мало игроков в пати! для прохождения подземелья" + this.getDungeonName);
         isOpened = false;
      } else {
         console.log("Добро пожаловать в подземелье! " + this.getDungeonName);
         isOpened = true;
      }
      return isOpened;
   }

   addMonsterDungeon(monster) {
      this.#dungeonMonsters.push(monster);
   }

   get getDungeonName() {
      return this.#name;
   }

   set setDungeonName (name) {
      this.#name = name;
   }

   set setDungeonMonster (monster) {
      this.#dungeonMonsters = monster;
   }

   get getDungeonMonster () {
      return this.#dungeonMonsters;
   }


   info() {
      for (let i = 0; i < this.#dungeonMonsters.length; i++) {
         this.#dungeonMonsters[i].info();
      }
   }
}


class Warrior extends CharacterClass {
   constructor (name) {
      super(name);
      this.name = name;
      this.setLevel = 1;
      this.setMaxHealthPoints = 150;
      this.setMaxManaPoints = 50;
      this.setHealthPoints = 150;
      this.setManaPoints = 50;
      this.setAttackAmount = 5;
      
   }
}

class Mage extends CharacterClass {
   constructor (name) {
      super(name);
      this.name = name;
      this.setLevel = 1;
      this.setMaxHealthPoints = 50;
      this.setMaxManaPoints = 100;
      this.setHealthPoints = 50;
      this.setManaPoints = 100;
      this.setAttackAmount = 15;
      
   }
}

class Archer extends CharacterClass {
   constructor (name) {
      super(name);
      this.name = name;
      this.setLevel = 1;
      this.setMaxHealthPoints = 75;
      this.setMaxManaPoints = 70;
      this.setHealthPoints = 75;
      this.setManaPoints = 70;
      this.setAttackAmount = 10;
      
   }
}

class Skeletons extends MonsterClass {
   constructor (name) {
      super(name);
      this.name = name;
      this.setLevel = 1;
      this.setMaxHealthPoints = 50;
      this.setHealthPoints = 50;
      this.setAttackAmount = 2;
   }
}

class Necromancer extends MonsterClass {
   constructor (name) {
      super(name);
      this.name = name;
      this.setLevel = 1;
      this.setMaxHealthPoints = 30;
      this.setHealthPoints = 30;
      this.setAttackAmount = 5;
   }
}




let party = new Party(); //Создаем пати
party.inviteParty(new Warrior("Aragon")); //добавляем игоков в пати если два, то в подземелье не войдем
party.inviteParty(new Archer("Legalaz"));
party.inviteParty(new Mage("Gendalf"));
party.info();

let dungeon = new Dungeon("Красная пещера!"); //Создаем подземелье и добавляем туда монстров
dungeon.addMonsterDungeon(new Skeletons('Скелет 1'));
dungeon.addMonsterDungeon(new Skeletons('Скелет 2'));
dungeon.addMonsterDungeon(new Necromancer('Некромант 1'));
dungeon.addMonsterDungeon(new Necromancer('Некромант 2'));
dungeon.info();


if (party.enterDungeon(dungeon)) {
   party.setDungeon = dungeon;
   party.runDungeon(dungeon);
} else {
   console.log("Пати не вошло в подземелье!");
}

