import { Request, Response } from 'express';

import ordersService from '../services/orders.service';

async function getAllOrders(_request: Request, response: Response) {
  const orders = await ordersService.getAllOrders();

  response.status(200).json(orders);
}

export = { getAllOrders };