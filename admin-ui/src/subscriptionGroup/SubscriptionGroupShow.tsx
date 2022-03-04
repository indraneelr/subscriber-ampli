import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SUBSCRIPTIONGROUP_TITLE_FIELD } from "./SubscriptionGroupTitle";

export const SubscriptionGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="groupType" source="groupType" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="visibility" source="visibility" />
        <ReferenceManyField
          reference="Plan"
          target="SubscriptionGroupId"
          label="Plans"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
