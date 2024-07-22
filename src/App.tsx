import { NavBar } from '@shubhhampgit01/mylibrarycontainer'
import './App.css'
import HomePage from './lib/Home/HomePage'
const App = () => {
  return (
    <div>
      <h1>Main container</h1>
      <HomePage />
      <NavBar name='pankaj' />
    </div>
  )
}

export default App

