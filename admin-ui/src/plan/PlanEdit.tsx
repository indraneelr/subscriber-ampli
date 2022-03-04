import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SubscriptionGroupTitle } from "../subscriptionGroup/SubscriptionGroupTitle";

export const PlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="currency" source="currency" />
        <TextInput label="duration" source="duration" />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="subscriptiongroup.id"
          reference="SubscriptionGroup"
          label="subscription group"
        >
          <SelectInput optionText={SubscriptionGroupTitle} />
        </ReferenceInput>
        <SelectInput
          source="visibility"
          label="visibility"
          choices={[
            { label: "Private", value: "Private" },
            { label: "public", value: "Public" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
