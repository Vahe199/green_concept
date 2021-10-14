import * as yup from "yup";

export const validationSchema = yup.object().shape({

    crms: yup.array()
        .of(
            yup.object().shape({
                crms: yup.string().required('Required'),
            })
        )
        .required("Обязательное поле"),
    contractor_type_id: yup
        .string()
        .min(0, " должен состоять минимум из 10 символов")
        .required("Обязательное поле"),
    service_type_id: yup
        .string()
        .min(0, "должен состоять минимум из 10 символов")
        .required("Обязательное поле"),
    inn: yup
        .string()
        .min(0, "должен состоять минимум из 10 символов")
        .max(18, "должен состоять максимум из 18 символов"),
    kpp: yup
        .string()
        .min(0, "должен состоять минимум из 10 символов")
        .max(18, "должен состоять максимум из 18 символов"),
    ogrn: yup
        .string()
        .min(0, "должен состоять минимум из 10 символов")
        .max(18, "должен состоять максимум из 18 символов"),
    actual_address: yup.string().min(0, "должен состоять минимум из 10 символов")
        .max(18, "должен состоять максимум из 18 символов"),
    legal_registration_address: yup.string()
        .min(0, "должен состоять минимум из 10 символов")
        .max(18, "должен состоять максимум из 18 символов"),
    post_address: yup.string().min(0, "должен состоять минимум из 10 символов")
        .max(250, "должен состоять максимум из 250 символов"),
    full_name: yup.string().min(0, "должен состоять минимум из 10 символов")
        .max(250, "должен состоять максимум из 250 символов"),
    short_name: yup.string() .min(0, "должен состоять минимум из 10 символов")
        .max(250, "должен состоять максимум из 250 символов"),
    sites: yup.array()
        .of(
            yup.object().shape({
               url: yup.string().min(3, 'Слишком короткый').required("Обязательное поле"),
                // salary: yup.string().min(3, 'cmon').required('Required'),
            })
        )
        .required("Обязательное поле"),
    phones: yup.array()
        .of(
            yup.object().shape({
               phone: yup.string().min(12, 'Слишком короткый').required("Обязательное поле"),
                // salary: yup.string().min(3, 'cmon').required('Required'),
            })
        )
        .required("Обязательное поле"),
    emails: yup.array()
        .of(
            yup.object().shape({
                email: yup.string().email('Неверный адрес электронной почты').required("Обязательное поле"),
                // salary: yup.string().min(3, 'cmon').required('Required'),
            })
        )
        .required("Обязательное поле")
});


// org_type: "ЮЛ",
    // crms: [''],
    // contractor_type_id:"",
    // service_type_id:"",
    // inn:"",
    // kpp:"",
    // ogrn:"",
    // nda: 1,
    // full_name:"",
    // short_name: "",
    // parent_id: "",
    // branches:[''],
    // legal_registration_address:"",
    // actual_address:"",
    // post_address:"",
    // sites: [{url: ''}],
    // phones: [{phone: ''}],
    // emails: [{email: ''}]
