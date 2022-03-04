import { SortOrder } from "../../util/SortOrder";

export type PlanOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  subscriptionGroupId?: SortOrder;
  updatedAt?: SortOrder;
  visibility?: SortOrder;
};
