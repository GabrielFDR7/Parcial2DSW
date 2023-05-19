import { Component, OnInit } from '@angular/core';
import { BandasService } from '../Bandas.service';

@Component({
  selector: 'app-Listar',
  templateUrl: './Listar.component.html',
  styleUrls: ['./Listar.component.css']
})
export class ListarComponent implements OnInit {


  constructor(private bandasService: BandasService) { }
  bandas: any[] = [];

  promedioTemporadas: number = 0;

  ngOnInit(): void {
      this.bandasService.getBandas().subscribe(data => {
      this.bandas = Object.values(data);
    });
  }

}
