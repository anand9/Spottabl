import React, { Component } from 'react';
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

class SearchHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: searchData,
      filteredComp: [],
      searchableList : searchData,
      limit: 5,
      offset: 0,
      pageCount: 1,
      paginatedData: []
    };
  }

 

  componentDidMount() {
    this.loadPageData()
  }

  loadPageData=()=> {
    let currentPaginatedData = this.state.searchResult.slice(this.state.offset, (this.state.offset+ this.state.limit))   
    this.setState({
      paginatedData: currentPaginatedData
    })
    if (this.state.searchResult.length > 0) {
      this.setState({
        pageCount:  Math.ceil(this.state.searchResult.length/this.state.limit)
      })
    }
  
  }

  setSearch=(newList)=> {
    this.setState({
      searchResult: newList
    },()=>{ this.loadPageData()})
  }

  setFilteredComp=(result)=> {
    this.setState({
      filteredComp: [...result]
    })
   // this.loadPageData()
  }

  filterCompany=(filters)=>{
    if (filters.length>0){
      let newList = this.state.searchableList.filter((list)=> filters.includes(list.company))
      this.setSearch([...newList])
      this.setFilteredComp([...newList])
    } else {
      this.setSearch(this.state.searchableList)
      this.setFilteredComp(this.state.searchResult)
    }
    
  }

  companyFilterUpdate=(comp)=>{
    let filters = []
    if (comp.length >0) {
      comp.forEach(element => {
        filters.push(element.name)  
      });
    }
    this.filterCompany(filters)
  }

  handlePageClick=(data)=> {
   let selected = data.selected;
   let offset = Math.ceil(selected * this.state.limit);

   this.setState({ offset: offset }, () => {
    this.loadPageData()
   });
  }

  setSearchbleList=(list)=> {
    this.setState({
      searchableList:[...list] 
    })
  }

  filterList=(searchText)=>{
    if (searchText) { 
      this.state.filteredComp.length >0? this.setSearchbleList([...this.state.filteredComp]) : this.setSearchbleList([...searchData])
      let newList = this.state.searchableList.filter((list)=>
        (list.company.toLowerCase().search(searchText) !== -1) || (list.title.toLowerCase().search(searchText) !== -1)
      )
      this.setSearch(newList)
    } else {
      this.setSearch(searchData)
    }

  }


  
  
  render() { 
    return (
      <Fade left>
      <Container>
        <Row className="justify-content-center">
          <Col md="6" lg="6" xs="12" className="text-center">
            <div className={styles.searchContainer}>
            <SearchBar filterList={this.filterList} list={searchData} companyFilter={this.companyFilterUpdate}/>
            {this.state.paginatedData.length > 0?
            this.state.paginatedData.map((item)=> {
              return (
                <SearchList item={item} key={item.id} /> 
              )
              
            })
            
            :
            <NoRecord />
          }
          {this.state.searchResult.length > this.state.limit  ? <SearchPaginate handlePageClick={this.handlePageClick} pageCount={this.state.pageCount}/> : ""}
          </div>
          </Col>
        </Row>
      </Container>
    </Fade>
    );
  }
}

export default SearchHome;