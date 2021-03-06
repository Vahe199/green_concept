import * as yup from "yup";
import NewEmployeesGeneralInformation from "./New_EmployeesGeneralInformation";

export const validationSchemaEmployeesQualificationForm = yup.object({
    employee_skills: yup.array()
        .of(
            yup.object().shape({
                educational_institution_name: yup.string().required("Обязательно к заполнению")
                    .max(300, " не больше 300 символов"),
                education_document: yup.string().required("Обязательно к заполнению")
                    .max(300, " не больше 300 символов"),
                expire_date: yup.string().required("Обязательно к заполнению"),
            })
        )
        .required("Обязательно к заполнению"),
    // experience_years: yup.number().transform(value => (isNaN(value) ? undefined : value)),
    // experience_months: yup.number().transform(value => (isNaN(value) ? undefined : value)),
    experience_years: yup.string().matches(/^[0-9]+$/, "Толко число"),
    experience_months: yup.string().matches(/^[0-9]+$/, "Толко число"),
});

export const validationSchemaEmployeesGeneralInfForm = yup.object({
    firstname: yup.string().required("Обязательно к заполнению"),
    middlename: yup.string(),
    surname: yup.string().required("Обязательно к заполнению"),
    photo:yup.string(),
    birthdate: yup.string(),
    region_id:yup.number().nullable(true),
    green_legal_id: yup.number().nullable(true),
    position_id:yup.number().nullable(true),
    start_work_date:yup.string(),
    end_work_date:yup.string(),
    phones: yup.array()
        .of(
            yup.number().nullable()
            .required("Обязательно к заполнению"),
        ),
    // emails: [""],

    //directions:[null],

    about:yup.string(),
});
