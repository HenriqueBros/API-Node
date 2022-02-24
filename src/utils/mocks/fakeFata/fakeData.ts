import { CreateUserService } from '../../../services/CreateUserServer';
import { v4 as uuid} from 'uuid';

const createUserService = new CreateUserService();

class FakeData{
  createUserService;
  
  async execute(){
      await createUserService.execute({
      id: uuid(),
      name: 'Algum usuario',
      email: 'email@email.com'
    })
  
    await createUserService.execute({
      id: uuid(),
      name: 'Outro usuario',
      email: ''
    })
  }

  async createUser() {
    const user = await this.createUserService.execute({
      id: uuid(),
      name: 'Algum usuario',
      email: ''
    })

    return user;
  }
}

export { FakeData }