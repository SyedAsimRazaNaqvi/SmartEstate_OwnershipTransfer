import React, { useState, useEffect } from 'react'
import { useStore } from '../context/GlobalState'
import { property_Detail } from "../store/asyncActions";
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Web3 from 'web3'
import Loader from '../images/loader.gif'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function NonCommercial() {
    const [events, setEvents] = useState([{}]);
    const [{ contract, accounts }, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")


    useEffect(() => {
        async function getData() {
            const response = await property_Detail(contract)
            setEvents(response)
        }
        getData();
    }, [])

    const getProperties = async () => {
        const response = await property_Detail(contract)
        setEvents(response)
    }

    let returnValues = []
    const alldata = () => {
        if (events) {
            (events).map((item, index) => {
                return returnValues[index] = item.returnValues
            })
            return returnValues
        }
        else {
            return getProperties()
        }
    }

    returnValues = alldata()

    let reverseSort = returnValues.reverse()
    console.log(reverseSort)
    const classes = useStyles();
    return (
        <>
            <h3>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
            {!isTransactionSuccessful && <div style={{ color: "red" }}>{transactionError}</div>}
            <div className="Products">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {(reverseSort || returnValues).map((item) => {
                            for (var a in item) {
                                if(item[6] === "non-Commercial"){
                                    var id = item[1]
                                    return <Grid item s={12} sm={4} key={id}>
                                        <Paper
                                            className={classes.paper}
                                            elevation={3}>
                                            <Link keys={id} to={`/property/${id}`} className="eachItem" >
                                                <img src={`https://ipfs.infura.io/ipfs/${item[8]}`} width="250px" />
                                                {/* <h5 >Property ID: {id}</h5> */}
                                                <h5 >Property Address: {item[2]}</h5>
                                                <h5 >City: {item[3]}</h5>
                                                {/* <h5>Room: {item[4]}</h5>
                                                <h5 >Area: {item[5]}</h5> */}
                                                <h5 >Property Type: {item[6]}</h5>
                                                <h5 >Price: {Web3.utils.fromWei(item[7].toString(), 'Ether')} Eth</h5>
                                            </Link>
                                        </Paper>
                                    </Grid>
                                }
                               
                            }
                        })
                        }
                    </Grid>
                </div>
            </div>
        </>
    )
}
export default NonCommercial;