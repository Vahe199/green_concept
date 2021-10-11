import React from "react";
import { Paper, Typography} from "@material-ui/core";
import {useStylesEmployee} from "./EmployeesStyles";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";

type EmployeeAboutProps = {
    setEmployeeAboutData:(val:boolean)=>void
}
const EmployeeAboutItem:React.FC<EmployeeAboutProps> = ({setEmployeeAboutData}) => {
    const classes = useStylesEmployee();
    return(
        <div className={classes.root}style={{marginBottom:50}}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    О себе
                </Typography>
                <div onClick={() => setEmployeeAboutData(false)}>
                    <PencilSimpleIcon color="#3B4750" />
                </div>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <Typography className={classes.typographyText}>
                    Небольшой текстовый блок сотрудника о самом себе
                    Консультационное сопровождение по подготовке пакета документов для привлечения Заказчиком кредитных средств в ПАО «Сбербанк» в целях реализации инвестиционного проекта по строительству грибного комплекса (шампиньонной фермы) с объектами инженерной инфраструктуры на 24 камеры производственной площадью 22 800 кв.м. на земельном участке площадью 4,15 га по адресу: Московская область, Ногинский район, ЗАО «Электростальское», в том числе подготовка рекомендаций по бизнес-плану и финансовой модели реализации Проект Консультационное сопровождение по подготовке пакета документов для привлечения Заказчиком кредитных средств в ПАО «Сбербанк» в целях реализации инвестиционного проекта по строительству грибного комплекса (шампиньонной фермы) с объектами ...
                </Typography>
            </Paper>
        </div>
    )
}

export default EmployeeAboutItem;
