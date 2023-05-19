import { Component, OnInit } from '@angular/core';
import { ModuloService } from '../Modulo.service';

@Component({
  selector: 'app-Listar',
  templateUrl: './Listar.component.html',
  styleUrls: ['./Listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private ModuloService: ModuloService) { }

  books: Array<Book> = [];

  getBooks(): void {
    this.moduloService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnInit() {
    this.getBooks()
  }

}
