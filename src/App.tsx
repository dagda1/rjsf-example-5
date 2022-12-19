import schema from "./form/schema.json";
import { withTheme } from "@rjsf/core";
import { Theme as MuiTheme } from "@rjsf/material-ui";
import validator from "@rjsf/validator-ajv8";

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
          firstName: undefined,
          lastName: undefined,
          age: undefined,
          telephone: undefined
        }}
        noValidate={undefined}
        omitExtraData={false}
        onBlur={(id, value) =>
          console.log(`Touched ${id} with value ${value}`)
        }
        onFocus={(id, value) =>
          console.log(`Focused ${id} with value ${value}`)
        }
      />
    </div>
  );
};
