import { User } from "../user/User";
import { Plan } from "../plan/Plan";

export type Subscription = {
  createdAt: Date;
  customer?: User | null;
  endDate: Date | null;
  id: string;
  plan?: Plan | null;
  startDate: Date | null;
  status?: "NotStarted" | "InProgress" | "Expired" | "Initiated" | null;
  updatedAt: Date;
};
