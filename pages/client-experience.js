import React from "react";
import { Box } from "@mui/material";
import ClientExperience from "@/components/ClientExperience";
import Head from "next/head";

const TheClientExperience = () => {
  return (
    <div>
       <Head>
        <title>Client Experience - Avante Homes</title>
        <meta name="description" content="Client Experience - Avante Homes" />
        <meta property="og:title" content="Client Experience - Avante Homes" />
        <meta property="og:description" content="Client Experience - Avante Homes" />
        <meta property="og:image" content="https://example.com/image.jpg" />
      </Head>
      <Box
        sx={{
          height: { xs: "1026px", md: "823px" },
          width: "100%",
          background: "linear-gradient(0deg, #FFFFFF 0%, #EFF2FF 100%);",
          position: "absolute",
          top: "0px",
          zIndex: 0,
        }}
      ></Box>
      <Box sx={{ zIndex: 1000, position: "relative" }}>
        <ClientExperience />
      </Box>
    </div>
  );
};

export default TheClientExperience;
