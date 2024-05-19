import { addToDb } from '../../utilities/Localstorage/fakedb';
import './Country.css';

const Country = ({country, key}) => {
    const {name, flags} = country;
    const addToCart = (id) =>{
        addToDb(id,1);
    }
    return (
        <div className='country'>
            <h3> Name: {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>{country.cca3}</p>
            <button onClick={()=>addToCart(country.cca3)} style={{margin:'10px'}}>Add to cart</button>
        </div>
    );
};

export default Country;