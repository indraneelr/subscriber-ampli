import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { PlanTitle } from "../plan/PlanTitle";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="customer">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateInput label="end date" source="endDate" />
        <ReferenceInput source="plan.id" reference="Plan" label="plan">
          <SelectInput optionText={PlanTitle} />
        </ReferenceInput>
        <DateInput label="start date" source="startDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Not started", value: "NotStarted" },
            { label: "In progress", value: "InProgress" },
            { label: "Expired", value: "Expired" },
            { label: "Initiated", value: "Initiated" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
