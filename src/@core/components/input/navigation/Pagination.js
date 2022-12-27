import React from 'react';
import { Pagination } from 'antd';
import "./Pagination.css"


function Pagination1(){

    return(
       <div className=''>
       <Pagination defaultCurrent={1} total={50} />;
      </div>
    );
}

export default Pagination1;