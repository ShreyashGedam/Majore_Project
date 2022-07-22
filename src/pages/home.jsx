import './page.css'
import { useSelector, useDispatch } from 'react-redux'

import { useEffect } from 'react'
import { fetchData } from '../redux/mainpage/action'
import { fetchDataMain2 } from '../redux/mainpage2/action'
import { addSingleProduct } from '../redux/products/action'


export const Home = () => {

    return (
        <div>
            <SlideImage></SlideImage>
            <div className='blackboxes'>
                <div style={{ paddingTop: '18px' }}>STEALS & DEALS</div>
                <div style={{ paddingTop: '9px' }}>DEAUTY MINI <br></br> UNDER ₹999</div>
                <div style={{ paddingTop: '9px' }}>EVERYDAY <br></br> ESSENTIALS</div>
                <div style={{ paddingTop: '18px' }}>TRENDING NOW</div>
                <div style={{ paddingTop: '18px' }}>EDITOR'S</div>
                <div style={{ paddingTop: '18px' }}>TOP FRANGRANCES</div>
            </div>
            <div>
                <img style={{ marginTop: '30px' }} src='https://logan.nnnow.com/content/dam/nnnow-project/10-feb-2022/SephoraBrandoftheweektext3310x240.jpg'></img>
            </div>
            <div>
                <img style={{ width: '80%', margin: 'auto', cursor: 'pointer', marginBottom: '70px' }} src='https://logan.nnnow.com/content/dam/nnnow-project/24-may-2022/se/Bobbibrown_Brandoftheweekstripdesktop.jpg'></img>
            </div>
            <div className='fourboxes'>
                <div>
                    <img src='https://logan.nnnow.com/content/dam/nnnow-project/24-may-2022/se/Lips.jpg'></img>
                    <p>LIPS</p>
                </div>
                <div>
                    <img src='https://logan.nnnow.com/content/dam/nnnow-project/24-may-2022/se/Skincare.jpeg'></img>
                    <p>SKINCARE</p>
                </div>
                <div>
                    <img src='https://logan.nnnow.com/content/dam/nnnow-project/24-may-2022/se/Complexion.jpeg'></img>
                    <p>COMPLEXION</p>
                </div>
                <div>
                    <img src='https://logan.nnnow.com/content/dam/nnnow-project/24-may-2022/se/Bestsellers.jpg'></img>
                    <p>BESTSELLERS</p>
                </div>
            </div>
            <div style={{ marginTop: '50px' }}>
                <img src='https://logan.nnnow.com/content/dam/nnnow-project/16-march-2022/justlanded.jpg'></img>
            </div>
            <Twoboxes></Twoboxes>
            <img src='https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg' style={{ width: "80%", margin: 'auto', cursor: 'pointer' }}></img>
            <img src='https://logan.nnnow.com/content/dam/nnnow-project/13-april-2022/se/Sephora_HeaderStrip_ItsGettingHotInHeretext3310x240.jpg' style={{ width: "80%", margin: 'auto', marginTop: '28px' }}></img>
            <Getting_Hot></Getting_Hot>
            <img style={{ marginBottom: '40px' }}
                src='https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_3_DESK.jpg'></img>
            <Everything_Sale></Everything_Sale>
            <img src='https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_4_DESK.jpg'></img>
            <Your_fovourite></Your_fovourite>
            <Last_email></Last_email>
        </div>
    )
}

const SlideImage = () => {

    return (
        <div className="mindiv">
            <img src='https://logan.nnnow.com/content/dam/nnnow-project/15-june-2022/se-/SephoraGeneric_Topbanner_MidYearSaleDesktop.jpg'></img>
            <img src='https://logan.nnnow.com/content/dam/nnnow-project/18-may-2022/SC_TopBanner_NewAtSephoraDesktop.jpg'></img>
            <img src='https://logan.nnnow.com/content/dam/nnnow-project/16-may-2022/1125x500-D.jpg'></img>
            <img src='https://logan.nnnow.com/content/dam/nnnow-project/16-may-2022/1125x500-D.jpg'></img>
        </div>
    )
}

const Twoboxes = () => {

    const data = useSelector(store => store.mainPageData.data)

    const dispatch = useDispatch()
    // console.log(data)

    useEffect(() => {

        dispatch(fetchData())

    }, [])

    const addCartHandler = (item) => {
        // console.log(item)
        alert("Item Added to Cart")
        dispatch(addSingleProduct(item))
    }

    return (
        <div className='twoboxes'>
            <div className='twoboxes_imagediv'>
                {data.map((item) => (
                    <div key={item.id_}>
                        {/* <div className='oneslider'></div> */}
                        <img src={item.image}></img>
                        <div className='imagediv_text'>
                            <p style={{ color: 'red', fontSize: '14px', fontWeight: 'bold' }}>NEW</p>
                            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.name}</p>
                            <p>{item.description}</p>
                            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{`Rs ${item.cost}`}</p>
                            <button className='button' onClick={() => addCartHandler(item)}>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <img src='https://logan.nnnow.com/content/dam/nnnow-project/14-june-2022/se/ikoo_Video_SS.jpg'></img>
                <p>Your hair will love ikoo Haircare</p>
            </div>
        </div>
    )
}

const Getting_Hot = () => {
    return (
        <div className='getting_hot'>
            <div style={{ marginRight: '20px' }}>
                <img src='https://logan.nnnow.com/content/dam/nnnow-project/19-may-2022/se/Sephora_ContentP-story_LinerLovin_.jpg'></img>
            </div>
            <div style={{ marginRight: '20px' }}>
                <img src='https://logan.nnnow.com/content/dam/nnnow-project/19-may-2022/se/Sephora_ContentP-story_Wingin_It.jpg'></img>
            </div>
            <div>
                <img src='https://logan.nnnow.com/content/dam/nnnow-project/19-may-2022/se/Sephora_ContentP-story_Full_n_Fluffy.jpg '></img>
            </div>
        </div>

    )
}

const Everything_Sale = () => {

    const data = useSelector(store => store.mainPageData2.data)
    // console.log(data)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchDataMain2())

    }, [])

    const addCartHandler = (item) => {
        // console.log(item)
        alert("Item Added to Cart")
        dispatch(addSingleProduct(item))
    }

    return (
        <div className='six_boxes'>
            {data.map((item) => (
                <div key={item.id_} style={{ cursor: 'pointer' }}>
                    <img src={item.image}></img>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'red', fontSize: '14px', fontWeight: 'bold' }}>OFFER</p>
                        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.name}</p>
                        <p>{item.description}</p>
                        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Rs {item.cost}</p>
                        <p style={{ fontSize: '14px', color: 'grey' }}>2 more offers</p>
                        <p style={{ fontSize: '14px', color: 'grey' }}>{item.color}</p>
                        <button className='button' onClick={() => addCartHandler(item)}>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Your_fovourite = () => {

    return (
        <div className='your_favourite'>
            <div><img src='https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg'></img></div>
            <div><img src='https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg'></img></div>
            <div><img src='https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg'></img></div>
            <div><img src='https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg'></img></div>
            <div><img src='https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg'></img></div>
            <div><img src='https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg'></img></div>
        </div>
    )
}

const Last_email = () => {
    return (
        <div className='last_email'>
            <div className='last_email_info'>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</div>
            <div className='last_email_input'>
                <input type={'text'} placeholder='Enter Your Email Address'></input>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    )
}