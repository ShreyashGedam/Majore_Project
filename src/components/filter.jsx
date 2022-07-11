import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Box , CheckboxGroup, VStack, Checkbox } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { productData } from "../redux/products/action"

export const FilterComponent = () => {

    const [searchParams , setSearchParams] = useSearchParams()

    const [name , setName] = useState(searchParams.getAll("name") || [])

    
    const categoryHandler = (value) => {
        // console.log(value)
        setName(value)   
    }


    const dispatch = useDispatch()

    useEffect(() => { 

        if(name){
            setSearchParams({name : name} ,{replace : true} )    
        }
        let params = {
            name : searchParams.getAll("name")
        }
        dispatch(productData(params))
    },[name,searchParams,setSearchParams,dispatch])

    return (
        <Box>
            <Box display={{base : "none" , md : "block"}} p = "1rem 2rem">
                    <CheckboxGroup colorScheme='green' defaultValue={name} onChange={categoryHandler} >
                         <VStack alignItems={"baseline"}>
                         <Checkbox value="SEPHORA COLLECTION">SEPHORA COLLECTION</Checkbox>
                         <Checkbox value="BENEFIT COSMETICS">BENEFIT COSMETICS</Checkbox>
                         <Checkbox value="HUDA BEAUTY">HUDA BEAUTY</Checkbox>
                         <Checkbox value="STILA">STILA</Checkbox>
                         <Checkbox value="ANASTASIA BEVERLY HILLS">ANASTASIA BEVERLY HILLS</Checkbox>
                        </VStack>
                    </CheckboxGroup>
                </Box>
        </Box>
    )

}