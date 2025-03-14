---
title: "Line Charts"
tagline: "Note: all charts on this page are for illustrative purposes only and are not based on real data."
introTitle: "Introduction"
introContent: | 
        Line charts are most useful when you want to show trends over time in continuous, quantitative data. If you have more than five or six categories, you might want to consider a different chart type or highlight only a few lines, as charts with too many lines can become confusing to read.
sections:
  - title: "Standard Line Chart"
    level: 2
  - title: "Best Practices"
    level: 3
    content: |
      - If you’re creating a chart with more than one line, directly label lines or use styles like dashes to distinguish between multiple lines to avoid forcing users to rely on color alone.
      - If you’re creating a single-line chart, use a neutral color (**#2E2E2E**) for the line (unless you’re plotting a variable that falls into one of the groups outlined in the [categorical palettes section](#/datavis/design-elements/color)).
      - Because they focus more on trends than absolute values, the y-axes of line charts don’t need to start at zero (like those of bar charts do).
      - Before deciding on an axis extent (the range of data that an axis covers), always consider how it might (mis)represent the data.
      - If your multiple-line chart exists to highlight a few lines against many others, use a light gray (**#C9C9C9) for the lines in which you’re not immediately interested.
      - If your multiple-line chart exists to make comparisons between a few (no more than 5) lines, use color for each line.
  - title: "Examples of Best Practices"
    level: 3
    cards:
    - title: "Labeling"
      alt: "An image of a multi-line chart with two lines. Each is directly labeled to the right of the chart. This makes the chart easy to read, especially for readers who cannot rely on color to distinguish between lines."
      image: "/assets/images/datavis/charts/line-charts/labeling-do.png"
      content: If you’re creating a chart with more than one line, directly label lines or use styles like dashes to distinguish between multiple lines to avoid forcing users to rely on color alone.
      type: "do"
    - title: "Single-Line Charts"
      alt: "An image of a single line chart. The line is labeled and it is a dark gray color. This makes it easy to read against a white background."
      image: "/assets/images/datavis/charts/line-charts/single-line-charts-do.png"
      content: If you’re creating a single-line chart, use a neutral color (**#2E2E2E**) for the line (unless you’re plotting a variable that falls into one of the groups outlined in the categorical palettes section).
      type: "do"
    - title: "Axes"
      alt: "A zoomed-in image of a line chart showing the labeled y-axis. The axis starts at 25. This is okay for a line chart."
      image: "/assets/images/datavis/charts/line-charts/axes-do.png"
      content: Because they focus more on trends than absolute values, the y-axes of line charts don’t need to start at zero (like those of bar charts do).
      type: "do"
    - title: "Highlighting Multi-Line Charts"
      alt: "An image of a multi-line chart with numerous lines, too many to count. Most lines are a light gray, but three lines are directly labeled to the right of the chart and are in three different colors. This treatment helps to highlight those lines and minimize the others."
      image: "/assets/images/datavis/charts/line-charts/highlighting-multi-line-charts-do.png"
      content: If your multiple-line chart exists to highlight a few lines against many others, use a light gray (**#C9C9C9**) for the lines in which you’re not immediately interested
      type: "do"
    - title: "Labeling Multi-Line Charts"
      alt: "An image of a multi-line chart with four lines, each in a different color. Each line is directly labeled to the right of the chart. This makes the chart easy to read, especially for readers who cannot rely on color to distinguish between lines."
      image: "/assets/images/datavis/charts/line-charts/labeling-multi-line-charts-do.png"
      content: If your multiple-line chart exists to make comparisons between a few (no more than 5) lines, use color for each line, but make sure to also label them directly or use stroke styles to distinguish between them.
      type: "do"
  - title: "Things to Avoid"
    level: 3
    cards:
    - title: "Labeling"
      alt: "An image of a multi-line chart with four lines, each in a different color. There is a legend below the chart showing the line labels in their respective colors. This makes the chart hard to parse for readers who cannot rely on color to distinguish between lines."
      image: "/assets/images/datavis/charts/line-charts/labeling-do-not.png"
      content: Don’t force users to rely on color alone to distinguish between lines.
      type: "do not"
    - title: "Color, Single-Line Charts"
      alt: "An image of a single line chart where the line represents a particular fuel type but is in a color that does not match its assigned fuel type as laid out in the Colors section of this guide. This is confusing for readers and is not recommended."
      image: "/assets/images/datavis/charts/line-charts/color-single-line-charts-do-not.png"
      content: If you’re plotting a variable that falls into one of the groups outlined in the categorical palettes section, don’t use a color belonging to a different category.
      type: "do not"
    - title: "Color, Multi-Line Charts"
      alt: "An image of a multi-line chart with numerous lines; every line is assigned a color, but only three are labeled. Presumably this means those are the three lines of interest, so the other lines should be in a light gray instead of separate colors to make the main takeaways of the chart easier to grasp."
      image: "/assets/images/datavis/charts/line-charts/color-multi-line-charts-do-not.png"
      content: Don’t use color for every line if you’re not interested in all of them or if there are more than 5 lines of interest.
      type: "do not"
    - title: "Axes"
      alt: "A zoomed-in image of a single line chart showing its y-axis, which is unlabeled. You should always label axes."
      image: "/assets/images/datavis/charts/line-charts/axes-do-not.png"
      content: Don’t produce line charts without labeled axes.
      type: "do not"
  - title: "Sparklines"
    level: 2
    content: |
        Sparklines are only intended to show general trends and at-a-glance patterns, so you should not use them if users need to be able to pick out specific values. They work well in tables or in visualizations that are information-dense.
  - title: "Best Practices"
    level: 3
    content: |
        - Always show the “chart space” of a sparkline (either by putting a fill on the background or using divider lines).
  - title: "Examples of Best Practices"
    level: 3
    cards:
    - title: "“Chart Space”"
      alt: "An image showing different ways to show the chart space of a set of sparklines. In the first option, each sparklines is presented on a lightly colored background. In the second option, divider lines are inserted between the sparklines. Both options make the individual sparklines easier to read."
      image: "/assets/images/datavis/charts/line-charts/chart-space.png"
      content: Always show the “chart space” of a sparkline (either by putting a fill on the background or using divider lines).
      type: "do"
  - title: "Sparkline Axes"
    level: 3
    content: |
        The appropriate way to apply scaling to your sparklines varies depending on what you’re trying to focus on: if you’re interested only in the pattern of change over time, scale the y-axis of each sparkline independently. If you’re interested in being able to make comparisons in values across sparklines, scale them all the same, either a predetermined range, or from the highest to the lowest value in the sparklines’ dataset.
    cards:
    - title: "Independently-Scaled Axes"
      alt: "An image showing a set of four sparklines whose axes are independently scaled."
      image: "/assets/images/datavis/charts/line-charts/independently-scaled-axes.png"
      content: Setting the axis separately for each sparkline is best if you’re only interested in trends and patterns over time and don’t need to be able to make precise comparisons between sparklines.
      type: "default"
    - title: "Standard, Static Axes"
      alt: "An image showing a set of four sparklines, all of which have the same axis range, 0 to 100."
      image: "/assets/images/datavis/charts/line-charts/standard-static-axes.png"
      content: Setting a standard, static axis (where every sparkline has the same axis regardless of the data they all contain) is best if you’re interested in being able to make comparisons in values across sparklines on repeated viewings where being able to put them in context is important (e.g., data updates regularly). It also works well for datasets with set maximums and minimums, such as percents of wholes.
      type: "default"
    - title: "Non-Standard, Static Axes"
      alt: "An image showing a set of four sparklines, all of which have the same axis range, 0 to 90."
      image: "/assets/images/datavis/charts/line-charts/non-standard-static-axes.png"
      content: Setting the axis to accommodate the highest and lowest points of the dataset is best if you’re interested in being able to make comparisons in values across sparklines but don’t care about possible changes to the axis if the data changes.
      type: "default"
  - title: "Example Charts"
  - title: "Figure 1: Line Charts Example with Two Lines"
    level: 4
    alt: "An image showing a multi-line chart with two lines representing the CO2 emissions over time of an imagined U.S. region compared to the U.S. average. Each line is in a different color, but both lines are also labeled to make the chart easy to read."
    image: "/assets/images/datavis/charts/line-charts/figure-1-two-lines.svg"
  - title: "Figure 2: Line Charts Example with Multiple Lines"
    level: 4
    alt: "An image showing a multi-line chart with numerous lines, too many to count, representing the CO2 emissions over time of a large number of imagined U.S. regions compared to the U.S. average. Most of the region lines are in light gray, but the line representing the region of interest is in a different color, and so is the line representing the U.S. average. Both lines are also labeled to make the chart easy to read. Including the background lines helps frame that region’s emissions in context, but highlighting only the region of interest ensures the main takeaway of the chart is still clear."
    image: "/assets/images/datavis/charts/line-charts/figure-2-multiple-lines.svg"