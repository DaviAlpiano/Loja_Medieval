import chai, { expect } from 'chai';
import sinon from 'sinon';
import ProductModel, { ProductInputtableTypes } from "../../../src/database/models/product.model";
import { createProduct, product } from '../../mocks/product.mock'
import productsServices from '../../../src/database/services/products.services';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testando o postProduct', async function () {
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(createProduct));
    
    const response = await productsServices.postProduct(product);
    expect(response.status).to.equal('CREATED');
    expect(response.data.dataValues).to.deep.equal(createProduct);
  });
});
