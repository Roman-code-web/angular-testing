import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  operacion!:string;
  num1!:number;  
  num2!:number;
  resultado!:number;
  formcalcular!:FormGroup;
  title='Calculadora';

  constructor(private frmb : FormBuilder){
    this.formcalcular=frmb.group({
      num1:['',
        [
          Validators.required
        ]
      ],
      num2:['',
        [
          Validators.required
        ]
      ],
      operacion:['', 
      [
        Validators.required
      ]
      ]
    })
  }
onClick(){    //obtengo valor
    this.operacion=this.formcalcular.get('operacion')?.value;
    this.num1=this.formcalcular.get('num1')?.value;
    this.num2=this.formcalcular.get('num2')?.value;
    //ejecuto funcion
    this.calcular(this.num1, this.num2, this.operacion);
  }
  calcular(num1: number , num2:number, ope:string){
      if(ope=='+'){
        this.resultado=num1 + num2;
      }else if(ope=='-'){
        this.resultado=num1 - num2;
      }
      else if(ope=='*'){
        this.resultado=num1 * num2;
      }
      else if(ope=='/'){
        this.resultado=num1 / num2;
      }else{
        
      }
      return this.resultado;    
   
  }

  validacion(name: string) {
    return this.formcalcular.get(name)?.errors && (this.formcalcular.get(name)?.touched || this.formcalcular.get(name)?.dirty);
  }
}
