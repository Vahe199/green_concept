import * as yup from "yup";

export const validationSchema = yup.object({
    CrmValue: yup
        .string()
        .min(0, " should be of minimum 8 characters length")
        .required("Обязательное поле"),
    CounterpartyType: yup
        .string()
        .min(0, " should be of minimum 8 characters length")
        .required("Обязательное поле"),
    ServiceType: yup
        .string()
        .min(0, " should be of minimum 8 characters length")
        .required("Обязательное поле"),
    INN: yup
        .string()
        .min(0, " should be of minimum 8 characters length")
        .max(12, " should be of maximum 12 characters length")
        .required("Обязательное поле"),
    KPP: yup
        .string()
        .min(0, " should be of minimum 8 characters length")
        .max(9, " should be of maximum 9 characters length")
        .required("Обязательное поле"),
    OGPN: yup
        .string()
        .min(0, " should be of minimum 8 characters length")
        .required("Обязательное поле"),
    ActualAddress: yup.string().required("Обязательное поле"),
    LegalAddress: yup.string().required("Обязательное поле"),
    MailingAddress: yup.string().required("Обязательное поле"),
    FullCompanyName: yup.string().required("Обязательное поле"),
    ShortNameCompany: yup.string().required("Обязательное поле"),
});
