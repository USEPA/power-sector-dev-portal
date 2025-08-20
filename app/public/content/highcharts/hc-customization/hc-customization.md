---
title: "Customization"
tagline: ""


sections:
  - content: |
        The following sections explains customizations of highcharts based on the CAPD Data Visualization style guide. These customizations can be changed or removed based on your needs. The code for the line chart used in this example is included in the [theme examples file](https://github.com/USEPA/highchartscapdtheme/blob/main/highcharts_capd_theme_examples.html) on this [public repository](https://github.com/USEPA/highchartscapdtheme/).

        Additional information on the customization of highcharts, and to find helpful templates and examples, see the [highcharts API](https://api.highcharts.com/highcharts/).
  - title: "Credits"
    level: 3
  - content: |
        Credits include the text at the bottom right of the chart. We generally cite the source(s) of the data, even if it comes from EPA. You can also include a link for users to click to get to the data source.
    code: |
         //Credits is the reference / source at the bottom right of the chart
         credits: {
            text: "Source: EIA Annual Energy Review",
            href: "https://www.eia.gov/totalenergy/data/annual/index.php",
         },
    image: "/power-sector-dev-portal/assets/images/highcharts/customization/credits.png"
    alt: "An image showing an example of credits used on a highchart."
  - title: "Title"
    level: 3
  - content: |
          The title should be left-aligned, and the margin should be added so the title is readable. In this example, the title is passed into the chart function from the "lineTitle" variable set at the beginning of the code in this section. Look back at [Using the Theme](#/highcharts/hc-using-the-theme) to see how variables are set and passed into the chart.
    code: |
        title: {
            text: title,
            margin: 30,
            align: "left", //Align title left.
        },
    image: "/power-sector-dev-portal/assets/images/highcharts/customization/title.png"
    alt: "An image showing an example of a title used on a highchart."
  - title: "Subtitle"
    level: 3
  - content: |
          If you would like to add a subtitle, it should also be left-aligned, and the margin should be added so the title is readable.
    code: |
        subtitle: {
            text: lineSubtitle,
            margin: 30,
            y: 35,
            align: "left", //Align title left.
            style:{fontSize: "14px"},
        },
    image: "/power-sector-dev-portal/assets/images/highcharts/customization/subtitle.png"
    alt: "An image showing an example of a subtitle used on a highchart."
  - title: "Y Axis"
    level: 3
  - content: |
          The Y Axis section of the code has several customizations depending on the needs of your chart. First, the `min` and `max` values can be adjusted depending on the area of focus. Most charts should likely include a `min` value of 0. 
    code: |
        yAxis: {
        //set minimum, maximum, and tick interval here
        tickInterval: 0.5,
        min: 2.5,
        max: 4.5,
    image: "/power-sector-dev-portal/assets/images/highcharts/customization/yaxis.png"
    alt: "An image showing an example of a yAxis used on a highchart."
  - content: |
          The Y Axis title is set with the variable established at the beginning of this section. Additional customizations are based on the CAPD Data Viz guide. The offset, x, and y inegers help to set the location of the yAxis title so it is above the axis. 
    code: |
        title: {
            text: yAxisTitle,
            style: { fontWeight: "bold" },
            textAlign: "left",
            align: "high",
            offset: -170,
            x: -200,
            rotation: 0,
            y: -20,
        },
    image: "/power-sector-dev-portal/assets/images/highcharts/customization/yaxisTitle.png"
    alt: "An image showing an example of a Y axis title used on a highchart."
  - content: |
          Labels simply show the labels on the yAxis where each tick is.
    code: |
        labels: {
            formatter: function () {
            return this.value
            },
        },
  - content: |
          The gridlines and color are included from the CAPD Data Viz style guide. One gridline is added for each tickmark.
    code: |
        gridLineDashStyle: "dash",
        gridLineColor: "#c9c9c9",
        minorGridLineWidth: 0,
  - content: |
          The plotline adds a dark black line at "0" on the chart. In this case, since the Y Axis starts at 2.5, the black line is added at 2.5 on the Y axis. 
    code: |
        plotLines: [
            {
            value: 2.5,
            width: 1,
            color: "#2e2e2e", //set solid black line at the base of the y axis
            zIndex: 2,
            },
        ],
        },
  - title: "X Axis"
    level: 3
  - content: |
          The X Axis section of the code has several customizations depending on the needs of your chart. First, the `min` and `max` values can be adjusted depending on the area of focus. On a line chart, the X Axis should likely include a `min` value of `0.5`. Setting the min to `0.5` helps highcharts to start the X Axis at exactly 0 instead of adding extra space to the left side of 0 on the chart.
    code: |
        xAxis: {
        min: 0.5,
        max: 32.5,
  - content: |
          The X axis `categories` are set at the beginning of this section in the variables. The X Axis is generally time series data such as years.
    code: |
        categories: powerGenYears,
  - content: |
          `tickPositions` tells higcharts where to place tick marks on the xAxis. Ticks should be added every 5 years and then the most recent year. Ticks are set by the value from 0. In this example, 33 is used to show a tick for 2023 (the most recent year of data in this example).

          `tickLength`, `tickWidth`, and `tickColor` can be adjusted as needed. `#2e2e2e` is the reccomended color from the CAPD Data Viz style guide. `tickmarkPlacement` tells highcharts where to place the ticks in relation to the value on the xAxis. This can be adjusted to `between`, but `on` keeps the tick marks directly on the xAxis value.
    code: |
        tickPositions: [0, 5, 10, 15, 20, 25, 30, 33],
        tickLength: 5,
        tickWidth: 1,
        tickColor: "#2e2e2e",
        tickmarkPlacement: "on",
  - content: |
          The labels section includes settings for the xAxis labels. The `if` section of the formatter determines which years are shown on the xAxis. These should match the `tickPositions` above, so a label only appears where ticks are present. In this example, `currentGenYear` is 2023.
    code: |
        labels: {
            rotation: 0,
            step: 1,
            formatter() {
            //every 5 years - add 2025 in 2026
            if (
                this.value == 1990 ||
                this.value == 1995 ||
                this.value == 2000 ||
                this.value == 2005 ||
                this.value == 2010 ||
                this.value == 2015 ||
                this.value == 2020 ||
                this.value == currentGenYear
            ) {
                return this.value
            }
            },
        },
        },
    image: "/power-sector-dev-portal/assets/images/highcharts/customization/xaxis.png"
    alt: "An image showing an example of an X axis used on a highchart."
  - title: "Series"
    level: 3
  - content: |
          The series section sets how the data itself apperas on the chart. The `color` is set at the beginning of this section as a variable. `lineWidth` can be adjusted based on the needs of the chart. The `name` is the name of the series that appears in the legend and the tooltip. `data` is set using the variable on the beginning of this section.
    code: |
        series: [
        {
            type: "line",
            color: lineColor,
            lineWidth: 3,
            name: "Generation (TWh)",
            data: data, //reference the data array that was set above
        },
        ],
    image: "/power-sector-dev-portal/assets/images/highcharts/customization/series.png"
    alt: "An image showing an example of a series used on a highchart."
  - title: "Tooltip"
    level: 3
  - content: |
          A tooltip appears when a user hovers over a series on the chart. Tooltip settings can be adjusted in this section. In this case, you can set the suffix for the data if needed. In this case, since the units are included in the series name, this is not necessary. However, some charts may require a % sign, unit, or some other suffix on the data.
    code: |
        tooltip: {
        valueSuffix: "",
        },
    image: "/power-sector-dev-portal/assets/images/highcharts/customization/tooltip.png"
    alt: "An image showing an example of a tooltip used on a highchart."
  - title: "Legend"
    level: 3
  - content: |
          Settings for the legend can be adjusted in this section. Many of these settings help these highcharts to match the CAPD Data Visualization style guide including the alignment, layout, margins. On some charts, you may want to adjust the `verticalAlign` to `proximate` to align most closely with the end of the line. In this case, `middle` appeared closer to the end of the line.

          On highcharts, users are also able to turn series on or off by clicking an item in the legend.
    code: |
        legend: {
            enabled: true,
            align: "right",
            verticalAlign: "middle",
            layout: "vertical",
            itemMarginTop: -100,
            itemMarginBottom: 8,
        },
    image: "/power-sector-dev-portal/assets/images/highcharts/customization/legend.png"
    alt: "An image showing an example of a legend used on a highchart."
  - title: "Exporting"
    level: 3
  - content: |
          The final section of the chart code is `exporting`. This section has a number of customizations for the exporting menu which appears in the "hamburger" icon in the top right of the highcharts.

          First, the filename is set to match the title of the chart, which is passed from the variable set at the beginning of the code for this section. 
          
          Next, the `sourceWidth` and `sourceHeight` are set, which set the resolution of exported images like the JPEG and PNG files that are exported.
    code: |
        exporting: {
            filename: title,
            sourceWidth: 800,
            sourceHeight: 500,
  - content: |
          The `menuItemDefinitions` sets custom menu items for the exporting menu. For CAPD highcharts, we encourage developers to include a data download for charts whenever possible. These data download files can be uploaded to Drupal, and the link can be copied into the code here:
    code: |
        menuItemDefinitions: {
            // Custom definition
            xls: {
            onclick: function () {
                window.open(
                "https://www.epa.gov/system/files/documents/2025-01/figure-2-eia-generation-data.xlsx",
                )
            },
            text: "Download data",
            },
        },
  - content: |
          Now, you can set the menu items to include the custom menu item set above. In this case, the custom menu item is `xls` to indicate that this is an excel spreadsheet. We also generally include PNG, JPEG, and SVG options for download. Fullscreen view, PDFs, and more can also be added to the exporting menu. See the [highcharts API](https://api.highcharts.com/highcharts/exporting.menuItemDefinitions) for more information.
    code: |
        buttons: {
            contextButton: {
            menuItems: ["xls", "downloadPNG", "downloadJPEG", "downloadSVG"],
            },
            },
            },
        })
        }
    image: "/power-sector-dev-portal/assets/images/highcharts/customization/exporting.png"
    alt: "An image showing an example of an exporting menu used on a highchart."
  - content: |
            Additional information on the customization of highcharts, and to find helpful templates and examples, see the [highcharts API](https://api.highcharts.com/highcharts/).