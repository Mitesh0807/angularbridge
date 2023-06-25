import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from '../Table.interface';

@Component({
  selector: 'app-roletabel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roletabel.component.html',
  styleUrls: ['./roletabel.component.scss'],
})
export class RoletabelComponent implements Table {
  refresh(): void {}
  search(term: string): void {}
}
