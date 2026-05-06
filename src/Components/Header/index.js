import { Link } from 'react-router-dom';
import logo from '../../images/logo/2121736.png'
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import { FaUserCircle } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import SearchBox from './SearchBox';
import Navigation from './Navigation'



const Header = ()=>{
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <b>US-IRAN</b> Conflict , orders may be processed with a slight delay

                        </p>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                    <Link to={'/'}><img src={logo} alt='Logo'/></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2 '>
                                <CountryDropdown/>

                               <SearchBox/>

                                <div className='part3 d-flex align-items-center ml-auto'>
                                     <Button className='circle mr-3'><FaUserCircle/></Button>
                                     <div className='ml-auto cartTab'>
                                        <span className='price'>$3.29</span>
                                        <Button className='circle ml-2'><BsBag/></Button>
                                     </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </header>
                <Navigation/>

                
            </div>
        </>
    )
}

export default Header;