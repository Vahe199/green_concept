import * as yup from "yup";
import {FormCompanyContacts} from "./FormCompanyContacts";

export const validationSchemaGeneralInfo = (value: any) =>  yup.object().shape({

    crms: yup.array()
        .of(
            yup.number(),
                //.required("Обязательное поле"),
        ),
        //.required("Обязательное поле"),
    contractor_type_id: yup
        .string()
        .required("Обязательно к заполнению"),
    service_type_id: yup
        .string(),
        //.required("Обязательное поле"),
    inn: yup
        .string()
        .min(value == "ЮЛ" ? 10 : 12, `должен состоять минимум из ${value == "ЮЛ" ? 10 : 12} символов`)
        .max(value == "ЮЛ" ? 10 : 12, `должен состоять максимум из ${value == "ЮЛ" ? 10 : 12} символов` ),
        //.required(`Обязательное поле`),
    kpp: value == "ЮЛ" ? yup.string().min(9, "должен состоять минимум из 9 символов")
        .max(9, "должен состоять максимум из 9 символов").nullable(true) : yup.string().nullable(true),
    // kpp: yup
    //     .string().nullable(true)
    //     .min(10, "должен состоять минимум из 10 символов")
    //     .max(18, "должен состоять максимум из 18 символов"),
    ogrn: yup
        .string()
        .min(13, "должен состоять минимум из 13 символов")
        .max(13, "должен состоять максимум из 13 символов")
        // .required("Обязательное поле"),




});

export const validationSchemaFormCompanyDetails = (value: any) => yup.object().shape({

    full_name: yup.string().min(0, "должен состоять минимум из 10 символов")
        .max(300, `должен состоять максимум из 300 символов`)
        .required("Обязательно к заполнению"),
    short_name: yup.string() .min(10, "должен состоять минимум из 10 символов")
        .max(value == "ЮЛ" ? 100 : 50, `должен состоять максимум из ${value == "ЮЛ" ? 100 : 50} символов`),
        //.required("Обязательное поле"),
       // parent_id: yup.string() .min(0, "должен состоять минимум из 1 символов")
       //  .max(250, "должен состоять максимум из 250 символов"),
        // .required("Обязательное поле"),
    branches: yup.array()
        .of(
            yup.string(),
                //.required("Обязательное поле"),
        )
        .required("Обязательное поле"),

});


export const validationSchemaCompanyContacts = (value: any) => yup.object().shape({
    actual_address: yup.string().min(0, "должен состоять минимум из 10 символов")
        .max(
            value == "ЮЛ" ? 300 : 100,
            `должен состоять максимум из ${value == "ЮЛ" ? 300 : 100} символов`
        )
        .required("Обязательное поле"),
    legal_registration_address: yup.string()
        .min(0, "должен состоять минимум из 10 символов")
        .max(
            value == "ЮЛ" ? 300 : 100,
            `должен состоять максимум из ${value == "ЮЛ" ? 300 : 100} символов`
        )
        .required("Обязательное поле"),
    post_address: yup.string().min(0, "должен состоять минимум из 10 символов")
        .max(
            value == "ЮЛ" ? 300 : 100,
            `должен состоять максимум из ${value == "ЮЛ" ? 300 : 100} символов`
        )
        .required("Обязательное поле"),

    sites: yup.array()
        .of(
            yup.object().shape({
                url: yup.string().min(3, 'Слишком короткый').required("Обязательное поле"),
            })
        )
        .required("Обязательное поле"),
    phones: yup.array()
        .of(
            yup.object().shape({
                phone: yup.string().min(10, 'Слишком короткый').required("Обязательное поле"),
            })
        )
        .required("Обязательное поле"),
    emails: yup.array()
        .of(
            yup.object().shape({
                email: yup.string().email('Неверный адрес электронной почты').required("Обязательное поле"),
            })
        )
        .required("Обязательное поле")
});

