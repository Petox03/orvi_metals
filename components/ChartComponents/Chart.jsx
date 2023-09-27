'use client';
import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Card, CardHeader, CardBody } from '@nextui-org/react';

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

        // Crea una instancia de gráfico de donut
        let donutChart = am4core.create("donutChartdiv", am4charts.PieChart);
        let donutChart2 = am4core.create("donutChartdiv2", am4charts.PieChart);
        let donutChart3 = am4core.create("donutChartdiv3", am4charts.PieChart);

        // Configura el radio interno del gráfico de donut
        donutChart.innerRadius = am4core.percent(50);
        donutChart2.innerRadius = am4core.percent(50);
        donutChart3.innerRadius = am4core.percent(50);

        // Crea una serie para el gráfico de donut
        let pieSeries = donutChart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "category";
        pieSeries.labels.template.disabled = true;
        pieSeries.colors.list = [
            am4core.color("#ffe6e6"), // Color para 'Current'
            am4core.color("#f15656")  // Color para 'Remainder'
        ];
        // Añade datos
        let limit = 100; // Este es el límite
        let value = 81; // Este es el valor actual
        donutChart.data = [
            { value: limit - value, category: "Remainder" },
            { value: value, category: "Current" },
        ];

        // Crea una serie para el gráfico de donut
        let pieSeries2 = donutChart2.series.push(new am4charts.PieSeries());
        pieSeries2.dataFields.value = "value";
        pieSeries2.dataFields.category = "category";
        pieSeries2.labels.template.disabled = true;
        pieSeries2.colors.list = [
            am4core.color("#d4eee5"), // Color para 'Current'
            am4core.color("#00b074")  // Color para 'Remainder'
        ];
        let limit2 = 100; // Este es el límite
        let value2 = 22; // Este es el valor actual
        donutChart2.data = [
            { value: limit2 - value2, category: "Remainder" },
            { value: value2, category: "Current" },
        ];

        // Crea una serie para el gráfico de donut
        let pieSeries3 = donutChart3.series.push(new am4charts.PieSeries());
        pieSeries3.dataFields.value = "value";
        pieSeries3.dataFields.category = "category";
        pieSeries3.labels.template.disabled = true;
        pieSeries3.colors.list = [
            am4core.color("#dff0f9"), // Color para 'Current'
        ];
        let limit3 = 100; // Este es el límite
        let value3 = 62; // Este es el valor actual
        donutChart3.data = [
            { value: limit3 - value3, category: "Remainder" },
            { value: value3, category: "Current" },
        ];

        // Agrega texto en el centro
        let label = donutChart.chartContainer.createChild(am4core.Label);
        label.text = `${value}%`;
        label.align = "center";
        label.valign = "middle";
        label.fontSize = 25;
        let label2 = donutChart2.chartContainer.createChild(am4core.Label);
        label2.text = `${value2}%`;
        label2.align = "center";
        label2.valign = "middle";
        label2.fontSize = 25;
        let label3 = donutChart3.chartContainer.createChild(am4core.Label);
        label3.text = `${value3}%`;
        label3.align = "center";
        label3.valign = "middle";
        label3.fontSize = 25;


        return () => {
            lineChart.dispose();
            donutChart.dispose();
            donutChart2.dispose();
            donutChart3.dispose();
        };
    }, []);

    return (
        <>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Card className='w-full p-5'>
                    <CardHeader className='text-2xl'>Gráficas</CardHeader>
                    <CardBody className='grid grid-cols-1 md:grid-cols-3'>
                        <div id="donutChartdiv" style={{ width: "100%", height: "15rem" }}></div>
                        <div id="donutChartdiv2" style={{ width: "100%", height: "15rem" }}></div>
                        <div id="donutChartdiv3" style={{ width: "100%", height: "15rem" }}></div>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader className='text-2xl'>Chart Order</CardHeader>
                    <CardBody>
                        <div id="lineChartdiv" style={{ width: "58em", height: "15rem" }}></div>
                    </CardBody>
                </Card>
            </div>

        </>
    );
}

export default Charts;
