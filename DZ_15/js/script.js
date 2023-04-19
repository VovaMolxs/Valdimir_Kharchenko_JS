class Hero {

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


   attack(){
      
   };
   restoreHealth(amount) {
      this.setHealthPoints(this.#healthPoints + amount);
   };
   loseHealth(amount) {
      this.setHealthPoints(this.#healthPoints - amount);
   };
   restoreMana(amount) {
      this.setManaPoints(this.#manaPoints + amount);
   };
   loseMana(amount) {
      this.setManaPoints(this.#manaPoints - amount);
   };
   levelUp() {

   };
   info() {
      console.log("Имя " + this.#name + " Текущее ХП " + this.#healthPoints + " Текущее МП " + this.#manaPoints + " Левел = " + this.#level + " Сила атаки " + this.#attackAmount)
   };


}


class Party {


   #partyMembers;

   constructor () {
      this.#partyMembers = [];
   }

   get getPartyMembers() {
      return this.#partyMembers;
   }

   set setPartyMembers(partyMembers) {
      this.#partyMembers = partyMembers;
   }

   add(member) {
      this.#partyMembers.push(member);
   }

   info() {
      for (let i = 0; i < this.#partyMembers.length; i++) {
         this.#partyMembers[i].info();
      }
      }

}


class Warrior extends Hero {
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

class Mage extends Hero {
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



class Archer extends Hero {
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

let party = new Party(); 
party.add(new Warrior("Aragon"));
party.add(new Archer("Legalaz")); 
party.add(new Mage("Gendalf"));

party.info();

