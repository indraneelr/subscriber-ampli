import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const SubscriptionGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
            { label: "Private", value: "private" },
            { label: "Public", value: "public" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
