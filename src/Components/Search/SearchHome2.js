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
  const [paginationData, setPagination] = useState({limit:5, offset:0, pageCount:1})
  const [paginatedData, setPaginatedData] = useState({data:[]})
  const [hidden, setHidden] = useState(true);

  const filterList=(searchText)=>{
    //let searchableList
    filteredComp.length >0? setSearchbleList([...filteredComp]) : setSearchbleList([...searchData])
    let newList = searchableList.filter((list)=>
      (list.company.toLowerCase().search(searchText) !== -1) || (list.title.toLowerCase().search(searchText) !== -1)
    )
    setSearch([...newList])
  }

  useEffect(()=>{
    test()
  },[])

  const test=()=> {
    let currentPaginatedData = searchResult.slice(paginationData.offset, paginationData.offset+ paginationData.limit)
    let arr = [1, 2,3, 4, 5,]
    setPaginatedData(()=>{paginatedData.data =currentPaginatedData })
    if (searchResult.length > 0) {
      setPagination({
        pageCount: Math.ceil(searchResult.length/paginationData.limit)
      })
    }
  }


  const handlePageClick=(data)=> {
    console.log("paginaged", data)
    let selected = data.selected;
    let offset = Math.ceil(selected * paginationData.limit);
    setPagination({offset:offset})
   // loadPageData()
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
            <div className={styles.searchContainer}>
            <SearchBar filterList={filterList} list={searchData} companyFilter={companyFilterUpdate}/>
             {console.log("ayyooo", paginatedData)}
            {paginatedData?
            paginatedData.data.map((item)=> {
              return (
                <SearchList item={item} key={item.id} /> 
              )
              
            })
            
            :
            <NoRecord />
          }
          {searchResult.length > paginationData.limit  ? <SearchPaginate handlePageClick={handlePageClick} /> : ""}
          </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default SearchHome;