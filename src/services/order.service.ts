import OrdersModel from '../models/orders.model';

async function getAllOrders() {
  const { orders, products } = await OrdersModel.getAllOrders();

  const ordersWithProducts = orders.map((order) => {
    const pIds = products.filter((product) => product.orderId === order.id);
    const correct = pIds.map((product) => product.id);
    return { ...order, productsIds: [...correct] };
  });
  return ordersWithProducts;
}

export = { getAllOrders };