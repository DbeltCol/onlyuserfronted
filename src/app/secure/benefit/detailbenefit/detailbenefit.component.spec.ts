import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbenefitComponent } from './detailbenefit.component';

describe('DetailbenefitComponent', () => {
  let component: DetailbenefitComponent;
  let fixture: ComponentFixture<DetailbenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailbenefitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailbenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
