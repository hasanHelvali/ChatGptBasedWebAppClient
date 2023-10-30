import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImageComponent } from './create-image.component';

describe('CreateImageComponent', () => {
  let component: CreateImageComponent;
  let fixture: ComponentFixture<CreateImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateImageComponent]
    });
    fixture = TestBed.createComponent(CreateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
