import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
      ]     
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });

  // it('should show address', () => {
  //   const address = fixture.nativeElement.querySelector(['data-test="address']);
  //   expect(address.querySelector('[data-test="addressFormat"]').innerText).toEqual('Nelson Mandela House,Peckham,London,SE15');
  // });
});
