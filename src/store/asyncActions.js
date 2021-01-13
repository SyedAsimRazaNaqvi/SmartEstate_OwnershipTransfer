import { setupWeb3, web3LoadingError, addEthereumAccounts, RegisterProperty, setupContract, EnablePropertySale, PropertyPricing, Events, BuyingRequest, OfferStatus, TransferEvent } from './actions';
import Web3 from 'web3';
import SmartEstate from "../abis/SmartEstate.json";

export const loadBlockchain = async (dispatch) => {

    try {
        // console.log("web3 =", Web3);
        console.log("web3.givenProvider = ", Web3.givenProvider);
        if (Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            //       0xF10F322bf589b873B4C53bEef0ca644D32730b79
            const address = '0x0fE9FA82E340f1f5fEe47b9a25D7a82Dc929d072'
            const contract = new web3.eth.Contract(SmartEstate.abi, address)
            dispatch(setupContract(contract));
            console.log(contract)
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts))

            const events = contract ? await contract.getPastEvents('property_detail', { fromBlock: 0, toBlock: "latest" }) : null;
            const TransferList = contract? await contract.getPastEvents('TransferList',{ fromBlock: 0, toBlock: "latest" }):null
           // dispatch(TransferEvent(TransferList))
          // dispatch(TransferEvent(TransferList))
            console.log(TransferList)
        } else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like Metamask to use this DAPP"))
        }
    }
    catch (error) {
        console.log("Error in loading Web3 = ", error);
        if (error.code === 4001)
            dispatch(web3LoadingError(error.message))
    }
}

export const registerPropertyAsync = async (contract, accounts, property, dispatch) => {
    console.log("before transaction")

    const receipt = await contract.methods.RegisterProperty(property._propertyAddress, property._city, property._room, property._area, property._priceInEther, property._propertyType, property._image, property._saleStatus, property._tokenUri).send({ from: accounts[0] });
    console.log("after transaction ", receipt)
    dispatch(RegisterProperty(property))
}

export const enablePropertySale = async (contract, accounts, tokenId, dispatch) => {
    console.log("before transaction")
    const receipt = await contract.methods.EnablePropertySale(tokenId).send({ from: accounts[0] })
    console.log("after transaction ", receipt)
    dispatch(EnablePropertySale(tokenId))
}

export const propertyPricing = async (contract, accounts, PropertyId_TokenId, dispatch) => {
    console.log("before transaction");
    const receipt = await contract.methods.PropertyPricing(PropertyId_TokenId).send({ from: accounts[0] })
    console.log("after trasnaction", receipt);
    dispatch(PropertyPricing(PropertyId_TokenId));
}

export const property_Detail = async (contract) => {

   // console.log("before transaction");
    const receipt = contract ? await contract.getPastEvents('property_detail', { fromBlock: 0, toBlock: "latest" }) : null;
    console.log("after transaction");
    return receipt;
}

export const transfer_Info =  (contract) => {

    const receipt = contract?  contract.getPastEvents('TransferList',{ fromBlock: 0, toBlock: "latest" }):null
    //  dispatch(TransferEvent(receipt))
      console.log("after transaction",receipt);

    // console.log("before transaction");
    
     return receipt;
 }

export const buyer_Request = async (contract, accounts, offer, dispatch) => {
    console.log("before transaction")

    const receipt = await contract.methods.BuyingRequest(offer.PropertyId_TokenId, offer.value).send({ from: accounts[0] });
    console.log("after transaction ", receipt)
    dispatch(BuyingRequest(offer))
}

export const offerStatus = async (contract, PropertyId_TokenId, dispatch) => {
    console.log("before transaction")
    const receipt = await contract.methods.OfferStatus(PropertyId_TokenId).call()

    console.log("after transaction ", receipt)
    dispatch(OfferStatus(PropertyId_TokenId))
}
