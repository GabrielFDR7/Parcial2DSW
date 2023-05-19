import { Component, OnInit } from '@angular/core';
import { BandasService } from '../bandas.service';
import { Banda } from '../banda.model';

@Component({
  selector: 'app-Detalle',
  templateUrl: './Detalle.component.html',
  styleUrls: ['./Detalle.component.css']
})
export class DetalleBandaComponent implements OnInit {
  banda: Banda;

  constructor(private bandasService: BandasService) { }

  ngOnInit() {
    this.bandasService.getDetallesBanda().subscribe((banda: Banda) => {
      this.banda = banda;
    });
  }
}
