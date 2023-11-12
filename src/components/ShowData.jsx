import { Box, Heading, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { WarningTwoIcon} from '@chakra-ui/icons'

const ShowData = ({ data,isLoad,isError }) => {
  return (
    <Box >
      {
        isError?<Heading size={'sm'} textAlign={'center'} color={'red'}>Please try again <WarningTwoIcon/> Somthing went wrong!  </Heading>:<Box>
          {
            isLoad?<Box textAlign={'center  '}><Spinner/></Box>:<Box>
              {
                Object.keys(data).length == 0?<Heading size={'sm'} color={'gray'} textAlign={'center'}>No Results!</Heading>:<Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                shadow={"md"}
                p={"50px 0"}
                w={"50%"}
                m={"auto"}
                borderRadius={"10px"}
              >


<TableContainer w={'90%'}> 
  <Table variant='striped' colorScheme='gray' >
    <TableCaption>{data && data["post code"]} Postal Code Data.</TableCaption>
    <Thead>
      <Tr>
        <Th>Key</Th>
        <Th>Information</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Post Code</Td>
        <Td>{data && data["post code"]}</Td>
      </Tr>
      <Tr>
        <Td>Country</Td>
        <Td>{data && data["country"]}</Td>
        
      </Tr>
      <Tr>
        <Td>State</Td>
        <Td>{data && data["places"][0]["state"]}</Td>
        
      </Tr>
      <Tr>
        <Td>Place Name</Td>
        <Td>{data && data["places"][0]["place name"]}</Td>
        
      </Tr>
      <Tr>
        <Td>Latitude</Td>
        <Td>{ data && data["places"][0]["latitude"]}</Td>
        
      </Tr>
      <Tr>
        <Td>Longitude</Td>
        <Td>{ data && data["places"][0]["longitude"]}</Td>
        
      </Tr>
    </Tbody>
  </Table>
</TableContainer>













              
              </Box>
              }
            </Box>
          }
        </Box>
      }
    </Box>
  );
};

export default ShowData;
