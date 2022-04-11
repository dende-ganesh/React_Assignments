import Typography from "@mui/material/Typography";
type propType = {
  name: string;
};

export default function Title(props: propType) {
  return (
    <div>
      <Typography
        sx={{
          margin: "16px 0px",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "23px",
        }}
        variant="subtitle1"
      >
        {props.name}
      </Typography>
    </div>
  );
}
