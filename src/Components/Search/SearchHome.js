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


const SearchHome = () => {

  const [filtered, setFilter] = useState([...searchData])
  const [filteredComp, setFilteredComp] = useState([])
  //const [filteredComp, setFilterComp] = useState([])

  const filterList=(searchText)=>{
    let newList = searchData.filter((list)=>
      (list.company.toLowerCase().search(searchText) !== -1) || (list.title.toLowerCase().search(searchText) !== -1)
    )
    setFilter([...newList])
  }

  const companyFilterUpdate=(comp)=>{
    let filters = []
    if (comp.length >0) {
      comp.forEach(element => {
        filters.push(element.name)  
      });
      
    }
    //setFilterComp([...filters])
    filterCompany(filters)
    
  }

  const filterCompany=(filters)=>{
    if (filters.length>0){
      let newList = searchData.filter((list)=> filters.includes(list.company))
    setFilter([...newList])
    setFilteredComp(newList)
    console.log("fil comp",filteredComp)
    }
  }
  
  return (
    <Fade left>
      <Container>
        <Row className="justify-content-center">
          <Col md="6" lg="6" xs="12" className="text-center">
            <SearchBar filterList={filterList} list={searchData} companyFilter={companyFilterUpdate}/>
            {filtered.length >0? 
            filtered.map((item)=> {
              return (
                <SearchList item={item} key={item.id} />
              )
            })
            :
            <NoRecord />
          }
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default SearchHome;