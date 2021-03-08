import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cadena:string="";
  numeroX:number=0;
  numeroY:number=0;
  calculo:string="";
  borrarN:boolean=false;

  addNumber(num:number){
    if(this.borrarN==true)this.cadena="";
    this.cadena+=num;
    this.numeroX=+this.cadena;
    this.borrarN=false;
  }

  operacion(op:string){
    this.calculo=op;
    this.cadena="";
    this.numeroY = this.numeroX;
    this.numeroX=0;
  }

  borrar(){
    this.cadena="";
    this.calculo="";
    this.numeroX=0;
    this.numeroY=0;
  }

  calcular(){
    switch(this.calculo){
      case "sumar":{
        this.numeroX= this.numeroY+this.numeroX;
        break
      }
      case "restar":{
        this.numeroX=this.numeroY-this.numeroX;
        break
      }
      case "multiplicar":{
        this.numeroX=this.numeroY*this.numeroX;
        break
      }
      case "dividir":{
        this.numeroX=this.numeroY/this.numeroX;
        break
      }
    }
    this.numeroY=0;
    this.calculo="";
    this.borrarN=true;
    
    
  }
}
