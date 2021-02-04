import React from 'react'
import { useStore } from '../context/GlobalState'

export const OwnershipTransferList = () => {
    const [{ contract, accounts, OwnershipsEvents }, dispatch] = useStore();
    console.log(OwnershipsEvents)

    return (
        <>
        <table style={{marginLeft:"auto",marginRight:"auto"}}>
        {OwnershipsEvents.map((item, index) => {
                if(item[0]!=="0x0000000000000000000000000000000000000000"){
                return <tr key={index}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                </tr>}
            })}
            <p></p>
        </table>
            
        </>
    )
}
