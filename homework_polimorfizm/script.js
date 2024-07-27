class Animal {
    speak() {
        throw new Error("Subclass must implement anoder method");
    }

    toString() {
        return this.constructor.name;
    }
}

class Dog extends Animal {
    speak() {
        return "Woof!";
    }

    take() {
        return "Dog take the ball";
    }
}

class Cat extends Animal {
    speak() {
        return "Miau!";
    }

    purr() {
        return "Cat purrs";
    }
}

class Bird extends Animal {
    speak() {
        return "Tweeting!";
    }

    fly() {
        return "Bird flies in the sky up and down ";
    }
}
class Fish extends Animal {
    speak() {
        return "Blubbling!";
    }

    swim() {
        return "Fish swims in the water";
    }
}

function makeAnimalSpeak(animal) {
    console.log(`${animal.toString()} says: ${animal.speak()}`);
}

const dog = new Dog();
const cat = new Cat();
const bird = new Bird();
const fish = new Fish();


makeAnimalSpeak(dog);
makeAnimalSpeak(cat);  
makeAnimalSpeak(bird); 
makeAnimalSpeak(fish); 


console.log(dog.take()),  
console.log(cat.purr()),  
console.log(bird.fly()) , 
console.log(fish.swim())