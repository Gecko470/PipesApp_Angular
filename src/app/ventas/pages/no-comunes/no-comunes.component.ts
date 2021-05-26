import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect Pipe
  nombre: string = "Francisco";
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural Pipe
  clientes: string[] = ['María', 'Pedro', 'Francisco', 'Antonio', 'Susana'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarNombre(){
    if(this.nombre === "Francisco"){
      this.nombre = "Susana";
      this.genero = "femenino";
    }
    else{
      this.nombre = "Francisco";
      this.genero = "masculino";
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    name: 'Juan',
    age: '51',
    direction: 'Barcelona, Spain'
  }

  //JSON Pipe
  heroes = [
    {
      nombre : 'Superman',
      vuela: true
    },
    {
      nombre : 'Robin',
      vuela: false
    },
    {
      nombre : 'Spiderman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) =>  {
    setTimeout(() => {
      resolve('Tenemos los datos de la promesa');
    }, 3500);
  })
}
