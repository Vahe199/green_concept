import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import {Checkbox, FormControlLabel, Radio, TextField, Paper, Button, Link} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

type Data = {
    CRM: string | null;
    CounterpartyType: string | null;
    ServiceType: string | null;
    INN: string | null;
    KPP: string | null;
    OGPN: string | null;

};
const validationSchema: yup.SchemaOf<Data> = yup.object({
    CRM: yup
        .string()
        .min(0, ' should be of minimum 8 characters length')
        .required('Обязательное поле'),
    CounterpartyType: yup
        .string()
        .min(0, ' should be of minimum 8 characters length')
        .required('Обязательное поле'),
    ServiceType: yup
        .string()
        .min(0, ' should be of minimum 8 characters length')
        .required('Обязательное поле'),
    INN: yup
        .string()
        .min(0, ' should be of minimum 8 characters length')
        .required('Обязательное поле'),
    KPP: yup
        .string()
        .min(0, ' should be of minimum 8 characters length')
        .required('Обязательное поле'),
    OGPN: yup
        .string()
        .min(0, ' should be of minimum 8 characters length')
        .required('Обязательное поле'),

});
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin:'3%',
            '& .MuiTextField-root': {
                minWidth: '60%',
                height: '30px',
                backgroundColor: theme.palette.common.white,
            },
            '& .MuiOutlinedInput-input': {
                padding: 0,
                paddingLeft: 4,
                textAlign: 'start',
                height: '30px',
                backgroundColor: 'transparent',
                fontSize: 13
            },
            '& .MuiFormHelperText-root': {
                fontSize: 9,
                marginTop: -2,
                marginLeft: 0
            },
            '& .MuiFormControlLabel-root':{
                fontSize: 10,
            }
        },
        textArea:{
            marginBottom: '6%',
            '& .MuiTextField-root': {
                minWidth: '60%',
                height: '50px',
                backgroundColor: theme.palette.common.white,
            },
            '& .MuiOutlinedInput-input': {
                padding: 0,
                paddingLeft: 4,
                textAlign: 'start',
                height: '50px',
                backgroundColor: 'transparent',
                fontSize: 13
            },
            '& .MuiOutlinedInput-multiline': {
                padding: '7.5px 14px'
            },
        },
        paper: {
            padding: 10,
            border: '1px solid #3ab994'
        },
        label: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
            fontSize:12,
        },
    }),
)

export const FormBasicInformation = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState('a')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.value);

    };
    const formik = useFormik({
        initialValues: {
            CRM: '',
            CounterpartyType: '',
            ServiceType: '',
            INN: '',
            KPP: '',
            OGPN: '',
            NDA: false,

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={classes.root}>
            <form onSubmit={formik.handleSubmit}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span>Основные сведения</span>
                    <Button color="primary" type="submit" style={{textTransform:'none'}}>
                        Сохранить
                    </Button>
                </div>
                <Paper className={classes.paper}>
                    <div className={classes.label}>
                        <span>Основное контактное лицо </span>
                        <span style={{width: '62%'}}>
                            <Checkbox
                                defaultChecked
                                color="default"
                                inputProps={{'aria-label': 'checkbox with default color'}}
                            />
                        </span>
                    </div>
                    <div className={classes.label}>
                        <span>Фамилия:</span>
                        <TextField variant={'outlined'}
                                   name="CounterpartyType"
                                   placeholder={'Фамилия'}
                                   value={formik.values.CounterpartyType}
                                   onChange={formik.handleChange}
                                   error={formik.touched.CounterpartyType && Boolean(formik.errors.CounterpartyType)}
                                   helperText={formik.touched.CounterpartyType && formik.errors.CounterpartyType}
                        />
                    </div>
                    <div className={classes.label}>
                        <span>Имя</span>
                        <TextField variant={'outlined'}
                                   name="CounterpartyType"
                                   placeholder={'Имя'}
                                   value={formik.values.CounterpartyType}
                                   onChange={formik.handleChange}
                                   error={formik.touched.CounterpartyType && Boolean(formik.errors.CounterpartyType)}
                                   helperText={formik.touched.CounterpartyType && formik.errors.CounterpartyType}
                        />
                    </div>
                    <div className={classes.label}>
                        <span>Отчество</span>
                        <TextField variant={'outlined'}
                                   name="CounterpartyType"
                                   placeholder={'Отчество'}
                                   value={formik.values.CounterpartyType}
                                   onChange={formik.handleChange}
                                   error={formik.touched.CounterpartyType && Boolean(formik.errors.CounterpartyType)}
                                   helperText={formik.touched.CounterpartyType && formik.errors.CounterpartyType}
                        />
                    </div>
                    <div className={classes.label}>
                        <span>Пол</span>
                    <div style={{marginBottom: '2%', display:'flex'}}>
                        <div>
                            <span >Мужчина</span>
                      <Radio
                                checked={checked === 'a'}
                                onChange={handleChange}
                                value="a"
                                color="default"
                                name="radio-button-demo"
                                size="small"
                                inputProps={{'aria-label': 'A'}}
                            />
                        </div>
                        <div>
                            <span >Женщина</span><Radio
                                checked={checked === 'b'}
                                onChange={handleChange}
                                value="b"
                                color="default"
                                name="radio-button-demo"
                                size="small"
                                inputProps={{'aria-label': 'B'}}
                            />
                        </div>
                    </div>
                    </div>
                    <div className={classes.label}>
                        <span>Дата рождения</span>
                        <div style={{width: '60%',display:'flex'}}>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                defaultValue="2021-01-01"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e)=>console.log(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={classes.label}>
                        <span>Роль</span>
                        <TextField variant={'outlined'}

                                   name="ServiceType"
                                   placeholder={'Выберите'}
                                   value={formik.values.ServiceType}
                                   onChange={formik.handleChange}
                                   error={formik.touched.ServiceType && Boolean(formik.errors.ServiceType)}
                                   helperText={formik.touched.ServiceType && formik.errors.ServiceType}
                        />
                    </div>
                    <div className={classes.label}>
                        <span>Должность</span>
                        <TextField variant={'outlined'}
                                   name="INN"
                                   placeholder={'Должность'}
                                   value={formik.values.INN}
                                   onChange={formik.handleChange}
                                   error={formik.touched.INN && Boolean(formik.errors.INN)}
                                   helperText={formik.touched.INN && formik.errors.INN}
                        />
                    </div>
                    <div className={classes.label}>
                        <span>Тип контрагента</span>
                        <TextField variant={'outlined'}
                                   name="KPP"
                                   placeholder={'Выберите'}
                                   value={formik.values.KPP}
                                   onChange={formik.handleChange}
                                   error={formik.touched.KPP && Boolean(formik.errors.KPP)}
                                   helperText={formik.touched.KPP && formik.errors.KPP}
                        />
                    </div>
                    <div className={classes.label}>
                        <span>Тип услуг</span>
                        <TextField variant={'outlined'}
                                   name="OGPN"
                                   placeholder={'Выберите'}
                                   value={formik.values.OGPN}
                                   onChange={formik.handleChange}
                                   error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
                                   helperText={formik.touched.OGPN && formik.errors.OGPN}
                        />
                    </div>
                    <div className={classes.label}>
                        <span>Отрасль</span>
                        <TextField variant={'outlined'}
                                   name="OGPN"
                                   placeholder={'Выберите'}
                                   value={formik.values.OGPN}
                                   onChange={formik.handleChange}
                                   error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
                                   helperText={formik.touched.OGPN && formik.errors.OGPN}
                        />
                    </div>
                    <div className={classes.label}>
                        <span>Телефон рабочий</span>
                        <div style={{width:'50%',display:"flex",flexDirection:'column'}}>
                        <TextField variant={'outlined'}
                                   name="OGPN"
                                   placeholder={'+79999999999'}
                                   value={formik.values.OGPN}
                                   onChange={formik.handleChange}
                                   error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
                                   helperText={formik.touched.OGPN && formik.errors.OGPN}
                        />
                            <Link   color="inherit">
                                + Добавить телефон
                            </Link>
                        </div>
                    </div>
                    <div className={classes.label}>
                        <span>Телефон мобильный</span>
                        <div style={{width:'50%',display:"flex",flexDirection:'column'}}>
                            <TextField variant={'outlined'}
                                       name="OGPN"
                                       placeholder={'+79999999999'}
                                       value={formik.values.OGPN}
                                       onChange={formik.handleChange}
                                       error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
                                       helperText={formik.touched.OGPN && formik.errors.OGPN}
                            />
                            <Link   color="inherit">
                                + Добавить телефон
                            </Link>
                        </div>
                    </div>
                    <div className={classes.label}>
                        <span>E-mail</span>
                        <div style={{width:'50%',display:"flex",flexDirection:'column'}}>
                            <TextField variant={'outlined'}
                                       name="OGPN"
                                       placeholder={'email@email.com'}
                                       value={formik.values.OGPN}
                                       onChange={formik.handleChange}
                                       error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
                                       helperText={formik.touched.OGPN && formik.errors.OGPN}
                            />
                            <Link   color="inherit">
                                + Добавить email
                            </Link>
                        </div>
                    </div>
                    <div className={classes.label}>
                        <span>Адрес доставки</span>

                        <TextField variant={'outlined'}
                                   className={classes.textArea}
                                   multiline
                                   rows={3}
                                   name="FullCompanyName"
                                   placeholder={'Адрес доставки адрес вторая линия'}
                                   value={formik.values.OGPN}
                                   onChange={formik.handleChange}
                                   error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
                                   helperText={formik.touched.OGPN && formik.errors.OGPN}
                        />
                    </div>


                </Paper>
            </form>
        </div>
    );
}
