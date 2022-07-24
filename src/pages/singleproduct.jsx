import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addSingleProduct, getSIngleProduct } from "../redux/products/action"
import './page.css'

export const Product = () => {
    const {  userId , id } = useParams()
    console.log(userId , id)

    const dispatch = useDispatch()

    const currentProduct = useSelector(store => store.productData.product)

    useEffect(() => {
        if (id,userId) {
            dispatch(getSIngleProduct(userId,id))
        }
    }, [dispatch, id])

    console.log(currentProduct)

    const addToCartHandler = () => {
        alert("Item Added to cart")
        currentProduct && dispatch(addSingleProduct(currentProduct))
    }

    return (
        <div className="single_container">
            <div className="single_left">
                <img style={{ width: '100%', height: '100%' }} src={currentProduct[0].image}></img>
            </div>
            <div className="single_right">
                <p style={{ fontWeight: 'bold', color: 'red' }}>OFFER</p>
                <p style={{ fontWeight: 'bold' }}>{currentProduct[0].name}</p>
                <p>{currentProduct.description}</p>
                <p style={{ fontWeight: 'bold' }}>Rs {currentProduct[0].cost}</p>
                <br></br>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }} >SIZE:</p>
                <div className="single_size">{currentProduct[0].size}</div>
                <div style={{ display: 'flex' }}>
                    <p style={{ fontSize: '15px', fontWeight: 'bold', marginRight: '5px' }}>COLOR : </p>
                    <p style={{ fontSize: '15px' }}>{currentProduct[0].color}</p>
                </div>
                <button className="single_button" onClick={addToCartHandler} >ADD TO BAG</button>
            </div>
        </div>
    )
}