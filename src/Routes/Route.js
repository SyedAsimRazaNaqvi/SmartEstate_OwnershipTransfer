import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import { RegisterProperty } from '../components/RegisterProperty'
import propertyList from '../components/pages/PropertyListing'
import PropertyItem from '../components/PropertyItem'
import Commercial from '../components/Commercial'
import NonCommercial from '../components/NonCommercial'
import Navbar from '../components/Navbar'
import '../components/App.css'
import Footer from '../components/Footer'
// import Navbar from '../Navbar';
import Sidebar from '../components/Sidebar';



function RouteConfig() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Router>
                 <Sidebar isOpen={isOpen} toggle={toggle} />
               
                <Navbar toggle={toggle} />
               

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/registerproperty" component={RegisterProperty} />
                    <Route exact path="/propertyList" component={propertyList} />
                    <Route exact path="/commercial" component={Commercial} />
                    <Route exact path="/noncommercial" component={NonCommercial} />
                    <Route exact path="/property/:id" component={PropertyItem} />
                    <Route path="*" component={() => <h2 className="heading"> 404 Not Found</h2>} />


                </Switch>
                <Footer />
            </Router>

        </div>

    )

}
export default RouteConfig;