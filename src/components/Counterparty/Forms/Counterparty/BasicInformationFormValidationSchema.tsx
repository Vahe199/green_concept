import * as yup from "yup";

export const validationSchemaBasicInformation = (value: any) => yup.object({
    firstname: yup.string().max(100, " не больше 100 символов"),
    surname: yup.string().max(100, " не больше 100 символов"),
    birthdate:yup.string(),
    contractor_type_id: yup.string().required("Обязательное поле"),
    // branches: yup.array()
    //     .of(yup.number().nullable(true).required("Обязательное поле"))
    //     .strict()
    //     .required("Обязательное поле"),
    delivery_address: yup.string().max(200, "не больше 200 символов"),
    emails: yup.array()
        .of(
            yup.object().shape({
                email: yup.string().email('Неверный адрес электронной почты'),
                // salary: yup.string().min(3, 'cmon').required('Required'),
            })
        ),
    middlename:yup.string().max(100, "не больше 100 символов"),
    phones: yup.array()
        .of(
            yup.object().shape({
                phone: yup.string().min(10, 'Слишком короткый'),
                // salary: yup.string().min(3, 'cmon').required('Required'),
            })
        ),
    service_type_id: value !==1 ? yup.number().nullable(true) : yup.number().nullable(true),
    sex: yup.string(),
    contact_contractors:
        yup.object().shape({
            role_id: yup.number()
                .nullable(true),
            position: yup.string().max(100, "не больше 100 символов"),
            main: yup.number().nullable(true),
        }),
});

export const validationSchemaContactsFromGreen = yup.object({
    contact_employees: yup.array()
        .of(
            yup.object().shape({
                direction_id: yup.string(),
                employee_id: yup.string(),
                info: yup.string(),
            })
        ),
});
export const validationSchemaInformationCongratulations = yup.object({
    contact_congratulations:yup.array()
        .of(
            yup.object().shape({
                name: yup.string(),
                congratulation_type_id: yup.string(),
                other: yup.string(),
            })
        ),
});
