import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './Listar/Listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListarComponent],
  declarations: [ListarComponent]
})
export class BandasModule { }
