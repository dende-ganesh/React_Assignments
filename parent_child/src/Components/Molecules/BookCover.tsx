import Title from "../Atoms/Title";
import Image from "../Atoms/CoverImages/2.png";
import Author from "../Atoms/Author";
import Time from "../Atoms/CoverImages/Time.png";
import Resting from "../Atoms/CoverImages/Resting.png";
import { Typography } from "@mui/material";
import themes from "../../themes";

export default function BookCover() {
  const classes = themes();
  return (
    <div className={classes.card}>
      <img src={Image} alt="book Cover"></img>
      <div className={classes.content}>
        <Title name="Beyond Entrepreneurship"></Title>
        <Author author="Jim Collins & Bill Lazier"></Author>
        <img src={Time} alt="Timer" className={classes.timer}></img>
        <Typography
          variant="caption"
          sx={{
            position: "relative",
            left: "3.52%",
            fontWeight: 400,
            color: "#6D787E",
          }}
        >
          13-minutes read
        </Typography>
        <img src={Resting} alt="menu" className={classes.rest}></img>
      </div>
    </div>
  );
}
