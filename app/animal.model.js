"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = (function () {
    function Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.diet = diet;
        this.location = location;
        this.caretakers = caretakers;
        this.sex = sex;
        this.likes = likes;
        this.dislikes = dislikes;
        this.aged = false;
        this.yearsLeft = 20;
    }
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.model.js.map