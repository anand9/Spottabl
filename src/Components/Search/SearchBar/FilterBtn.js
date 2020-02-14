import React, { useState, useEffect } from 'react';
import {
  FormGroup,
  Label,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import styles from './SearchBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { uniqBy } from 'lodash';


const FilterBtn = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const [allCompanies, setAllComp] = useState([])

  useEffect(() => {
    getCompany()
  }, [])

  const getCompany = () => {
    let companies = []
    props.list.forEach((item, index) => {
      companies.push({name:item.company, isChecked:false, id:index})
    });
    companies = uniqBy(companies, 'name')  
    setAllComp([...companies])  
  }

  const onchange=(e)=>{
    let currentIndex = allCompanies.findIndex((item)=> item.name === e.target.name)
    let tmpCompanies = [...allCompanies]
    tmpCompanies[currentIndex].isChecked = !tmpCompanies[currentIndex].isChecked
    setAllComp([...tmpCompanies])
    setSelectedCompanies()
  }

  const setSelectedCompanies=()=>{
    let selected = allCompanies.filter((comp)=> comp.isChecked === true)
    props.companyFilter(selected)
  }
  
  return (
    <>
      <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
        <DropdownToggle className={"rounded-right "+styles.plainBtn}>
          <FontAwesomeIcon icon={faFilter} />
        </DropdownToggle>
        <DropdownMenu>
          {allCompanies.map((comp) => {
            return (
              <DropdownItem key={comp.id}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" 
                      name={comp.name}
                      checked={comp.isChecked}
                      onChange={onchange}
                    />
                    {comp.name}
                   </Label>
                </FormGroup>
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </InputGroupButtonDropdown>
    </>
  );
};

export default FilterBtn;