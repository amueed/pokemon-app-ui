import { Card } from 'react-bootstrap';
import { SearchResultModel } from '../../models/SearchResultModel';
import './SearchResult.css';

function SearchResult(props: { data: SearchResultModel }) {
    const { name, description, sprite } = props.data;
    return (
        <div className='searchResultBlock'>
            <div className='searchResultBlockImage'>
                <img src={sprite} alt={name} />
            </div>
            <div className='searchResultBlockDetails'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </div>
        </div>
    );
}

export default SearchResult;