import { getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";

import { PizzaOrder } from "../../entities";

// This generates the mongoose model for us
// console.log(PizzaOrder)
console.log(PizzaOrder);
export const PizzaOrderMongooseModel = getModelForClass(PizzaOrder);

export default class PizzaOrderModel {
  async getOrder(): Promise<PizzaOrder | null> {
    // Use mongoose as usual
    const pizzaOrder = await PizzaOrderMongooseModel.findOne().lean().exec();
    return pizzaOrder;
  }

  //   async create(data: NewTodoInput): Promise<Todo> {
  //     const todo = new TodoMongooseModel(data);

  //     return todo.save();
  //   }
}
