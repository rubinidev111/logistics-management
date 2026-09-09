# 🚚 Logistics Management System

A modern, full-stack **Logistics Management System** built to manage customers, bookings, shipments, drivers, vehicles, tracking, and payments through a scalable enterprise-style architecture.

The project is being developed incrementally using modern **Angular** and **NestJS** practices, with a focus on clean architecture, maintainability, security, validation, API documentation, and scalable feature development.

---

## 🚀 Project Status

**Status:** 🚧 Active Development

The application is being developed feature-by-feature using a vertical-slice approach:

```text
Database
   ↓
Entity
   ↓
Migration
   ↓
DTO & Validation
   ↓
Service
   ↓
Controller
   ↓
Swagger Documentation
   ↓
API Testing
   ↓
Angular UI
   ↓
Frontend ↔ Backend Integration
```

### ✅ Currently Implemented

* Angular standalone application
* Angular authentication/login flow
* JWT-based authentication
* Authentication guard
* Lazy-loaded dashboard
* Reactive Forms
* Angular Signals
* Customers backend API
* Customers frontend structure
* Customer DTO validation
* MySQL database integration
* TypeORM migrations
* Global API prefix: `/api/v1`
* Global request validation
* HTTP exception handling
* API response interceptor
* Swagger API documentation
* CORS configuration
* Modular NestJS backend architecture

### 🔜 Planned Modules

* Customer management improvements
* Booking management
* Shipment management
* Driver management
* Vehicle management
* Shipment tracking
* Payment management
* Role-based authorization
* Advanced dashboard
* Reporting and analytics
* Automated testing
* CI/CD
* Production deployment

---

# 🏗️ Technology Stack

## Frontend

* **Angular 22**
* TypeScript
* Standalone Components
* Angular Signals
* Reactive Forms
* RxJS
* Angular Router
* Lazy Loading
* Route Guards
* PrimeNG
* AG Grid

## Backend

* **NestJS 12**
* TypeScript
* REST APIs
* JWT Authentication
* Passport
* DTOs
* `class-validator`
* `class-transformer`
* TypeORM
* Swagger / OpenAPI
* Global Exception Handling
* Response Interceptors

## Database

* **MySQL**
* TypeORM
* Database migrations

## Development

* Node.js
* npm
* Git
* GitHub
* Docker / WSL environment

---

# 📐 Architecture

The project follows a **feature-based architecture** on the Angular frontend and a **modular architecture** on the NestJS backend.

## Frontend Structure

```text
frontend/
└── src/
    └── app/
        ├── app.config.ts
        ├── app.routes.ts
        │
        ├── core/
        │   ├── guards/
        │   │   └── auth-guard.ts
        │   ├── interceptors/
        │   └── services/
        │
        ├── shared/
        │   ├── components/
        │   ├── directives/
        │   └── pipes/
        │
        └── features/
            ├── auth/
            │   ├── models/
            │   ├── pages/
            │   │   └── login/
            │   └── services/
            │
            ├── dashboard/
            │   ├── pages/
            │   │   └── dashboard/
            │   └── dashboard.routes.ts
            │
            ├── customers/
            │   ├── models/
            │   ├── pages/
            │   │   ├── customer-form/
            │   │   └── customer-list/
            │   └── services/
            │
            ├── bookings/
            ├── shipments/
            ├── drivers/
            ├── vehicles/
            ├── tracking/
            └── payments/
```

### Angular Architecture Approach

The application uses modern Angular standalone architecture rather than the traditional NgModule-based structure.

Individual pages can be lazy loaded using:

```typescript
loadComponent()
```

Feature route configurations can be lazy loaded using:

```typescript
loadChildren()
```

This allows the application to scale without loading every feature when the application starts.

---

# 🔐 Authentication

The application currently implements a JWT-based login flow.

```text
User
  ↓
Login Page
  ↓
AuthService
  ↓
POST /api/v1/auth/login
  ↓
NestJS Authentication
  ↓
JWT Access Token
  ↓
Store Authentication State
  ↓
Navigate to Dashboard
```

Protected routes use an Angular authentication guard.

Example:

```typescript
{
  path: 'dashboard',
  canActivate: [authGuard],
  loadChildren: () =>
    import('./features/dashboard/dashboard.routes')
      .then((m) => m.DASHBOARD_ROUTES),
}
```

The authentication feature uses:

* Reactive Forms
* Signals
* `inject()`
* JWT access token
* Route guards
* Loading state
* Error state

---

# 👥 Customer Management

Customer management is the first major business feature being implemented.

### Customer Information

The customer model currently supports:

```text
id
name
email
phone
address
city
state
postalCode
isActive
createdAt
updatedAt
```

### Backend

Customer APIs are implemented using NestJS:

```text
CustomersModule
├── Controller
├── Service
├── Entity
├── DTOs
└── Database Migration
```

The API includes operations for:

* Create customer
* Get customers
* Get customer by ID
* Update customer
* Delete customer

Validation is handled using NestJS validation pipes and DTOs.

Duplicate customer email validation is also handled at the service level.

---

# 📚 API Documentation

Swagger / OpenAPI documentation is configured for the backend.

When the NestJS application is running, Swagger is available at:

```text
http://localhost:3000/api/docs
```

Swagger provides an interactive interface for exploring and testing the REST APIs.

---

# 🔌 API Configuration

The backend APIs use the following global prefix:

```text
/api/v1
```

For example:

```text
POST /api/v1/auth/login
```

Customer APIs are exposed under the Customers resource.

---

# 🛡️ Backend Architecture

The backend follows NestJS modular architecture.

Current modules include:

```text
AuthModule
UsersModule
CustomersModule
BookingsModule
ShipmentsModule
DriversModule
VehiclesModule
TrackingModule
PaymentsModule
HealthModule
```

Modules are developed incrementally so that each business capability remains isolated and maintainable.

---

# 🗄️ Database & Migrations

The application uses:

```text
MySQL
   ↓
TypeORM
   ↓
Entities
   ↓
Migrations
   ↓
Database
```

Database synchronization is disabled in favor of controlled migrations.

```text
synchronize: false
```

This approach helps avoid unintended database changes and is more suitable for enterprise applications.

---

# 🧪 Testing

Angular test files are maintained alongside the corresponding features.

Example:

```text
login.spec.ts
auth.spec.ts
auth-guard.spec.ts

customer-list.spec.ts
customer-form.spec.ts
customer.spec.ts

dashboard.spec.ts
```

Automated testing will be expanded as additional business features are implemented.

---

# 🧹 Code Quality Principles

The project is being developed with maintainability and scalability in mind.

Key principles include:

* SOLID principles
* Separation of concerns
* Feature-based architecture
* Dependency injection
* Reusable services
* DTO-based validation
* Strong typing with TypeScript
* Lazy loading
* Centralized error handling
* API versioning
* Clean frontend/backend separation

---

# 📦 Project Structure

```text
logistics-management/
│
├── frontend/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   ├── common/
│   │   └── main.ts
│   ├── migrations/
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

# ▶️ Running the Project

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MySQL
* Angular CLI
* NestJS CLI

---

## Frontend

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Angular application:

```bash
npm start
```

The frontend will be available at the Angular development server URL.

---

## Backend

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Configure the environment variables in your local `.env` file.

Run database migrations as required.

Start the NestJS application:

```bash
npm run start:dev
```

The backend API runs on:

```text
http://localhost:3000
```

Swagger:

```text
http://localhost:3000/api/docs
```

---

# 🔒 Environment Variables

Environment-specific configuration should be stored in `.env`.

Example:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=logistics_management

JWT_SECRET=your_secret
JWT_EXPIRES_IN=your_expiration
```

**Never commit real credentials, passwords, JWT secrets, or other sensitive values to Git.**

Use `.env.example` for sharing the required configuration structure.

---

# 🗺️ Development Roadmap

```text
[x] Project setup
[x] Angular standalone architecture
[x] NestJS backend architecture
[x] MySQL + TypeORM
[x] Database migrations
[x] JWT authentication
[x] Angular login
[x] Authentication guard
[x] Lazy-loaded dashboard
[x] Global validation
[x] Exception handling
[x] Response interceptor
[x] Swagger documentation
[x] Customer backend API
[x] Customer frontend foundation

[ ] App shell / navigation
[ ] Customer UI ↔ API integration
[ ] Booking management
[ ] Shipment management
[ ] Driver management
[ ] Vehicle management
[ ] Tracking
[ ] Payments
[ ] Role-based authorization
[ ] Advanced dashboard
[ ] Automated test coverage
[ ] CI/CD
[ ] Production deployment
```

---

# 🎯 Project Goals

The goal of this project is not only to build a logistics application but also to demonstrate how a **large-scale enterprise application can be designed and developed using modern frontend and backend practices**.

The project focuses on:

* Scalable architecture
* Modern Angular development
* Enterprise API design
* Secure authentication
* Database-driven business workflows
* Clean code
* Maintainability
* Testing
* Performance
* CI/CD and production readiness

---

# 👩‍💻 Author

**Rubini Subramani**

Senior Software Developer | Angular | TypeScript | NestJS | PHP | MySQL | Primeng 

---

## ⭐ Project Status

This project is actively evolving. New modules and improvements will be added progressively as development continues.

If you find the project useful, feel free to ⭐ the repository.
