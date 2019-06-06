import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatChipsModule, MatSnackBarModule, 
          MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, MatListModule, MatDividerModule,
          MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule,MatButtonModule, MatToolbarModule, MatCardModule,
    MatChipsModule, MatSnackBarModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule,
    MatDividerModule, MatListModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, 
    MatChipsModule, MatSnackBarModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule,
    MatDividerModule, MatListModule]
})
export class MaterialModule { }
