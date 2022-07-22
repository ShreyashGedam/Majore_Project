import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addSingleProduct, getSIngleProduct } from "../redux/products/action"
import './page.css'

export const Product = () => {
    const { id } = useParams()

    const dispatch = useDispatch()

    const currentProduct = useSelector(store => store.productData.product)



    useEffect(() => {
        if (id) {
            dispatch(getSIngleProduct(id))
        }
    }, [dispatch, id])

    // console.log(currentProduct)

    const addToCartHandler = () => {
        alert("Item Added to cart")
        currentProduct && dispatch(addSingleProduct(currentProduct))
    }

    return (
        <div className="single_container">
            <div className="single_left">
                <img style={{ width: '100%', height: '100%' }} src={currentProduct.image}></img>
            </div>
            <div className="single_right">
                <p style={{ fontWeight: 'bold', color: 'red' }}>OFFER</p>
                <p style={{ fontWeight: 'bold' }}>{currentProduct.name}</p>
                <p>{currentProduct.description}</p>
                <p style={{ fontWeight: 'bold' }}>Rs {currentProduct.cost}</p>
                <br></br>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }} >SIZE:</p>
                <div className="single_size">{currentProduct.size}</div>
                <div style={{ display: 'flex' }}>
                    <p style={{ fontSize: '15px', fontWeight: 'bold', marginRight: '5px' }}>COLOR : </p>
                    <p style={{ fontSize: '15px' }}>{currentProduct.color}</p>
                </div>
                <button className="single_button" onClick={addToCartHandler} >ADD TO BAG</button>
            </div>
        </div>
    )
}