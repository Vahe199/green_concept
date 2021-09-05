import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import {Checkbox, FormControlLabel, Radio, TextField} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

type Data = {
    CRM:string | null;
    CounterpartyType:string | null;
    ServiceType:string | null;
    INN:string | null;
    KPP:string | null;
    OGPN:string | null;

};
const validationSchema: yup.SchemaOf<Data> = yup.object({
    CRM: yup
        .string()
        .min(0, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    CounterpartyType: yup
        .string()
        .min(0, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    ServiceType: yup
        .string()
        .min(0, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    INN: yup
        .string()
        .min(0, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    KPP: yup
        .string()
        .min(0, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    OGPN: yup
        .string()
        .min(0, 'Password should be of minimum 8 characters length')
        .required('Password is required'),

});
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root:{
            '& .MuiTextField-root': {
                minWidth:'60%',
                height: '30px',
                backgroundColor: theme.palette.common.white,
            },
            '& .MuiOutlinedInput-input':{
                padding: 0,
                paddingLeft:4,
                textAlign:'start',
                height:'30px',
                backgroundColor:'transparent',
                fontSize:13
            },
        },
        label: {
          display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            marginBottom:10
        },
    }),
)

export const WithMaterialUI = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState('a')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.value);

    };
    const formik = useFormik({
        initialValues: {
            CRM:'',
            CounterpartyType:'',
            ServiceType:'',
            INN:'',
            KPP:'',
            OGPN:'',
            NDA:false,

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={classes.root}>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <FormControlLabel
                        value="start"
                        control={<Radio
                            checked={checked === 'a'}
                            onChange={handleChange}
                            value="a"
                            color="default"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />}
                        label="Физическое лицо"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="start"
                        control={<Radio
                            checked={checked === 'b'}
                            onChange={handleChange}
                            value="b"
                            color="default"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'B' }}
                        />}
                        label="Юридическое лицо"
                        labelPlacement="start"
                    />
                </div>
                <div className={classes.label}>
                    <span>CRM</span>
<div style={{width:'60%'}}>
               <TextField variant={'outlined'}
                                      style={{minWidth:200}}
                                        name="CRM"
                                        placeholder={'Фамилия Имя'}
                                        value={formik.values.CRM}
                                        onChange={formik.handleChange}
                                        error={formik.touched.CRM && Boolean(formik.errors.CRM)}
                                        helperText={formik.touched.CRM && formik.errors.CRM}
                    />
                      <AddIcon />
</div>
                </div>
                <div className={classes.label}>
                    <span>Тип контрагента</span>
               <TextField variant={'outlined'}
                                        name="CounterpartyType"
                                        placeholder={'Поставщик'}
                                        value={formik.values.CounterpartyType}
                                        onChange={formik.handleChange}
                                        error={formik.touched.CounterpartyType && Boolean(formik.errors.CounterpartyType)}
                                        helperText={formik.touched.CounterpartyType && formik.errors.CounterpartyType}
                    />
                </div>
                <div className={classes.label}>
                    <span>Тип услуг</span>
                <TextField variant={'outlined'}

                                        name="ServiceType"
                                        placeholder={'Другое'}
                                        value={formik.values.ServiceType}
                                        onChange={formik.handleChange}
                                        error={formik.touched.ServiceType && Boolean(formik.errors.ServiceType)}
                                        helperText={formik.touched.ServiceType && formik.errors.ServiceType}
                    />
                </div>
                <div className={classes.label}>
                    <span>ИНН</span>
                <TextField variant={'outlined'}
                                        name="INN"
                                        placeholder={'1234556789101112'}
                                        value={formik.values.INN}
                                        onChange={formik.handleChange}
                                        error={formik.touched.INN && Boolean(formik.errors.INN)}
                                        helperText={formik.touched.INN && formik.errors.INN}
                    />
                </div>
                <div className={classes.label}>
                    <span>КПП</span>
                <TextField variant={'outlined'}
                                        name="KPP"
                                        placeholder={'1234556789101112'}
                                        value={formik.values.KPP}
                                        onChange={formik.handleChange}
                                        error={formik.touched.KPP && Boolean(formik.errors.KPP)}
                                        helperText={formik.touched.KPP && formik.errors.KPP}
                    />
                </div>
                <div className={classes.label}>
                    <span>ОГРН</span>
                <TextField variant={'outlined'}
                                        name="OGPN"
                                        placeholder={'1234556789101112'}
                                        value={formik.values.OGPN}
                                        onChange={formik.handleChange}
                                        error={formik.touched.OGPN && Boolean(formik.errors.OGPN)}
                                        helperText={formik.touched.OGPN && formik.errors.OGPN}
                    />
                </div>
                <div className={classes.label}>
                    <span>NDA</span>
               <Checkbox
                        defaultChecked
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />

                </div>
            </form>
        </div>
    );
};
