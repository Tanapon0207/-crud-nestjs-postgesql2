import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  
  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      // สร้างผู้ใช้งาน
      await this.userService.create(createUserDto);
      // ส่งคำตอบกลับไปยัง client
      res.status(HttpStatus.CREATED).send('สร้างผู้ใช้งานเรียบร้อยแล้ว');
    } catch (error) {
      console.error(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('เกิดข้อผิดพลาดในการสร้างผู้ใช้งาน');
    }
  }
  


  @Get()
  async findAll(@Res() res: Response) {
    try {

      const users = await this.userService.findAll();

      res.status(HttpStatus.OK).send(users);
    } catch (error) {
      // หากเกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้งาน
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้งาน');
    }
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

