import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    const existingCustomer = await this.customerRepository.findOne({
      where: {
        email: createCustomerDto.email,
      },
    });

    if (existingCustomer) {
      throw new ConflictException(
        'Customer with this email already exists',
      );
    }

    const customer = this.customerRepository.create(
      createCustomerDto,
    );

    return this.customerRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findOne({
      where: { id },
    });

    if (!customer) {
      throw new NotFoundException(
        `Customer with ID ${id} not found`,
      );
    }

    return customer;
  }

  async update(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    const customer = await this.findOne(id);

    if (updateCustomerDto.email) {
      const existingCustomer = await this.customerRepository.findOne({
        where: {
          email: updateCustomerDto.email,
        },
      });

      if (existingCustomer && existingCustomer.id !== id) {
        throw new ConflictException(
          'Customer with this email already exists',
        );
      }
    }

    Object.assign(customer, updateCustomerDto);

    return this.customerRepository.save(customer);
  }

  async remove(id: number): Promise<void> {
    const customer = await this.findOne(id);

    await this.customerRepository.remove(customer);
  }
}

