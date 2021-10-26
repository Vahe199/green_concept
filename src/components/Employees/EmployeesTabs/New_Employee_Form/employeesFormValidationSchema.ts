import * as yup from "yup";
import NewEmployeesGeneralInformation from "./New_EmployeesGeneralInformation";

export const validationSchemaEmployeesQualificationForm = yup.object({
    employee_skills: yup.array()
        .of(
            yup.object().shape({
                educational_institution_name: yup.string().required("Обязательное поле")
                    .max(300, " не больше 300 символов"),
                education_document: yup.string().required("Обязательное поле")
                    .max(300, " не больше 300 символов"),
                expire_date: yup.string().required("Обязательное поле"),
            })
        )
        .required("Обязательное поле"),
});

export const validationSchemaEmployeesGeneralInfForm = yup.object({
    firstname: yup.string().required("Обязательное поле"),
    middlename: yup.string().required("Обязательное поле"),
    surname: yup.string().required("Обязательное поле"),
    photo:yup.string().required("Обязательное поле"),
    birthdate: yup.string().required("Обязательное поле"),
    region_id:yup.number().nullable(true).required("Обязательное поле"),
    green_legal_id: yup.number().nullable(true).required("Обязательное поле"),
    position_id:yup.number().nullable(true).required("Обязательное поле"),
    start_work_date:yup.string().required("Обязательное поле"),
    end_work_date:yup.string().required("Обязательное поле"),
    // emails: [""],
    // phones:[""],
    // directions:[null],
    about:yup.string().required("Обязательное поле"),
});
