import React from 'react';
import { Formik, Field, Form } from 'formik';
import validationSchema from './validations';

function NewTodoForm(){
return(
  <Formik initialValues={{
    text: "",
  }}
  onSubmit={(values, bag) => { console.log(values); bag.resetForm() }} //bag.resetForm ile form'daki değeri sildik
  validator={() => ({validationSchema})}
  >
		<Form>
    <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
  </Formik>
);
}
export default NewTodoForm;

/**
 * Form işlemleri için formik kütüphanesini kullandık
 * npm i formik yup ile kurulumu yapıyoruz
 */