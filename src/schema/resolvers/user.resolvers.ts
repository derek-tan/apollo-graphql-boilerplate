import { users } from '../../data'
import { signToken } from '../../lib/auth';

export default {
  Query: {
    user: (_parent: any, { id }: any) => {
      return users.find(user => user.id === id)
    }
  },
  Mutation: {
    login: (_parent: any, {email, password}: any) => {
      const loginUser = users.find(user => user.email === email &&  user.password === password);
      if (loginUser == null) {
        throw new Error("Invalid user");
      }
      return signToken(loginUser.id, loginUser.name, loginUser.email);
    }
  },
}