import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {
      const[items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Cocoa powder"
        },
        {
            id: 2,
            checked: false,
            item: "Coffee powder"
        },
        {
            id: 3,
            checked: false,
            item: "Milk"
        },
    ]);

    const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id?{...item, checked: !item.checked} : item);
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }
  
  return (
    <div className="App">
    <Header title="My Shoppinglist" />
    <Content
      items = {items} 
      handleCheck = {handleCheck}
      handleDelete = {handleDelete} 
    />
    <Footer length ={items.length} />
    </div>
  );
}

export default App;
