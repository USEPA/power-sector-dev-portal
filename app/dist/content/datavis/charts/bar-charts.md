---
title: "Bar Charts"
tagline: ""
introTitle: "Introduction"
introContent: | 
        Icons and symbology can be useful tools when making data visualizations more accessible and engaging. Icons, shapes, and modifications to opacity or lines can allow people to understand your visualization without relying on color alone. 
sections:
  - title: "Standard Line Chart Best Practices"
    level: 3
    content: |
        - Don’t scale icons with data; it’s hard for people to gauge differences in size of non-standard shapes.
        - Keep icons simple but unique. Think about how they might read at different sizes (i.e., as small icons on a map, or larger icons next to call-out values).
        - Always provide a legend; don’t expect people to intuit the meaning of icons.
  - title: "Examples of Best Practices"
    level: 4
    cards:
    - title: "Labeling"
      image: "/src/assets/images/datavis/charts/line-charts/labeling-do.png"
      content: If you’re creating a chart with more than one line, directly label lines or use styles like dashes to distinguish between multiple lines to avoid forcing users to rely on color alone.
      type: "do"
    - title: "Single-Line Chars"
      image: "/src/assets/images/datavis//charts/line-charts/single-line-charts-do.png"
      content: If you’re creating a single-line chart, use a neutral color (**#2E2E2E**) for the line (unless you’re plotting a variable that falls into one of the groups outlined in the categorical palettes section).
      type: "do"
    - title: "Axes"
      image: "/src/assets/images/datavis/charts/line-charts/axes-do.png"
      content: Because they focus more on trends than absolute values, the y-axes of line charts don’t need to start at zero (like those of bar charts do).
      type: "do"
 