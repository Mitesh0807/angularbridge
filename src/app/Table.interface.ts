import { InjectionToken } from '@angular/core';

export interface Table {
  refresh(): void;
  search(term: string): void;
}

export const TABLE = new InjectionToken<Table>('table');
