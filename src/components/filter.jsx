import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Box, CheckboxGroup, VStack, Checkbox } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { productData } from "../redux/products/action"

export const FilterComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({})
    const [name, setName] = useState([])
    const [str, setStr] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        if (name.length == 1) {
            setStr(name[0])
            setSearchParams({ name: str })
        }
        else if (name.length > 1) {
            var url = name[0]
            for (var i = 1; i < name.length; i++) {
                url = url + "," + name[i]
            }
            setStr(url)
            setSearchParams({ name: str })
        }
        else {
            setSearchParams({})
        }
    }, [str, name])

    useEffect(() => {
        dispatch(productData(searchParams.getAll("name")[0]))
    }, [searchParams])

    const handleChange = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setName([...name, value])
        }
        else {
            setName(name.filter((e) => e !== value))
        }
    }

    return (
        <Box>
            <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
                <CheckboxGroup colorScheme='green' defaultValue={name}>
                    <VStack alignItems={"baseline"}>
                        <Checkbox value="SEPHORA COLLECTION"
                            onChange={handleChange}
                        >SEPHORA COLLECTION</Checkbox>
                        <Checkbox value="BENEFIT COSMETICS"
                            onChange={handleChange}
                        >BENEFIT COSMETICS</Checkbox>
                        <Checkbox value="HUDA BEAUTY"
                            onChange={handleChange}
                        >HUDA BEAUTY</Checkbox>
                        <Checkbox value="STILA"
                            onChange={handleChange}
                        >STILA</Checkbox>
                        <Checkbox value="ANASTASIA BEVERLY HILLS"
                            onChange={handleChange}
                        >ANASTASIA BEVERLY HILLS</Checkbox>
                    </VStack>
                </CheckboxGroup>
            </Box>
        </Box>
    )
}