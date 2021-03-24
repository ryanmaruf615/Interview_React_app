import React, {Fragment, useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import axios from "axios";

function Services() {

    const [data, setData] = useState([]);
    const [postData, setPostData] = useState([]);

 useEffect(()=>{
     loadService();
     postService();
 },[])

    const loadService =async () =>{
    const result = await axios.get("https://examplebd.com/api/get-csrf-token");
        setData(result.data);
    }
    const url = "";

    const postService =async () =>{
        const result = await axios.post("https://examplebd.com/api/live-classes?user_id=10089");
        setPostData(result.data);

    }

    const myList = postData;


    const myView=myList.map(myList=>{
        return  <div lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
                <h2>ID :{myList.id}</h2>
                <h2 >Name :{myList.user_name}</h2>
                <h2 >Title: {myList.title}</h2>
                <br/>
            </div>
        </div>
    })


    return (
        <Fragment >
            <Container  className="mt-5">
                <div className="text-center">
                    <h1>the Data is :: {data.csrf_token}</h1>
                </div>

                <div className="mt-5 text-center">

                    <div>
                        <h1 className="mb-3">The post Datas :::</h1>
                        {myView}
                    </div>
                </div>

            </Container>
        </Fragment>


    );
}


export default Services;

