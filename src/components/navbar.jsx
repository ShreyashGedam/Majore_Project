import "./stylecomp.css"
import { HStack, Input, Text, Flex, Center } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <div className="navbar-main">
            <div >
                <HStack borderBottom={"1px solid grey"}>
                    <Input htmlSize={15} width='auto' placeholder="Search SEPHORA" border={'none'} />
                </HStack>
            </div>
            <div style={{ marginTop: "0px" }}>
                <Text fontSize='5xl' margin={'0'} padding='0' cursor={'pointer'}><Link to={'/'}>SEPHORA</Link></Text>
            </div>
            <div style={{
                display: 'flex', justifyContent: 'space-between', fontSize: '19px',
                color: "#D53F8C", border: '1px solid white', width: '150px', marginTop: '10px', marginBottom: '0'
            }}>
                <Link to={'/cart'}>Cart</Link>
                <Link to={'/signup'}>
                    Sign Up
                </Link>

            </div>
        </div>
    )
}