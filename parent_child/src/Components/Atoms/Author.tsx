import { Typography } from "@mui/material";

type propTypes = {
  author: string;
};
export default function Author(props: propTypes) {
  return (
    <Typography
      sx={{
        margin: "16px 0px",
        color: "#6D787E",
        fontWeight: 500,
      }}
      variant="body1"
    >
      {props.author}
    </Typography>
  );
}
