//import { useState } from 'react'
import './App.css'

//Book
import ShowBooks from './components/Book/ShowBooks'
import CreateBook from './components/Book/CreateBook'
import EditBook from './components/Book/EditBook'

//Author
import ShowAuthors from './components/Author/ShowAuthors'
import CreateAuthor from './components/Author/CreateAuthor'
import EditAuthor from './components/Author/EditAuthor'

import Home from './components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/showBooks' element={<ShowBooks />} />
        <Route path='/createBook' element={<CreateBook />}/>
        <Route path='/editBook/:id' element={<EditBook />} />

        <Route path='/showAuthors' element={<ShowAuthors />} />
        <Route path='/createAuthor' element={<CreateAuthor />}/>
        <Route path='/editAuthor/:id' element={<EditAuthor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
