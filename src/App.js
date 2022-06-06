import React, {useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles"
import { useDispatch } from "react-redux";

import memories from "./images/memories.png"

import { getPosts } from "./actions/posts"

const App = () => {

const classes = useStyles();
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getPosts());
}, [dispatch])

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.image} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height ="210"/>

      </AppBar>
      <Grow in >
          <Container>
              <Grid container justifyContent ="space-between" align-items="stretch" spacing={3}>

                  <Grid item xs={12} sm={7}>
                    <Posts/>
                  </Grid>
                  
                  <Grid item xs={12} sm={4}>
                      <Form/>
                  </Grid>
              </Grid>
          </Container>
      </Grow>
    </Container>
  );
};

export default App;
