-- Ammar Beauty Store - Supabase Database Schema
-- Run this script in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category TEXT NOT NULL,
  image TEXT,
  images TEXT[],
  rating DECIMAL(2, 1) DEFAULT 5.0,
  ingredients TEXT,
  usage TEXT,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  governorate TEXT,
  city TEXT NOT NULL,
  address TEXT NOT NULL,
  notes TEXT,
  total DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Public read access for products
CREATE POLICY "Allow public read access on products"
  ON products FOR SELECT
  USING (true);

-- Insert sample products (optional)
INSERT INTO products (name, description, price, category, image, slug, rating) VALUES
  ('سيروم فيتامين سي المضيء', 'سيروم مركز بفيتامين سي النقي يعمل على توحيد لون البشرة', 45000, 'العناية بالبشرة', 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80', 'serum-vitamin-c', 4.8),
  ('كريم الكولاجين المرطب', 'كريم غني بالكولاجين وحمض الهيالورونيك', 38000, 'العناية بالبشرة', 'https://images.unsplash.com/photo-1556228852-80c3b5e1ca25?w=800&q=80', 'collagen-cream', 4.9),
  ('شامبو الأرجان المغذي', 'شامبو فاخر بزيت الأرجان المغربي الأصلي', 32000, 'العناية بالشعر', 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80', 'argan-shampoo', 4.7)
ON CONFLICT (slug) DO NOTHING;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for auto-updating timestamps
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
