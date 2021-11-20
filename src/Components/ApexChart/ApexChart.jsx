import React, {useState} from 'react';
import Chart from "react-apexcharts";

function ApexChart(props) {
    const [item, setItem] = useState({

        // Spline Area chart
        series: [{
            name: 'تولید',
            data: [31, 40, 28, 51, 42, 109, 100,50,25,85,14,100],
        }, {
            name: 'فروش',
            data: [11, 32, 45, 32, 34, 52, 41,85,45,69,100,20]
        }],
        options: {
            chart: {
                height: 350,
                fontFamily: 'IranSans',
                type: 'area',
                dropShadow: {
                    // enabledOnSeries : [0],
                    enabled: true,
                    color: ['#D01936','#00ff00'],
                    top: 13,
                    left: 7,
                    blur: 10,
                    opacity: 0.5
                },
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
            },
            stroke: {
                width: 4,
                curve: 'smooth'
            },
            colors: ['#D01936' , '#59DE97'],
        },
        // mini Charts
        // series: [{
        //     name: "Desktops",
        //     data: [0, 20, 8 , 25 , 22 , 40 , 23 , 28 , 23]
        // },],
        // options: {
        //     chart: {
        //         type: 'line',
        //         zoom: {
        //             enabled: true
        //         },
        //         sparkline: {
        //             enabled: true
        //         }
        //     },
        //     // dataLabels: {
        //     //     enabled: false
        //     // },
        //     tooltip: {
        //         fixed: {
        //             enabled: false
        //         },
        //         x: {
        //             show: false
        //         },
        //         y: {
        //             title: {
        //                 formatter: function (seriesName) {
        //                     return ''
        //                 }
        //             }
        //         },
        //         marker: {
        //             show: false
        //         }
        //     },
        //     stroke: {
        //         width: 3,
        //         curve: 'smooth'
        //     },
        //     // title: {
        //     //     text: 'Product Trends by Month',
        //     //     align: 'center'
        //     // },
        //     colors: ['#ff0000'],
        //     // grid: {
        //         // row: {
        //         //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //         //     opacity: 0.5
        //         // },
        //     // },
        //     xaxis: {
        //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        //     }
        // }
        // end mini charts
    })
    return (
        <>
            <div className="row">
                <div className="mixed-chart">
                    {/*mini chart*/}
                    {/*<Chart*/}
                    {/*    options={item.options}*/}
                    {/*    series={item.series}*/}
                    {/*    width={'137'}*/}
                    {/*    height={'68'}*/}
                    {/*/>*/}
                    {/* end mini charts*/}

                    <Chart
                        options={item.options}
                        series={item.series}
                        width={600}
                        height={350}
                    />
                </div>
            </div>
        </>
    );
}

export default ApexChart;