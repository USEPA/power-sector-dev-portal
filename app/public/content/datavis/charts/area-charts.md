---
title: "Area Charts"
tagline: ""
introTitle: "Introduction"
introContent: | 
       We generally don’t recommend using area charts or stacked area charts for most scenarios. The former can suffer from some data “hiding” or occluding other data, while the latter looks misleadingly like a series of trend lines but cannot accurately be read as such because most lines lacks a consistent baseline. However, if you do decide to use either chart type, there are ways to make them more legible.
sections:
  - title: "When *not* to Use Area and Stacked Area Charts"
    level: 3
    content: |
        The benefits of simple line charts are that they allow for easy comparison among a few variables. In an area chart, that comparison is harder to make: most of one category is obscured by the other. In a stacked area chart, making comparisons becomes even more difficult. Viewers of stacked area charts need to perform subtraction to compare the performance of two lines or identify inflection points, reducing the value of presenting this data in a visual medium in the first place.
    cards:
    - title: "Line Charts Make Comparisons Easy"
      image: "/assets/images/datavis/charts/area-charts/line-charts-make-comparisons-easy.png"
      content: In this chart, it’s easy to see that the solid red line is a point at which gray overtakes blue. It’s also easy to see that the leftmost red dot on the blue line is higher than the rightmost.
      type: "default"
    - title: "Area Charts Obscure Data Points"
      image: "/assets/images/datavis/charts/area-charts/area-charts-obscure-data-points.png"
      content: While you can still see the point at which gray category overtakes blue, you lose the ability to meaningfully plot multiple lines if they cross one another. You can no longer compare the blue category at each of the red dots because its position at one of them is obscured.
      type: "default"
    - title: "Stacked Area Charts Skew Relationships"
      image: "/assets/images/datavis/charts/area-charts/stacked-area-charts-skew-relationships.png"
      content: | 
         In this chart, it becomes harder to make comparisons between specific values within or between either category, because the blue lacks a consistent baseline; instead, its value are now dependent on those of the gray, which obscures trends. The leftmost red dot on the blue is now lower than the rightmost, which is the reverse of the actual values.

         It also becomes much harder to see if/when one category overtakes another. What is clear in the first line chart is that there’s a period of time during which blue is higher than gray, but this is much harder to see here.
      type: "default"
  - title: "When to Use Stacked Area Charts"
    level: 3
    content: |
        If the exact values of each category are less important than the composition of the whole and how the combination changes over time, a stacked area chart would be a permissible choice.
    cards:
    - title: "Stacked Area Chart"
      image: "/assets/images/datavis/charts/area-charts/stacked-area-chart.png"
      content: In this chart, exact values are hard to pinpoint and comparisons are hard to make, but the overall proportions of the categories are visible.
      type: "default"
    - title: "100% Stacked Area Chart"
      image: "/assets/images/datavis/charts/area-charts/100pct-stacked-area-chart.png"
      content: In this chart, like the previous one, the focus is on the proportions that make up the whole.
      type: "default"
  - title: "Stacked Area Charts: A Case Study in Simplification"
    level: 3
    content: |
        As with most charts, the more simple you can make your stacked area chart, the easier it will be to read, which in turn lets you communicate your main point with the chart more effectively.
    cards:
    - title: "Step 1: A Difficult Chart to Read"
      image: "/assets/images/datavis/charts/area-charts/a-difficult-chart-to-read.png"
      content: This chart is overly complicated and obscures the trend of the blue category, the one we’re most interested in.
      type: "default"
    - title: "Step 2: Make Divisions Clear"
      image: "/assets/images/datavis/charts/area-charts/make-divisions-clear.png"
      content: Add a border in the same color as the background of the chart to make divisions between categories more clear. In this case, we should also add a dark border to the green category because it’s a light shade.
      type: "default"
    - title: "Step 3: “Ground” the Important Category"
      image: "/assets/images/datavis/charts/area-charts/ground-the-important-category.png"
      content: Keep your most important category at the bottom of the chart so the solid baseline makes it easier to pick out exact values.
      type: "default"
    - title: "Step 4: Use Color for Emphasis"
      image: "/assets/images/datavis/charts/area-charts/use-color-for-emphasis.png"
      content: Use color to further highlight the most important category.
      type: "default"
    - title: "Step 5: Simplify Number of Categories"
      image: "/assets/images/datavis/charts/area-charts/simplify-number-of-categories.png"
      content: Consider rolling smaller categories into a single larger category.
      type: "default"
    - title: "Optional Step 6: Convert to Grouped Bar Chart"
      image: "/assets/images/datavis/charts/area-charts/convert-to-grouped-bar-chart.png"
      content: Or, consider using a grouped bar column instead if specific values and comparisons are important.
      type: "default"