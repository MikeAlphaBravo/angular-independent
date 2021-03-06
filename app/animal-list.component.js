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
var AnimalListComponent = (function () {
    function AnimalListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.filterByYoung = "oldAnimals";
    }
    AnimalListComponent.prototype.onChange = function (optionFromMenu) {
        this.filterByYoung = optionFromMenu;
    };
    AnimalListComponent.prototype.editButtonHasBeenClicked = function (animalToEdit) {
        this.clickSender.emit(animalToEdit);
    };
    return AnimalListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AnimalListComponent.prototype, "childAnimalList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalListComponent.prototype, "clickSender", void 0);
AnimalListComponent = __decorate([
    core_1.Component({
        selector: 'animal-list',
        template: "\n  <select (change)=\"onChange($event.target.value)\">\n      <option value=\"allAnimals\">All Animals</option>\n      <option value=\"underTwoAnimals\">Animals under 2 years old</option>\n      <option value=\"overTwoAnimals\">Animals over 2 years old</option>\n    </select>\n    <br><br>\n  <ol>\n    <li *ngFor=\"let currentAnimal of childAnimalList | young:filterByYoung\"><span>{{currentAnimal.name}}</span>\n      <button class=\"btn btn-primary\" (click)=\"editButtonHasBeenClicked(currentAnimal)\">Edit!</button><br>\n      <ul>\n        <li>Species: {{currentAnimal.species}}</li>\n        <li>Name: {{currentAnimal.name}}</li>\n        <li>Age: {{currentAnimal.age}}</li>\n        <li>Diet: {{currentAnimal.diet}}</li>\n        <li>Location: {{currentAnimal.location}}</li>\n        <li>Caretakers: {{currentAnimal.caretakers}}</li>\n        <li>Sex: {{currentAnimal.sex}}</li>\n        <li>Likes: {{currentAnimal.likes}}</li>\n        <li>Dislikes: {{currentAnimal.dislikes}}</li>\n      </ul><br>\n    </li>\n  </ol>\n  "
    })
], AnimalListComponent);
exports.AnimalListComponent = AnimalListComponent;
//# sourceMappingURL=animal-list.component.js.map