import { Card } from 'react-bootstrap';
import { SearchResultModel } from '../../models/SearchResultModel';
import './SearchResult.css';

function SearchResult(props: { data: SearchResultModel }) {
    const { name: title, description, sprite } = props.data;
    return (
        <div className='searchResultBlock'>
            <div className='searchResultBlockImage'>
                <img src={sprite} alt="charizard" />
            </div>
            <div className='searchResultBlockDetails'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </div>
        </div>
    );
}

export default SearchResult;