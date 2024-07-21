import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsServices from '../../../src/database/services/productsServices';
import productsController  from '../../../src/database/controller/productsController'
import { createProduct } from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';


chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testando o postProduct', async function () {
    const resData = ProductModel.build(createProduct)
    
    sinon.stub(productsServices, 'postProduct').resolves({ status: 'SUCCESSFUL', data: resData });

    const req = {
      body: {
        "name": "Martelo de Thor",
        "price": "30 peças de ouro",
        "userId": 1
      },
    } as Request;
    
    const res = {} as Response;
    res.status = sinon.stub().returnsThis(),
    res.json = sinon.stub(),

    await productsController.postProduct(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(resData);
  });

});
