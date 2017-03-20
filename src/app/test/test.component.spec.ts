import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import {RouterModule, ActivatedRoute} from "@angular/router";
import {MockActivatedRoute} from "./activateRoute.mock";

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let activeRoute: MockActivatedRoute;

  beforeEach(() => {
    activeRoute = new MockActivatedRoute();
  });

  beforeEach(async(() => {
    // test module configuring
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [],
      providers: [
        { provide: ActivatedRoute, useValue: activeRoute }
      ]
    });
  }));
  const createComponent = () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it('should have a defined component', () => {
    activeRoute.testParams = {id: 1231};
    createComponent();
    component.test = 'test';
    expect(component).toBeDefined();
  });
});
