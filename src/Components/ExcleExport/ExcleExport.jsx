import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "رسول",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "امیر",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "مهرگان",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "امید",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

const dataSet2 = [
    {
        name: "آیشین",
        total: 25,
        remainig: 16
    },
    {
        name: "مهسا",
        total: 25,
        remainig: 7
    }
];

export default class ExcleExport extends React.Component {
    render() {
        return (
            <ExcelFile filename={'Rasoul'} element={<button className={'btn btn-info'}>Download Excel File</button>}>
                <ExcelSheet data={dataSet1} name="Employees">
                    <ExcelColumn label="نام" value="name"/>
                    <ExcelColumn label="میزان پول در کیف پول" value="amount"/>
                    <ExcelColumn label="جنسیت" value="sex"/>
                    <ExcelColumn label="وضعیت تاهل"
                                 value={(col) => col.is_married ? "Married" : "Single"}/>
                </ExcelSheet>
                <ExcelSheet data={dataSet2} name="Leaves">
                    <ExcelColumn label="نام" value="name"/>
                    <ExcelColumn label="موز" value="total"/>
                    <ExcelColumn label="موز چیان" value="remaining"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}
