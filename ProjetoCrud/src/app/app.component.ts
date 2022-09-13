import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoCrud';
  public tarefa="";
  public items=['item1','item2'];
 addTarefa(){
  this.items.push(this.tarefa);
 }
 
 removerTarefa(item: string){
    this.items.splice(this.items.indexOf(item),1);
 }
}
