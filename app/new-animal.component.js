"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal.model");
var NewAnimalComponent = (function () {
    function NewAnimalComponent() {
        this.newAnimalSender = new core_1.EventEmitter();
    }
    NewAnimalComponent.prototype.submitForm = function (species, name, age, diet, location, caretakers, sex, likes, dislikes) {
        var newAnimalToAdd = new animal_model_1.Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
        this.newAnimalSender.emit(newAnimalToAdd);
    };
    return NewAnimalComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewAnimalComponent.prototype, "newAnimalSender", void 0);
NewAnimalComponent = __decorate([
    core_1.Component({
        selector: 'new-animal',
        template: "\n    <h1>New Animal</h1>\n    <label>Enter Animal Species:</label>\n      <input type=\"text\" [(ngModel)]=\"childSelectedAnimal.species\">\n      <br>\n    <label>Enter Animal Name:</label>\n      <input type=\"text\" [(ngModel)]=\"childSelectedAnimal.name\">\n      <br>\n    <label>Enter Animal Age:</label>\n      <input type=\"number\" [(ngModel)]=\"childSelectedAnimal.age\">\n      <br>\n    <label>Enter Animal Diet:</label>\n      <br>\n    <select>\n\n    </select>\n      <br>\n    <label>Enter Animal Location:</label>\n      <br>\n    <select>\n\n    </select>\n      <br>\n    <label>Enter Animal's Number of Caretakers:</label>\n      <input type=\"numer\" [(ngModel)]=\"childSelectedAnimal.caretakers\">\n      <br>\n    <label>Enter Animal's Sex:</label>\n      <br>\n    <select>\n\n    </select>\n      <br>\n    <label>Enter Animal's Likes:</label>\n      <input type=\"text\" [(ngModel)]=\"childSelectedAnimal.likes\">\n      <br>\n    <label>Enter Animal's Dislikes:</label>\n      <input type=\"text\" [(ngModel)]=\"childSelectedAnimal.dislikes\">\n      <br>\n    <div>\n      <button (click)=\"submitForm(newName.value, newAge.value, newCaretakers.value); newName.value=''; newAge.value=''; newCaretakers.value='';\">Add</button>\n    </div>\n  "
    })
], NewAnimalComponent);
exports.NewAnimalComponent = NewAnimalComponent;
//# sourceMappingURL=new-animal.component.js.map