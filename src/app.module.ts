import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ClientsModule.register([
      {
        name: 'USERCREATE',
        transport: Transport.GRPC,
        options: {
          package: 'User',
          protoPath: join(__dirname, 'proto/test.proto'),
        },
      },
    ]),
  ],
})
export class AppModule {}
