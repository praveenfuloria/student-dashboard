import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentFilter } from '../models/student';

@Component({
  imports: [],
  selector: 'app-student-count',
  styleUrl: './student-count.css',
  templateUrl: './student-count.html',
})
export class StudentCount {
  // Parent -> Child (data)
  @Input() all = 0;
  @Input() male = 0;
  @Input() female = 0;
  @Input() selected: StudentFilter = 'All';
  // Child -> Parent (event)
  @Output() selectionChanged = new EventEmitter<StudentFilter>();
  onSelectionChange(value: StudentFilter): void {
    this.selectionChanged.emit(value);
  }
}
