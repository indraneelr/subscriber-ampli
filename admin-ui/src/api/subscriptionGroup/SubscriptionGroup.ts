import { Plan } from "../plan/Plan";

export type SubscriptionGroup = {
  createdAt: Date;
  groupType?: Array<"Campaign" | "Standard">;
  id: string;
  name: string | null;
  plans?: Array<Plan>;
  updatedAt: Date;
  visibility?: Array<"Private" | "Public">;
};
