import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './SearchBar.module.scss'
import FilterBtn from './FilterBtn';



const SearchBar = (props) => {

  const [searchText, setSearchText] = useState("")

  const onchange = (e) => {
    setSearchText(e.target.value)
    props.filterList(e.target.value)
  }

  return (
    <div>
      <InputGroup>
        <Input
          type="text"
          name="search"
          id="searchInp"
          placeholder="Search by Title and Company"
          onChange={onchange}
          value={searchText}
          className={"rounded-left "+styles.searchInput}
        />
        <InputGroupAddon addonType="prepend">
          <Button className={styles.plainBtn}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroupAddon>
        <FilterBtn list={props.list} companyFilter={(comp)=>props.companyFilter(comp)}/>
      </InputGroup>
    </div>
  );
};

export default SearchBar;