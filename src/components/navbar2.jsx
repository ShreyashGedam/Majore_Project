import "./stylecomp.css"
import { Link } from 'react-router-dom'

export const Navbar2 = () => {
    return (
        <div>
            <div className="navbar2-main">
                <div className="navbar2-main-mini">
                    <div className="trial"><Link to={'/products'}>SALE</Link></div>
                    <div><Link to={'/products'}>MAKEUP</Link></div>
                    <div><Link to={'/products'}>SKINCARE</Link></div>
                    <div><Link to={'/products'}>FRAGRANCE</Link></div>
                    <div><Link to={'/products'}>HAIRCARE</Link></div>
                    <div><Link to={'/products'}>TOOLS & BRUSHES</Link></div>
                    <div><Link to={'/products'}>BRANDS</Link></div>
                </div> 
            </div>
            <div className="lables">
                <div>Shreyash</div>
                <div>Shreyash</div>
                <div>Shreyash</div>
                <div>Shreyash</div>
                <div>Shreyash</div>
            </div>
        </div>
    )
}