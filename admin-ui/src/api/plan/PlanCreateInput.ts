import { SubscriptionGroupWhereUniqueInput } from "../subscriptionGroup/SubscriptionGroupWhereUniqueInput";
import { SubscriptionCreateNestedManyWithoutPlansInput } from "./SubscriptionCreateNestedManyWithoutPlansInput";

export type PlanCreateInput = {
  amount?: number | null;
  currency?: string | null;
  duration?: string | null;
  name?: string | null;
  subscriptionGroup?: SubscriptionGroupWhereUniqueInput | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutPlansInput;
  visibility?: "Private" | "Public" | null;
};
