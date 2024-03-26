import { Box, Typography } from "@mui/material";

import NavigationBar from "@/components/NavigationBar";

const Home = () => {
  const title = "Workout Routine";
  const subtitle = "Create Your Workout History!";

  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>{subtitle}</Typography>
    </Box>
  );
};

export default Home;