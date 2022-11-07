import React from "react";
import "../styles/Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <div className="footer">
      <div className="line"></div>
      <div className="social-media">
        <div className="text">
          <h1>Social Media</h1>
          <p>Social media harm your mental health!</p>
        </div>
        <div className="redes-sociais">
          <Box>
            <Box className="TwitterBox">
              <Link target="_blank" href="https://twitter.com/AMaia098">
                <TwitterIcon
                  sx={{ cursor: "pointer", color: "white", paddingTop: 1 }}
                />
              </Link>
            </Box>
            <Box className="InstaBox">
              <Link
                target="_blank"
                href="https://www.instagram.com/andr3.maia/"
              >
                <InstagramIcon
                  sx={{ cursor: "pointer", color: "white", paddingTop: 1 }}
                />
              </Link>
            </Box>
            <Box className="LinkBox">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/andr%C3%A9-maia-3b2b84221/"
              >
                <LinkedInIcon
                  sx={{ cursor: "pointer", color: "white", paddingTop: 1 }}
                />
              </Link>
            </Box>
          </Box>
        </div>
      </div>
      <div className="rights">
        <span>
          @ All Rights Reserved by <em>André Maia.</em>
        </span>
      </div>
    </div>
  );
}

export default Footer;
