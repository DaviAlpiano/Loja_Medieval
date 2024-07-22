import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel, { ProductInputtableTypes, ProductSequelizeModel } from "../../../src/database/models/product.model";
import { createProduct, product, products } from '../../mocks/product.mock'
import productsServices from '../../../src/database/services/productsServices';
import { Model } from 'sequelize';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testando o postProduct', async function () {
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(createProduct));
    
    const response = await productsServices.postProduct(product);
    expect(response.status).to.equal('CREATED');
    expect(response.data.dataValues).to.deep.equal(createProduct);
  });

  it('Testando o getProduct', async function () {
    sinon.stub(ProductModel, 'findAll').resolves(products as unknown as Model<any, any>[]);
    
    const response = await productsServices.getProducts();
    expect(response.status).to.equal('SUCCESSFUL');
    expect(response.data).to.deep.equal(products);
  });
});
