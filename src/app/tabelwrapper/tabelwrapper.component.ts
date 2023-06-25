import { Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TABLE, Table } from '../Table.interface';
@Component({
  selector: 'app-tabelwrapper',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
  ],
  templateUrl: './tabelwrapper.component.html',
  styleUrls: ['./tabelwrapper.component.scss'],
})
export class TabelwrapperComponent implements Table {
  @ContentChild(TABLE, { static: true })
  table!: Table;
  searchTitle!: string;

  search(): void {
    this.table.search(this.searchTitle);
  }
  refresh() {
    this.table.refresh();
  }
}
