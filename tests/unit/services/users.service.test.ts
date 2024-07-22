import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import { users, userResponse } from '../../mocks/user.mock';
import userServices from '../../../src/services/userServices';
import { Model } from 'sequelize';

describe('UsersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testando o getUsers', async function () {
    sinon.stub(UserModel, 'findAll').resolves(users as unknown as Model<any, any>[]);
    
    const response = await userServices.getUsers();
    expect(response.status).to.equal('SUCCESSFUL');
    expect(response.data).to.deep.equal(userResponse);
  })
});
