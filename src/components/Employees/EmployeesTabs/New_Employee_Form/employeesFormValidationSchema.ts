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
            .required("Обязательное поле"),
        ),
    // emails: [""],
     //phones: yup.required("Обязательно к заполнению"),
    // phones: yup.array()
    //     .of(
    //         yup.object().shape({
    //             phone: yup.string().min(10, 'Слишком короткый')
    //             .required("Обязательное поле"),
    //         })
    //     ).nullable()
    //     .required("Обязательное поле"),
    //directions:[null],
    // phones: yup.array()
    //     .of(
    //         yup.object().shape({
    //             phone: yup.string().required('Required'),
    //         })
    //     )
    //     .required('Required'),
    about:yup.string(),
});
