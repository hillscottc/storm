import LightBulbIcon from "./LightBulbIcon";
import { Link, Typography } from "@mui/material";

export default function ProTip() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <LightBulbIcon sx={{ mr: 1, verticalAlign: "middle" }} />
      {"Pro tip: See more "}
      <Link href="https://mui.com/material-ui/getting-started/templates/">
        templates
      </Link>
      {" in the Material UI documentation."}
    </Typography>
  );
}
