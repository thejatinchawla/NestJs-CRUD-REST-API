import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}
  @HttpCode(HttpStatus.CREATED) // by default of post request will be 201.
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authservice.signup(dto);
  }
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authservice.signin(dto);
  }
}
