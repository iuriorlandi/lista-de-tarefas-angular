import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css',
  imports: [FormsModule],
  standalone: true,
})

export class TarefaComponent {
  @Input() tarefa: Tarefa = {id: 0, descricao: '', concluida: false, data: new Date(), tag: ''};
  @Output() tarefaConcluida = new EventEmitter<number>();

  concluirTarefa() {
      this.tarefaConcluida.emit(this.tarefa.id)
  }
}
