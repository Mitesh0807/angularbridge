import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TABLE, Table } from '../Table.interface';
@Component({
  selector: 'app-usertabel',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './usertabel.component.html',
  styleUrls: ['./usertabel.component.scss'],
  providers: [
    {
      provide: TABLE,
      useExisting: UsertabelComponent,
    },
  ],
})
export class UsertabelComponent implements Table {
  users = [
    {
      id: 1,
      name: 'John Doe',
      username: 'john',
      email: 'john@doe',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
    {
      id: 2,
      name: 'John Doe',
      username: 'john',
      email: 'john@doe',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
    {
      id: 3,
      name: 'John Doe',
      username: 'john',
      email: 'john@doe',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
    {
      id: 4,
      name: 'John Doe',
      username: 'john',
      email: 'john@doe',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
  ];
  refresh(): void {
    console.log('refresh');
  }
  search(term: string): void {
    console.log('search', term);
  }
}
