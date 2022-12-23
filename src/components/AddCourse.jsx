import React from 'react';
import { useFormik } from 'formik';
import Field from './common/form/Field';
import courseTypes from '../constants/course-types';
import { PrimaryButton } from './common/styled/Buttons';

const AddCourse = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      suggestedAge: '',
      type: '',
      outcome: '',
    },
  });
  return (
    <div>
      <h1 className='text-center font-bold text-4xl'>Add Course</h1>
      <form role='form' className='grid grid-cols-2 gap-x-8 gap-y-4 m-4'>
        <Field formik={formik} name='Name' type='text' />
        <Field formik={formik} rows={4} name='Outcome' type='textarea' />
        <Field
          formik={formik}
          name='Type'
          type='select'
          isMulti={false}
          options={courseTypes}
        />
        <Field formik={formik} rows={4} name='Suggested Age' type='number' />
        <PrimaryButton className='col-start-2' type='submit'>
          Add Course
        </PrimaryButton>
      </form>
    </div>
  );
};

export default AddCourse;
