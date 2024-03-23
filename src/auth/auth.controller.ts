import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthdDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}
  @Post('signup')
  signup(@Body() dto: AuthdDto) {
    console.log({ dto });

    return this.authservice.signup();
  }
  @Post('signin')
  signin() {
    return this.authservice.signin();
  }
}
