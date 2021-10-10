import React from "react";
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import { Formik, getIn, FieldArray } from 'formik';

import {useStylesEmployeeForm} from "./EmployeesFormStyles";
import {TrashIcon} from "../../../../../IMG/SVG/TrashIcon";

const initialValues = {
    about:""
};
type EmployeeFormDataProps = {
    setEmployeeAboutData:(val:boolean)=>void
}
const EmployeeAboutItemForm:React.FC<EmployeeFormDataProps> = ({setEmployeeAboutData}) => {
    const classes = useStylesEmployeeForm();
    return(
        <div className={classes.root} style={{marginBottom:50}}>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, touched,handleChange,errors }) => (
                    <div>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Данные сотрудника
                </Typography>
                <Button color="primary" type="submit"
                        onClick={()=>setEmployeeAboutData(true)}
                        className={classes.saveButton}>
                    Сохранить
                </Button>
            </div>
            <Paper elevation={0} className={classes.paper} style={{padding:1,height:242}}>
                <textarea
                    className={classes.textArea}
                    name="about"
                    placeholder={"Расскажите о себе"}
                    value={values.about}
                    onChange={handleChange}
                    // error={touched.about && Boolean(errors.about)}
                    // helperText={touched.about && errors.about}
                >Расскажите о себе</textarea>
            </Paper>
                    </div>
                    )}
            </Formik>
        </div>
    )
}

export default EmployeeAboutItemForm;
