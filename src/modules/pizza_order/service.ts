import { Service } from "typedi";
import { ObjectId } from "mongoose";

import PizzaOrderModel from "./model";
import { PizzaOrder } from "../../entities";

@Service() // Dependencies injection
export default class PizzaOrderService {
  constructor(private readonly pizzaOrderModel: PizzaOrderModel) {}

  public async getPizzaOrder(): Promise<PizzaOrder | null> {
    return this.pizzaOrderModel.getOrder();
  }
}
