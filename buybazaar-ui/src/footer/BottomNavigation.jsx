import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import SellIcon from "@mui/icons-material/Sell";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Advertise"
          icon={<FeaturedVideoIcon />}
        />
        <BottomNavigationAction label="Become a seller" icon={<SellIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction
          label="Gift Cards"
          icon={<CardGiftcardIcon />}
        />
        <BottomNavigationAction label="Help Center" icon={<HelpCenterIcon />} />
        <BottomNavigationAction
          label="2023-Present Buybazaar.com"
                  icon={<AccountBalanceIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
