export class Banda
{
  nombre :string;
  genero: string;
  pais: string;
  anio_fundacion: number;

  constructor(nombre: string, genero: string, pais: string, anio_fundacion:number)
  {
    this.nombre = nombre;
    this.genero = genero;
    this.pais = pais;
    this.anio_fundacion = anio_fundacion;
  }

}
