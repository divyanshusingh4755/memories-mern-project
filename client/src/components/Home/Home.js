import React from "react"
import { Container, AppBar, Typography, Grow, Grid, Paper } from '@material-ui/core';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import { useDispatch } from "react-redux"
import { useEffect, useState } from 'react';
import { getPosts } from '../../actions/posts'
import useStyles from "./styles"
import Paginate from "../Pagination";

function Home() {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}>
                            <Paginate />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home