import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  //variable to store incoming data from parent
  @Input() childAcno: string | undefined

  //event creation
  @Output() onCancel= new EventEmitter()
  @Output() onDelete= new EventEmitter()

  constructor() { }
  ngOnInit(): void {

  }
  
  //without data
  cancelDelete(){
    this.onCancel.emit()
  }

  //emit data
  confirmDelete(){
    this.onDelete.emit(this.childAcno)
  }
}
