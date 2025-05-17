// Import necessary components from MUI and custom components
import React from 'react';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Define the Transaction component
const Transaction = ({ color, icon, name, description, value, url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <MDBox
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{ cursor: url ? 'pointer' : 'default' }}
      onClick={handleClick}
    >
      <MDBox display="flex" alignItems="center">
        <Icon color={color}>{icon}</Icon>
        <MDBox ml={2}>
          <MDTypography variant="body2" fontWeight="medium">
            {name}
          </MDTypography>
          <MDTypography variant="caption" color="text">
            {description}
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDTypography variant="body2" color={color}>
        {value}
      </MDTypography>
    </MDBox>
  );
};

// Define the Transactions component
function Transactions() {
  return (
    <Card sx={{ height: '100%' }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Your Trainings
        </MDTypography>
        <MDBox display="flex" alignItems="flex-start">
          <MDBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </MDBox>
          <MDTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2024
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            Newest
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: 'none' }}
        >
          <Transaction
            color="error"
            icon="expand_more"
            name="Yoga"
            description="27 March 2024, at 12:30 PM"
            value=""
            url="https://webinar-ecru.vercel.app/"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Medicinal Plants"
            description="27 March 2024, at 04:30 AM"
            value=""
            url="https://webinar-ecru.vercel.app/"
          />
        </MDBox>
        <MDBox mt={1} mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            Yesterday
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: 'none' }}
        >
          <Transaction
            color="success"
            icon="expand_less"
            name="Yoga"
            description="26 March 2024, at 13:45 PM"
            value=""
            url="https://webinar-ecru.vercel.app/"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Yoga"
            description="26 March 2024, at 13:45 PM"
            value=""
            url="https://webinar-ecru.vercel.app/"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Yoga"
            description="26 March 2024, at 13:45 PM"
            value=""
            url="https://webinar-ecru.vercel.app/"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Yoga"
            description="26 March 2024, at 13:45 PM"
            value=""
            url="https://webinar-ecru.vercel.app/"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Transactions;
