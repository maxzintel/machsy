import React from "react";
import { AppBar, Toolbar, Typography, Container, Link } from "@mui/material";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        machsy
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg">
                {children}
            </Container>
            <footer>
                <Typography variant="body2" color="textSecondary" align="center">
                    Copyright © machsy
                    {new Date().getFullYear()}
                    {"."}
                    <Link color="inherit" href="https://www.machsy.com/">
                        machsy.com
                    </Link>
                </Typography>
            </footer>
        </React.Fragment>
    );
};

export default Layout;
