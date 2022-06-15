import React from 'react';
import FilterInput from "./FilterInput/FilterInput";
import FilterValue from "./FilterValue/FilterValue";
import styles from './Filter.module.css'
import {typeFilter} from "./FilterValue/types";

function Filter() {
    return (
        <div className={styles.filterContainer}>
            <FilterInput/>
            <FilterValue type={typeFilter.CULUM}/>
            <FilterValue type={typeFilter.VALUE}/>
        </div>
    );
}

export default Filter;
