import "./stylecomp.css"
import { Link } from 'react-router-dom'

export const Navbar2 = () => {
    return (
        <div>
            <div className="navbar2-main">
                <div className="navbar2-main-mini">
                    <div className="trial">SALE</div>
                    <div><Link to={'/products'}>MAKEUP</Link></div>
                    <div>SKINCARE</div>
                    <div>FRAGRANCE</div>
                    <div>HAIRCARE</div>
                    <div>TOOLS & BRUSHES</div>
                    <div>BRANDS</div>
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