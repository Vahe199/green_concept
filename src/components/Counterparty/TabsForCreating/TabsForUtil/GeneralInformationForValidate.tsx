import * as yup from "yup";

export const validationSchema = (value: string) =>
  yup.object().shape({
    crms: yup
      .array()
      .of(yup.number().required("Обязательное поле"))
      .strict()
      .required("Обязательное поле"),
    branches: yup
      .array()
      .of(yup.number().required("Обязательное поле"))
      .strict()
      .required("Обязательное поле"),
    contractor_type_id: yup.string().required("Обязательное поле"),
    service_type_id: yup.string().required("Обязательное поле"),
    inn: yup
      .string()
      .min(
        value == "ЮЛ" ? 10 : 12,
        `должен состоять минимум из ${value == "ЮЛ" ? 10 : 12} символов`
      )
      .max(
        value == "ЮЛ" ? 10 : 12,
        `должен состоять максимум из ${value == "ЮЛ" ? 10 : 12} символов`
      )
      .required("Обязательное поле"),
    kpp:
      value == "ЮЛ"
        ? yup
            .string()
            .required("Обязательное поле")
            .min(9, "должен состоять минимум из 9 символов")
            .max(9, "должен состоять максимум из 9 символов")
            .nullable(true)
        : yup.string().nullable(true),
    ogrn: yup
      .string()
      .min(13, "должен состоять минимум из 13 символов")
      .max(13, "должен состоять максимум из 13 символов")
      .required("Обязательное поле"),
    actual_address: yup
      .string()
      .min(0, "должен состоять минимум из 10 символов")
        .max(
            value == "ЮЛ" ? 300 : 100,
            `должен состоять максимум из ${value == "ЮЛ" ? 300 : 100} символов`
        )
      .required("Обязательное поле"),
    legal_registration_address: yup
      .string()
      .min(0, "должен состоять минимум из 10 символов")
        .max(
            value == "ЮЛ" ? 300 : 100,
            `должен состоять максимум из ${value == "ЮЛ" ? 300 : 100} символов`
        )
      .required("Обязательное поле"),
    post_address: yup
      .string()
      .min(0, "должен состоять минимум из 10 символов")
        .max(
            value == "ЮЛ" ? 300 : 100,
            `должен состоять максимум из ${value == "ЮЛ" ? 300 : 100} символов`
        )
      .required("Обязательное поле"),
    full_name: yup
      .string()
      .min(0, "должен состоять минимум из 10 символов")
      .max(300, "должен состоять максимум из 300 символов")
      .required("Обязательное поле"),
    short_name: yup.string() .min(10, "должен состоять минимум из 10 символов")
        .max(value == "ЮЛ" ? 100 : 50, `должен состоять максимум из ${value == "ЮЛ" ? 100 : 50} символов`)
        .required("Обязательное поле"),
    sites: yup
      .array()
      .of(
        yup.object().shape({
          url: yup
            .string()
            .min(3, "Слишком короткый")
            .required("Обязательное поле"),
          // salary: yup.string().min(3, 'cmon').required('Required'),
        })
      )
      .required("Обязательное поле"),
    phones: yup
      .array()
      .of(
        yup.object().shape({
          phone: yup
            .string()
            .min(10, "Слишком короткый")
            .required("Обязательное поле"),
          // salary: yup.string().min(3, 'cmon').required('Required'),
        })
      )
      .required("Обязательное поле"),
    emails: yup
      .array()
      .of(
        yup.object().shape({
          email: yup
            .string()
            .email("Неверный адрес электронной почты")
            .required("Обязательное поле"),
          // salary: yup.string().min(3, 'cmon').required('Required'),
        })
      )
      .required("Обязательное поле"),
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
