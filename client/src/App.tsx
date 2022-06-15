import React, {useEffect} from 'react';
import './App.css';
import Filter from "./components/Filter/Filter";
import Table from "./components/Table/Table";
import Navigation from "./components/Navigation/Navigation";
import {useAppDispatch} from "./store/hooks";
import {getProductsRequest} from "./store/thunk/products";

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        //запрос на сервер
        dispatch(getProductsRequest())
    }, [])
    return (
        <div className='container-flex'>
            <Filter/>
            <Navigation/>
            <Table/>
        </div>
    );
}

export default App;
