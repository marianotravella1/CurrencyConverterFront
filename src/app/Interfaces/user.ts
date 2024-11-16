import { Subscription } from "./subscription"

export interface User {
  username: string
  name: string
  email: string
  password:string
  subscription: Subscription
}
