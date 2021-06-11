import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link, useParams } from "react-router-dom";
import Header from "../../common/header/Header";
import YouTube from 'react-youtube';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ReactPlayer from 'react-player';

// import StarBorderIcon from '@material-ui/icons/StarBorder';

import './Details.css';
import moviesData from '../../common/moviesData';



const useStyles = makeStyles((theme) => ({

    title: {
        fontSize: 24,
        marginLeft: 24,
        marginTop: 8,
        marginBottom: 0,

    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 10000,
    },




}));





function Details(props) {




    const [singleMovie, setSingleMovie] = useState()

    const { id } = useParams()

    useEffect(() => {
        setSingleMovie(moviesData.find((m) => m.id === id))
    }, [])





    const classes = useStyles();
    return (
        <div><Header />
            <Button variant="contained" color="primary" style={{ float: "right", position: "absolute", right: 100, top: 7 }} > BOOK NOW  </Button>

            <Typography >
                <Link to="/" className={classes.title} style={{ textDecoration: "none" }}>
                    &lt; Back to Home
                </Link>
            </Typography>
            <div className="detailpage">

                <div className="detailleft">
                    <img alt="hello" src={singleMovie?.poster_url} />

                </div>

                <div className="detailmiddle">
                    <Typography variant="h2"> {singleMovie?.title}</Typography>
                    <Typography> <span style={{ fontWeight: "bold" }}>Genres: </span>{singleMovie?.genres.join(', ')}</Typography>
                    <Typography> <span style={{ fontWeight: "bold" }}>Duration: </span>  {singleMovie?.duration}</Typography>
                    <Typography > <span style={{ fontWeight: "bold" }}>Release Date: </span> {new Date(singleMovie?.release_date).toDateString()}</Typography>
                    <Typography > <span style={{ fontWeight: "bold" }}>Rating: </span>{singleMovie?.critics_rating}</Typography>
                    <Typography style={{ marginTop: 16 }}><span style={{ fontWeight: "bold" }}>Plot: </span> <a href={singleMovie?.wiki_url}>(wiki_url)</a>{singleMovie?.storyline}</Typography>
                    <Typography style={{ marginTop: 16 }}><span style={{ fontWeight: "bold" }}>Trailer: </span>
                        {/* <YouTube
                            videoId={singleMovie?.trailer_url.split("?v=")[1]}
                            opts={classes.youtube}
                        /> */}
                        <ReactPlayer url={singleMovie?.trailer_url} controls={true} />

                    </Typography>

                </div>

                <div className="detailright">

                    <Typography style={{ fontWeight: 600 }}> Rate this movie:</Typography>
                    <StarRating />

                    <Typography style={{ fontWeight: 600, marginTop: 16, marginBottom: 16 }}> Artists:</Typography>

                    <div className={classes.root} >
                        <GridList cellHeight={200} className={classes.gridList} cols={2}>
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>

                            </GridListTile>

                            {singleMovie?.artists.map((tile) => (
                                <GridListTile>
                                    <img src={tile.profile_url} />
                                    <GridListTileBar
                                        title={tile.first_name}
                                        subtitle={<span>{tile.last_name}</span>}

                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    {/* <StarBorderIcon /> */}


                </div>

            </div>
        </div>
    )

}


class StarRating extends React.Component {
    constructor() {
        super();
        this.state = {
            movie: {},
            starIcons: [{
                id: 1,
                stateId: "star1",
                color: "black"
            },
            {
                id: 2,
                stateId: "star2",
                color: "black"
            },
            {
                id: 3,
                stateId: "star3",
                color: "black"
            },
            {
                id: 4,
                stateId: "star4",
                color: "black"
            },
            {
                id: 5,
                stateId: "star5",
                color: "black"
            }]
        }
    }


    starClickHandler = (id) => {
        let starIconList = [];
        for (let star of this.state.starIcons) {
            let starNode = star;
            if (star.id <= id) {
                starNode.color = "yellow"
            }
            else {
                starNode.color = "black";
            }
            starIconList.push(starNode);
        }
        this.setState({ starIcons: starIconList });
    }


    render() {
        return (
            <div>
                {this.state.starIcons.map(star => (
                    <StarBorderIcon
                        className={star.color}
                        key={"star" + star.id}
                        onClick={() => this.starClickHandler(star.id)}
                    />
                ))}
            </div>

        );
    }
}











export default Details;