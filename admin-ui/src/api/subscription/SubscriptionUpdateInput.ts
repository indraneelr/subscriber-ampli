import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";

export type SubscriptionUpdateInput = {
  customer?: UserWhereUniqueInput | null;
  endDate?: Date | null;
  plan?: PlanWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "NotStarted" | "InProgress" | "Expired" | "Initiated" | null;
};
