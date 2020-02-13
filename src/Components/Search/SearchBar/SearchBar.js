import React, {useState} from 'react';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './SearchBar.module.scss'



const SearchBar = (props) => {

  const [searchText , setSearchText] = useState("")

  const onchange=(e)=>{
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
        />
        <InputGroupAddon addonType="prepend">
          <Button className={styles.plainBtn}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroupAddon>

        </InputGroup>
    </div>
  );
};

export default SearchBar;