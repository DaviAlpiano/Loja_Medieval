import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response, NextFunction } from 'express';
import loginServices from '../../../src/services/loginServices';
import loginController from '../../../src/controller/loginController';
import { login, token } from '../../mocks/user.mock';
import middlewares from '../../../src/middlewares';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const next = {} as NextFunction;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testando o login', async function () {
    sinon.stub(loginServices, 'login').resolves({ status: 'SUCCESSFUL', data: token });
    req.body = login
    res.status = sinon.stub().returnsThis(),
    res.json = sinon.stub(),
    
    await loginController.login(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(token);
  });

  it('Testando o login', async function () {
    sinon.stub(loginServices, 'login').resolves({ status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } });
    req.body = login
    res.status = sinon.stub().returnsThis(),
    res.json = sinon.stub(),
    
    await loginController.login(req, res);
    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: 'Username or password invalid' });
  });

  it('Testando o login sem dados completos username', async function () {
    req.body = {
      password: "terrível"
    }
    res.status = sinon.stub().returnsThis(),
    res.send = sinon.stub(),

    await middlewares.validateLogin(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.send).to.have.been.calledWith({ message: '"username" and "password" are required' });
  });
  it('Testando o login sem dados completos password', async function () {
    req.body = {
      username: "terrível"
    }
    res.status = sinon.stub().returnsThis(),
    res.send = sinon.stub(),

    await middlewares.validateLogin(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.send).to.have.been.calledWith({ message: '"username" and "password" are required' });
  });
});
