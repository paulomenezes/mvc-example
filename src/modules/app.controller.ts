import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('users')
  root(): string {
    return 'Hello World!';
  }
}
