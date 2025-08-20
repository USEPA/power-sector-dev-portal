---
title: "Using the Theme"
tagline: ""
introTitle: "Introduction"
introContent: |
        This page will demonstrate how the EPA CAPD Data
        Visualization Style Guide can be integrated into your interactive Highcharts visualizations.
        Through the use of the `highcharts` javascript package and the `createChart` functions
        function, you can easily customize and standardize your highcharts, then add them to EPA webpages.

        Examples of highcharts using this theme are availble in the [theme examples file](https://github.com/USEPA/highchartscapdtheme/blob/main/highcharts_capd_theme_examples.html) on this [public repository](https://github.com/USEPA/highchartscapdtheme/). The code below uses the example line chart included in the [examples file](https://github.com/USEPA/highchartscapdtheme/blob/main/highcharts_capd_theme_examples.html).

        For additional information on the customization of highcharts, and to find helpful templates and examples, see the [highcharts API](https://api.highcharts.com/highcharts/).
introImage: "/power-sector-dev-portal/assets/images/highcharts/using-the-theme/highcharts-layout.svg"   
introImgAlt: "An image showing an example line chart with its key elements labeled highlighted in red. The key elements of the chart include its title, a labeled and titled y-axis, a labeled and titled x-axis, tick marks connecting x-axis labels to their respective points along the axis line, a source section in the bottom right, dotted gridlines, an exporting menu, and the two labeled lines that represent the data behind the chart."
sections:
  - content: |
        Before getting started with using this theme, please ensure that the appropriate javascript libraries are included at the beginning of your javascript code. 10.3.3 is the latest highcharts package available to users at EPA.
  - code: |
      <!-- On Drupal, include this in the javascript box.-->
      <script src="https://code.highcharts.com/maps/10.3.1/highmaps.js"></script>
      <script src="https://code.highcharts.com/10.3.3/modules/exporting.js"></script>
      <script src="https://code.highcharts.com/10.3.3/modules/broken-axis.js"></script>
      <script src="https://code.highcharts.com/10.3.3/modules/accessibility.js"></script>
      <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
      <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
  - content: |
      For javascript/highcharts users looking for Data Visualization Style Guide best practices that go beyond the theme, check out the [Best Practices](#/highcharts/hc-customization) page.
  - title: "Using the Chart Templates"
    level: 2
    content: |
        First, we will need to set the style for the chart and create the HTML container for the chart to be loaded into. For the style (CSS), the code will need to be wrapped in `<style>` tags. On Drupal, this should go in the javascript box at the top of your code.
    code: |
        <style>
        #lineChartTemplate {
        min-height: 350px;
        height: 36vw;
        max-height: 450px;
        max-width: 800px;
        }  
        </style>
  - content: | 
      Next, we will create the HTML container. This is where the chart will be built on the page. In Drupal, use the '</>' button in the editor to access the HTML and add the HTML code where you want the chart on the page.
    code: |  
        <figure class="highcharts-figure">
        <div class="centered" id="lineChartTemplate">&nbsp;</div>
        </figure>
  - content: |
        Finally, you can copy the javascript code for the chart type that you would like to create on the page. In Drupal, you can paste the code into the javascript box. Be sure to wrap the javascript in `<script>` tags. 
        
        Each chart type in the [template file](https://github.com/USEPA/highchartscapdtheme/blob/main/highcharts_capd_theme_examples.html) starts with the following (just replace `line` with `pie`,  `multi-line`,  `bar`,  `stacked bar`, or `stacked area` depending on your chart type):
    code: |
        //Start highcharts line chart template code
  - content: |
        The variables for each chart will be set at the beginning of each template. If you only need to update the basic information for the chart, this will be all that you need to update.
    code: |
        //Set title text here
        const lineTitle = "Demand for Electric Power Generation Has Increased in Recent Years";
        //Set yAxis title text here
        const lineYAxisTitle = "Generation Terrawatt Hours (TWh)";
        //Set data here
        const currentGenYear = 2023; //Last year included on the line chart
        const powerGenYears = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
        const generationData = [2.90, 2.94, 2.93, 3.04, 3.09, 3.19, 3.28, 3.33, 3.46, 3.53, 3.64, 3.58, 3.70, 3.72, 3.81, 3.90, 3.91, 4.01, 3.97, 3.81, 3.97, 3.95, 3.89, 3.90, 3.94, 3.92, 3.92, 3.88, 4.02, 3.97, 3.85, 3.96, 4.07, 4.02];
        //Set color
        const lineColor = "#2273BB";
  - content: |
        At the bottom of the section, you will see the function to create the line chart on the page. The paramaters passed in the parenthesis are `('HTML Container', title, Y axis title, data, color)`.
    code: |
        // Create the line chart, using the parameters set at the start of this section
        createLineChart('lineChartTemplate', lineTitle, lineYAxisTitle, generationData, lineColor);
            
        //End highcharts line chart template code
  - title: "x Axis Label Alignment"
    level: 3
  - content: |
        The [theme examples file](https://github.com/USEPA/highchartscapdtheme/blob/main/highcharts_capd_theme_examples.html) also includes a custom function for aligning xAxis labels on line charts. This aligns with the [style guide design principal](#/datavis/design-elements/layout) which suggests that the first label on the xAxis is left-aligned and the last label is right-aligned.

        Additional customizations for the xAxis can be found on the [customization page](#/highcharts/hc-customization#x-axis-2).
    code: |
        (function (H) {
            H.wrap(H.Tick.prototype, 'renderLabel', function (proceed, xy, old, opacity, index) {
            // Call the original function
            proceed.call(this, xy, old, opacity, index);

            // Exit if not the xAxis
            if (!this.axis.isXAxis) {
            return;
            }

        // Get the chart instance
        const chart = this.axis.chart;

        // Check if at least one series is of type 'line'
        const hasLineSeries = chart.series.some(series => series.type === 'line');
        if (!hasLineSeries) {
            return;
        }

        // Align the first label to the left
        if (this.isFirst) {
            this.label.attr({
                align: 'left',
                x: xy.x
            });
        return;
        }

        // Align the last label to the right
        if (this.isLast) {
            this.label.attr({
                align: 'right',
                x: xy.x
        });
        return;
        }
        });
        })(Highcharts);  //End label align function
  - content: |
        Line charts that need this label alignment need to call the function in the `chart` section toward the beginning of the chart code:
    code: |
        chart: {
            animation: false,
            marginBottom: 10,
            marginBottom: 50,
            xAxisLabelAlignment: true, //Align first label left and last label right
        },
  - title: "General Theme Info"
    level: 3
  - content: |
        Towards the beginning of the [theme examples file](https://github.com/USEPA/highchartscapdtheme/blob/main/highcharts_capd_theme_examples.html), some basic settings are applied for all of the highcharts that are included on the same page. First, a function for aligning labels on the X axis for line charts is included which can be called on charts that need this label alignment.

        Next, the default fonts, decimal points, and thousands separator are outlines in the `Highcharts.setOptions` function:
    code: |
        //Set default font, comma for thousands separator, and decimal point style
        //These options apply to multiple charts in the code
        Highcharts.setOptions({
            style: {
                fontFamily: 'Source Sans Pro, Source Sans Pro, Clean, sans-serif'
            },
            lang: {
                decimalPoint: '.',
                thousandsSep: ','
            }
        });

  - content: |
        See the [Customization](#/highcharts/hc-customization) section for more significant customizations to the charts. There you will find more information about how to adjust the charts to meet your particular needs.