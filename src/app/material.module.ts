import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatChipsModule, MatSnackBarModule, 
          MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, MatListModule, MatDividerModule,
          MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule,MatButtonModule, MatToolbarModule, MatCardModule,
    MatChipsModule, MatSnackBarModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule,
    MatDividerModule, MatListModule, MatIconModule ],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, 
    MatChipsModule, MatSnackBarModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule,
    MatDividerModule, MatListModule, MatIconModule ]
})
export class MaterialModule { }
