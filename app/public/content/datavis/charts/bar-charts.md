---
title: "Bar Charts"
tagline: ""
introTitle: "Introduction"
introContent: | 
        Bar and column charts are most useful when you have data you want to compare across categories on a nominal or ordinal scale or when you have time-based data that is measured discreetly (for example, changes in emissions that are only measured once a year).

        If each category has multiple data points associated with it that you want to call out, you may want to use a boxplot or other chart type. Similarly, if you have a large number of categories, using a lollipop chart can help reduce clutter.
sections:
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
      content: In a column chart, the y-axis starts at zero and measures the quantitative variable in your dataset.
      type: "do"
    - title: "Category Labels"
      image: "/assets/images/datavis/charts/bar-and-column-charts/column-category-labels-do.png"
      content: The names of your categories (columns) should be short and center-aligned. If you have longer category names, consider using a bar chart instead.
      type: "do"
  - title: "Things to Avoid"
    level: 4
    cards:
    - title: "Y-Axis"
      image: "/assets/images/datavis/charts/bar-and-column-charts/column-y-axis-do-not.png"
      content: Don’t start a column chart’s y-axis at a non-zero number.
      type: "do not"
    - title: "Category Labels"
      image: "/assets/images/datavis/charts/bar-and-column-charts/column-category-labels-do-not.png"
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
      content: In a bar chart, the x-axis starts at zero and measures the quantitative variable in your dataset.
      type: "do"
    - title: "Category Labels"
      image: "/assets/images/datavis/charts/bar-and-column-charts/bar-category-labels-do.png"
      content: The names of your categories (bars) can be longer with this chart type. Their labels should be right-aligned.
      type: "do"
  - title: "Things to Avoid"
    level: 4
    cards:
    - title: "X-Axis"
      image: "/assets/images/datavis/charts/bar-and-column-charts/bar-x-axis-do-not.png"
      content: Don’t start a column chart’s x-axis at a non-zero number.
      type: "do not"
    - title: "Category Labels"
      image: "/assets/images/datavis/charts/bar-and-column-charts/column-category-labels-do-not.png"
      content: Don’t use long labels for column charts.
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
      content: Keeping more space between categories than subcategories makes comparisons easier.
      type: "do"
    - title: "Legends"
      image: "/assets/images/datavis/charts/bar-and-column-charts/legends.png"
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
      content: Make the most important subcategory in your chart (in this example, the blue) easy to identify and compare across categories by pulling it to the zero axis of the chart.
      type: "do"


 