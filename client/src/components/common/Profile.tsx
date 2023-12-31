import { Email, Place, Phone } from "@mui/icons-material";
import { Box, Typography, Stack } from "@mui/material";

import { ProfileProps, PropertyProps } from "../../interfaces/common";
import PropertyCard from "./PropertyCard";

// Function to check if an image has valid dimensions
function checkImage(url: any) {
  const img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const Profile = ({ type, name, avatar, email, properties }: ProfileProps) => {
  return (
    <Box>
      {/* Header with profile type */}
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        {type} Profile
      </Typography>

      {/* Profile Information */}
      <Box mt="20px" borderRadius="15px" padding="20px" bgcolor="#f3f3f3">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2.5,
          }}
        >
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            width={340}
            height={320}
            alt="abstract"
            className="my_profile-bg"
          />

          {/* Profile Details */}
          <Box
            flex={1}
            sx={{
              marginTop: { md: "58px" },
              marginLeft: { xs: "20px", md: "0px" },
            }}
          >
            <Box
              flex={1}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              gap="20px"
            >
              {/* User Avatar */}
              <img
                src={
                  checkImage(avatar)
                    ? avatar
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                }
                width={78}
                height={78}
                alt="user_profile"
                className="my_profile_user-img"
              />

              {/* User Details */}
              <Box
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                gap="30px"
              >
                {/* User Name and Role */}
                <Stack direction="column">
                  <Typography fontSize={22} fontWeight={600} color="#11142D">
                    {name}
                  </Typography>
                  <Typography fontSize={16} color="#808191">
                    Realestate Agent
                  </Typography>
                </Stack>

                {/* Address, Phone, and Email */}
                <Stack direction="column" gap="30px">
                  {/* Address */}
                  <Stack gap="15px">
                    <Typography fontSize={14} fontWeight={500} color="#808191">
                      Address
                    </Typography>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap="10px"
                    >
                      <Place sx={{ color: "#11142D" }} />
                      <Typography fontSize={14} color="#11142D">
                        Canada
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Phone Number and Email */}
                  <Stack direction="row" flexWrap="wrap" gap="20px" pb={4}>
                    {/* Phone Number */}
                    <Stack flex={1} gap="15px">
                      <Typography
                        fontSize={14}
                        fontWeight={500}
                        color="#808191"
                      >
                        Phone Number
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap="10px"
                      >
                        <Phone sx={{ color: "#11142D" }} />
                        <Typography fontSize={14} color="#11142D" noWrap>
                          +0123 456 7890
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Email */}
                    <Stack flex={1} gap="15px">
                      <Typography
                        fontSize={14}
                        fontWeight={500}
                        color="#808191"
                      >
                        Email
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap="10px"
                      >
                        <Email sx={{ color: "#11142D" }} />
                        <Typography fontSize={14} color="#11142D">
                          {email}
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Display properties if available */}
      {properties.length > 0 && (
        <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#f3f3f3">
          <Typography fontSize={18} fontWeight={600} color="#11142D">
            {type} Properties
          </Typography>

          <Box
            mt={2.5}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2.5,
            }}
          >
            {/* Render Property Cards */}
            {properties?.map((property: PropertyProps) => (
              <PropertyCard
                key={property._id}
                id={property._id}
                title={property.title}
                location={property.location}
                price={property.price}
                photo={property.photo}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Profile;
