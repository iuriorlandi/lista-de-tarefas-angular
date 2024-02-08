import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-de-tarefas',
  standalone: true,
  imports: [TarefaComponent, FormsModule, NgFor, CommonModule],
  templateUrl: './lista-de-tarefas.component.html',
  styleUrl: './lista-de-tarefas.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ListaDeTarefasComponent {
  tarefas: Tarefa[] = [];
  novaTarefa: string = '';
  dataTarefa: Date = new Date();
  tags: string[] = ['Trabalho', 'Pessoal', 'Estudos'];
  novaTag: string = '';

  adicionarTarefa(descricao:string, data:Date, tag:string){
    const novaTarefa: Tarefa = {
      id: this.tarefas.length + 1,
      descricao,
      concluida: false,
      data,
      tag,
    }

    this.tarefas.push(novaTarefa);
    this.novaTarefa = '';
  }

  obterTarefasAtivas(){
    return this.tarefas.filter(t => !t.concluida)
  }

  concluirTarefa(id: number) {
    const tarefa = this.tarefas.find((t) => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }
}
