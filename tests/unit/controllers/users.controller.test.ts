import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import userServices from '../../../src/services/userServices';
import { userResponse } from '../../mocks/user.mock';
import userController  from '../../../src/controller/userController'
import { UserSequelizeModel } from '../../../src/database/models/user.model';

chai.use(sinonChai);

describe('UsersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testando o getUsers', async function () {
    sinon.stub(userServices, 'getUsers').resolves({ status: 'SUCCESSFUL', data: userResponse as unknown as UserSequelizeModel[] });

    const req = {} as Request;
    const res = {} as Response;
    res.status = sinon.stub().returnsThis(),
    res.json = sinon.stub(),
    
    await userController.getUsers(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(userResponse);
  });

});
