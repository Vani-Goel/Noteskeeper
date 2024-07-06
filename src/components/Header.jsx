import React from "react";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

function Header() {
  return (
    <header>
      <h1>
        <StickyNote2Icon sx={{ fontSize: 27 }} />
        Notes Keeper
      </h1>
    </header>
  );
}

export default Header;
