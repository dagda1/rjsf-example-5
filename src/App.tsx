import schema from "./form/schema.json";
import { withTheme } from "@rjsf/core";
import { Theme as MuiTheme } from "@rjsf/material-ui";
import validator from "@rjsf/validator-ajv6";

const Form = withTheme(MuiTheme);

export const App = () => {
  return (
<div className="container-fluid">
  <Form
    validator={validator}
    schema={schema as any}
    showErrorList={false}
    noHtml5Validate
    uiSchema={{}}
    customValidate={undefined}
    formData={{
    }}
    omitExtraData={true}
  />
</div>
  );
};
