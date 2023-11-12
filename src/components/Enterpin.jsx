import { Box, Button, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import ShowData from './ShowData'
import axios from 'axios'

const Enterpin = () => {
    const[pin,setPin]=useState("")
    const[data,setData]=useState({})
    const[isLoad,setIsLoad]=useState(false)
    const[isError,setIsError]=useState(false)
console.log(isLoad);
    const handelSubmit=(e)=>{
      e.preventDefault()
      setIsError(false)
        setIsLoad(true)
        axios.get(`https://api.zippopotam.us/in/${pin}`)
       .then((res)=>{
         setIsLoad(false)
         setData(res.data);
       })
       .catch((err)=>{
        setIsError(true)
        setIsLoad(false)
        console.log(err);
       })
    }
  return (
    <Box>
      <Box display={'flex'} h={'50vh'} alignItems={'center'} justifyContent={'center'}>
       <Box shadow={'md'} p={'25px'} borderRadius={'10px'} w={'35%'} m={'auto'} display={'flex'}   >
        <form onSubmit={handelSubmit} >
            <FormLabel>Enter Postal Code: </FormLabel>
            <Input type='number' value={pin} placeholder='Enter Your Postal Code' onChange={(e)=>setPin(e.target.value)}/>
            <Button size={'sm'} colorScheme={'orange'} m={'10px 0'} type='submit'>Submit</Button>
            <Button  size={'sm'} bg={'blue.300'} m={'10px 10px'} onClick={()=>{setData({}); setPin("")}}>Clear</Button>
        </form>
       </Box>
       </Box>
       <ShowData data={data} isLoad={isLoad} isError={isError} />
       
    </Box>
  )
}

export default Enterpin
