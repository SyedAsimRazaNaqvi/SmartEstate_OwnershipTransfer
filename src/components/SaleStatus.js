import React from 'react'
import { BuyProperty } from './BuyProperty'
import TransferInfo from './TransferInfo'

export const SaleStatus = ({winStatus,Id,accounts,PropertyId_TokenId,val,responseStatus,OwnerAddress,BuyerAddress,responsetoken}) => {
    console.log(PropertyId_TokenId,responseStatus,OwnerAddress,BuyerAddress,typeof(PropertyId_TokenId),typeof(responseStatus),typeof(OwnerAddress),typeof(BuyerAddress))
    return (
        <div>
           
            {
              responseStatus == "1" && responsetoken == Id && winStatus ==false ?  <BuyProperty responseStatus={responseStatus} PropertyId_TokenId={PropertyId_TokenId} OwnerAddress={OwnerAddress} BuyerAddress={BuyerAddress} val={val} /> : <TransferInfo PropertyId_TokenId={PropertyId_TokenId} />
            }
           
        </div>
    )
}
