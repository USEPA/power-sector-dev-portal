---
title: "Area Charts"
tagline: "Note: all charts on this page are for illustrative purposes only and are not based on real data."
introTitle: "Introduction"
introContent: | 
       We generally don’t recommend using area charts or stacked area charts for most scenarios. The former can suffer from some data “hiding” or occluding other data, while the latter looks misleadingly like a series of trend lines but cannot accurately be read as such because most lines lack a consistent baseline. However, if you do decide to use either chart type, there are ways to make them more legible.
sections:
  - title: "When *not* to Use Area and Stacked Area Charts"
    level: 3
    content: |
        The benefits of simple line charts are that they allow for easy comparison among a few variables. In an area chart, that comparison is harder to make: most of one category is obscured by the other. In a stacked area chart, making comparisons becomes even more difficult. Viewers of stacked area charts need to perform subtraction to compare the performance of two lines or identify inflection points, reducing the value of presenting this data in a visual medium in the first place.
    cards:
    - title: "Line Charts Make Comparisons Easy"
      image: "/assets/images/datavis/charts/area-charts/line-charts-make-comparisons-easy.png"
      alt: "An image of a multi-line chart with two overlapping lines where two point on one line are highlighted with a dot. It is easy to tell that one dot is higher than the other dot. The point at which the lines cross one another for the third time is marked with a vertical line."
      content: In this chart, it’s easy to see that the solid red line is a point at which gray overtakes blue. It’s also easy to see that the leftmost red dot on the blue line is higher than the rightmost.
      type: "default"
    - title: "Area Charts Obscure Data Points"
      image: "/assets/images/datavis/charts/area-charts/area-charts-obscure-data-points.png"
      alt: "An image of an area chart where one category occludes the other in some parts. A dot indicates a single data point in one category, but the other category covers the first in many areas. The point at which the categories cross one another for the third time is marked with a vertical line."
      content: While you can still see the point at which gray category overtakes blue, you lose the ability to meaningfully plot multiple lines if they cross one another. You can no longer compare the blue category at each of the red dots because its position at one of them is obscured.
      type: "default"
    - title: "Stacked Area Charts Skew Relationships"
      image: "/assets/images/datavis/charts/area-charts/stacked-area-charts-skew-relationships.png"
      alt: "An image of a stacked area chart. Two points in one category are highlighted with a dot but it is difficult to see which is truly higher than the other because of the chart type. The point at which the categories cross one another for the third time is marked with a vertical line, but without the line it would be difficult to know where that crossover took place."
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
      alt: "An image of a stacked area chart with four categories. It is difficult to pinpoint exact values or to make comparisons between specific points in each category."
      content: In this chart, exact values are hard to pinpoint and comparisons are hard to make, but the overall proportions of the categories are visible.
      type: "default"
    - title: "100% Stacked Area Chart"
      image: "/assets/images/datavis/charts/area-charts/100pct-stacked-area-chart.png"
      alt: "An image of a 100% stacked area chart with four categories. It is difficult to pinpoint exact values or to make comparisons between specific points in each category."
      content: In this chart, like the previous one, the focus is on the proportions that make up the whole.
      type: "default"
  - title: "Stacked Area Charts: A Case Study in Simplification"
    level: 3
    content: |
        As with most charts, the more simple you can make your stacked area chart, the easier it will be to read, which in turn lets you communicate your main point with the chart more effectively.
    cards:
    - title: "Step 1: A Difficult Chart to Read"
      image: "/assets/images/datavis/charts/area-charts/a-difficult-chart-to-read.png"
      alt: "An image of a stacked area chart with five categories. It is difficult to pinpoint exact values or to make comparisons between specific points in each category."
      content: This chart is overly complicated and obscures the trend of the blue category, the one we’re most interested in.
      type: "default"
    - title: "Step 2: Make Divisions Clear"
      image: "/assets/images/datavis/charts/area-charts/make-divisions-clear.png"
      alt: "An image of a stacked area chart with five categories. It is difficult to pinpoint exact values or to make comparisons between specific points in each category, but a high contrast border has been applied to each of the categories so they are easier to distinguish from one another."
      content: Add a border in the same color as the background of the chart to make divisions between categories more clear. In this case, we should also add a dark border to the green category because it’s a light shade.
      type: "default"
    - title: "Step 3: “Ground” the Important Category"
      image: "/assets/images/datavis/charts/area-charts/ground-the-important-category.png"
      alt: "An image of a stacked area chart with five categories with high-contrast borders. The most important category has been brought to the bottom of the chart so it sits on the x-axis. This baseline makes it easier to pinpoint exact values in that category, but not the others."
      content: Keep your most important category at the bottom of the chart so the solid baseline makes it easier to pick out exact values.
      type: "default"
    - title: "Step 4: Use Color for Emphasis"
      image: "/assets/images/datavis/charts/area-charts/use-color-for-emphasis.png"
      alt: "An image of a stacked area chart with five categories with high-contrast borders where the most important category sits on the x-axis. All categories except the most important ones have been assigned different shades of gray, while the most important category is in blue so that it is visually emphasized."
      content: Use color to further highlight the most important category.
      type: "default"
    - title: "Step 5: Simplify Number of Categories"
      image: "/assets/images/datavis/charts/area-charts/simplify-number-of-categories.png"
      alt: "An image of a stacked area chart with high-contrast borders where the most important category sits on the x-axis and is blue, while the other categories are in shades of gray. The smallest three categories have been combined into one larger category so that there are now three total categories. This makes the chart easier to parse. "
      content: Consider rolling smaller categories into a single larger category.
      type: "default"
    - title: "Optional Step 6: Convert to Grouped Column Chart"
      image: "/assets/images/datavis/charts/area-charts/convert-to-grouped-bar-chart.png"
      alt: "An image of a grouped column chart with three categories. The most important category is in blue while the other two are in shades of gray. This chart type makes it easier to compare specific values across categories."
      content: Or, consider using a grouped column chart instead if specific values and comparisons are important.
      type: "default"