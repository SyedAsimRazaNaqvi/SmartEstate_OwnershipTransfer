import React from 'react';
import OfferStatus from '../OfferStatus';
import TransferInfo from '../TransferInfo';

function About({PropertyId_TokenId}) {
 console.log(typeof(PropertyId_TokenId),PropertyId_TokenId)
    return (
      <div >
        <h1>Welcome to About page</h1> 
         <TransferInfo PropertyId_TokenId={1} />
       
      </div>
    );
  }
  
  export default About;
  