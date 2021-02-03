import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Home from '../components/pages/Home';
import  About  from '../components/pages/About';
import { RegisterProperty } from '../components/RegisterProperty'
import propertyList from '../components/pages/PropertyListing'
import PropertyItem from '../components/PropertyItem'
import Navbar from '../components/Navbar'
import '../components/App.css'
import Footer from '../components/Footer'




function RouteConfig() {
    return (
        <div >
          <Router>
              <Navbar/>
            
        
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/RegisterProperty" component={RegisterProperty} />
             <Route exact path="/propertyList" component={propertyList} />
            <Route path="/property/:id" component={PropertyItem} />
            <Route path="*" component={()=><h2 className="heading"> 404 Not Found</h2>} />

            </Switch>
        <Footer/>
        </Router>

        </div>

    )

}
export default RouteConfig;