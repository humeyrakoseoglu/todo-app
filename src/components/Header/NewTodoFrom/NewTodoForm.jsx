import React from 'react';
import { Formik, Field, Form } from 'formik';
import validationSchema from './validations';
import { useTodo } from '../../../context/TodoContext';

function NewTodoForm(){
  const {addTodo} = useTodo();

return(
  <Formik initialValues={{
    text: "",
  }}
  onSubmit={(values, bag) => {
    console.log(values);
    addTodo(values.text);
    bag.resetForm();//bag.resetForm ile form'daki değeri sildik
     }} 
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