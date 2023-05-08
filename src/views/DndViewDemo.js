import React,{useState} from 'react';
import { useResizeDetector } from "react-resize-detector";
import ResponsiveGrid from '../components/grid/ResponsiveGrid';

const DndViewDemo = () => {
    const { width, height, ref } = useResizeDetector();
    let [items,setItems]=useState([
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},{id:8},{id:9},{id:10},
    ])
    
    return (
        <div className='dnd_view_demo' ref={ref}>
            <ResponsiveGrid items={items} maxColum={4} width={width} height={height} renderItem={item=>(
                <div className='item' key={`grid_item_${item.id}`}>{item.id}</div>
            )}/>
              
        </div>
    );
};

export default DndViewDemo;