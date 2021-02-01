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


function SoldOutList() {
    const [events, setEvents] = useState([{}]);
    const [Data, setData] = useState([{}]);
    const [{ contract, accounts, ownerList }, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")
    const [myData, setmyData] = useState([])



    useEffect(() => {
        async function getData() {
            const response = await property_Detail(contract)
            setEvents(response)
            console.log(ownerList)
        }
        getData();

    }, [contract])

    useEffect(() => {
        const getProperties = async () => {
            const response = await property_Detail(contract)
            setEvents(response)
            return response;
        }
        let returnValues = []
        const alldata = async () => {
            //console.log(events)
            if (events) {
                (events).map((item, index) => {
                    return returnValues[index] = item.returnValues
                })
                // console.log(events,returnValues)
                return returnValues
            }
            else {
                console.log("CALL AGAIN")
                return await getProperties()
            }
        }
        (
            async () => {
                //  console.log(returnValues)
                returnValues = await alldata()
                // console.log(returnValues)
                let reverseSort = returnValues ? returnValues.reverse() : []
                setmyData(reverseSort)
            }
        )();
    }, [events])

    // const checkLengthOwners = () => {

    //     myData.map((list, index) => {
    //         for (var a in list) {
    //            // console.log(list[0])
    //             for ( var b in list[index]){
    //                 console.log(b)
    //             }
    //         }
    //     })
    //     // for (var a in ownerList.length){
    //     //     if(events[0]){

    //     //     }
    //     // }
    // }
    // checkLengthOwners()
    // console.log(myData[0])
    const classes = useStyles();
    return (
        <>
            <h3>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
            {!isTransactionSuccessful && <div style={{ color: "red" }}>{transactionError}</div>}
            <div className="Products">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {(myData).map((item) => {
                            for (var a in item) {
                                if (item[3] === "Commercial") {
                                    var id = item[1]
                                    return (
                                        <div className="ProductItem">
                                            <Link keys={id} to={`/property/${id}`} >
                                                <div className="center">
                                                    <img src={`https://ipfs.infura.io/ipfs/${item[8]}`} width="320px" maxWidth="100%" /></div>
                                                <Paper className={classes.paper} elevation={3} >
                                                    <div >
                                                        <h6>Property Address: {item[2]}</h6>
                                                        <h6>City: {item[3]}</h6>
                                                        <h6>Area: {item[5]}</h6>
                                                        <h6>Property Type: {item[6]}</h6>
                                                        <h6>Price: {Web3.utils.fromWei(item[7].toString(), 'Ether')} Eth</h6>
                                                    </div>
                                                </Paper>
                                            </Link>
                                        </div>
                                    )
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
export default SoldOutList;