import React, { Component } from 'react';
import './pageForm.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, TextField } from '@material-ui/core';

const validationSchema = yup.object({
    startPoint: yup
      .string('Введите адрес')
      .required('Поле обязательно для заполнения'),
    endPoint: yup
      .string('Введите адрес')
      .required('Поле обязательно для заполнения'),
});

export class FormComponent extends Component {
    render() {
        return (
            <Formik
                initialValues = {{
                    startPoint: 'Симферополь',
                    endPoint: 'Ялта',
                }}
                validationSchema = {validationSchema}
                onSubmit = {(values) => {
                    this.props.onSubmit(values);
                    //console.log(JSON.stringify(values, null, 2));
                }}
            >
            {({ values, errors, touched, handleSubmit, handleChange}) => (
                <form onSubmit={handleSubmit} className="form">
                    <TextField
                        type="text"
                        name="startPoint"
                        className="form__input"
                        label="Пункт отправки"
                        value={values.startPoint}
                        onChange={handleChange}
                        error={touched.startPoint && Boolean(errors.startPoint)}
                        helperText={touched.startPoint && errors.startPoint}
                    />
                    <TextField
                        type="text"
                        name="endPoint"
                        className="form__input"
                        label="Пункт прибытия"
                        value={values.endPoint}
                        onChange={handleChange}
                        error={touched.endPoint && Boolean(errors.endPoint)}
                        helperText={touched.endPoint && errors.endPoint}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Предсказать
                    </Button>
                </form>
            )}
            </Formik>
        )
    }
} 
