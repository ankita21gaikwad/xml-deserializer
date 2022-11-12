import { deserialize, element } from 'class-converter-ts';

export class Book {
  @element('author')
  private _author!: string;

  @element('title')
  private _title!: string;

  @element('genre')
  private _genre!: string;

  @deserialize((value: string) => parseFloat(value))
  @element('price')
  private _price!: number;

  @element('publish_date')
  private _publishDate!: string;

  @element('description')
  private _description!: string;

  get author(): string {
    return this._author;
  }

  get title(): string {
    return this._title;
  }

  get genre(): string {
    return this._genre;
  }

  get price(): number {
    return this._price;
  }

  get publish_date(): string {
    return this._publishDate;
  }

  get description(): string {
    return this._description;
  }
}
