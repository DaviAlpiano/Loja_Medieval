import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import loginServices from '../../../src/services/loginServices';
import { userLogin, token, login } from '../../mocks/user.mock';
import jwt from '../../../src/utils/jwt';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testando o login correto', async function () {
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(userLogin));
    sinon.stub(jwt, 'sign').returns(token.token);

    const { username, password } = login;
    const response = await loginServices.login(username, password);

    expect(response.status).to.equal('SUCCESSFUL');
    expect(response.data).to.deep.equal(token);
  })

  it('Testando o login errado', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    sinon.stub(jwt, 'sign').returns(token.token);

    const { password } = login;
    const username = '';
    const response = await loginServices.login(username, password);

    expect(response.status).to.equal('UNAUTHORIZED');
    expect(response.data).to.deep.equal({ message: 'Username or password invalid' });
  })
});
