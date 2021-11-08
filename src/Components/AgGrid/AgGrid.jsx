import React, {useState, useEffect, useRef} from 'react';
import {HeadTextCenter} from "./styles";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function AgGrid(props) {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);

    const onButtonClick = e => {
        const selectedNodes = gridRef.current.api.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);
    return (
        <>
            <HeadTextCenter>Ag Grid</HeadTextCenter>

            <div className="ag-theme-alpine" style={{height: '88vh', width: '100%'}}>
                <button onClick={onButtonClick}>Get selected rows</button>
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    rowSelection="multiple"
                    cacheQuickFilter={false}
                    defaultColDef={{
                        flex: 1,
                        minWidth: 100,
                        editable: true,
                    }}

                >
                    <AgGridColumn field="athlete" sortable={true} minWidth={160} />
                    <AgGridColumn field="age" sortable={true} />
                    <AgGridColumn field="country" sortable={true} minWidth={140} />
                    <AgGridColumn field="year" sortable={true} />
                    <AgGridColumn field="date" sortable={true} minWidth={140} />
                    <AgGridColumn field="sport" sortable={true} minWidth={160} />
                    <AgGridColumn field="gold" sortable={true} />
                    <AgGridColumn field="silver" sortable={true} />
                    <AgGridColumn field="bronze" sortable={true} />
                    <AgGridColumn field="total" sortable={true} />
                </AgGridReact>
            </div>
        </>
    );
}

export default AgGrid;