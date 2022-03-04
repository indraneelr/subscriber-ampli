import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SUBSCRIPTIONGROUP_TITLE_FIELD } from "../subscriptionGroup/SubscriptionGroupTitle";

export const PlanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Plans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField
          label="subscription group"
          source="subscriptiongroup.id"
          reference="SubscriptionGroup"
        >
          <TextField source={SUBSCRIPTIONGROUP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="visibility" source="visibility" />
      </Datagrid>
    </List>
  );
};
