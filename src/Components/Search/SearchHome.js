import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import {
  Container, 
  Row,
  Col
} from 'reactstrap'
import SearchBar from './SearchBar/SearchBar';
import searchData from '../../Data/SearchList.json'
import SearchList from './SearchList/SearchList';
import NoRecord from './SearchList/NoRecord';
import styles from './Search.module.scss'
import SearchPaginate from './SearchPaginate/SearchPaginate';


const SearchHome = () => {

  const [searchResult, setSearch] = useState([...searchData])
  const [filteredComp, setFilteredComp] = useState([])
  const [searchableList, setSearchbleList]= useState([...searchResult])
  //const [filteredComp, setFilterComp] = useState([])

  const filterList=(searchText)=>{
    //let searchableList
    filteredComp.length >0? setSearchbleList([...filteredComp]) : setSearchbleList([...searchData])
    let newList = searchableList.filter((list)=>
      (list.company.toLowerCase().search(searchText) !== -1) || (list.title.toLowerCase().search(searchText) !== -1)
    )
    setSearch([...newList])
    console.log(searchResult);
    
  }

  const companyFilterUpdate=(comp)=>{
    let filters = []
    if (comp.length >0) {
      comp.forEach(element => {
        filters.push(element.name)  
      });
      
    }
    filterCompany(filters)
    
  }

  const filterCompany=(filters)=>{
    if (filters.length>0){
      let newList = searchableList.filter((list)=> filters.includes(list.company))
      setSearch([...newList])
      setFilteredComp([...newList])
    } else {
      //console.log("ding", searchResult);
      setFilteredComp(searchResult)
    }
  }
  
  return (
    <Fade left>
      <Container>
        <Row className="justify-content-center">
          <Col md="6" lg="6" xs="12" className="text-center">
            <div class={styles.searchContainer}>
            <SearchBar filterList={filterList} list={searchData} companyFilter={companyFilterUpdate}/>
            {searchResult.length >0? 
            searchResult.map((item)=> {
              return (
                <SearchList item={item} key={item.id} /> 
              )
              
            })
            
            :
            <NoRecord />
          }
          {searchResult.length >3 ? <SearchPaginate /> : ""}
          </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default SearchHome;