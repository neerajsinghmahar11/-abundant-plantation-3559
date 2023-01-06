import React from 'react'
import { Alert, Input } from '@chakra-ui/react'
import { Button, } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
    let navgate = useNavigate();
    const CheckCvv = () => {
        let Cvv = document.getElementById("Cvv").value;
        let name = document.getElementById("Name").value;
        let Card = document.getElementById("Card").value;
        let Mobile = document.getElementById("Mobile").value;

        if (Cvv.length !== 3 && Cvv.length != 0) {
            return alert("CVV has 3 numbers only");
        }
        if (name == "" || Card == "" || Mobile == "" || Cvv == "") {
            alert("Please Fill All The Details");
        } else {
            navgate("/otp")
            alert("OTP Sent Successfully");
        }
    }


    return (
        <div style={{ marginTop: "150px", height: "auto" }}>
            <h1 style={{ textAlign: "center", fontWeight: "700", fontSize: "25px" }}>Make Payment</h1>
            <div id='CheckoutForm' style={{ width: "20%", margin: "auto", padding: "20px", height: "100%" }}>
                <Input id='Name' marginBottom={"20px"} type={"text"} placeholder='Enter Name' />
                <Input id='Card' marginBottom={"20px"} type={"Number"} placeholder='Enter Card Number' />
                <Input id='Cvv' marginBottom={"20px"} type={"Number"} placeholder='Enter CVV' />
                <Input id='Mobile' marginBottom={"20px"} type={"Number"} placeholder='Enter Phone Number' />
                <Button width={"100%"} onClick={CheckCvv} colorScheme='teal' variant='solid'>Submit</Button>
            </div>
        </div>
    )
}

export default Checkout