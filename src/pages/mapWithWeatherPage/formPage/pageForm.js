import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormComponent = () => (
    <div>
        <Formik
        initialValues={{ startPoint: 'Симферополь', endPoint: 'Ялта' }}
        validate={values => {
            const errors = {};
            for(const value of ['startPoint', 'endPoint']) {
                if (!values[value]) {
                    errors[value] = 'Required';
                }
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
        }}
        >
        {({ isSubmitting }) => (
            <Form>
                <Field type="text" name="startPoint" />
                <ErrorMessage name="startPoint" component="div" />
                <Field type="text" name="endPoint" />
                <ErrorMessage name="endPoint" component="div" />
                <button type="submit" disabled={isSubmitting}>
                    Предсказать
                </button>
            </Form>
        )}
        </Formik>
    </div>
);

export default FormComponent;
