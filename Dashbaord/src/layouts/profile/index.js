// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge"; // Add Badge component

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import VerifiedIcon from "@mui/icons-material/Verified"; // Example Icon
import StarIcon from "@mui/icons-material/Star"; // Example Badge Icon
import DiamondIcon from "@mui/icons-material/Diamond"; // Diamond Badge Icon
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // For medals (Gold, Silver, Bronze)
import IronIcon from "@mui/icons-material/Hardware"; // Example Iron Badge Icon

// React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description="Hi, I’m SAGAR TEOTIA, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  fullName: "SAGAR TEOTIA",
                  mobile: "123 1234 123",
                  email: "SAGAR@mail.com",
                  location: "India, New Delhi",
                }}
                social={[
                  {
                    link: "https://www.linkedin.com/in/sagar1teotia/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://www.linkedin.com/in/sagar1teotia/",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.linkedin.com/in/sagar1teotia/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
          </Grid>

          {/* Icons and Badges Section */}
          <Grid container spacing={1} mt={3}>
            <Grid item xs={12}>
              <MDBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={4}
              >
                <MDTypography variant="h6" fontWeight="medium">
                  User Badges:
                </MDTypography>

                {/* Diamond Badge */}
                <Badge
                  badgeContent={<DiamondIcon sx={{ color: "cyan" }} />}
                  color="primary"
                >
                  <VerifiedIcon sx={{ fontSize: 40, color: "cyan" }} />
                </Badge>

                {/* Platinum Badge */}
                <Badge
                  badgeContent={<StarIcon sx={{ color: "lightgray" }} />}
                  color="primary"
                >
                  <VerifiedIcon sx={{ fontSize: 40, color: "lightgray" }} />
                </Badge>

                {/* Gold Badge */}
                <Badge
                  badgeContent={<EmojiEventsIcon sx={{ color: "gold" }} />}
                  color="primary"
                >
                  <VerifiedIcon sx={{ fontSize: 40, color: "gold" }} />
                </Badge>

                {/* Silver Badge */}
                <Badge
                  badgeContent={<EmojiEventsIcon sx={{ color: "silver" }} />}
                  color="primary"
                >
                  <VerifiedIcon sx={{ fontSize: 40, color: "silver" }} />
                </Badge>

                {/* Bronze Badge */}
                <Badge
                  badgeContent={<EmojiEventsIcon sx={{ color: "#cd7f32" }} />} // Bronze color
                  color="primary"
                >
                  <VerifiedIcon sx={{ fontSize: 40, color: "#cd7f32" }} />
                </Badge>

                {/* Iron Badge */}
                <Badge
                  badgeContent={<IronIcon sx={{ color: "gray" }} />}
                  color="primary"
                >
                  <VerifiedIcon sx={{ fontSize: 40, color: "gray" }} />
                </Badge>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
