import TodoResolver from "./todo/resolver";
import PizzaOrderResolver from "./pizza_order/resolver"
// Important: Add all your module's resolver in this
export const resolvers: [Function, ...Function[]] = [
  TodoResolver,
  PizzaOrderResolver,
  // UserResolver
  // AuthResolver
  // ...
];
