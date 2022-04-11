import { makeStyles } from "@mui/styles";

const themes = makeStyles({
  card: {
    width: 286,
    height: 466,
    margin: "2px",
    borderRadius: 8,
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderBottom: "15px solid #E1ECFC",
    fontSize: 16,
  },
  content: {
    margin: "10px",
  },
  timer: {
    position: "relative",
    top: "5px",
  },
  rest: {
    position: "relative",
    top: "15px",
    left: "45%",
  },
});
export default themes;
