import React from 'react';
import Select from 'react-select';

const Field = ({
  formik,
  type,
  name,
  className,
  normalize = (value) => value,
  ...props
}) => {
  const generalFieldProps = {
    name,
    type,
    placeholder: props.placeholder,
    value: formik.values[name],
    onChange: (event) =>
      formik.setFieldValue(name, normalize(event.target.value)),
    onBlur: (e) => formik.handleBlur(e),
    disabled: props.disabled,
    readOnly: props.readOnly,
  };
  const fieldClassName = `border border-black rounded w-full grow p-1 ${className}`;
  const field = new Map([
    [
      'select',
      <Select
        {...generalFieldProps}
        onChange={(selectedCategories) => {
          formik.setFieldValue(name, selectedCategories);
        }}
        isMulti={props.isMulti}
        components={
          props.readOnly
            ? {
                IndicatorsContainer: (props) => null,
                MultiValueRemove: (props) => null,
              }
            : null
        }
        options={props.options}
        className={fieldClassName}
      />,
    ],
    [
      'text',
      <input
        type='text'
        className={`h-10 ${fieldClassName}`}
        {...generalFieldProps}
      />,
    ],
    [
      'number',
      <input
        type='number'
        className={`h-10 ${fieldClassName}`}
        {...generalFieldProps}
        min={1}
      />,
    ],
    ['date', <div></div>],
    [
      'textarea',
      <textarea
        className={`resize-none ${fieldClassName}`}
        {...generalFieldProps}
        rows={props.rows}
      ></textarea>,
    ],
  ]);
  return (
    <div className='flex w-full'>
      <div className='flex gap-x-2 w-full'>
        <label htmlFor={name}>{name}</label>
        {field.get(type)}
      </div>

      <div className='bg-red-500'></div>
    </div>
  );
};

export default Field;
