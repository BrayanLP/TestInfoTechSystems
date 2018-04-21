import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public apiUrl= "https://jsonplaceholder.typicode.com/users";
  data: {};
  info: {};
  constructor(
    public http: Http
  ){
    console.log("Ejecutando");
    this.load();
  }

  ngOnInit() {
  }
  /* Obtener la data del Api */
  getDataApi(){
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }
  /* Mostramos la data en la tabla */
  load(){
    this.getDataApi().subscribe(res =>{
      console.log(res);
      this.data = res;
    })
  }
  detalle(id,data){
    this.info = data;
    let element  = document.getElementById(id);
    let bodyElement = document.getElementsByTagName('BODY')[0];
    element.classList.remove("hide");
    bodyElement.classList.add('overley');
    // $('#modal'+id).removeClass('hide');
  }
  close(id){
    let element  = document.getElementById(id);
    let bodyElement = document.getElementsByTagName('BODY')[0];
    element.classList.add("hide");
    bodyElement.classList.remove('overley');
  }

}
