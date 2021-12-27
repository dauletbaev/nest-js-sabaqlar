import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  registerHandler() {
    return { ok: true, message: 'Bul servisten kelgen xabar' };
  }
}
