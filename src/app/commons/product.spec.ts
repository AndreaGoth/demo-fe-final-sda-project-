import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    const product = new Product(
      'SKU123',
      'Trenulete',
      'Pentru copii',
      10.99,                // unitPrice
      'https://www.trenuleteturistice.ro/_Files/Galleries/trenulet-electric/trenulet-electric-01.jpg',
      true,                 // active
      100,                  // unitsInStock
      new Date(),           // dataCreated
      new Date()            // lastUpdated
    );

    expect(product).toBeTruthy();
  });
});
