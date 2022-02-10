import { Resolver, Arg, Query, Mutation, ID } from "type-graphql";
import { Service } from "typedi";
import { Types } from "mongoose";

import { PizzaOrder } from "../../entities";
import PizzaOrderService from "./service";
("./service");

/*
  IMPORTANT: Your business logic must be in the service!
*/

@Service() // Dependencies injection
@Resolver((of) => PizzaOrder)
export default class PizzaOrderResolver {
  constructor(private readonly pizzaOrderService: PizzaOrderService) {}

  @Query((returns) => PizzaOrder)
  async getPizzaOrder() {
    const pizzaOrder = await this.pizzaOrderService.getPizzaOrder();
    return pizzaOrder;
  }
}
