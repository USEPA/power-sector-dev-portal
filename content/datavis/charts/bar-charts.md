---
title: "Bar and Column Charts"
tagline: "Note: all charts on this page are for illustrative purposes only and are not based on real data."
introTitle: "Introduction"
introContent: | 
        Bar and column charts are most useful when you have data you want to compare across categories on a nominal or ordinal scale or when you have time-based data that is measured discreetly (for example, changes in emissions that are only measured once a year).

        If each category has multiple data points associated with it that you want to call out, you may want to use a boxplot or other chart type. Similarly, if you have a large number of categories, using a lollipop chart can help reduce clutter.

sections:
  - title: "General Bar and Column Chart Guidance"
    content: |
        - Use the y-axis to measure the quantitative variable with vertical, upright bars.
        - Your y-axis should start at zero with this chart type.
        - Keep category names short. Use this chart type if your categories are years or times.
        - Center-align your category labels when using this chart type.
    cards:
    - title: "Sorting"
      image: "/assets/images/datavis/charts/bar-and-column-charts/sorting.png"
      alt: "An image of a column chart. Its bars are sorted from tallest to shortest for easy data interpretation."
      content: Sorting bars or columns by value helps make patterns more obvious and can help highlight important values. There are some cases when sorting by value doesn’t make sense, like when you have columns that represent points in time.
      type: "default"
    - title: "“Anchors”"
      image: "/assets/images/datavis/charts/bar-and-column-charts/anchors.png"
      alt: "An image of a column chart overlaid with a horizontal dotted line representing the average of the data points. This allows for easy comparisons between data points. "
      content: Different tools may allow for different ways of presenting “anchors” (such as averages) as comparisons; these can add helpful context to your data points, but aren’t always necessary.
      type: "default"
  - title: "Column Chart"
    level: 3
  - title: "Best Practices"
    level: 4   
    content: |
        - Use the y-axis to measure the quantitative variable with vertical, upright bars.
        - Your y-axis should start at zero with this chart type.
        - Keep category names short. Use this chart type if your categories are years or times.
        - Center-align your category labels when using this chart type.
  - title: "Examples of Best Practices"
    level: 4
    cards:
    - title: "Y-Axis"
      image: "/assets/images/datavis/charts/bar-and-column-charts/column-y-axis-do.png"
      alt: "An image of a column chart with a labeled y-axis. The y-axis starts at zero. This makes the chart easy to understand."
      content: In a column chart, the y-axis starts at zero and measures the quantitative variable in your dataset.
      type: "do"
    - title: "Category Labels"
      image: "/assets/images/datavis/charts/bar-and-column-charts/column-category-labels-do.png"
      alt: "A zoomed-in image of a column chart showing that its column labels are short. In this case, they use US state abbreviations instead of full names. This makes the chart easy to read."
      content: The names of your categories (columns) should be short and center-aligned. If you have longer category names, consider using a bar chart instead.
      type: "do"
  - title: "Things to Avoid"
    level: 4
    cards:
    - title: "Y-Axis"
      image: "/assets/images/datavis/charts/bar-and-column-charts/column-y-axis-do-not.png"
      alt: "An image of a column chart with a labeled y-axis. The y-axis starts at four hundred. This makes the chart difficult to understand and could possibly mislead readers."
      content: Don’t start a column chart’s y-axis at a non-zero number.
      type: "do not"
    - title: "Category Labels"
      image: "/assets/images/datavis/charts/bar-and-column-charts/column-category-labels-do-not.png"
      alt: "A zoomed-in image of a column chart showing that its column labels are long. In this case, they use full US state names. This makes the chart hard to read because the labels crowd one another. "
      content: Don’t use long labels for column charts.
      type: "do not"
  - title: "Bar Chart"
    level: 3
  - title: "Best Practices"
    level: 4   
    content: |
        - Use the x-axis to measure the quantitative variable with horizontal, left-to-right bars.
        - Use this chart type when your category names are long.
        - Right-align your category labels when using this chart type.
  - title: "Examples of Best Practices"
    level: 4
    cards:
    - title: "X-Axis"
      image: "/assets/images/datavis/charts/bar-and-column-charts/bar-x-axis-do.png"
      alt: "An image of a bar chart with a labeled x-axis. The x-axis starts at zero. This makes the chart easy to understand."
      content: In a bar chart, the x-axis starts at zero and measures the quantitative variable in your dataset.
      type: "do"
    - title: "Category Labels"
      image: "/assets/images/datavis/charts/bar-and-column-charts/bar-category-labels-do.png"
      alt: "A zoomed-in image of a bar chart showing that its column labels are long. In this case, they use full US state names. Because the bars and their labels are horizontal, this is OK."
      content: The names of your categories (bars) can be longer with this chart type. Their labels should be right-aligned.
      type: "do"
  - title: "Things to Avoid"
    level: 4
    cards:
    - title: "X-Axis"
      image: "/assets/images/datavis/charts/bar-and-column-charts/bar-x-axis-do-not.png"
      alt: "An image of a bar chart with a labeled x-axis. The x-axis starts at nine hundred. This makes the chart difficult to understand and could possibly mislead readers."
      content: Don’t start a column chart’s x-axis at a non-zero number.
      type: "do not"
  - title: "Grouped Bar or Column Chart"
    level: 3
  - title: "Best Practices"
    level: 4   
    content: |
       - Use this chart type when each category in your data has subcategories and you need to be able to easily compare between subcategories.
       - Think about the ways that different groupings can affects the takeaways for your users.
       - There should be more space between groups than between the bars within each group.
  - title: "Examples of Best Practices"
    level: 4
    cards:
    - title: "Space Between Groups"
      image: "/assets/images/datavis/charts/bar-and-column-charts/space-between-groups.png"
      alt: "An image of a grouped column chart showing that there is more space between the groups of bars than within the groups between individual bars. This makes the chart easy to read."
      content: Keeping more space between categories than subcategories makes comparisons easier.
      type: "do"
    - title: "Legends"
      image: "/assets/images/datavis/charts/bar-and-column-charts/legends.png"
      alt: "An image of a grouped column chart with a legend. Including a legend helps readers identify the different columns and categories."
      content: Adding a legend for subcategories helps users identify them when direct labeling isn’t possible.
      type: "do"
  - title: "Stacked Bar or Column Chart"
    level: 3
  - title: "Best Practices"
    level: 4   
    content: |
      - Use this chart type when you want to compare multiple subcategories in your data to their respective category totals.
      - Don’t use this chart type if you need to make comparisons between individual subcategories.
      - Don’t use this chart type for a single part-to-whole comparison—in that case, use a regular bar or column chart.
      - Highlight the most important subcategory by bringing it to the “bottom” of the chart; consider using color for only that subcategory.
  - title: "Examples of Best Practices"
    level: 4
    cards:
    - title: "Highlight the Most Important Subcategory"
      image: "/assets/images/datavis/charts/bar-and-column-charts/highlight-the-most-important-subcategory.png"
      alt: "An image of a stacked column chart where the most important category is on the bottom of the chart, along the x-axis, and is the only category in color; the others are in shades of gray. This makes it easy to identify and compare values and columns within that category."
      content: Make the most important subcategory in your chart (in this example, the blue) easy to identify and compare across categories by pulling it to the zero axis of the chart.
      type: "do"
  - title: "Example Charts"
  - title: "Figure 1: Stacked Column Chart Example"
    level: 4
    image: "/assets/images/datavis/charts/bar-and-column-charts/example-1.svg"
    alt: "An image of a stacked column chart showing the share of an imaginary country’s total emissions by region. Each region is a column; the subcategories within each region represent SO2, CO2, and NOX emissions. There is a legend at the bottom of the chart labeling which colors correspond to which subcategories."
  - title: "Figure 2: Bar Chart Example with One Category Highlighted using Color"
    level: 4
    image: "/assets/images/datavis/charts/bar-and-column-charts/example-2.svg"
    alt: "An image of a bar chart showing total generation of an imaginary country by fuel type, highlighting solar generation by applying this guide’s recommended Solar color—a moss green—to the Solar bar; all other bars are a dark gray."


 