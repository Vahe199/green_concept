import * as yup from "yup";
import {FormCompanyContacts} from "./FormCompanyContacts";

export const validationSchemaGeneralInfo = (value: any) =>  yup.object().shape({

    crms: yup.array()
        .of(
            yup.number().required("Обязательное поле"),
        )
        .required("Обязательное поле"),
    contractor_type_id: yup
        .string()
        .required("Обязательное поле"),
    service_type_id: yup
        .string()
        .required("Обязательное поле"),
    inn: yup
        .string()
        .min(value == "ЮЛ" ? 10 : 12, `должен состоять минимум из ${value == "ЮЛ" ? 10 : 12} символов`)
        .max(value == "ЮЛ" ? 10 : 12, `должен состоять максимум из ${value == "ЮЛ" ? 10 : 12} символов` )
        .required("Обязательное поле"),
    kpp: value == "ЮЛ" ? yup.string().required("Обязательное поле").min(0, "должен состоять минимум из 10 символов")
        .max(18, "должен состоять максимум из 18 символов").nullable(true) : yup.string().nullable(true),
    // kpp: yup
    //     .string().nullable(true)
    //     .min(10, "должен состоять минимум из 10 символов")
    //     .max(18, "должен состоять максимум из 18 символов"),
    ogrn: yup
        .string()
        .min(12, "должен состоять минимум из 12 символов")
        .max(18, "должен состоять максимум из 18 символов")
        // .required("Обязательное поле"),




});

export const validationSchemaFormCompanyDetails = yup.object().shape({

    full_name: yup.string().min(0, "должен состоять минимум из 10 символов")
        .max(250, "должен состоять максимум из 250 символов")
        .required("Обязательное поле"),
    short_name: yup.string() .min(0, "должен состоять минимум из 10 символов")
        .max(250, "должен состоять максимум из 250 символов")
        .required("Обязательное поле"),
       // parent_id: yup.string() .min(0, "должен состоять минимум из 1 символов")
       //  .max(250, "должен состоять максимум из 250 символов"),
        // .required("Обязательное поле"),
    branches: yup.array()
        .of(
            yup.string().required("Обязательное поле"),
        )
        .required("Обязательное поле"),

});


export const validationSchemaCompanyContacts = yup.object().shape({
    actual_address: yup.string().min(0, "должен состоять минимум из 10 символов")
        .max(18, "должен состоять максимум из 18 символов")
        .required("Обязательное поле"),
    legal_registration_address: yup.string()
        .min(0, "должен состоять минимум из 10 символов")
        .max(18, "должен состоять максимум из 18 символов")
        .required("Обязательное поле"),
    post_address: yup.string().min(0, "должен состоять минимум из 10 символов")
        .max(250, "должен состоять максимум из 250 символов")
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

