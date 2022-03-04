import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";

export type SubscriptionWhereInput = {
  customer?: UserWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  plan?: PlanWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  status?: "NotStarted" | "InProgress" | "Expired" | "Initiated";
};
