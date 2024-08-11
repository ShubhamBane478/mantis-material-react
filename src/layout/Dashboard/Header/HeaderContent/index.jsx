import React from 'react';
import PropTypes from 'prop-types';  // Add this import
// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

// project import
import { GithubOutlined } from '@ant-design/icons';
import ToggleSwitch from 'components/customElements/ToggleSwitch';

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent({ themeMode, toggleTheme }) {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
      {!downLG && <Search />}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}

      <ToggleSwitch themeMode={themeMode} toggleTheme={toggleTheme} />
      <IconButton
        component={Link}
        href="https://github.com/codedthemes/mantis-free-react-admin-template"
        target="_blank"
        disableRipple
        color="secondary"
        title="Download Free Version"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <GithubOutlined />
      </IconButton>

      <Notification />
      
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
}

HeaderContent.propTypes = {
  themeMode: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
