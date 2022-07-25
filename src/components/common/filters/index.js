import React from 'react';
import FilterItem from './filterItem';
import "./filters.css";

const Filters = ({filterList}) => {
  // const Filters = ({filterList}) => {
  // console.log("chsdc")
  return (
    // console.log(filterList) &&
    <div className="filters">
    {filterList &&
      filterList.map((filter) => {
        return <FilterItem filter={filter} key={filter.id} />;
      })}
  </div>
  );
};

export default Filters;