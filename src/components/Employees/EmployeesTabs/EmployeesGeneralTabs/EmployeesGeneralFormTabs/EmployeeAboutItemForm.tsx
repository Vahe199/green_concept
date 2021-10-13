import React from "react";
import {Button, Typography} from "@material-ui/core";
import {Formik} from 'formik';

import {useStylesEmployeeForm} from "./EmployeesFormStyles";

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
            <div >
                <textarea
                    className={classes.textArea}
                    name="about"
                    placeholder={"Расскажите о себе"}
                    value={values.about}
                    onChange={handleChange}
                    // error={touched.about && Boolean(errors.about)}
                    // helperText={touched.about && errors.about}
                >Расскажите о себе</textarea>
            </div>
                    </div>
                    )}
            </Formik>
        </div>
    )
}

export default EmployeeAboutItemForm;
