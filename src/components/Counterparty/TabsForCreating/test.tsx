import {Button, Checkbox, Paper, Radio, TextField, Typography} from "@material-ui/core";
import {useFormik} from "formik";
import React from "react";
import {CheckSquareChecked} from "../../../IMG/SVG/CheckSquareChecked";
import {CheckSquareUnChecked} from "../../../IMG/SVG/CheckSquareUnChecked";
import {TrashIcon} from "../../../IMG/SVG/TrashIcon";
import {UseActions} from "../../../redux/type_redux_hook/ useAction";
import {useTypedSelector} from "../../../redux/type_redux_hook/useTypedSelector";
import InputFilterSelectedBranches from "../../Counterparty/Core/FilterInputs/InputFilterSelectedBranches";
import InputFilterSelectedCrm from "../../Counterparty/Core/FilterInputs/InputFilterSelectedCRM";
import InputFilterSelectedServicesType from "../Core/FilterInputs/InputFilterSelectedServicesType";
import InputFilterSelectedType from "../Core/FilterInputs/InputFilterSelect";
import get from "lodash/get";
import {useStylesGeneralInfo} from "./TabsForUtil/GeneralInformationForStyle";
import {validationSchema} from "./TabsForUtil/GeneralInformationForValidate";
import { Formik, getIn, FieldArray } from 'formik';


export const Test = () => {
    const classes = useStylesGeneralInfo();
    const [site, setSite] = React.useState(1);
    const [phone, setPhone] = React.useState(1);
    const [email, setEmail] = React.useState(1);
    const [branch, setBranch] = React.useState(1);
    const [CRMs, setCRMs] = React.useState(1);
    const [contractorId, setContractorId] = React.useState(1);
    const { assets, load: assetsLoading } = useTypedSelector((state) => state.assets);
    const { crms, branches, types_and_services }: any = assets;

    const assetsOptionsCRMS = crms?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.full_name,
    }));
    const assetsOptionsCounterpartyType = types_and_services?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsServiceType = types_and_services[contractorId -1]?.services?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const crmsInitial = get(crms, "[0].id", "");
    const CounterpartyTypeInitial = get(types_and_services, "[0].id", "");
    const ServiceTypeInitial = get(types_and_services, "[0].services[0].id", "");
    const IndustryInitial = get(branches, "[0].id", "");

    const { insertContractorGeneralData } = UseActions();

    const formik = useFormik({
        validationSchema,
        initialValues: {
            CrmValue: crmsInitial,
            CrmValue2: crmsInitial,
            CrmValue3: crmsInitial,
            CounterpartyType: CounterpartyTypeInitial,
            OrganizationType: "ЮЛ",
            ServiceType: ServiceTypeInitial,
            INN: "",
            KPP: "",
            OGPN: "",
            NDA: 1,
            FullCompanyName: "",
            ShortNameCompany: "",
            CompanyGroup: "",
            Industry: IndustryInitial,
            Industry2: IndustryInitial,
            Industry3: IndustryInitial,
            LegalAddress: "",
            ActualAddress: "",
            MatchesAddressActualAddress: true,
            MailingAddress: "",
            MatchesAddressMailingAddress: true,
            SiteCompany: "",
            SiteCompany2: "",
            SiteCompany3: "",
            Phone: "",
            Phone2: "",
            Phone3: "",
            Email: "",
            Email2: "",
            Email3: "",
        },
        onSubmit: ({
                       CrmValue,
                       CrmValue2,
                       CrmValue3,
                       CounterpartyType,
                       OrganizationType,
                       ServiceType,
                       INN,
                       KPP,
                       OGPN,
                       NDA,
                       FullCompanyName,
                       ShortNameCompany,
                       CompanyGroup,
                       Industry,
                       Industry2,
                       Industry3,
                       LegalAddress,
                       ActualAddress,
                       MailingAddress,
                       SiteCompany,
                       SiteCompany2,
                       SiteCompany3,
                       Phone,
                       Phone2,
                       Phone3,
                       Email,
                       Email2,
                       Email3,
                   }) => {
            const crmsDraft = [CrmValue, CrmValue2, CrmValue3];
            const branchesDraft = [Industry, Industry2, Industry3];
            const SiteCompanyDraft = [SiteCompany, SiteCompany2, SiteCompany3];
            const PhoneDraft = [Phone, Phone2, Phone3];
            const EmailDraft = [Email, Email2, Email3];
            const crms = [];
            const branches = [];
            const sites = [];
            const phones = [];
            const emails = [];

            for (let i = 0; i < 3; i++) {
                if (CRMs >= i && crmsDraft[i]) {
                    crms.push(crmsDraft[i]);
                }
                if (branch >= i && branchesDraft[i]) {
                    branches.push(branchesDraft[i]);
                }
                if (site >= i && SiteCompanyDraft[i]) {
                    sites.push({ url: SiteCompanyDraft[i] });
                }
                if (phone >= i && PhoneDraft[i]) {
                    phones.push({ phone: PhoneDraft[i] });
                }
                if (email >= i && EmailDraft[i]) {
                    emails.push({ email: EmailDraft[i] });
                }
            }

            const formatedValues = {
                org_type: OrganizationType,
                contractor_type_id: CounterpartyType,
                service_type_id: ServiceType,
                inn: INN,
                kpp: KPP,
                ogrn: OGPN,
                nda: NDA,
                full_name: FullCompanyName,
                short_name: ShortNameCompany,
                parent_id: CompanyGroup,
                legal_registration_address: LegalAddress,
                actual_address: ActualAddress,
                post_address: MailingAddress,
                crms,
                phones,
                emails,
                sites,
                branches,
            };

            insertContractorGeneralData(formatedValues);
        },
    });
const  initialValues = {
        // CrmValue: crmsInitial,
       org_type: "ЮЛ",
        crms: [''],
        contractor_type_id:"",
        service_type_id:"",
        inn:"",
        kpp:"",
        ogrn:"",
        nda: 1,
        FullCompanyName: "",
        ShortNameCompany: "",
        CompanyGroup: "",
        Industry: IndustryInitial,
        Industry2: IndustryInitial,
        Industry3: IndustryInitial,
        LegalAddress: "",
        ActualAddress: "",
        MatchesAddressActualAddress: true,
        MailingAddress: "",
        MatchesAddressMailingAddress: true,
        SiteCompany: "",
        SiteCompany2: "",
        SiteCompany3: "",
        Phone: "",
        Phone2: "",
        Phone3: "",
        Email: "",
        Email2: "",
        Email3: "",
    }
    return (
        <div style={{width:"100%"}}>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, touched,handleChange,errors,setFieldValue }) => (
               <div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                >
                    Сохранить карточку
                </Button>
                <div className={classes.root}>
                    <div style={{ width: "24%", marginLeft: "2%", minWidth: 387 }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                            }}
                        >
                            <span className={classes.val}>Общие сведения</span>
                        </div>
                        <Paper className={classes.paper}>
                            <div style={{ marginBottom: "2%", display: "flex" }}>
                                <div>
                  <span style={{ fontSize: 16, fontWeight: "normal" }}>
                    Физическое лицо
                  </span>
                                    <Radio
                                        checked={values.org_type === "ФЛ"}
                                        onChange={(e) =>
                                            setFieldValue("org_type", e.target.value)
                                        }
                                        value="ФЛ"
                                        color="default"
                                        name="org_type"
                                        size="medium"
                                        inputProps={{ "aria-label": "ФЛ" }}
                                    />
                                </div>
                                <div>
                  <span style={{ fontSize: 16, fontWeight: "normal" }}>
                    Юридическое лицо
                  </span>
                                    <Radio
                                        checked={values.org_type === "ЮЛ"}
                                        onChange={(e) =>
                                            setFieldValue("org_type", e.target.value)
                                        }
                                        value="ЮЛ"
                                        color="default"
                                        name="org_type"
                                        size="medium"
                                        inputProps={{ "aria-label": "ЮЛ" }}
                                    />
                                </div>
                            </div>
                            <div className={classes.label} style={{alignItems:"flex-start"}}>
                                <span >CRM</span>
                                <Typography >
                                    <FieldArray name="crms">
                                        {({ insert, remove, push }) => (
                                            <div style={{width:"100%"}}>
                                                {values. crms.length > 0 &&
                                                values.crms.map(( crm, index) => {
                                                    const fieldName = `crms[${index}]`;
                                                    const touchedFieldName = getIn(touched, fieldName);
                                                    const errorFieldName = getIn(errors, fieldName);
                                                    return(
                                                        <div key={index} style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                                            <div style={index > 0 ? {width:"80%"}:{width:"100%"}}>
                                                            <InputFilterSelectedType
                                                                className={classes.input}
                                                                name={fieldName}
                                                                handleChange={(value:any) =>
                                                                    setFieldValue(fieldName, value)
                                                                }
                                                                value={crm}
                                                                options={ assetsOptionsCRMS}
                                                                placeholder="Фамилия Имя"
                                                                loading={assetsLoading}
                                                                error={Boolean(touchedFieldName && errorFieldName)}
                                                                helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                                            />
                                                            </div>

                                                            { index == 0 ? "":<div style={{marginLeft: 16 ,marginTop:-9}}
                                                                  onClick={() => remove(index)}>
                                                                <TrashIcon/>
                                                            </div>}
                                                        </div>
                                                    )
                                                })}
                                                <div
                                                    className={classes.addItemCRM}
                                                    onClick={() => push( '' )}
                                                >
                                                    + Добавить еще CRM
                                                </div>
                                            </div>
                                        )}
                                    </FieldArray>
                                </Typography>
                            </div>
                            <div className={classes.label}>
                                <span>Тип контрагента</span>
                                <span style={{ width: "60%" }}>
                                    <InputFilterSelectedType
                                        // className={classes.input}
                                        name="contractor_type_id"
                                        handleChange={(value:any) => {
                                            setFieldValue("contractor_type_id", value)
                                            setContractorId(value)
                                        }
                                        }
                                         value={values.contractor_type_id}
                                         options={assetsOptionsCounterpartyType}
                                        placeholder="Другое"
                                        loading={assetsLoading}
                                        error={touched.contractor_type_id && Boolean(errors.contractor_type_id)}
                                        helperText={touched.contractor_type_id && errors.contractor_type_id}
                                    />
                </span>
                            </div>
                            <div className={classes.label}>
                                <span>Тип услуг</span>
                                <span style={{ width: "60%" }}>
                   <InputFilterSelectedType
                       // className={classes.input}
                       name="service_type_id"
                       handleChange={(value:any) => setFieldValue("service_type_id", value)}
                       value={values.service_type_id}
                       options={assetsOptionsServiceType}
                       placeholder="Другое"
                       loading={assetsLoading}
                       error={touched.service_type_id && Boolean(errors.service_type_id)}
                       helperText={touched.service_type_id && errors.service_type_id}
                   />
                </span>
                            </div>
                            <div className={classes.label}>
                                <span>ИНН</span>
                                <TextField
                                    variant={"outlined"}
                                    name="inn"
                                    placeholder={"1234556789101112"}
                                    onChange={handleChange}
                                    error={touched.inn && Boolean(errors.inn)}
                                    helperText={touched.inn && errors.inn}
                                />
                            </div>
                            {values.org_type === "ЮЛ" && <div className={classes.label}>
                                <span>КПП</span>
                                <TextField
                                    variant={"outlined"}
                                    name="kpp"
                                    placeholder={"1234556789101112"}
                                    onChange={handleChange}
                                    error={touched.kpp && Boolean(errors.kpp)}
                                    helperText={touched.kpp && errors.kpp}
                                />
                            </div>}
                            <div className={classes.label}>

                                <span>{values.org_type === "ЮЛ" ? 'ОГРН' : 'ОГРНИП'}</span>
                                <TextField
                                    variant={"outlined"}
                                    name="ogrn"
                                    placeholder={"1234556789101112"}
                                    onChange={handleChange}
                                    error={touched.ogrn && Boolean(errors.ogrn)}
                                    helperText={touched.ogrn && errors.ogrn}
                                />
                            </div>
                            <div className={classes.label}>
                                <span>NDA</span>
                                <span style={{ width: "63.2%" }}>
                  <Checkbox
                      icon={<CheckSquareChecked color="#5B6770" />}
                      checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                      color="default"
                      inputProps={{ "aria-label": "checkbox with default color" }}
                      value={values.nda === 1 ? true : false}
                      onChange={(e: any) =>
                          setFieldValue("nda", e.target.checked ? 0 : 1)
                      }
                  />
                </span>
                            </div>
                        </Paper>
                    </div>
                    <div style={{ width: "34%", marginLeft: "2%", marginRight: "2%" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "101%",
                            }}
                        >
                            <span className={classes.val}>Сведения о компании</span>
                        </div>
                        <Paper className={classes.paper}>
                            <div className={classes.label}>
                <span style={{ marginTop: "1%" }}>
                  Полное наименование компании
                </span>

                                <TextField
                                    variant={"outlined"}
                                    multiline
                                    className={classes.textAreaCN}
                                    rows={2}
                                    name="FullCompanyName"
                                    placeholder={'ООО "Северо-Западная компания”'}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.FullCompanyName &&
                                        Boolean(formik.errors.FullCompanyName)
                                    }
                                    helperText={
                                        formik.touched.FullCompanyName &&
                                        formik.errors.FullCompanyName
                                    }
                                />
                            </div>
                            <div className={classes.label}>
                                <span>Краткое наименование компании</span>
                                <TextField
                                    variant={"outlined"}
                                    name="ShortNameCompany"
                                    placeholder={"Краткое наименование компании"}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.ShortNameCompany &&
                                        Boolean(formik.errors.ShortNameCompany)
                                    }
                                    helperText={
                                        formik.touched.ShortNameCompany &&
                                        formik.errors.ShortNameCompany
                                    }
                                />
                            </div>
                            <div className={classes.label}>
                                <span>Группа компаний (при наличии)</span>
                                <TextField
                                    variant={"outlined"}
                                    name="CompanyGroup"
                                    placeholder={"Группа компаний"}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.CompanyGroup &&
                                        Boolean(formik.errors.CompanyGroup)
                                    }
                                    helperText={
                                        formik.touched.CompanyGroup && formik.errors.CompanyGroup
                                    }
                                />
                            </div>
                            <div className={classes.label}>
                                <span>Отрасль</span>
                                <div
                                    style={{
                                        width: "60%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <InputFilterSelectedBranches
                                        name="Industry"
                                        handleChange={(e: any) =>
                                            formik.setFieldValue("Industry", e.target.value)
                                        }
                                        error={
                                            formik.touched.Industry && Boolean(formik.errors.Industry)
                                        }
                                        helperText={
                                            formik.touched.Industry && formik.errors.Industry
                                        }
                                    />
                                </div>
                            </div>
                            {branch > 1 ? (
                                <div className={classes.label}>
                                    <span></span>
                                    <div
                                        style={{
                                            width: "60%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <InputFilterSelectedBranches
                                            name="Industry2"
                                            handleChange={(e: any) =>
                                                formik.setFieldValue("Industry2", e.target.value)
                                            }
                                            error={
                                                formik.touched.Industry2 &&
                                                Boolean(formik.errors.Industry2)
                                            }
                                            helperText={
                                                formik.touched.Industry2 && formik.errors.Industry2
                                            }
                                        />
                                        <div
                                            style={{
                                                marginRight: "1%",
                                                marginLeft: "5%",
                                                marginTop: 3,
                                                cursor: "pointer",
                                            }}
                                            onClick={() =>
                                                branch > 1 ? setBranch(branch - 1) : null
                                            }
                                        >
                                            {branch === 2 ? <TrashIcon /> : ""}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            {branch > 2 ? (
                                <div className={classes.label}>
                                    <span></span>
                                    <div
                                        style={{
                                            width: "60%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <InputFilterSelectedBranches
                                            name="Industry3"
                                            handleChange={(e: any) =>
                                                formik.setFieldValue("Industry3", e.target.value)
                                            }
                                            error={
                                                formik.touched.Industry3 &&
                                                Boolean(formik.errors.Industry3)
                                            }
                                            helperText={
                                                formik.touched.Industry3 && formik.errors.Industry3
                                            }
                                        />
                                        <div
                                            style={{
                                                marginRight: "1%",
                                                marginLeft: "5%",
                                                marginTop: 3,
                                                cursor: "pointer",
                                            }}
                                            onClick={() =>
                                                branch > 1 ? setBranch(branch - 1) : null
                                            }
                                        >
                                            <TrashIcon />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            {branch! < 3 ? (
                                <div
                                    className={classes.addItemCRM}
                                    onClick={() => (branch < 3 ? setBranch(branch + 1) : null)}
                                >
                                    + Добавить отрасль
                                </div>
                            ) : (
                                ""
                            )}
                        </Paper>
                    </div>
                    <div style={{ width: "34%" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "101%",
                            }}
                        >
                            <span className={classes.val}>Контакты компании</span>
                        </div>
                        <Paper className={classes.paper}>
                            <div className={classes.label}>
                                <span>Юридический адрес </span>
                                <TextField
                                    variant={"outlined"}
                                    name="LegalAddress"
                                    placeholder={"123456 город улица строени дом офис"}
                                    onChange={(e: any) => {
                                        formik.handleChange(e);
                                        formik.values.MatchesAddressActualAddress &&
                                        formik.setFieldValue("ActualAddress", e.target.value);
                                        formik.values.MatchesAddressMailingAddress &&
                                        formik.setFieldValue("MailingAddress", e.target.value);
                                    }}
                                    error={
                                        formik.touched.LegalAddress &&
                                        Boolean(formik.errors.LegalAddress)
                                    }
                                    helperText={
                                        formik.touched.LegalAddress && formik.errors.LegalAddress
                                    }
                                />
                            </div>
                            <div className={classes.label}>
                                <span>Фактический адрес</span>

                                <TextField
                                    variant={"outlined"}
                                    name="ActualAddress"
                                    placeholder={"123456 город улица строени дом офис"}
                                    disabled={formik.values.MatchesAddressActualAddress}
                                    value={formik.values.ActualAddress}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.ActualAddress &&
                                        Boolean(formik.errors.ActualAddress)
                                    }
                                    helperText={
                                        formik.touched.ActualAddress && formik.errors.ActualAddress
                                    }
                                />
                            </div>
                            <div style={{ justifyContent: "left", marginTop: -12 }}>
                                <Checkbox
                                    className={classes.check}
                                    icon={<CheckSquareChecked color="#5B6770" />}
                                    checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                                    name="MatchesAddressActualAddress"
                                    color="default"
                                    inputProps={{ "aria-label": "checkbox with default color" }}
                                    value={formik.values.MatchesAddressActualAddress}
                                    onChange={(e: any) => {
                                        if (!e.target.checked) {
                                            formik.setFieldValue(
                                                "ActualAddress",
                                                formik.values.LegalAddress
                                            );
                                        }
                                        formik.setFieldValue(
                                            "MatchesAddressActualAddress",
                                            e.target.checked ? false : true
                                        );
                                    }}
                                />
                                <span className={classes.checkText}>
                  Совпадает с юридическим адресом
                </span>
                            </div>
                            <div className={classes.label}>
                                <span>Почтовый адрес</span>
                                <TextField
                                    variant={"outlined"}
                                    name="MailingAddress"
                                    placeholder={"123456 город улица строени дом офис"}
                                    disabled={formik.values.MatchesAddressMailingAddress}
                                    value={formik.values.MailingAddress}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.MailingAddress &&
                                        Boolean(formik.errors.MailingAddress)
                                    }
                                    helperText={
                                        formik.touched.MailingAddress &&
                                        formik.errors.MailingAddress
                                    }
                                />
                            </div>
                            <div style={{ justifyContent: "left", marginTop: -12 }}>
                                <Checkbox
                                    className={classes.check}
                                    icon={<CheckSquareChecked color="#5B6770" />}
                                    checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                                    name="MatchesAddressMailingAddress"
                                    color="default"
                                    inputProps={{ "aria-label": "checkbox with default color" }}
                                    value={formik.values.MatchesAddressMailingAddress}
                                    onChange={(e: any) => {
                                        if (!e.target.checked) {
                                            formik.setFieldValue(
                                                "MailingAddress",
                                                formik.values.LegalAddress
                                            );
                                        }
                                        formik.setFieldValue(
                                            "MatchesAddressMailingAddress",
                                            e.target.checked ? false : true
                                        );
                                    }}
                                />
                                <span className={classes.checkText}>
                  Совпадает с юридическим адресом
                </span>
                            </div>
                            <div className={classes.label}>
                                <span>Сайт компании</span>
                                <div
                                    style={{
                                        width: "60%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <TextField
                                        variant={"outlined"}
                                        name="SiteCompany"
                                        style={{ width: "85%" }}
                                        placeholder={"www.сайткомпании.ru"}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.SiteCompany &&
                                            Boolean(formik.errors.SiteCompany)
                                        }
                                        helperText={
                                            formik.touched.SiteCompany && formik.errors.SiteCompany
                                        }
                                    />
                                </div>
                            </div>
                            {site > 1 ? (
                                <div className={classes.label}>
                                    <>&nbsp;</>
                                    <div
                                        style={{
                                            width: "60%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <TextField
                                            variant={"outlined"}
                                            name="SiteCompany2"
                                            style={{ width: "85%" }}
                                            placeholder={"www.сайткомпании.ru"}
                                            onChange={formik.handleChange}
                                            error={
                                                formik.touched.SiteCompany &&
                                                Boolean(formik.errors.SiteCompany)
                                            }
                                            helperText={
                                                formik.touched.SiteCompany && formik.errors.SiteCompany
                                            }
                                        />
                                        <div
                                            style={{
                                                marginRight: "2%",
                                                marginTop: 3,
                                                cursor: "pointer",
                                            }}
                                            onClick={() => (site > 1 ? setSite(site - 1) : null)}
                                        >
                                            {site === 2 ? <TrashIcon /> : ""}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            {site > 2 ? (
                                <div className={classes.label}>
                                    <>&nbsp;</>
                                    <div
                                        style={{
                                            width: "60%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <TextField
                                            variant={"outlined"}
                                            name="SiteCompany3"
                                            style={{ width: "85%" }}
                                            placeholder={"www.сайткомпании.ru"}
                                            onChange={formik.handleChange}
                                            error={
                                                formik.touched.SiteCompany &&
                                                Boolean(formik.errors.SiteCompany)
                                            }
                                            helperText={
                                                formik.touched.SiteCompany && formik.errors.SiteCompany
                                            }
                                        />
                                        <div
                                            style={{
                                                marginRight: "2%",
                                                marginTop: 3,
                                                cursor: "pointer",
                                            }}
                                            onClick={() => (site > 1 ? setSite(site - 1) : null)}
                                        >
                                            <TrashIcon />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            {site! < 3 ? (
                                <div
                                    className={classes.addItem}
                                    onClick={() => (site < 3 ? setSite(site + 1) : null)}
                                >
                                    + Добавить сайт
                                </div>
                            ) : (
                                ""
                            )}
                            <div className={classes.label}>
                                <span>Телефон</span>
                                <div
                                    style={{
                                        width: "60%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <TextField
                                        variant={"outlined"}
                                        name="Phone"
                                        placeholder={"+79991234567"}
                                        style={{ width: "85%" }}
                                        onChange={formik.handleChange}
                                        error={formik.touched.Phone && Boolean(formik.errors.Phone)}
                                        helperText={formik.touched.Phone && formik.errors.Phone}
                                    />
                                </div>
                            </div>
                            {phone > 1 ? (
                                <div className={classes.label}>
                                    <>&nbsp;</>
                                    <div
                                        style={{
                                            width: "60%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <TextField
                                            variant={"outlined"}
                                            name="Phone2"
                                            style={{ width: "85%" }}
                                            placeholder={"+79991234567"}
                                            onChange={formik.handleChange}
                                            error={
                                                formik.touched.Phone2 && Boolean(formik.errors.Phone2)
                                            }
                                            helperText={formik.touched.Phone2 && formik.errors.Phone2}
                                        />
                                        <div
                                            style={{ marginRight: "2%", cursor: "pointer" }}
                                            onClick={() => (phone > 1 ? setPhone(phone - 1) : null)}
                                        >
                                            {phone === 2 ? <TrashIcon /> : ""}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            {phone > 2 ? (
                                <div className={classes.label}>
                                    <>&nbsp;</>
                                    <div
                                        style={{
                                            width: "60%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <TextField
                                            variant={"outlined"}
                                            name="Phone3"
                                            style={{ width: "85%" }}
                                            placeholder={"+79991234567"}
                                            onChange={formik.handleChange}
                                            error={
                                                formik.touched.Phone3 && Boolean(formik.errors.Phone3)
                                            }
                                            helperText={formik.touched.Phone3 && formik.errors.Phone3}
                                        />
                                        <div
                                            style={{ marginRight: "2%", cursor: "pointer" }}
                                            onClick={() => (phone > 1 ? setPhone(phone - 1) : null)}
                                        >
                                            <TrashIcon />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            {phone! < 3 ? (
                                <div
                                    className={classes.addItem}
                                    onClick={() => (phone < 3 ? setPhone(phone + 1) : null)}
                                >
                                    + Добавить телефон
                                </div>
                            ) : (
                                ""
                            )}
                            <div className={classes.label}>
                                <span>E-mail</span>
                                <div
                                    style={{
                                        width: "60%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                    onClick={() => (email < 3 ? setEmail(email + 1) : null)}
                                >
                                    <TextField
                                        variant={"outlined"}
                                        name="Email"
                                        style={{ width: "85%" }}
                                        placeholder={"email@email.ru"}
                                        onChange={formik.handleChange}
                                        error={formik.touched.Email && Boolean(formik.errors.Email)}
                                        helperText={formik.touched.Email && formik.errors.Email}
                                    />
                                </div>
                            </div>
                            {email > 1 ? (
                                <div className={classes.label}>
                                    <>&nbsp;</>
                                    <div
                                        style={{
                                            width: "60%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <TextField
                                            variant={"outlined"}
                                            name="Email2"
                                            placeholder={"email@email.ru"}
                                            style={{ width: "85%" }}
                                            onChange={formik.handleChange}
                                            error={
                                                formik.touched.Email2 && Boolean(formik.errors.Email2)
                                            }
                                            helperText={formik.touched.Email2 && formik.errors.Email2}
                                        />
                                        <div
                                            style={{ marginRight: "2%", cursor: "pointer" }}
                                            onClick={() => (email > 1 ? setEmail(email - 1) : null)}
                                        >
                                            {email === 2 ? <TrashIcon /> : ""}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            {email > 2 ? (
                                <div className={classes.label}>
                                    <>&nbsp;</>
                                    <div
                                        style={{
                                            width: "60%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <TextField
                                            variant={"outlined"}
                                            name="Email3"
                                            placeholder={"email@email.ru"}
                                            style={{ width: "85%" }}
                                            onChange={formik.handleChange}
                                            error={
                                                formik.touched.Email3 && Boolean(formik.errors.Email3)
                                            }
                                            helperText={formik.touched.Email3 && formik.errors.Email3}
                                        />
                                        <div
                                            style={{ marginRight: "2%", cursor: "pointer" }}
                                            onClick={() => (email > 1 ? setEmail(email - 1) : null)}
                                        >
                                            <TrashIcon />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            {email! < 3 ? (
                                <div
                                    className={classes.addItem}
                                    onClick={() => (email < 3 ? setEmail(email + 1) : null)}
                                >
                                    + Добавить email
                                </div>
                            ) : (
                                ""
                            )}
                        </Paper>
                    </div>
                </div>
               </div>
                    )}
                    </Formik>
        </div>
    );
};
