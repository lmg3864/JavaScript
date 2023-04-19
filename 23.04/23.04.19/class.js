class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} make some noise`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    speak() {
        console.log(`${this.name} barks`)
    }
}

const d = new Dog('바둑이')
d.speak()