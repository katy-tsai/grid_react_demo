import {useState} from 'react';

const useResponsiveGrid = ({width,height,items,maxColum}) => {
    let [layouts,setLayouts]=useState([]);


    const getGridTemplateProps =()=>{

        return {

        }
        
    }
    const getGridItemProps =(item)=>{

        return {

        }
        
    }

    return {
        getGridTemplateProps,getGridItemProps
    };
};

export default useResponsiveGrid;