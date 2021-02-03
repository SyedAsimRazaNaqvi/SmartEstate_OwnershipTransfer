import React, { useState } from 'react'
import Web3 from 'web3'
import { useStore } from '../context/GlobalState'
import { registerPropertyAsync } from '../store/asyncActions'
import Loader from '../images/loader.gif'
import { EthAccountInfo } from './EthAccountInfo'
import { EnablePropertySale } from './EnablePropertySale'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from '@material-ui/core/styles';
import { green, lightGreen } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import "./App.css" 


const useStyle = makeStyles((theme) => ({
  root:  { 
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));



const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
}
  

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));
export const RegisterProperty = () => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };


    
    const ipfsClient = require('ipfs-http-client')
    const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

    const [_propertyAddress, setpropertyAddress] = useState("");
    const [_city, setcity] = useState("")
    const [_room, setroom] = useState(0)
    const [_area, setarea] = useState("")
    const [_priceInEther, setpriceInEther] = useState(0)
    const [_propertyType, setpropertyType] = useState("")
    const [_saleStatus, setsaleStatus] = useState(false)
    const [_tokenUri, settokenUri] = useState("")
    const [_buffer, _setbuffer] = useState()

    const [{ contract, accounts }, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")
    let _image;
    const onSubmit = async (e) => {

        e.preventDefault();
        ipfs.add(_buffer, async (error, result) => {
            if (error) {
                console.error(error)
                return
            }
            setTransactionSuccessful(true)
            setTransactionError("")

            try {

                setTransactionInProcess(true)
                const newProperty = {
                    _propertyAddress,
                    _city,
                    _room,
                    _area,
                    _priceInEther: Web3.utils.toWei(_priceInEther.toString(), 'Ether'),
                    _propertyType,
                    _saleStatus,
                    _image: result[0].hash,
                    _tokenUri
                }

                await registerPropertyAsync(contract, accounts, newProperty, dispatch)
                console.log(newProperty)
                setTransactionInProcess(false)
                setTransactionSuccessful(true)
            } catch (error) {
                console.log(error)
                setTransactionInProcess(false);
                setTransactionSuccessful(false)
                setTransactionError(error.message)
            }
        })


    }

    const buttonclasses = useStyle();

    return (

        <>
            <EthAccountInfo />
            <h3 className="h3">Add new Property{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
            {!isTransactionSuccessful && <div style={{ color: "red" }}>{transactionError}</div>}
           
           <div className="card">
            <form className={classes.root} noValidate autoComplete="off">
     
      
      <TextField className="box1" id="outlined-basic" label="Address" value={_propertyAddress} onChange={(e) => setpropertyAddress(e.target.value)} variant="outlined" required/>
      
      <TextField id="outlined-basic"  label="City"value={_city} onChange={(e) => setcity(e.target.value)} variant="outlined" required/>
            
            <div className="registerform"></div>
      
      <TextField id="outlined-basic" label="Area" onChange={(e) => setarea(e.target.value)} variant="outlined" required/>

      <FormControl variant="outlined" >

        <InputLabel  htmlFor="outlined-room-native-simple">Rooms</InputLabel>

        <Select
          native
          value={_room}onChange={(e) => setroom(e.target.value)}
          label="Room"
          inputProps={{
            name: 'room',
            id: 'outlined-room-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="+1">+1</option>
          <option value="+2">+2</option>
          <option value="+3">+3</option>
          <option value="+4">+4</option>
          <option value="+5">+5</option>
          <option value="+6">+6</option>
        </Select> 
      </FormControl>
      

      <label className="registerform1">SaleStatus</label>
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG}onChange={(e) => setsaleStatus(e.target.value)} name="checkedG" />}
        label="True" />
        <FormControlLabel
      control={<Checkbox checked={state.checkedA}  onChange={(e) => setsaleStatus(e.target.value)} name="checkedA" />}
      label="False"
      />



<div className="registerform"></div>

<FormControl variant="outlined" >

<InputLabel  htmlFor="outlined-room-native-simple">Property Listing</InputLabel>

<Select
  native
  value={_propertyType}
  onChange={(e) => setpropertyType(e.target.value)} 
  label="Property List"
  inputProps={{
    name: '',
    id: 'outlined-room-native-simple',
  }}
>
  <option aria-label="None" value="" />
  <option value="Commercial">Commercial</option>
  <option value="Non-commercial">Non-Commercial</option>
  
</Select> 
</FormControl>


<TextField type="number"  id="outlined-basic"  label="Amount" value={_priceInEther} onChange={(e) => setpriceInEther(e.target.value)} variant="outlined" required/>
<div className={buttonclasses.root}>
      <input
        accept="image/*"
        className={buttonclasses.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="disabled" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={buttonclasses.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="disabled"  aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
                              

      
{/* <TextareaAutosize type="textarea" id="outlined-basic" label="Additional Information" value={_tokenUri} onChange={(e) => settokenUri(e.target.value)}  variant="outlined" aria-label="empty textarea" placeholder="Empty" required/> */}

      <TextField style={{width:"102.25ch"}} type="textarea" id="outlined-basic"  label="Additional Information" value={_tokenUri} onChange={(e) => settokenUri(e.target.value)}  variant="outlined" required/>
    
           </form>
    </div>       {/* <form onSubmit={onSubmit} className="form">
               
                            <table className="register-property" >
                    <div className="Card">
                        <tr>
                            <td><label htmlFor="text">Address</label></td>
                            <td><input type="text" required value={_propertyAddress} onChange={(e) => setpropertyAddress(e.target.value)} placeholder="Enter Address.." /></td>
                        </tr>

                        <tr>
                            <td>  <label htmlFor="city">City </label></td>
                            <td><input type="text" required value={_city} onChange={(e) => setcity(e.target.value)} placeholder="Enter city.." /></td>
                        </tr>
                        <tr>
                            <td>  <label htmlFor="room">Room(s)</label></td>
                            <td> <select
                                value={_room}
                                onChange={(e) => setroom(e.target.value)}>
                                <option disabled="disabled"></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>   <label htmlFor="area">Area</label></td>
                            <td> <input type="text" required value={_area} onChange={(e) => setarea(e.target.value)} placeholder="Enter area.." /></td>
                        </tr>
                        <tr>
                            <td>  <label htmlFor="amount">Amount</label></td>
                            <td> <input type="number" required value={_priceInEther} onChange={(e) => setpriceInEther(e.target.value)} placeholder="Enter Price.." /></td>
                        </tr>
                        <tr>
                            <td>  <label htmlFor="propertyType">PropertyType</label></td>
                            <td>  <select
                                value={_propertyType}
                                onChange={(e) => setpropertyType(e.target.value)} >
                                <option disabled="disabled"></option>
                                <option value="Commercial">Commercial</option>
                                <option value="non-Commercial">Non-Commercial (House,Flats Etc..)</option>s
                    </select></td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="SaleStatus">SaleStatus</label></td>
                            <td> <input type="radio" value="true" name="salestatus" onChange={(e) => setsaleStatus(e.target.value)} /> True
                    <input type="radio" value="False" name="salestatus" onChange={(e) => setsaleStatus(e.target.value)} /> False</td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>  <input type="file" name="_image" onChange={(e) => {
                                e.preventDefault()
                                const file = e.target.files[0]
                                const reader = new window.FileReader()
                                reader.readAsArrayBuffer(file)
                                reader.onloadend = () => {
                                    _setbuffer(Buffer(reader.result))
                                }
                            }
                            } />
                            </td>
                        </tr>

                        <tr>
                            <td> <label htmlFor="TokenUri">TokenUri</label></td>
                            <td><input type="text" value={_tokenUri} onChange={(e) => settokenUri(e.target.value)} placeholder="Enter TokenUri.." /></td>
                        </tr>
                    </div>
                        {
                            isTransactionInProcess ?
                                <div className="btn" style={{ background: "blue", color: "white" }}> Transaction in Process...</div> :
                                <div className="center"> <button className="btn" style={{ background: "blue", color: "white" }}> Register Property</button></div>
                        }
                    
                </table>
            </form>
            <EnablePropertySale /> */}

        </>
    )

}
