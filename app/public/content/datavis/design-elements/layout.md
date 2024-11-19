---
title: "Chart Layout"
tagline: ""
introTitle: "Introduction"
introContent: "In any chart, you want the data to be the most visually salient thing, followed by the title, the legend, the axes, and the gridlines. The guidance in this section will help you construct charts that adhere to this formula."
sections:
  - title: "Chart Elements"
    level: 3
  - title: "Figure 1: Example static chart with important elements highlighted"
    level: 4
    image: "/src/assets/images/datavis/design-elements/layout/figure-1.svg"
  - title: "Titles and Subtitles"
    level: 4
    content: |
       Explanatory charts (charts intended to impart a particular takeaway) should have a title and, if necessary or desired, a subtitle. The title should summarize the main takeaway of the chart. For example, a trend chart might be titled “Coal declines as fuel generation source in USA.” The subtitle should explain the context of the chart. For example, the above chart title example could be accompanied by a subtitle that reads “Resource mix for total generation by fuel type, USA 2018-2022.” Context can include things like time and place, but also things like the type(s) of metric or measure being represented.

       Exploratory charts (charts intended to allow readers to draw their own conclusions of the data) should have titles that more simply describe the variables available for exploration, like a subtitle does for explanatory charts. For example, a map presented as part of a data explorer could be titled “2022 Total Emissions by State.”
  - title: "Legends"
    level: 4
    content: |
      If a chart relies on color, symbology, size, patterns, or other visual cues beyond the data elements themselves to communicate meaning, a legend should explain those cues. Relying only on color to distinguish between data elements is not accessible. Directly labeling data elements with a closely positioned legend can help mitigate this.
    cards:
    - title: "Legend Positioning, Direct Labeling"
      image: "/src/assets/images/datavis/design-elements/layout/legend-positioning-direct.jpg"
      content: "If space allows, legends should be placed as close to data elements as possible. For example, in a line chart, a legend could be placed next to the last data point to the right of the chart. If this positioning can’t be accommodated, place the legend directly below or next to the chart and label it as a legend. "
      type: "do"
    - title: "Legend Positioning, Non-Direct Labeling"
      image: "/src/assets/images/datavis/design-elements/layout/legend-positioning-non-direct.jpg"
      content: "If direct labeling can’t be accommodated, place the legend directly below or next to the chart and label it as a legend."
      type: "do"
    - title: "Legend Positioning, Maps"
      image: "/src/assets/images/datavis/design-elements/layout/legend-positioning-maps.jpg"
      content: "On maps, legends can be placed “over” the map content, but try not to let them overlap important data points."
      type: "do"
  - title: "Axes and Ticks"
    content: |
      Axes are a crucial chart elements because they place the data in context. Before deciding on an axis extent (the range of data that an axis covers), always consider how it might (mis)represent the data. For example, does using a y-axis of 10-15 distort a trend line that hovers between 12 and 13 and would appear almost nonexistent if the axis were extended to 0-15? Or is that an important change in the data to highlight?

        Axes should have titles. Exceptions to this rule include:
        - if the title of the axis is included in the title/subtitle
        - If one of the axes contains years and only years
    level: 3
  - title: "Tooltips"
    content: |
      Tooltips can be helpful additions to charts where understanding precise values is important. A tooltip only becomes visible when a user has hovered or used keyboard controls to interact with the chart. Tooltips can be designed to suit the style of the chart or page, but they should always include the name, value, and style (color, stroke pattern, etc.) of the relevant data point(s).
    level: 3
  - title: "Data Labels"
    content: |
      Where possible (where there’s enough visual space) and if they would help make the takeaway(s) more clear, data labels can be used to highlight important parts of a chart.

        The difference between a data label and a tooltip is nuanced; generally speaking, a data label is always present, while a tooltip is conjured by a user’s interaction with the chart. Furthermore, a data label exist to highlight specific points of interest on the chart, while a tooltip exists to provide any available detail that the user wishes to see.
    level: 3
  - title: "Data Label Anatomy"
    content: |
      A data label usually comprises two or three parts:
        - A border around the element
        - A label describing the element or a combination of the element’s category/name and value, along with its unit of measurement (even if that unit is already identified elsewhere)
        - Optional: A line connecting the element and its label
    level: 3
  - title: "Data Accessibility"
    content: |
      When possible, provide data tables that contain the same data the chart is built with. These tables can be shown in addition to charts, or as an optional download.

        Alt text should always be used to describe charts. Advice on how to produce helpful alt text for charts can be found here.

        These steps help make your charts more accessible to everyone, but especially users with screen readers and other low-vision groups.
    level: 3