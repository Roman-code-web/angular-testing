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
  calcular(){
    this.operacion=this.formcalcular.get('operacion')?.value;
    this.num1=this.formcalcular.get('num1')?.value;
    this.num2=this.formcalcular.get('num2')?.value;
    if(this.operacion=='+'){
      this.resultado=this.num1 + this.num2;

    }else if(this.operacion=='-'){
      this.resultado=this.num1 - this.num2;
    }
    else if(this.operacion=='*'){
      this.resultado=this.num1 * this.num2;
    }
    else if(this.operacion=='/'){
      this.resultado=this.num1 / this.num2;
    }else{

    }
  }
  validacion(name: string) {
    return this.formcalcular.get(name)?.errors && (this.formcalcular.get(name)?.touched || this.formcalcular.get(name)?.dirty);
  }
}
