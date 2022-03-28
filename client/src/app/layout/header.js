import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

export default function Header({ darkMode, handleThemeChange }) {
  return (
    <AppBar
      sx={{ mb: 4, flexDirection: "row", alignItems: "center" }}
      position="static"
    >
      <Toolbar>
        <Typography variant="h6">ReStore</Typography>
      </Toolbar>
      <Switch checked={darkMode} onChange={handleThemeChange} />
    </AppBar>
  );
}
