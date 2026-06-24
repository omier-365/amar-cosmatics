'use client';

import { useState, useEffect } from 'react';
import { Package, Users, ShoppingBag, TrendingUp, Eye } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { formatPrice } from '@/lib/utils';

export default function AdminPage() {
  const [stats, setStats] = useState({
    totalOrders: 156,
    newOrders: 12,
    totalCustomers: 89,
    totalRevenue: 45600000,
  });

  const [recentOrders, setRecentOrders] = useState([
    {
      id: '1',
      customerName: 'سارة أحمد',
      date: '2024-01-15',
      total: 125000,
      status: 'قيد التوصيل',
    },
    {
      id: '2',
      customerName: 'نور محمد',
      date: '2024-01-15',
      total: 85000,
      status: 'جديد',
    },
    {
      id: '3',
      customerName: 'ليلى حسن',
      date: '2024-01-14',
      total: 156000,
      status: 'مكتمل',
    },
  ]);

  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-charcoal font-cairo mb-2">
            لوحة التحكم
          </h1>
          <p className="text-gray-600 font-tajawal">
            مرحباً بك في لوحة إدارة متجر عَمّار
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 font-bold font-tajawal">+12</span>
            </div>
            <div className="text-3xl font-bold text-charcoal font-cairo mb-1">
              {stats.totalOrders}
            </div>
            <div className="text-sm text-gray-600 font-tajawal">إجمالي الطلبات</div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-orange-600 font-bold font-tajawal">جديد</span>
            </div>
            <div className="text-3xl font-bold text-charcoal font-cairo mb-1">
              {stats.newOrders}
            </div>
            <div className="text-sm text-gray-600 font-tajawal">طلبات جديدة</div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-green-600 font-bold font-tajawal">+5</span>
            </div>
            <div className="text-3xl font-bold text-charcoal font-cairo mb-1">
              {stats.totalCustomers}
            </div>
            <div className="text-sm text-gray-600 font-tajawal">العملاء</div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-gold" />
              </div>
              <span className="text-sm text-green-600 font-bold font-tajawal">+8%</span>
            </div>
            <div className="text-3xl font-bold text-charcoal font-cairo mb-1">
              {formatPrice(stats.totalRevenue)}
            </div>
            <div className="text-sm text-gray-600 font-tajawal">إجمالي المبيعات</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-charcoal font-cairo mb-6">
              أحدث الطلبات
            </h2>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 bg-softGray rounded-xl hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="font-bold text-charcoal font-cairo mb-1">
                      {order.customerName}
                    </div>
                    <div className="text-sm text-gray-600 font-tajawal">
                      {order.date}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gold font-cairo mb-1">
                      {formatPrice(order.total)}
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-tajawal ${
                        order.status === 'جديد'
                          ? 'bg-orange-100 text-orange-700'
                          : order.status === 'قيد التوصيل'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-charcoal font-cairo mb-6">
              المنتجات الأكثر مبيعاً
            </h2>
            <div className="space-y-4">
              {MOCK_PRODUCTS.slice(0, 5).map((product, index) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-4 bg-softGray rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-lavender rounded-full flex items-center justify-center font-bold text-gold font-cairo">
                    #{index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-charcoal font-cairo line-clamp-1">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-600 font-tajawal">
                      {product.category}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gold font-cairo">
                      {formatPrice(product.price)}
                    </div>
                    <div className="text-xs text-gray-500 font-tajawal">
                      45 مبيعة
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 bg-gradient-to-r from-lavender to-gold/20 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-charcoal font-cairo mb-3">
            لوحة التحكم قيد التطوير
          </h3>
          <p className="text-gray-700 font-tajawal text-lg max-w-2xl mx-auto">
            هذه نسخة تجريبية من لوحة التحكم. سيتم إضافة المزيد من الميزات قريباً مثل إدارة المنتجات، العملاء، التقارير التفصيلية، وغيرها.
          </p>
        </div>
      </div>
    </div>
  );
}
