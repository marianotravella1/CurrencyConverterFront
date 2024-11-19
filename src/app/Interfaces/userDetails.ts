import { Subscription } from "./subscription"

export interface UserDetails {
  userId: number
  username: string
  name: string
  email: string
  password:string
  subscription: Subscription
}
