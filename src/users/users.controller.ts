import {
  Bind,
  Body,
  Controller,
  Get,
  Header,
  HostParam,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  UsePipes,
} from '@nestjs/common';
import { Request, Response, response } from 'express';
import { Observable } from 'rxjs';
import { createUserSchema } from './createUserSchema/create-user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { JoiValidationPipe } from './joi-validation.pipe';
import { UserSchema } from './schema/users.schema';
import { UsersService } from './user.service';

// http://localhost:3000/users/getUsers
// @Controller('/users')
// @Controller({ host: `http://localhost:3000` }) // пока чет не выкупаю зачем это надо
@Controller()
export class UsersConroller {
  constructor(private readonly userService: UsersService) {}
  // по умолчанию 200 статус код
  // @Get('getUsers')
  // можно изменять статус //
  // @HttpCode(200)
  // // изменять заголовки ответа
  // @Header('Content-Type', 'none')
  // @Redirect('http://localhost:3000/users/zopa', 200)
  // getAllUsers(@Res() response: Response) {
  //   // console.log(response.statusCode);
  //   // if (response.statusCode === 200) {
  //   //   response.redirect('http://localhost:3000/zopa');
  //   // } else {
  //   //   response.redirect('http://localhost:3000/aboba');
  //   // }
  // }

  // @Get('docs')
  // @Redirect('http://localhost:3000')
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'http://localhost:3000/user/aboba' };
  //   }
  // }

  // @Get('aboba')
  // aboba() {
  //   return 'aboba';
  // }

  // @Get('zopa')
  // zopa(): string {
  //   return 'zopa';
  // }

  // // по умолчанию 201 статус код
  // @Post('create/user')
  // createUser() {}

  // @Get(':id')
  // // с Bind - params === undefined
  // @Bind(Param('id')) // возможно он использует конкретный котекст который в данный момент undefined
  // findById(@Param() params): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id}`;
  // }

  @Post('createUser')
  @UsePipes(new JoiValidationPipe(createUserSchema))
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  // @Get('getUsers')
  // getAllWithPromise() {
  //   return this.userService.getUsers();
  // }

  // Нужны кейсы где можно юзать
  // @Get('getUsers')
  // getAllWithObservable() {
  //   return new Observable((subscriber) => {
  //     setTimeout(() => {
  //       subscriber.next(this.userService.getUsers());
  //       subscriber.complete();
  //     });
  //   });
  // }
}
// Тож чет странная штука
// @Controller({ host: ':test.tochka.com' })
// export class TestController {
//   @Get()
//   getInfo(@HostParam('account') account: string) {
//     return account;
//   }
// }
