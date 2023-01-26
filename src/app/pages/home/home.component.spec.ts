import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule //test de imporatcion de reactive module
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //test title
  it(`should have as title 'Calculadora'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Calculadora');
  });
  //render title
  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Calculadora');
  });

  //test funcion
  it('should add two number, calcular(num1: number , num2:number, ope:string)', ()=>{
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;

    const data = { num1: 4, num2: 14 , ope: '+'};
    const expectedResult = 18;

    const result = app.calcular(data.num1, data.num2, data.ope);
    expect(result).toEqual(expectedResult);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
