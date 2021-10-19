import { Link } from "@material-ui/core";
import { CaretDoubleLeft } from "../../IMG/SVG/CaretDoubleLeft";
import { useHistory, withRouter } from "react-router-dom";

const BackToAddress = (props: any) => {
  const history = useHistory();

  return (
    <div style={{ display: "flex", marginLeft: "2%", marginTop: "1%" }}>
      <div style={{ marginRight: ".5%" }}>
        <CaretDoubleLeft color="#3B4750" alt="double left icon" />
      </div>
      <Link color="inherit" onClick={() => history.push(props.address)}>
        <div style={{ fontSize: 14, cursor: "pointer", fontWeight: 400 }}>
          {"Вернуться назад к " + props.title}
        </div>
      </Link>
    </div>
  );
};

export default BackToAddress;
