import { toClass } from 'class-converter-ts';
import { Catalog } from './model/catalog';

export class Deserializer {
  readonly xml: string;

  constructor(xml: string) {
    this.xml = xml;
  }

  /**
   * @remarks -
   * deserializes the xml to typescript objects as Catalog {@link Catalog}
   */
  deserialize(): Catalog {
    return toClass(this.xml, Catalog);
  }
}
