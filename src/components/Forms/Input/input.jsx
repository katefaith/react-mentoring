import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

export const Input = ({
  id, label, errors, touched, ...props
}) => {
  const [field] = useField(props);

  return (
    <div className="form__field">
      <label className="form__label" htmlFor={id}>{label}</label>
      <input className="form__input" id={id} {...field} {...props} />
      {errors[id] && touched[id] && (<div className="form__error">{errors[id]}</div>)}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.shape(),
  touched: PropTypes.shape(),
};

Input.defaultProps = {
  errors: undefined,
  touched: undefined,
};
