import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'im signed up';
  }
  signin() {
    return 'im signed in';
  }
}
