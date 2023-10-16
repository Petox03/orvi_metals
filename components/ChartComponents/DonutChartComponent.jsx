'use client';
import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default function Charts(props) {

    const {chartLimit, chartValue, color1, color2, chartId} = props;

    useEffect(() => {

        let donutChart = am4core.create(chartId, am4charts.PieChart);

        // Configura el radio interno del gráfico de donut
        donutChart.innerRadius = am4core.percent(50);

        // Crea una serie para el gráfico de donut
        let pieSeries = donutChart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "category";
        pieSeries.labels.template.disabled = true;
        pieSeries.colors.list = [
            am4core.color(`#${color1}`), // Color para 'Current'
            am4core.color(`#${color2}`)  // Color para 'Remainder'
        ];
        // Añade datos
        let limit = chartLimit; // Este es el límite
        let value = chartValue; // Este es el valor actual
        donutChart.data = [
            { value: limit - value, category: "Remainder" },
            { value: value, category: "Current" },
        ];

        // Agrega texto en el centro
        let label = donutChart.chartContainer.createChild(am4core.Label);
        label.text = `${value}%`;
        label.align = "center";
        label.valign = "middle";
        label.fontSize = 25;

        return () => {
            donutChart.dispose();
        };
    }, []);

    return(

        <div id={chartId} style={{ width: "100%", height: "15rem" }}></div>

    );

}