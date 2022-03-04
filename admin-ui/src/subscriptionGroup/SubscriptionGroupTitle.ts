import { SubscriptionGroup as TSubscriptionGroup } from "../api/subscriptionGroup/SubscriptionGroup";

export const SUBSCRIPTIONGROUP_TITLE_FIELD = "name";

export const SubscriptionGroupTitle = (record: TSubscriptionGroup): string => {
  return record.name || record.id;
};
