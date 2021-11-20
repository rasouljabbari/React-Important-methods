import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

function MultiSelect(props) {

    const options = [
        { label: 'Thing 1', value: 1},
        { label: 'Thing 2', value: 2},
    ];

    return (
        <>
            <ReactMultiSelectCheckboxes
                // onPress={(e)=>{
                //     console.log(e)}}
                options={options}
                placeholderButtonLabel={'منابع انسانی'}

            />
        </>
    );
}

export default MultiSelect;