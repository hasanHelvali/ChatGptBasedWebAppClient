import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionTextComponent } from './completion-text.component';

describe('CompletionTextComponent', () => {
  let component: CompletionTextComponent;
  let fixture: ComponentFixture<CompletionTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletionTextComponent]
    });
    fixture = TestBed.createComponent(CompletionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
