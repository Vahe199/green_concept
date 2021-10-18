import * as yup from "yup";

export const validationSchemaBasicInformation = yup.object({
    firstname: yup.string().required("Обязательное поле"),
    surname: yup.string().required("Обязательное поле"),
    birthdate:yup.string().required("Обязательное поле"),
    contractor_type_id: yup.string().required("Обязательное поле"),
    // branches: yup.array()
    //     .of(yup.number().nullable(true).required("Обязательное поле"))
    //     .strict()
    //     .required("Обязательное поле"),
    delivery_address: yup.string().required("Обязательное поле"),
    emails: yup.array()
        .of(
            yup.object().shape({
                email: yup.string().email('Неверный адрес электронной почты').required("Обязательное поле"),
                // salary: yup.string().min(3, 'cmon').required('Required'),
            })
        )
        .required("Обязательное поле"),
    middlename:yup.string().required("Обязательное поле"),
    phones: yup.array()
        .of(
            yup.object().shape({
                phone: yup.string().min(10, 'Слишком короткый').required("Обязательное поле"),
                // salary: yup.string().min(3, 'cmon').required('Required'),
            })
        )
        .required("Обязательное поле"),
    service_type_id: yup.number().nullable(true).required("Обязательное поле"),
    sex: yup.string().required("Обязательное поле"),
    contact_contractors:
        yup.object().shape({
            role_id: yup.number()
                .nullable(true)
                .required("Обязательное поле"),
            position: yup.string().required("Обязательное поле"),
            main: yup.number().nullable(true).required("Обязательное поле"),
        }),
});

export const validationSchemaContactsFromGreen = yup.object({
    contact_employees: yup.array()
        .of(
            yup.object().shape({
                direction_id: yup.string().required("Обязательное поле"),
                employee_id: yup.string().required("Обязательное поле"),
                info: yup.string().required("Обязательное поле"),
            })
        )
        .required("Обязательное поле"),
});
export const validationSchemaInformationCongratulations = yup.object({
    contact_congratulations:yup.array()
        .of(
            yup.object().shape({
                name: yup.string().required("Обязательное поле"),
                congratulation_type_id: yup.string().required("Обязательное поле"),
                other: yup.string().required("Обязательное поле"),
            })
        )
        .required("Обязательное поле"),
});
