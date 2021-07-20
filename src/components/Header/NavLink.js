import React, { useRef, useState, useEffect  } from "react";
import { NavLink as NaviLink, withRouter, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const a = useRef();
  const [fontWeightStyle, setFontWeightStyle] = useState(false);

  const handle700FontBold = () => {
    setFontWeightStyle(!fontWeightStyle)
    a.current.style.fontWeight = '700';
  };

  const handle400FontRegular = ()=> {
    setFontWeightStyle(!fontWeightStyle)
    a.current.style.fontWeight = '400';
  };

  // eslint-disable-next-line complexity
  useEffect(() => {
    const paramsFirstLetter = location.pathname.split('/')[1][0];
    const subHeaderDOMFirstLetter = a.current.innerHTML.toLowerCase()[0];

    switch (true) {
    case (paramsFirstLetter === 'j' && subHeaderDOMFirstLetter === 'j'):
      a.current.style.fontWeight = '700';
      break;
    case (paramsFirstLetter === 'a' && subHeaderDOMFirstLetter === 'o'):
      a.current.style.fontWeight = '700';
      break;
    case (paramsFirstLetter === 'o' && subHeaderDOMFirstLetter === 'c'):
      a.current.style.fontWeight = '700';
      break;
    case (paramsFirstLetter === 's' && subHeaderDOMFirstLetter === 's'):
      a.current.style.fontWeight = '700';
      break;
    default:
      a.current.style.fontWeight = '400';
      break;
    }
  }, [location.pathname]);


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
        onPointerEnter={handle700FontBold}
        onPointerLeave={handle400FontRegular}
        classes={{ root: classes.link }}
        ref={a}
      >
        {header}
      </Link>
      <Menu
        {...bindMenu(popupState)}
        onPointerEnter={handle700FontBold}
        onPointerLeave={handle400FontRegular}
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
        classes={{ paper: classes.paper, list: classes.menu }}
        PopoverClasses={{ paper: classes.popover }}
        elevation={0}
      >
        <div>{children}</div>
      </Menu>
    </>
  );
};

export default withRouter(withStyles(styles)(NavLink));
