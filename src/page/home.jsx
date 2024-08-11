import React from 'react'
import '../page/home.css'
import Navbar from '../components/nav/navbar.jsx';
import Solution from '../components/sol/sol.jsx'
import Info from '../components/infosection/info.jsx'
import Custom from '../components/cust/custom.jsx'
import Article from '../components/arti/article.jsx';
import Footer from '../components/foot/footer.jsx';
const home = () => {
  return (
    <div>
      <Navbar/>
     <Solution/>
     <Info/>
     <Custom/>
     <Article/>
     <Footer/>
    </div>
  )
}

export default home
