import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { ItemToDo } from './ItemToDo';
import { ListToDo } from './listToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoCrud';
  public tarefa="";
  public tarefas= ListToDo
  
  http: any;
 addTarefa(){
  let tarefaTeste: ItemToDo={
    id: '1',
    descricao: this.tarefa,
    dataCriacao: 0,
    valorUpdate: '',
  }
  this.tarefas.push(tarefaTeste);
  this.tarefa='';
  
 }
 
 removerTarefa(item: ItemToDo){
    this.tarefas.splice(this.tarefas.indexOf(item),1);
 }

updateTarefa(item: ItemToDo){
  item.descricao = item.valorUpdate
  item.valorUpdate =''
}
}
