---
title: "Chart Layout"
tagline: ""
introTitle: "Introduction"
introContent: "In any chart, you want the data to be the most visually salient thing, followed by the title, the legend, the axes, and the gridlines. The guidance in this section will help you construct charts that adhere to this formula."
sections:
  - title: "Chart Elements"
    level: 2
  - title: "Figure 1: Example static chart with important elements highlighted"
    level: 4
    alt: "An image showing an example line chart with its key elements labeled highlighted in red. The key elements of the chart include its title, subtitle, a labeled and titled y-axis, a labeled and titled x-axis, tick marks connecting x-axis labels to their respective points along the axis line, dotted gridlines, and the two labeled lines that represent the data behind the chart."
    image: "/assets/images/datavis/design-elements/layout/figure-1.svg"
  - title: "Titles and Subtitles"
    level: 3
    content: |
       Explanatory charts (charts intended to impart a particular takeaway) should have a title and, if necessary or desired, a subtitle. The title should summarize the main takeaway of the chart. For example, a trend chart might be titled “Coal declines as fuel generation source in USA.” The subtitle should explain the context of the chart. For example, the above chart title example could be accompanied by a subtitle that reads “Resource mix for total generation by fuel type, USA 2018-2022.” Context can include things like time and place, but also things like the type(s) of metric or measure being represented.

       Exploratory charts (charts intended to allow readers to draw their own conclusions of the data) should have titles that more simply describe the variables available for exploration, like a subtitle does for explanatory charts. For example, a map presented as part of a data explorer could be titled “2022 Total Emissions by State.”
  - title: "Legends"
    level: 3
    content: |
      If a chart relies on color, symbology, size, patterns, or other visual cues beyond the data elements themselves to communicate meaning, a legend should explain those cues. Relying only on color to distinguish between data elements is not accessible. Directly labeling data elements with a closely positioned legend can help mitigate this.
    cards:
    - title: "Legend Positioning, Direct Labeling"
      alt: "A zoomed-in section of an image showing two directly labeled lines on a chart. Each line is in a different color, but each line’s label is positioned immediately next to the line so it’s easy to read."
      image: "/assets/images/datavis/design-elements/layout/legend-positioning-direct.png"
      content: "If space allows, legends should be placed as close to data elements as possible. For example, in a line chart, a legend could be placed next to the last data point to the right of the chart. If this positioning can’t be accommodated, place the legend directly below or next to the chart and label it as a legend."
      type: "do"
    - title: "Legend Positioning, Non-Direct Labeling"
      alt: "An image showing a grouped column chart with a legend directly underneath the chart showing which categories are represented by which colors. This type of legend is less ideal than directly labeling categories, but it is permissible if the first option isn’t possible."
      image: "/assets/images/datavis/design-elements/layout/legend-positioning-non-direct.png"
      content: "If direct labeling can’t be accommodated, place the legend directly below or next to the chart and label it as a legend."
      type: "do"
    - title: "Legend Positioning, Maps"
      alt: "An image showing a bubble map of Pennsylvania with a legend overlaid on top. The legend is bordered by a dark outline and has a light, slightly see-through background fill so that its contents are readable against the map. It is positioned so it does not block any of the data on the map."
      image: "/assets/images/datavis/design-elements/layout/legend-positioning-maps.png"
      content: "On maps, legends can be placed “over” the map content, but try not to let them overlap important data points."
      type: "do"
  - title: "Axes and Ticks"
    level: 3
    content: |
      Axes are a crucial chart elements because they place the data in context. Before deciding on an axis extent (the range of data that an axis covers), always consider how it might (mis)represent the data. For example, does using a y-axis of 10-15 distort a trend line that hovers between 12 and 13 and would appear almost nonexistent if the axis were extended to 0-15? Or is that an important change in the data to highlight?

      Axes should be titled, unless that title is already clearly marked elsewhere in the chart or if the axis clearly includes only years and labeling it as “year” would be redundant.
    cards:
    - title: "Tick Density"
      alt: "An image showing a multi-line chart where the x-axis is labeled in five year intervals. Each year has a small tick mark connecting it to its respective spot along the axis line. There are five labels on the chart, which is a good number to strive for."
      image: "/assets/images/datavis/design-elements/layout/tick-density.png"
      content: "Tick marks (the small lines on either axis attached to labels) are optional (especially if your chart already has gridlines). Tick labels should be regular and defined by the data. For example, if you have an x-axis that goes from 0 to 100, it might make sense to mark every 10th value. If your axis goes from 0 to 1000, every 10th value would be overwhelming. In general, you should aim for 5-8 regular ticks for quantitative axes."
      type: "do"
    - title: "First and Last Ticks"
      alt: "An image of a bubble plot showing the lowest and highest points along the x-axis labeled. Regardless of how many labels you include in a chart, the first and last points should be labeled so the extent of the data is clear to readers."
      image: "/assets/images/datavis/design-elements/layout/first-and-last-ticks.png"
      content: "Always label the starting and ending points of an axis, even if they don’t fall into regular “ticks” as laid out in the previous piece of advice or if you don’t plan to include other ticks at all."
      type: "do"
    - title: "Tick Orientation"
      alt: "A zoomed-in section of an image showing a bar chart with state name labels. Label text should always be horizontal if possible."
      image: "/assets/images/datavis/design-elements/layout/tick-orientation.png"
      content: "Label your ticks with horizontal text; don’t rotate labels. If you find yourself running out of space to do this, you might have too many ticks or may need to adjust the orientation of your chart."
      type: "do"
    - title: "Tick Alignment"
      alt: "A zoomed-in section of an image showing the year labels on the x-axis of a line chart. The first label is left-aligned relative to its tick mark. The other labels are center-aligned relative to their respective tick marks."
      image: "/assets/images/datavis/design-elements/layout/tick-alignment.png"
      content: "X-axis labels should be center-aligned to their respective tick, gridline, or data element, with the possible exception of first and last ticks on a quantitative x-axis, which can be left and right anchored, respectively, if reading left-to-right. Y-axis labels should all be center-aligned to their respective tick, gridline, or data element."
      type: "do"
    - title: "Units of Measurement"
      alt: "An image of an empty chart with a labeled y-axis. The units of measurement are placed above the y-axis, instead of next to every label."
      image: "/assets/images/datavis/design-elements/layout/units-of-measurement.png"
      content: "Include units of measurement in the axis title, not in each tick label. A possible exception to this rule is an axis showing percents."
      type: "do"
    - title: "Gridline Style"
      alt: "An image of a set of horizontal gridlines and an x-axis. The gridlines are dotted in a light gray and the x-axis is a solid dark gray."
      image: "/assets/images/datavis/design-elements/layout/gridline-style.png"
      content: "If necessary or desired, gridlines should be included as light gray (**#C9C9C9**) dashed lines. The zero line should be a darker gray (**#2E2E2E**) solid line."
      type: "do"
    - title: "Categorical Gridlines"
      alt: "An image showing a bar chart with vertical gridlines."
      image: "/assets/images/datavis/design-elements/layout/categorical-gridlines.png"
      content: "Categorical charts should only have gridlines for the quantitative variable’s axis (so, horizontal gridlines for column charts, and vertical gridlines for bar charts)."
      type: "do"
    - title: "Gridlines for Projections"
      alt: "An image showing a line chart that includes data projected into the future. A dotted, vertical line is used to represent the point at which the past becomes the future along the x-axis."
      image: "/assets/images/datavis/design-elements/layout/gridlines-for-projections.png"
      content: "If your time-series chart includes projections, you should use a dark gray (**#2E2E2E**) dashed gridline to denote the point at which projections start."
      type: "do"
  - title: "Tooltips"
    level: 3
    content: |
      Tooltips can be helpful additions to charts where understanding precise values is important. A tooltip only becomes visible when a user has hovered or used keyboard controls to interact with the chart. Tooltips can be designed to suit the style of the chart or page, but they should always include the name, value, and style (color, stroke pattern, etc.) of the relevant data point(s).
    cards:
    - title: "Multi-Element Tooltips"
      alt: "An image showing a multi-line chart with three lines. A tooltip is shown on the chart, calling out the specific values at that point for all three lines."
      image: "/assets/images/datavis/design-elements/layout/multi-element-tooltips.png"
      content: "If your chart has multiple data elements (such as line charts with multiple lines), a tooltip should include the values for each element. If the chart uses color to distinguish multiple elements, those colors should be reproduced in the tooltip. In this way, it can help function as a legend while a user is interacting with the chart."
      type: "do"
    - title: "Tooltip Interaction"
      alt: "An image showing a single line chart with a tooltip calling out a specific value along that line. An image of a computer mouse is shown hovering underneath the line to show that tooltips should show up regardless of whether the user hovers directly over the line or simply near it on the chart."
      image: "/assets/images/datavis/design-elements/layout/tooltip-interactions.png"
      content: "Hovering or using touch input anywhere on the chart—not just on the element it’s attached to—should produce a tooltip."
      type: "do"
  - title: "Data Labels"
    level: 3
    content: |
      Where possible (where there’s enough visual space) and if they would help make the takeaway(s) more clear, data labels can be used to highlight important parts of a chart.

        The difference between a data label and a tooltip is nuanced; generally speaking, a data label is always present, while a tooltip is conjured by a user’s interaction with the chart. Furthermore, a data label exist to highlight specific points of interest on the chart, while a tooltip exists to provide any available detail that the user wishes to see.
    cards:
    - title: "Data Label Anatomy"
      alt: "A zoomed-in section of an image showing a bubble plot. There are numerous bubbles, but one of them is outlined in black and has a line connecting it to a label on the chart. The label describes the bubble but does not block any of the other bubbles from being seen."
      image: "/assets/images/datavis/design-elements/layout/data-label-anatomy.png"
      content: |
         A data label usually comprises two or three parts:
         - A border around the element
         - A label describing the element or a combination of the element’s category/name and value, along with its unit of measurement (even if that unit is already identified elsewhere)
          - Optional: A line connecting the element and its label
      type: "do"
  - title: "Data Accessibility"
    content: |
      When possible, provide data tables that contain the same data the chart is built with. These tables can be shown in addition to charts, or as an optional download.

        Alt text should always be used to describe charts. Advice on how to produce helpful alt text for charts can be found in [this article](https://academy.datawrapper.de/article/330-how-to-write-good-alternative-descriptions-for-your-data-visualization#:~:text=Alternative%20text,%20also%20known%20as%20alt%20text,%20is%20a%20written) by data visualization company Datawrapper.

        These steps help make your charts more accessible to everyone, but especially users with screen readers and other low-vision groups.
    level: 3