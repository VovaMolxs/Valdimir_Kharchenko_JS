/*
Подобие текстовой рпг, которую можно расширять и дорабатывать.

Хотел создать абстрактный класс, объект которого нельзя создавать, но погуглив понял что как таковых абстрактных классов тут нет, аоэтому сделал класс, который имеет все основные свойства и иетоды, и далее создал другие классы которые его наследники.

Что игра умеет: 
1. Можно создать объекты трех классов, Воин, Маг и Лучник. Свойства которых, за исключением имени, заданы по умолчанию в конструкторе. 
2. Так же можно создать, пати(объединение игроков), в которое можно добавить наши созданные объекты классов(воина, мага и лучника).
3. Так же создал подземелье, которое можно наполнить объектами классов (скелет и некромант). 
Классы скилет и некромант наследуют все свойства и методы класса Монстер.
4. Можно заставить пати проходить подземелье. 
Если пати меньше 3-х игроков, то мы не сможем войти в подземелье.
Игроки начинают бить монстров по очереди, и монстры бьют игроков в ответ(работает криво, но я пытаюсь придумать нормальную логику)
Дальше можно пати игроков отправить проходить данж, игроки бьют монстров в данже, а монстры бьют игроков в ответ.

Есть немного проверок в методах, но они не совершенны и их надо по уму доработать.

Что бы еще хотелось добавить:
1. Тип атаки для разных классов
2. Защиту
3. Класс целитель, который будет хилить. (Методы для хила я написал)
4. Дроп предметов из данжа
5. Крит атаки, увороты, промахи и т.п.
6. Систему уровней персонажей, которая будет повышать характеристики с новым уровнем

и многое многое другое.

*/

/*взял рандомайзер в гугле, для использования генерации критической аттаки
function getRandomInRange(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 if (this.getCritChance >= getRandomInRange(0, this.getCritChance)) {
            this.#attackAmount = attackAmount + attackAmount*this.getCritRate;
         }
*/
class CharacterClass {

   #name;
   #healthPoints;
   #manaPoints;
   #level;
   #attackAmount;
   #maxHealthPoints;
   #maxManaPoints;
   #critChance;
   #critRate;
   #killNPC;

   constructor (name, level, maxHealthPoints, maxManaPoints, healthPoints, manaPoints, attackAmount, critChance, critRate, killNPC) {
      this.#name = name;
      this.#level = level;
      this.#maxHealthPoints = maxHealthPoints;
      this.#maxManaPoints = maxManaPoints;
      this.#healthPoints = healthPoints;
      this.#manaPoints = manaPoints;
      this.#attackAmount = attackAmount;
      this.#critChance = critChance;
      this.#critRate = critRate;
      this.#killNPC = killNPC;
      
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
      } else {
         this.#attackAmount = attackAmount;
      }
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

   get getCritChance() {
      return this.#critChance;
   }

   set setCritChance(critChance) {
      this.#critChance = critChance;
   }

   get getCritRate() {
      return this.#critRate;
   }

   set setCritRate(critRate) {
      this.#critRate = this.#critRate
   }

   get getKillNPC() {
      return this.#killNPC;
   }

   set setKillNPC(killNPC) {
      this.#killNPC = killNPC;
   }

   attack(targetAttack){     
      if (this.#healthPoints < 1) {
         console.log("Мертвый не может аттаковать!");
      } else if (targetAttack.getHealthPoints < 1) {
         console.log("Цель мертва, а значит ее нельзя аттаковать!");
      } else {
         console.log(this.getName + " " + this.getHealthPoints + " HP, собирается аттаковать " + targetAttack.getName  + " " + targetAttack.getHealthPoints + " HP");
         targetAttack.loseHealth(this.getAttackAmount);
         console.log(this.getName + " Аттакует " + targetAttack.getName + " на " + this.getAttackAmount + " урона");
         if(targetAttack.getHealthPoints == 0) {
            this.killNPC = this.killNPC + 1;
            console.log(this.getName + " убил " + targetAttack.getName);
         }
      }    
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

   killerCounter(counter) {
      this.setKillNPC = this.#killNPC + counter;
   }

   levelUp() {

   };
   info() {
      console.log("Имя " + this.#name + "\n" + "Текущее ХП " + this.#healthPoints + "\n" + "Текущее МП " + this.#manaPoints + "\n" + "Левел = " + this.#level + "\n" + "Сила атаки " + this.#attackAmount + "\n" + "Колличество убитых NPC " + this.killNPC);
   };


}

class MonsterClass {
   
   #name;
   #healthPoints;
   #level;
   #attackAmount;
   #maxHealthPoints;
   #critRate

   constructor (name, level, maxHealthPoints, healthPoints, attackAmount, critRate) {
      this.#name = name;
      this.#level = level;
      this.#maxHealthPoints = maxHealthPoints;
      this.#healthPoints = healthPoints;
      this.#attackAmount = attackAmount;
      this.#critRate = critRate;
      
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

   get getCritRate() {
      return this.getCritRate;
   }

   set setCritRate(critRate) {
      this.#critRate = critRate;
   }

   attack(targetAttack){
      if (this.#healthPoints < 1) {
         console.log("Мертвый не может аттаковать!");
      } else if (targetAttack.getHealthPoints < 1) {
         console.log("Цель мертва, а значит ее нельзя аттаковать!");
      } else {
         console.log(this.getName + " " + this.getHealthPoints + " HP, собирается аттаковать " + targetAttack.getName  + " " + targetAttack.getHealthPoints + " HP");
         targetAttack.loseHealth(this.getAttackAmount);
         console.log(this.getName + " Аттакует " + targetAttack.getName + " на " + this.getAttackAmount + " урона");
         if(targetAttack.getHealthPoints == 0) {
            console.log(this.getName + " убил " + targetAttack.getName);
         }
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
           
            if (this.#partyMembers[j].getHealthPoints > 0) {
               this.#partyMembers[j].attack(dungeon.getDungeonMonster[i]);
            }
            
            if (dungeon.getDungeonMonster[i].getHealthPoints > 0) {
               dungeon.getDungeonMonster[i].attack(this.#partyMembers[j]);
            }

            console.log("----------------------------------------------"); 
            
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
   #descriptionDungeon;
   #dungeonMonsters;

   constructor(name, descriptionDungeon) {
      this.#name = name;
      this.#descriptionDungeon = descriptionDungeon;
      this.#dungeonMonsters = [];
   }

   get getDungeonName() {
      return this.#name;
   }

   set setDungeonName (name) {
      this.#name = name;
   }

   get getDescriptionDungeon() {
      return this.#descriptionDungeon;
   }

   set setDescriptionDungeon(descriptionDungeon) {
      this.#descriptionDungeon = descriptionDungeon;
   }

   set setDungeonMonster (monster) {
      this.#dungeonMonsters = monster;
   }

   get getDungeonMonster () {
      return this.#dungeonMonsters;
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


   info() {
      console.log("Информация о подземелье " + this.getDungeonName + "\n" + this.getDescriptionDungeon + "\n" + "Подземелье населяют следующие монстры:")
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
      this.setAttackAmount = 15;
      this.critChance = 70;
      this.critRate = 1;
      this.killNPC = 0;
      
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
      this.setAttackAmount = 25;
      this.critChance = 10;
      this.critRate = 1;
      this.killNPC = 0;
      
   }
}

class Archer extends CharacterClass {
   constructor (name) {
      super(name);
      this.name = name;
      this.setLevel = 1;
      this.setMaxHealthPoints = 50;
      this.setMaxManaPoints = 70;
      this.setHealthPoints = 50;
      this.setManaPoints = 70;
      this.setAttackAmount = 15;
      this.critChance = 10;
      this.critRate = 1;
      this.killNPC = 0;
      
   }
}

class Skeletons extends MonsterClass {
   constructor (name) {
      super(name);
      this.name = name;
      this.setLevel = 1;
      this.setMaxHealthPoints = 50;
      this.setHealthPoints = 50;
      this.setAttackAmount = 4;
      this.critChance = 10;
      this.critRate = 1;
   }
}

class Necromancer extends MonsterClass {
   constructor (name) {
      super(name);
      this.name = name;
      this.setLevel = 1;
      this.setMaxHealthPoints = 30;
      this.setHealthPoints = 30;
      this.setAttackAmount = 7;
      this.critChance = 10;
      this.critRate = 1;
   }
}



let party = new Party(); //Создаем пати
party.inviteParty(new Warrior("Aragon")); //добавляем игоков в пати если два, то в подземелье не войдем
party.inviteParty(new Archer("Legalaz"));
party.inviteParty(new Mage("Gendalf"));
console.log("Создали пати, и наполнили его объектами персонажами: ");
party.info(); //инфо по пати
console.log("--------------------------------------------");

let dungeon = new Dungeon("Красная пещера!", "Огромное подземелье находящееся в красной горе, из-за чего оно получило свое название. По легадам ходит слухи что в этом подземелье можно встретить разных опасных монстров. Говорят что многие зашедшие сюда, назад уже не вернулись..."); //Создаем подземелье и добавляем туда монстров
dungeon.addMonsterDungeon(new Skeletons('Скелет Кровожадный'));
dungeon.addMonsterDungeon(new Skeletons('Скелет Лучник'));
dungeon.addMonsterDungeon(new Necromancer('Некромант Одноглазый'));
dungeon.addMonsterDungeon(new Necromancer('Некромант Гниющий'));

console.log("Создали подземелье и наполнили его объектами монстрами: ")
dungeon.info(); //инфо по подземелью
console.log("--------------------------------------------")

if (party.enterDungeon(dungeon)) {
   party.setDungeon = dungeon;
   party.runDungeon(dungeon);
} else {
   console.log("Пати не вошло в подземелье!");
}

console.log("информация о персонажах после боя");
party.info();
