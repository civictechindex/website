import React, { useRef, useState  } from "react";
import { NavLink as NaviLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { usePopupState, bindMenu, bindHover } from 'material-ui-popup-state/hooks';
import Menu from 'material-ui-popup-state/HoverMenu';

const styles = () => ({
  link: {
    "&:hover": {
      fontWeight: 700,
    },
  },
  linkOnMouseEnter: {
    fontWeight: 700,
  },
  menu: {
    padding: '0',
  },
  popover: {
    padding: '0',
  },
  paper: {
    paddingTop: '1rem',
  },
});

const NavLink = ({ children, classes, header, matchPathParent, route }) => {
  const a = useRef();
  const [fontWeightStyle, setFontWeightStyle] = useState(false);

  const handlePointerEnter = () => {
    setFontWeightStyle(!fontWeightStyle)
    a.current.style.fontWeight = '700';
  };

  const handlePointerLeave = ()=> {
    setFontWeightStyle(!fontWeightStyle)
    a.current.style.fontWeight='400';
  };

  const popupState = usePopupState({ variant: 'popper', popupId: 'navlink' });
  return (
    <>
      <Link
        {...bindHover(popupState)}
        underline='none'
        component={NaviLink}
        to={route}
        exact
        isActive={() => {
          return route === matchPathParent;
        }}
        classes={{ root: classes.link }}
        ref={a}
      >
        {header}
      </Link>
      <Menu
        {...bindMenu(popupState)}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={popupState.close}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        classes={{ paper: classes.paper, list: classes.menu, link: classes.linkOnMouseEnter }}
        PopoverClasses={{ paper: classes.popover }}
        elevation={0}
      >
        <div>{children}</div>
      </Menu>
    </>
  );
};

export default withRouter(withStyles(styles)(NavLink));
