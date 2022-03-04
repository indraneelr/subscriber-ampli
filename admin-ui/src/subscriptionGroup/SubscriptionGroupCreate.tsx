import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const SubscriptionGroupCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="groupType"
          source="groupType"
          choices={[
            { label: "Campaign", value: "Campaign" },
            { label: "standard", value: "Standard" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <SelectArrayInput
          label="visibility"
          source="visibility"
          choices={[
            { label: "Private", value: "Private" },
            { label: "Public", value: "Public" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
