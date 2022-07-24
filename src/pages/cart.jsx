import './products.css'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartData, deleteProductCart } from '../redux/products/action'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  background,
} from '@chakra-ui/react'


export const Cart = () => {

  const data = useSelector(store => store.productData.cart)
  const userId = useSelector(store => store.authData.id)

  // console.log(data)

  const dispatch = useDispatch()

  var sum = 0
  for (var i = 0; i < data.length; i++) {
    sum = sum + data[i].cost
  }

  // console.log(sum) 

  useEffect(() => {
    dispatch(cartData(userId))
  }, [])

  const deletehandle = (id) => {
    dispatch(deleteProductCart(id))
  }




  return (
    <div className='cart_container' >
      <div className='cart_heading'>
        <p>MY BAG ({data.length})</p>
      </div>
      <div className='cart_data' style={{ marginBottom: '200px' }}>
        <div className='cart_left'>
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.image}></img>
              <div style={{ width: '300px', marginLeft: '20px' }}>
                <p style={{ marginBottom: '3px' }}>{item.name}</p>
                <p style={{ fontWeight: 'bold' }}>{item.description}</p>
                <p>Color : {item.color}</p>
                <p style={{ marginBottom: '10px' }}>Sixe : {item.size}</p>
                <p onClick={() => deletehandle(item.id)} className='cart_remove'>Remove</p>
              </div>
              <p style={{ fontWeight: 'bold', marginLeft: '50px' }}>Rs. {item.cost}</p>
            </div>
          ))}
        </div>
        <div className='cart_right' style={{ background: 'rgb(235, 231, 231)', height: '230px' }}>
          <div style={{ paddingLeft: '15px', marginBottom: '10px', fontWeight: 'bold', marginTop: '20px' }}>OVERVIEW</div>
          <div className='cart_cost_details' >
            <div className='cart_p'>
              <p>Subtotal</p>
              <p style={{ color: '#D53F8C' }}>Discount</p>
              <p>GST</p>
              <p style={{ marginBottom: "10px" }}>Delivery Charges</p>
            </div>
            <div className='cart_p'>
              <p>Rs {sum}</p>
              <p style={{ color: '#D53F8C' }}>Rs -652</p>
              <p>Rs 0</p>
              <p>Rs 99</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ paddingLeft: '15px', marginTop: '10px', fontWeight: 'bold' }}>TOTAL</div>
            <div style={{ paddingLeft: '15px', marginTop: '10px', fontWeight: 'bold', paddingRight: '15px' }}>Rs {sum + 99 - 552}</div>
          </div>
          <div className='cost_button'>
            {/* <button style={{ padding : '10px' , fontWeight : 'bold'}}>CHECKOUT</button>  */}
            <ReturnFocus ></ReturnFocus>
          </div>

        </div>

      </div>
    </div>
  )
}


const ReturnFocus = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
    <>

      <Button mt={4} onClick={onOpen} color='white' backgroundColor={'#D53F8C'}
        _hover={{ background: '#D53F8C' }}
        margin={'2'}>
        CHECKOUT
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Confirm Your Order !
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} />    */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' background={'#D53F8C'} color='white' _hover={{ background: '#D53F8C' }}>Confirm Order</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
