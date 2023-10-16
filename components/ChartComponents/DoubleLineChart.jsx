'use client';
import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import { XYChart, DateAxis, ValueAxis, LineSeries, CircleBullet, Legend, XYCursor } from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export default function AmChartComponent(props) {
  useEffect(() => {

    // Crea una instancia de gráfico
    let chart = am4core.create('chartdiv', XYChart);

    // Genera datos de prueba
    let data = [];
    let value1 = 100;
    let value2 = 120;

    for(let i = 0; i < 30; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      value2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date, value1, value2 });
    }

    chart.data = data;

    // Crea ejes
    let dateAxis = chart.xAxes.push(new DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    function createAxisAndSeries(field, name, opposite, bullet) {
      let valueAxis = chart.yAxes.push(new ValueAxis());
      if(chart.yAxes.indexOf(valueAxis) !== 0) {
        valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
      }

      let series = chart.series.push(new LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = 'date';
      series.strokeWidth = 2;
      series.yAxis = valueAxis;
      series.name = name;
      series.tooltipText = '{name}: [bold]{valueY}[/]';
      series.showOnInit = true;

      let circleBullet = series.bullets.push(new CircleBullet());
      circleBullet.circle.stroke = am4core.color('#fff');
      circleBullet.circle.strokeWidth = 2;

      valueAxis.renderer.line.strokeOpacity = 1;
      valueAxis.renderer.line.strokeWidth = 2;
      valueAxis.renderer.line.stroke = series.stroke;
      valueAxis.renderer.labels.template.fill = series.stroke;
      valueAxis.renderer.opposite = opposite;
    }

    // Crea series
    createAxisAndSeries('value1', '2020', false, 'circle');
    createAxisAndSeries('value2', '2021', true, 'triangle');

    // Agrega leyenda
    chart.legend = new Legend();

    // Agrega cursor
    chart.cursor = new XYCursor();

    // Limpia la instancia del gráfico al desmontar el componente
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>
  );
}