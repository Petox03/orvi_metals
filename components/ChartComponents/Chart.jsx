'use client';
import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import AmChartComponent from "./DoubleLineChart";
import DonutChart from "./DonutChartComponent";

// Habilita animaciones
am4core.useTheme(am4themes_animated);

function Charts() {
    useEffect(() => {
        // Crea una instancia de gráfico de líneas
        let lineChart = am4core.create("lineChartdiv", am4charts.XYChart);

        // Añade datos al gráfico de líneas
        lineChart.data = [
            { date: new Date(2023, 0, 1), value: 0 },
            { date: new Date(2023, 0, 2), value: 120 },
            { date: new Date(2023, 0, 3), value: 456 },
            { date: new Date(2023, 0, 4), value: 180 },
            { date: new Date(2023, 0, 5), value: 312 },
            { date: new Date(2023, 0, 6), value: 280 },
            { date: new Date(2023, 0, 7), value: 480 },
        ];

        // Crea ejes para el gráfico de líneas
        let dateAxis = lineChart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.labels.template.adapter.add("text", function (text, target) {
            return new Date(target.dataItem.date).toLocaleDateString('es-ES', { weekday: 'long' });
        });
        let valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());

        // Crea una serie para el gráfico de líneas
        let series = lineChart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.strokeWidth = 2;
        series.minBulletDistance = 10;

        return () => {
            lineChart.dispose();
        };
    }, []);

    return (
        <>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-7'>
                <Card className='w-full p-5'>
                    <CardHeader className='text-2xl'>Gráficas</CardHeader>
                    <CardBody className='grid grid-cols-1 md:grid-cols-3'>
                        <DonutChart chartId={"donut1"} chartLimit={100} chartValue={81} color1={"ffe6e6"} color2={"f15656"}></DonutChart>
                        <DonutChart chartId={"donut2"} chartLimit={100} chartValue={22} color1={"d4eee5"} color2={"00b074"}></DonutChart>
                        <DonutChart chartId={"donut3"} chartLimit={100} chartValue={62} color1={"dff0f9"} color2={"2d9cdb"}></DonutChart>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader className='text-2xl'>Chart Order</CardHeader>
                    <CardBody>
                        <div id="lineChartdiv" style={{ width: "58em", height: "15rem" }}></div>
                    </CardBody>
                </Card>
            </div>
            <Card>
                <CardHeader>Rentabilidad Total</CardHeader>
                <CardBody>
                    <AmChartComponent/>
                </CardBody>
            </Card>
        </>
    );
}

export default Charts;
