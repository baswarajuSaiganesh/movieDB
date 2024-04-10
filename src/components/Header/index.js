import {Link} from 'react-router-dom'
import SearchContext from '../../context/SearchContext'
import './index.css'

const Header = () => (
    <SearchContext.Consumer>
        {value => {
            const {searchInput, updateSearchInput} = value 
            const onChangeSearchInput = event => {             
                    updateSearchInput(event.target.value)
            }


            return (
                <nav className = 'nav-container'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                    <p className='nav-item'>MovieDB</p>
                    </Link>
                    <div className='nav-items-container'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                    <p className='nav-item'>Popular</p>
                    </Link>
                    <Link to='/toprated' style={{ textDecoration: 'none' }}>
                    <p className='nav-item'>Top Rated</p>
                    </Link>
                    <Link to='/upcoming' style={{ textDecoration: 'none' }}>
                    <p className='nav-item'>Upcoming</p>
                    </Link>
                    <input type = 'search' value={searchInput} onChange={onChangeSearchInput} className='search-container' placeholder = 'Movie Name' />
                    <Link to='/search' style={{ textDecoration: 'none' }}>
                    <button type = 'button' className='search-btn'>Search</button>
                    </Link>
                    </div>
                </nav>
            )
        }}
    </SearchContext.Consumer>
    

)

export default Header