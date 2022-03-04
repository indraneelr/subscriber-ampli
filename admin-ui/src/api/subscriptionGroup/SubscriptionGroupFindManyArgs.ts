import { SubscriptionGroupWhereInput } from "./SubscriptionGroupWhereInput";
import { SubscriptionGroupOrderByInput } from "./SubscriptionGroupOrderByInput";

export type SubscriptionGroupFindManyArgs = {
  where?: SubscriptionGroupWhereInput;
  orderBy?: SubscriptionGroupOrderByInput;
  skip?: number;
  take?: number;
};
