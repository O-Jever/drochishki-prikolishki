import React from 'react';
import './pageForm.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@material-ui/core';

const validationSchema = yup.object({
    startPoint: yup
      .string('Введите адрес')
      .required('Поле обязательно для заполнения'),
    endPoint: yup
      .string('Введите адрес')
      .required('Поле обязательно для заполнения'),
});

const FormComponent = () => {
    const formik = useFormik({
        initialValues: {
            startPoint: 'Симферополь',
            endPoint: 'Ялта',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });    

    return (
    <div>
        <form onSubmit={formik.handleSubmit} className="form">
            <TextField
                type="text"
                name="startPoint"
                className="form__input"
                label="Пункт отправки"
                value={formik.values.startPoint}
                onChange={formik.handleChange}
                error={formik.touched.startPoint && Boolean(formik.errors.startPoint)}
                helperText={formik.touched.startPoint && formik.errors.startPoint}
            />
            <TextField
                type="text"
                name="endPoint"
                className="form__input"
                label="Пункт прибытия"
                value={formik.values.endPoint}
                onChange={formik.handleChange}
                error={formik.touched.endPoint && Boolean(formik.errors.endPoint)}
                helperText={formik.touched.endPoint && formik.errors.endPoint}
            />
            <Button variant="contained" color="primary" type="submit">
                Предсказать
            </Button>
        </form>
    </div>
)};

export default FormComponent;
