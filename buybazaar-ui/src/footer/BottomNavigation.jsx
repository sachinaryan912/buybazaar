import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SellIcon from "@mui/icons-material/Sell";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalConvenienceStore from "@mui/icons-material/LocalConvenienceStore";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ maxWidth: "100%", backgroundColor: "black" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Advertise"
          icon={<LocalConvenienceStore />}
        />
        <BottomNavigationAction label="Become a seller" icon={<SellIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction
          label="Gift Cards"
          icon={<CardGiftcardIcon />}
        />
        <BottomNavigationAction label="Help Center" icon={<HelpCenterIcon />} />
        <BottomNavigationAction
          label=" © 2023 Buybazaar. All rights reserved"
          icon={<AccountBalanceIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
