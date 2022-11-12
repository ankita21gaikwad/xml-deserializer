import { alias, array, element } from 'class-converter-ts';
import { Book } from './book';

@alias('catalog')
export class Catalog {
  @array()
  @element('book', Book)
  private _book!: Book[];

  get book(): Book[] {
    return this._book;
  }
}
