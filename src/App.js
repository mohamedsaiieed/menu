import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import ListFood from './components/ListFood';
import { items } from './data';

function App() {
  const [itemData,setItemData]= useState(items);

  const allCategory = ['الكل',...new Set(items.map((i) => i.category))];

  const filterCat = (cat) => {
    if(cat === 'الكل') {
      setItemData(items);
    } else {
      let newArr = items.filter((item) => item.category === cat);
      setItemData(newArr);
    }
  }

  const searchBar = (word) => {
    if(word !== 0) {
      let newArr = items.filter((item) => item.title === word);
      setItemData(newArr);
    }
  }

  return (
    <div className="font color-body">
    <NavBar searchBar={searchBar}/>
      <Container>
        <Header/>
        <Category filterCat={filterCat} allCategory={allCategory}/>
        <ListFood itemData={itemData}/>
      </Container>
    </div>
  );
}

export default App;
