import { SubscriptionGroupWhereUniqueInput } from "../subscriptionGroup/SubscriptionGroupWhereUniqueInput";
import { SubscriptionUpdateManyWithoutPlansInput } from "./SubscriptionUpdateManyWithoutPlansInput";

export type PlanUpdateInput = {
  amount?: number | null;
  currency?: string | null;
  duration?: string | null;
  name?: string | null;
  subscriptionGroup?: SubscriptionGroupWhereUniqueInput | null;
  subscriptions?: SubscriptionUpdateManyWithoutPlansInput;
  visibility?: "Private" | "Public" | null;
};
