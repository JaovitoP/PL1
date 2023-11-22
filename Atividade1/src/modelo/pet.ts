export default class Pet {
  private nomePet: string;
  private raca: string;
  private genero: string;

  constructor(nomePet: string, raca: string, genero: string) {
    this.nomePet = nomePet;
    this.raca = raca;
    this.genero = genero;
  }

  public get getNomePet(): string {
    return this.nomePet;
  }

  public get getRaca() {
    return this.raca;
  }

  public get getGenero() {
    return this.genero;
  }
}
