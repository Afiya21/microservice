import { Controller, Get, Patch } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Patch()
  getHello() {
    return this.appService.getHello();
  }
}
