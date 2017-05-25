import { isEmpty } from 'lodash';

const ERROR_REQUIRED = 'This field is required';
const ERROR_TYPE_NUMBER = 'This field should be number';

export const validationUser = ({ name, company, phone }) => {
  const checked = {
    hasError: false,
    fields: {},
  };

  if (isEmpty(name)) {
    checked.hasError = true;
    checked.fields.name = ERROR_REQUIRED;
  }

  if (isEmpty(company)) {
    checked.hasError = true;
    checked.fields.company = ERROR_REQUIRED;
  }

  if (isEmpty(phone)) {
    checked.hasError = true;
    checked.fields.phone = ERROR_REQUIRED;
  }

  if (isNaN(Number(phone))) {
    checked.hasError = true;
    checked.fields.phone = ERROR_TYPE_NUMBER;
  }

  return checked;
};
