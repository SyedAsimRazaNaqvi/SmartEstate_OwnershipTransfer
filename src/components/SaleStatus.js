import React,{useEffect,useState} from 'react'
import { useStore } from '../context/GlobalState';
import { BuyProperty } from './BuyProperty'

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    
    textnode: {
        flexGrow: 3,
        maxWidth: 750,
         textAlign:'center',
        margin: 'auto',
        backgroundColor: '#01bf71'

    },
    
}));

export const SaleStatus = ({Id,PropertyId_TokenId,val,responseStatus,OwnerAddress,BuyerAddress}) => {
    const classes = useStyles();
    const [{ contract }] = useStore();
    const [Data, setData] = useState()
    useEffect(() => {
        const getData =()=>{
            NewOwnerOfProperty()
        }
       getData()
    }, [])
    
    const NewOwnerOfProperty = async() =>{
        await contract.methods.ownerOf(PropertyId_TokenId).call().then(function (result, error) {
            if (result) {
               // console.log(JSON.stringify(result),result)
                setData(result)
            } else if (error) {
                console.log(error)
                // setTransactionInProcess(false);
                // setTransactionSuccessful(false)
                // setTransactionError(error.message)
            }
        })
    }
//console.log(Data)

  
    return (
      
      <div>
            
      {
          BuyerAddress === Data   ? 
          <div>
          <Card className={classes.textnode}>
             
                  <List>
                  <Typography><b>Property Ownership</b> has been transfer successfully with <b> {val} Ethers </b> from owner address </Typography><Box style={{maxWidth:"50"}}> <b>{OwnerAddress}</b> </Box>
  
                  </List>
                  <List>
                  <Typography>to </Typography><Box style={{maxWidth:"50"}}><b>{Data}</b></Box>
  
                  </List>
              
        </Card>
        <br/>
        </div>
         : <BuyProperty responseStatus={responseStatus} PropertyId_TokenId={PropertyId_TokenId} OwnerAddress={OwnerAddress} BuyerAddress={BuyerAddress} val={val} />
      }
 </div>

        
    )
}
