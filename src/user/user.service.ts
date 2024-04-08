import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User> 
  ) {}


  
  async findAll(): Promise<User[]> { 
    return await this.userRepository.find();
  }


  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | undefined> { // ระบุประเภทของข้อมูลที่ส่งกลับ
    const userToUpdate = await this.userRepository.findOne({ where: { id: id } });
    if (!userToUpdate) {
      return undefined;
    }
    const updatedUser = Object.assign(userToUpdate, updateUserDto);
    return await this.userRepository.save(updatedUser);
  }

  async remove(id: number): Promise<boolean> { // ระบุประเภทของข้อมูลที่ส่งกลับ
    const userToRemove = await this.userRepository.findOne({ where: { id: id } });
    if (!userToRemove) {
      return false;
    }
    await this.userRepository.remove(userToRemove);
    return true;
  }
}
