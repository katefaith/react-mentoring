import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import styles from './input.css';

export const Input = ({
  id, label, errors, touched, ...props
}) => {
  const [field] = useField(props);

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input className={styles.input} id={id} {...field} {...props} />
      {errors[id] && touched[id] && (<div>{errors[id]}</div>)}
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
