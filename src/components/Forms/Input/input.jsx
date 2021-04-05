import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

export const Input = ({
  id, label, ...props
}) => {
  const [field] = useField(props);

  return (
    <div className="form__field">
      <label className="form__label" htmlFor={id}>{label}</label>
      <input className="form__input" {...field} {...props} />
      {props.errors[id] && props.touched[id] && (<div className="form__error">{props.errors[id]}</div>)}
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
