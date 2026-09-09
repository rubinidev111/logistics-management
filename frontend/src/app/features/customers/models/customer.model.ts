export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string | null;
  city: string;
  state: string;
  postalCode: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}