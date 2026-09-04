import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { CustomersModule } from './modules/customers/customers.module.js';
import { BookingsModule } from './modules/bookings/bookings.module.js';
import { ShipmentsModule } from './modules/shipments/shipments.module.js';
import { DriversModule } from './modules/drivers/drivers.module.js';
import { VehiclesModule } from './modules/vehicles/vehicles.module.js';
import { TrackingModule } from './modules/tracking/tracking.module.js';
import { PaymentsModule } from './modules/payments/payments.module.js';
// import { HealthModule } from './health/health.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
    }),
     TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: 'mysql',

        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),

        autoLoadEntities: true,

        synchronize: false,
      }),
    }),
    AuthModule, UsersModule, CustomersModule, BookingsModule, ShipmentsModule, DriversModule, VehiclesModule, TrackingModule, PaymentsModule  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
