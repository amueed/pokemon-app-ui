
import SearchBox from '../../components/SearchBox';
import SearchResult from '../../components/SearchResult';
import './SearchPage.css';
import logo from '../../images/pokemon_logo.svg.png';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { SearchResultModel } from '../../models/SearchResultModel';
import { PokemonService } from '../../services';
import NoSearchResult from '../../components/NoSearchResult';

function SearchPage() {
    const [isSearching, SetIsSearching] = useState(false);
    const [hasResult, SetHasResult] = useState(true);
    const [searchResult, SetSearchResult] = useState<SearchResultModel>();
    const [searchText, SearchText] = useState("");


    const handleSearchTextChange = (e: any) => {
        SearchText(e.target.value);
    };

    const handleSearch = () => {
        // const searchText = "Charmander";
        if (searchText) {
            resetSearch();
            PokemonService.getByName(searchText).then(response => {
                SetSearchResult({ ...response });
            }, (err) => {
                console.log(err)
                if (err.status === 404) {
                    SetHasResult(false)
                }
            }).finally(() => {
                SetIsSearching(false);
            });
        }
    };

    const resetSearch = () => {
        SetHasResult(true);
        SetIsSearching(true);
    }

    return (
        <Container>
            {/* Search Bar */}
            <Row>
                <Col>
                    <div className="searchBox">
                        <img style={{ width: '180px' }} src={logo} className="App-logo" alt="logo" />
                        <SearchBox onChange={handleSearchTextChange} name="searchText" />
                        <Button type="button" variant='primary' onClick={handleSearch}>Search Pokemon</Button>
                    </div>
                </Col>
            </Row>
            {/* Search Result */}
            <Row>
                {(!isSearching && hasResult && searchResult) && <SearchResult data={searchResult} />}
                {!hasResult && <NoSearchResult />}
            </Row>
        </Container>
    );
}

export default SearchPage;