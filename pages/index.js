import { CardMedia } from "@mui/material";
import React, { Component } from "react";
import Layout from "../components/layout";
import { Button, Card }  from '@mui/material';

class LandingIndex extends Component {
  render() {
    return (
      <Layout>
        <Card style={{ marginTop: "1rem" }}>
          <div>
            <Button variant="contained">Hello World</Button>
          </div>
        </Card>
      </Layout>
    )
  }
}

export default LandingIndex;