import React from 'react';

const ResponsiveGrid = ({className,items,maxColum=6, width, height,renderItem}) => {
    const getGridLayout = (items)=>{
        if(items.length<=maxColum){
            return { gridTemplateColumns: `repeat(${items.length},1fr)`}
        }else{
            let rows = Math.ceil(items.length/maxColum)
            return { gridTemplateColumns: `repeat(${maxColum},1fr)`,gridTemplateRows:`repeat(${rows},1fr)`}
        }
    }
    console.log('width',width);
    console.log('height',height);
    return (
        <div className={['responsive_grid_div',className].join(" ")} style={getGridLayout(items)}>
            {
                    items.map(item=>{
                        return renderItem?renderItem(item):<div className='item' key={`grid_item_${item.id}`}>{`test_${item.id}`}</div>
                    })
                }
        </div>
    );
};

export default ResponsiveGrid;