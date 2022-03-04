import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionGroupWhereUniqueInput } from "../subscriptionGroup/SubscriptionGroupWhereUniqueInput";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type PlanWhereInput = {
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  duration?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  subscriptionGroup?: SubscriptionGroupWhereUniqueInput;
  subscriptions?: SubscriptionListRelationFilter;
  visibility?: "Private" | "Public";
};
