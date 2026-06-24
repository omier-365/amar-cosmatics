export function formatPrice(price: number): string {
  return `${price.toLocaleString('en-US')} ج.م`;
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\u0600-\u06FFa-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function generateWhatsAppLink(
  phone: string,
  name: string,
  address: string,
  city: string,
  items: Array<{ name: string; quantity: number; price: number }>,
  total: number,
  notes?: string
): string {
  const message = `السلام عليكم ورحمة الله وبركاته

أرغب في طلب المنتجات التالية من متجر عَمّار:

${items.map(item => `• ${item.name} × ${item.quantity} - ${formatPrice(item.price * item.quantity)}`).join('\n')}

📦 *المجموع الكلي:* ${formatPrice(total)}

👤 *الاسم:* ${name}
📱 *رقم الهاتف:* ${phone}
📍 *المدينة:* ${city}
🏠 *العنوان:* ${address}
${notes ? `📝 *ملاحظات:* ${notes}` : ''}

شكراً جزيلاً 🌸`;

  const encodedMessage = encodeURIComponent(message);
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
