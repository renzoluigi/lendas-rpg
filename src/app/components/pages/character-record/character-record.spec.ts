import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRecord } from './character-record';

describe('CharacterRecord', () => {
  let component: CharacterRecord;
  let fixture: ComponentFixture<CharacterRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterRecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterRecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
