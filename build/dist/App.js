import { jsx as _jsx } from "react/jsx-runtime";
import schema from "./form/schema.json";
import { withTheme } from "@rjsf/core";
import { Theme as MuiTheme } from "@rjsf/material-ui";
import validator from "@rjsf/validator-ajv6";
const Form = withTheme(MuiTheme);
export const App = () => {
    return (_jsx("div", { className: "container-fluid", children: _jsx(Form, { validator: validator, schema: schema, showErrorList: false, noHtml5Validate: true, uiSchema: {}, customValidate: undefined, formData: {
                firstName: undefined,
                lastName: ''
            }, omitExtraData: true }) }));
};
