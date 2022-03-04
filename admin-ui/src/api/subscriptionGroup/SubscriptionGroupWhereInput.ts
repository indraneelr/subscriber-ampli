import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlanListRelationFilter } from "../plan/PlanListRelationFilter";

export type SubscriptionGroupWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  plans?: PlanListRelationFilter;
};
