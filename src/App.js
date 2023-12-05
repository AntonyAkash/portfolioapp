import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NewPost from './Components/NewPost';
import { DataProvider } from './Context/DataContext';
import About from './Components/About';
import Profile from './Components/Profile';
import Nav from './Components/Nav';
import Missing from './Components/Missing';
import EditPost from './Components/EditPost';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <DataProvider>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Post">
        <Route index element={<NewPost/>}/>
        <Route path=':id' element={<EditPost/>}/>
        <Route path='Edit/:id' element={<Edit/>}/>
        </Route>
        <Route path="*" element={<Missing/>}/>
      </Routes>
      <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
