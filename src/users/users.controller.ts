import {
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response, response } from 'express';

// http://localhost:3000/users/getUsers
@Controller('/users')
export class UsersConroller {
  // по умолчанию 200 статус код
  @Get('getUsers')
  // можно изменять статус //
  @HttpCode(200)
  // изменять заголовки ответа
  @Header('Content-Type', 'none')
  @Redirect('http://localhost:3000/users/zopa', 200)
  getAllUsers(@Res() response: Response) {
    // console.log(response.statusCode);
    // if (response.statusCode === 200) {
    //   response.redirect('http://localhost:3000/zopa');
    // } else {
    //   response.redirect('http://localhost:3000/aboba');
    // }
  }

  @Get('docs')
  @Redirect('http://localhost:3000')
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'http://localhost:3000/user/aboba' };
    }
  }

  @Get('aboba')
  aboba() {
    return 'aboba';
  }

  @Get('zopa')
  zopa() {
    return 'zopa';
  }

  // по умолчанию 201 статус код
  @Post('create/user')
  createUser() {}
}
