import React, {Component} from 'react';
import Services from "../Services";
import Footer from "../Footer";
import Navigation from "../Navigation";

class ServicePage extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Services/>
                <Footer/>
            </div>
        );
    }
}

export default ServicePage;