export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  rating: number;
  ingredients?: string;
  usage?: string;
  slug: string;
  created_at?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id?: string;
  customer_name: string;
  phone: string;
  city: string;
  address: string;
  notes?: string;
  total: number;
  status?: string;
  created_at?: string;
}

export interface OrderItem {
  id?: string;
  order_id: string;
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
  created_at?: string;
}

export interface CheckoutFormData {
  name: string;
  phone: string;
  governorate: string;
  city: string;
  address: string;
  notes?: string;
}
