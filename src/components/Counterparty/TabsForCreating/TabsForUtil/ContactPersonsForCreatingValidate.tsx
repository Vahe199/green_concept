import * as yup from "yup";

export const validationSchemaContactPerson = (value: any) => yup.object({

  firstname: yup.string().max(100, "должен состоять максимум из 100 символов").required("Обязательно к заполнению"),
  surname: yup.string().max(100, "должен состоять максимум из 100 символов").required("Обязательно к заполнению"),
  birthdate: yup.string().nullable(true),
    branches: yup.array()
        .of(yup.number())
        .strict(),
  contact_congratulations: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string(),
        congratulation_type_id: yup.number().nullable(true),
        other: yup.string(),
      })
    ),


  contact_employees: yup
    .array()
    .of(
      yup.object().shape({
        direction_id: yup.string(),
        employee_id: yup.number().nullable(true),
        info: yup.string(),
      })
    ),
    contact_contractors:
      yup.object().shape({
          role_id: yup.number()
              .nullable(true),
          position: yup.string().max(100, "должен состоять максимум из 100 символов"),
          main: yup.number().nullable(true),
      }),

  contractor_type_id: yup.string().required("Обязательно к заполнению"),
  delivery_address: yup.string().nullable(true).max(200, "должен состоять максимум из 200 символов"),
  emails: yup
    .array()
    .of(
      yup.object().shape({
        email: yup
          .string()
          .email("Неверный адрес электронной почты"),
        // salary: yup.string().min(3, 'cmon').required('Required'),
      })
    ),
  middlename: yup.string().nullable(true).max(100, "должен состоять максимум из 100 символов"),
  // phones: yup
  //   .array().required("Обязательно к заполнению")
  //   .of(
  //     yup.object().shape({
  //       phone: yup
  //         .string()
  //         .min(10, "Слишком короткый").required("Обязательно к заполнению"),
  //       // salary: yup.string().min(3, 'cmon').required('Required'),
  //     })
  //   ),
    phones: yup.array().of(
        yup.object().shape({
            'phone': yup.string().required("Required"),
        })
    ),
  service_type_id: value !== 1 ? yup.number().nullable(true) : yup.number().nullable(true),
  sex: yup.string(),
  status_id: yup.number().nullable(true),
});
