import "./stylecomp.css"
import { Search2Icon } from '@chakra-ui/icons'
import { HStack, Input, Text, Flex, Center } from "@chakra-ui/react"
// import { BiHeart} from "react-icons/bi";
import { RiShoppingBagLine } from "react-icons/Ri";
import { HiOutlineUser } from "react-icons/Hi";
import { Link } from "react-router-dom";

export const Navbar = () => {

 

    return (
        <div className="navbar-main">
            <div >
                <HStack borderBottom={"1px solid grey"}>
                    {/* <Search2Icon style={ {color:"#D53F8C" , fontSize : '19px' , cursor : 'pointer'} }></Search2Icon> */}
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
                {/* <div style={{ cursor : 'pointer'}}><BiHeart spacing={6}></BiHeart></div> */}
                <Link to={'/cart'}><RiShoppingBagLine style={{ cursor: 'pointer' }}></RiShoppingBagLine></Link>
                {/* <Link to={'/cart'}>Cart</Link> */}
                <Link to={'/signup'}>
                    <HiOutlineUser style={{ cursor: 'pointer' }}></HiOutlineUser>
                    {/* Login */}
                </Link>

            </div>
        </div>
    )
}