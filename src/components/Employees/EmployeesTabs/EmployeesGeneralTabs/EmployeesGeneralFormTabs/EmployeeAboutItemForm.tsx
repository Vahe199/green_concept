import React, {memo, useEffect} from "react";
import {Button, Typography} from "@material-ui/core";
import {Formik,Form} from 'formik';

import {useStylesEmployeeForm} from "./EmployeesFormStyles";
import {useTypedSelector} from "../../../../../redux/type_redux_hook/useTypedSelector";
import {notifyError, notifySuccess} from "../../../../Utils/utils_options/ToastNotify";
import {useActions} from "../../../../../redux/type_redux_hook/useAction";
import {ToastContainer} from "react-toastify";


type EmployeeFormDataProps = {
    setEmployeeAboutData:(val:boolean)=>void
}
const EmployeeAboutItemForm:React.FC<EmployeeFormDataProps> = ({setEmployeeAboutData}) => {
    const {recoveryEmployeesState,updateEmployeeAboutListAC} = useActions()
    const {employeeById ,error,success_update} = useTypedSelector(state => state.employees)
    const {employee}:any =employeeById;
    const {about, id}:any =employee;
    const initialValues = {
        about:about ? about :""
    };
    useEffect( ()=>{
        if(error){
            notifyError("некорректные данные");
             recoveryEmployeesState()
        }
        if(success_update === "ABOUT_INFO"){
            notifySuccess("Изменение прошло успешно");
              recoveryEmployeesState()
            setEmployeeAboutData(true)

        }
    },[error,success_update])
    const classes = useStylesEmployeeForm();
    return(
        <div className={classes.root} style={{marginBottom:50}}>
            <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    updateEmployeeAboutListAC(values, id)

                }}
            >
                {({ values, touched,handleChange,errors }) => (
                    <Form>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    О себе
                </Typography>
                <Button color="primary" type="submit"
                        // onClick={()=>setEmployeeAboutData(true)}
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
                    </Form>
                    )}
            </Formik>
        </div>
    )
}

export default memo(EmployeeAboutItemForm);
