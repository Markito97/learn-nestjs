import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/users.schema';

export interface IUser {
  name: string;
  age: number;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly usersModel: Model<UserDocument>,
  ) {}
  async createUser(newUser: IUser) {
    const user = await this.usersModel.create(newUser);
    return user;
  }

  async getUsers() {
    const users = await this.usersModel.find();
    return users;
  }
}
