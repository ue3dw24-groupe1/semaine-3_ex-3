"use strict";
var testing_1 = require("@angular/core/testing");
var hero_detail_component_1 = require("./hero-detail.component");
describe('HeroDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [hero_detail_component_1.HeroDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(hero_detail_component_1.HeroDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hero-detail.component.spec.js.map