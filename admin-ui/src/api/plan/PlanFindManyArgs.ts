import { PlanWhereInput } from "./PlanWhereInput";
import { PlanOrderByInput } from "./PlanOrderByInput";

export type PlanFindManyArgs = {
  where?: PlanWhereInput;
  orderBy?: PlanOrderByInput;
  skip?: number;
  take?: number;
};
