import { SubscriptionGroup } from "../subscriptionGroup/SubscriptionGroup";
import { Subscription } from "../subscription/Subscription";

export type Plan = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  duration: string | null;
  id: string;
  name: string | null;
  subscriptionGroup?: SubscriptionGroup | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  visibility?: "Private" | "Public" | null;
};
