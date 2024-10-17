import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlummnoComponent } from './alummno.component';

describe('AlummnoComponent', () => {
  let component: AlummnoComponent;
  let fixture: ComponentFixture<AlummnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlummnoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlummnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
