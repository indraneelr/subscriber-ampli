import { PlanCreateNestedManyWithoutSubscriptionGroupsInput } from "./PlanCreateNestedManyWithoutSubscriptionGroupsInput";

export type SubscriptionGroupCreateInput = {
  groupType?: Array<"Campaign" | "Standard">;
  name?: string | null;
  plans?: PlanCreateNestedManyWithoutSubscriptionGroupsInput;
  visibility?: Array<"Private" | "Public">;
};
