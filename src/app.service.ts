import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
interface User {
  update(data: {}): Observable<any>;
}
@Injectable()
export class AppService implements OnModuleInit {
  private Createuser: User;
  constructor(@Inject('USERCREATE') private usercreate: ClientGrpc) {}
  onModuleInit() {
    this.Createuser = this.usercreate.getService<User>('userservice');
  }
  getHello() {
    return this.Createuser.update({});
  }
}
