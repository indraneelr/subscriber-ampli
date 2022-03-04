import { PlanUpdateManyWithoutSubscriptionGroupsInput } from "./PlanUpdateManyWithoutSubscriptionGroupsInput";

export type SubscriptionGroupUpdateInput = {
  groupType?: Array<"Campaign" | "Standard">;
  name?: string | null;
  plans?: PlanUpdateManyWithoutSubscriptionGroupsInput;
  visibility?: Array<"private" | "public">;
};
