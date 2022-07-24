import './products.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useId } from 'react'
import { addSingleProduct, productData } from '../redux/products/action'
import { FilterComponent } from '../components/filter'
import { useSearchParams, useNavigate } from 'react-router-dom'


export const Products = () => {
    return (
        <div className='container'>
            <div className="left">
                <Filters></Filters>
            </div>
            <div className="right">
                <Products__></Products__>
            </div>
        </div>
    )
}

const Products__ = () => {

    const data = useSelector(store => store.productData.data)
    const auth = useSelector(store => store.authData.isAuth)
    const userId = useSelector(store => store.authData.id)
    // console.log(userId)

    const dispatch = useDispatch()

    const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    useEffect(() => {
        if (data?.length === 0) {
            let params = {
                name: searchParams.getAll("name")
            }
            dispatch(productData())
            // console.log(params)
        }

    }, [dispatch, data?.length, searchParams])

    const addCartHandler = (item) => {
        // console.log(item,userId)
        if (!auth) {
            alert("You need to login First")
            navigate("/login")
        }
        else {
            alert("Item Added to Cart")
            dispatch(addSingleProduct(item,userId))
        }
    }

    // console.log(data)

    const handleNavigate = (id) => {

        if (!auth) {
            navigate("/login")
        }
        else {
            navigate(`/products/${userId}/${id}`)
        }
    }

    return (
        <div className='main'>
            {data.map((item) => (
                <div key={item._id} style={{ cursor: 'pointer' }}>
                    <img src={item.image} onClick={() => handleNavigate(item._id)}></img>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'red', fontSize: '14px', fontWeight: 'bold' }}>OFFER</p>
                        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.name}</p>
                        <p>{item.description}</p>
                        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Rs {item.cost}</p>
                        <p style={{ fontSize: '14px', color: 'grey' }}>{item.color}</p>
                        <button className='button' onClick={() => addCartHandler(item)}>Add to cart</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

const Filters = () => {
    return (
        <div>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}>FILTER BY</p>
            <p style={{ fontWeight: 'bold' }}>BRAND</p>
            <div>
                <FilterComponent></FilterComponent>
            </div>
        </div>
    )
}

