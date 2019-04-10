import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatgoriesComponent } from './subcatgories.component';

describe('SubcatgoriesComponent', () => {
  let component: SubcatgoriesComponent;
  let fixture: ComponentFixture<SubcatgoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatgoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatgoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
