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
import configuration from './config/configuration.js';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
       load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.getOrThrow<string>('database.host'),
    port: configService.getOrThrow<number>('database.port'),
    username: configService.getOrThrow<string>('database.username'),
    password: configService.getOrThrow<string>('database.password'),
    database: configService.getOrThrow<string>('database.database'),
    autoLoadEntities: true,
    synchronize: false, // Set to false in production to avoid data loss
  }),
}),
    AuthModule, UsersModule, CustomersModule, BookingsModule, ShipmentsModule, DriversModule, VehiclesModule, TrackingModule, PaymentsModule  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
