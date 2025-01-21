// schemas/order.js
export const orderSchema = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer Details',
      type: 'object',
      fields: [
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phoneNumber', type: 'string' },
        { name: 'addressLine1', type: 'string' },
        { name: 'addressLine2', type: 'string' },
        { name: 'addressLine3', type: 'string' },
        { name: 'postalCode', type: 'string' },
        { name: 'locality', type: 'string' },
        { name: 'state', type: 'string' },
        { name: 'country', type: 'string' },
        { name: 'pan', type: 'string' },
      ],
    },
    {
      name: 'orderItems',
      title: 'Order Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    },
    {
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
    },
    {
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['pending', 'completed', 'shipped', 'delivered'],
      },
    },
  ],
};

export default orderSchema;
