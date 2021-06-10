import React from "react";
import "./Home.css";
import Header from "../../common/header/Header";
import GridListBanner from "../../common/GridListBanner";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import moviesData from "../../common/moviesData";
import genre from "../../common/genre";
import artists from "../../common/artists";


class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="a">
                    <span>Upcoming Movies</span>
                </div>
                <GridListBanner />
                <div className="flex-container">
                    <div className="left">
                        <Movielistdisplay />
                    </div>
                    <div className="right">

                    </div>
                </div>


            </div>
        );
    }
}








// -------------------------------movies list-----------------------------------------------------------
//------------------------------------------------------------------------------------------------------
// -------------------------------movies list-----------------------------------------------------------


const styleForMovies = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
    },

}));


export function Movielistdisplay() {
    const classess = styleForMovies();

    return (
        <div className={classess.root}>
            <GridList cellHeight={350} className={classess.gridList} cols={4}>
                <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>

                </GridListTile>
                {/* .filter((val) => {
                    if (searchTerm === "") {
                        return val;
                    } else if (
                        val.title.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                        return val
                    }
                }) */}
                {moviesData.map((tile) => (
                    <GridListTile key={tile.poster_url}>
                        <img src={tile.poster_url} alt={tile.title} style={{ cursor: 'pointer' }} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>{tile.release_date}</span>}

                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}






// ----------------------filter list apply -----------------------------------------------------------------
// ----------------------filter list apply -----------------------------------------------------------------









export default Home;