import React, { createElement } from 'react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { Button, Stack } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const OTP = () => {
    const Navigate = useNavigate();
    const CheckOTP = async () => {
        let one = document.querySelector(".one").value;
        let two = document.querySelector(".two").value;
        let three = document.querySelector(".three").value;
        let four = document.querySelector(".four").value;


        if (one + two + three + four == 1234) {
            let res = await fetch(`https://cheerful-dungarees-slug.cyclic.app/cart`)
            let data = await res.json();

            for (let i = 0; i < data.length; i++) {
                let des = await fetch(`https://cheerful-dungarees-slug.cyclic.app/cart/${data[i].id}`, {
                    method: 'DELETE'
                })
            }

            alert("Payment Successful");
            Navigate("/")
        } else {
            alert("OTP does not match");
        }
    }
    const ResendOTP = () => {
        window.location.href = ("/otp")
        return alert("OTP has successfully sent again")

    }
    return (
        <div id='DIV' style={{ marginTop: "150px", textAlign: "center" }}>
            <h1 style={{ fontSize: "35px", fontWeight: "700" }}>Enter OTP</h1>
            <br />
            <div style={{ width: "fit-content", margin: "auto" }}>

                <PinInput id='otpBox'>
                    <PinInputField className='one' />
                    <PinInputField className='two' />
                    <PinInputField className='three' />
                    <PinInputField className='four' />
                </PinInput>
                <br />
                <br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>

                    <Stack direction='row' spacing={4}>
                        <Button onClick={CheckOTP} colorScheme='teal' variant='solid'>
                            Enter
                        </Button>
                        <Button onClick={ResendOTP} colorScheme='teal' variant='outline'>
                            Resend OTP
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default OTP