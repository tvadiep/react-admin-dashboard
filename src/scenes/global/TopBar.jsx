import { Box, useTheme, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material";

const TopBar = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  console.log("color value is: ", color);
  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      <Box
        display={"flex"}
        backgroundColor={color.primary[400]}
        borderRadius={3}
      >
        <InputBase placeholder={"Search..."} sx={{ ml: 2, flex: 1 }} />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
      <Box display={"flex"}>
        <IconButton onClick={() => colorMode.toggleMode()}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
