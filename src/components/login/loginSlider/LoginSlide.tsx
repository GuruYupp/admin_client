import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { useTheme } from "@mui/material";

const LoginSlide = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    matches && (
      <Box
        sx={{
          flex: "1",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            height: "100%",
            width: "50%",
          }}
        >
          <Image
            src="https://d12ap2rg9u0mb.cloudfront.net/ottadmin/images/banner1.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>
      </Box>
    )
  );
};

export default LoginSlide;
