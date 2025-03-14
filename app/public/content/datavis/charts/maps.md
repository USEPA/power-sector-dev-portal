---
title: "Maps"
tagline: "Note: all charts on this page are for illustrative purposes only and are not based on real data."
introTitle: "Introduction"
introContent: | 
        Maps are most useful when you have data that needs to be communicated geographically: when patterns or trends in the data exist along geographies.

        You might want to consider a different chart type if:
        - Your audience doesn’t need to “see” the geography underlying the data. Ask yourself whether a table of states (for example) will be enough to communicate the information.
        - The physical geography would cause bias in interpreting the data. (For example, larger states are more visually salient--does this influence how reader interpret your map by putting undue emphasis on those states?) Ask yourself if the geography is overwhelming other aspects of your data.
sections:
  - title: "General Map Guidance"
    level: 2
    content: |
      Before deciding what kind of map to create, you should think about whether you’re plotting point or shape data. For example, power plants are point data, while counties, regions, and states are shape data. When dealing with shapes, also think about granularity: are you hiding valuable geographic trends in, say, emissions by aggregating data up to the state level that would be better shown at the county level? Or the reverse: are you hiding valuable data about states’ emissions by plotting individual plants when you could be showing that data at the state level?
  - title: "Choropleth Maps"
    level: 2
    content: |
      Use a choropleth map when your data can be normalized and aggregated up to a common geographic boundary, such as counties or states. The focus with this type of map is on how a variable affects place.
  - title: "Best Practices"
    level: 3
    content: |
      - Your map’s text should have high contrast with your basemap, but with an outline that’s a similar shade; this helps makes it readable against any map elements.
          - Text should sit on top of any additional layers so it stays legible.
      - In general, if your data is not already expressed in terms of percentages or rates, you should normalize it. This helps to avoid allowing the size or population of your geography to skew perceptions of the data. For ­example, if you’re producing a map that shows impacts of emissions on different populations, using data per capita will make comparisons between block groups, counties, or states easier than using raw counts.
  - title: "Examples of Best Practices"
    level: 3 
    cards:
    - title: "Text"
      alt: "An image of a choropleth map of Pennsylvania. Pittsburgh and Philadelphia are labeled, and the text for each label is a dark color with a light border. The text sits on top of all other elements of the map so it is legible."
      image: "/assets/images/datavis/charts/maps/choropleth-text-do.png"
      content: Text should sit on top of other layers. Its color should contrast with that of the basemap and it should have a lighter-colored border.
      type: "do"
    - title: "Data"
      alt: "An image of a choropleth map’s legend. The data ranges are labeled in percents, not raw counts, to emphasize that it’s important to normalize data for maps."
      image: "/assets/images/datavis/charts/maps/choropleth-data-do.png"
      content: Data should typically be normalized if not already expressed in rates or percentages.
      type: "do"
  - title: "Things to Avoid" 
    level: 3 
    cards:
    - title: "Text"
      alt: "An image of a choropleth map of Pennsylvania. Pittsburgh and Philadelphia are labeled, and the text for each label is a dark color. The text sits underneath the choropleth layer of the map and is thus not legible."
      image: "/assets/images/datavis/charts/maps/choropleth-text-do-not.png"
      content: Text should not sit underneath other layers, lack a border, or have a low-contrast color.
      type: "do not"
    - title: "Data"
      alt: "An image of a choropleth map’s legend. The data ranges are labeled in number of people, which is not usually a recommended practice for maps."
      image: "/assets/images/datavis/charts/maps/choropleth-data-do-not.png"
      content: Don’t plot raw counts on a map (unless the focus is purely on population, for example).
      type: "do not"
  - title: "Color Palettes"
    level: 3 
    content: |
      Use different color palettes depending on how many variables and what kinds of changes to them you want to show in your choropleth map.

      You can read about these palettes in more detail and grab specific hex codes on the [Color page](#/datavis/design-elements/color) of this guide.
    cards:
    - title: "Sequential Palette"
      alt: "An image of a choropleth map of Pennsylvania in a sequential color palette emphasizing differences in one direction in a single variable. In this case, the legend shows that the map is tracking percent differences ranging from zero to twenty-five percent."
      image: "/assets/images/datavis/charts/maps/choropleth-palettes-sequential.png"
      content: Use this color palette when showing difference in one direction for a single variable.
      type: "default"
    - title: "Divergent Palette"
      alt: "An image of a choropleth map of Pennsylvania in a divergent color palette emphasizing differences in two directions in a single variable. In this case, the legend shows that the map is tracking percent differences ranging from negative fifteen percent to positive twenty-three percent."
      image: "/assets/images/datavis/charts/maps/choropleth-palettes-divergent.png"
      content: Use this color palette when showing differences in a single variable whose data has a clear midpoint.
      type: "default"
    - title: "Bivariate Palette"
      alt: "An image of a choropleth map of Pennsylvania in a bivariate color palette showing differences in two variables at the same time. In this case, the legend shows that the map is tracking the percent of a population with asthma and levels of exposure to PM2.5."
      image: "/assets/images/datavis/charts/maps/choropleth-palettes-bivariate.png"
      content: Use this color palette to show differences in two variables simultaneously.
      type: "default"
  - title: "Color Interpolation"
    level: 3 
    content: |
      Use different color palettes depending on how many variables and what kinds of changes to them you want to show in your choropleth map.
    cards:
    - title: "Linear Interpolation"
      alt: "An image of a choropleth map of Pennsylvania in a sequential color palette showing differences in one direction in a single variable. To the right of the map is a histogram showing the distribution of data points being represented in the map. The data points are divided into color categories and assigned a color using linear interpolation, which results in a map that emphasizes outliers in the data but includes most of the rest of the data in the same category. "
      image: "/assets/images/datavis/charts/maps/choropleth-interpolation-linear.png"
      content: This interpolation is best if your data is evenly distributed or, if not, when you want to highlight outliers. However, it makes it harder to discern between data points because many will have a similar color.
      type: "default"
    - title: "Quantiles"
      alt: "An image of a choropleth map of Pennsylvania in a sequential color palette showing differences in one direction in a single variable. To the right of the map is a histogram showing the distribution of data points being represented in the map. The data points are divided into color categories and assigned a color using quantiles, which results in a map that de-emphasizes outliers in the data but makes it harder to differentiate between data points on the outer edges of the range."
      image: "/assets/images/datavis/charts/maps/choropleth-interpolation-quantiles.png"
      content: This interpolation minimizes the effect of outliers on the color scale, but also makes it hard to differentiate between “high” and “super high” for instance. (It makes outliers harder to spot.)
      type: "default"
    - title: "Natural Breaks/Jenks"
      alt: "An image of a choropleth map of Pennsylvania in a sequential color palette showing differences in one direction in a single variable. To the right of the map is a histogram showing the distribution of data points being represented in the map. The data points are divided into color categories and assigned a color using natural breaks, which results in a map where differences between categories as well as outliers are easy to spot."
      image: "/assets/images/datavis/charts/maps/choropleth-interpolation-natural.png"
      content: This interpolation is a compromise between linear and quantiles. It’s a way of splitting your data into groups that maximizes the differences between the groups while minimizing differences inside of them. It results in groups with fewer far apart data points and more close together data points so that differences between data groups are easier to spot while still showing outliers.
      type: "default"
  - title: "Point Maps"
    level: 2
    content: |
      If your data cannot or should not be normalized or aggregated to broader geographic areas, you can use a point or bubble map to show it. Point maps are best for showing precisely where and what things are, especially when combined with icons. For example, a map showing what kinds of power plants are near cities, rivers, or other geographic features could be a point map with different icons representing different types of power plants.
  - title: "Best Practices"
    level: 3
    content: |
      - If using icons, keep them simple, high-contrast, and fixed-size in relation to the data they represent (they can scale slightly while zooming in and out for legibility)
        - Do not scale icons relative to the data. (It’s hard for people to gauge differences in size of irregular objects.)
  - title: "Examples of Best Practices"
    level: 3 
    cards:
    - title: "Icons"
      alt: "An image of a zoomed-in portion of a choropleth map of Pennsylvania with flame-shaped icons dotted throughout. The icons are simple and high-contrast against the color scheme of the map, which makes them easy to spot. "
      image: "/assets/images/datavis/charts/maps/point-icons-do.png"
      content: Keep icons simple and high-contrast against your map’s other layers.
      type: "do"
  - title: "Things to Avoid"
    level: 3 
    cards:
    - title: "Icons"
      alt: "An image of a zoomed-in portion of a choropleth map of Pennsylvania with flame-shaped icons dotted throughout. The icons have been altered so some of them are bigger than others. This makes the map harder to understand because it’s difficult to compare sizes of irregular icons."
      image: "/assets/images/datavis/charts/maps/point-icons-do-not.png"
      content: Don’t scale icons to show changes in your data.
      type: "do not"
  - title: "Bubble Maps"
    level: 2
    content: |
      If your data cannot or should not be normalized or aggregated to broader geographic areas, you can use a point or bubble map to show it. Bubble maps are best for showing amounts in addition to specific, point-based locations. They’re also good for visualizing information about absolute numbers. For example, to visualize emissions from the power plants you identified in a point map, you could use bubbles to represent tons of emissions.
  - title: "Best Practices"
    level: 3
    content: |
      - Bubbles should be a little bit see-through (i.e., their opacity should be less than 100%).
      - A contrasting border should be added to bubble to further make overlaps clear.
      - Data should map to bubble area, not radius. This should always be made clear in a legend.
      - If possible, adjust the scale for bubble sizes when data is filtered so the full extent of the scale is being used.
      - Don’t use more than one characteristic (e.g., both color and size) to encode the same variable. For example, if emissions are being shown by the size of the bubbles, you don’t also need to add a color scale to show the same thing.
  - title: "Examples of Best Practices"
    level: 3
    cards:
    - title: "Opacity"
      alt: "An image of a zoomed-in portion of an outline-only bubble map of Pennsylvania. The bubbles are slightly see-through, which makes it easy to interpret overlapping bubbles."
      image: "/assets/images/datavis/charts/maps/bubble-opacity-do.png"
      content: Bubbles should be a little see-through to allow users to interpret overlaps. A contrasting border should be added to bubble to further make overlaps clear.
      type: "do"
    - title: "Data Mapping"
      alt: "An image of a zoomed-in portion of an outline-only bubble map of Pennsylvania and its accompanying legend. The legend reveals that each bubble is scaled to the data according to its area, not radius. This makes the differences between bubbles easy to understand."
      image: "/assets/images/datavis/charts/maps/bubble-mapping-do.png"
      content: Data should be encoded in a bubble’s area, not its radius. A legend should make this clear.
      type: "do"
    - title: "Data Encoding"
      alt: "An image of a legend showing bubble sizes and values. In this case, the data is scaled only according to the size of each bubble."
      image: "/assets/images/datavis/charts/maps/bubble-encoding-do.png"
      content: Use one characteristic to represent one variable.
      type: "do"
  - title: "Things to Avoid"
    level: 3
    cards:
    - title: "Opacity"
      alt: "An image of a zoomed-in portion of an outline-only bubble map of Pennsylvania. The bubbles are completely opaque, which makes it difficult to interpret overlapping bubbles as some end up blocking others."
      image: "/assets/images/datavis/charts/maps/bubble-opacity-do-not.png"
      content: Don’t make your bubbles 100% opaque or larger ones might block smaller, underlying ones. (In this example, a smaller bubble near the bottom left corner of the image is being occluded by a larger one.)
      type: "do not"
    - title: "Data Mapping"
      alt: "An image of a zoomed-in portion of an outline-only bubble map of Pennsylvania and its accompanying legend. The legend reveals that each bubble is scaled to the data according to its radius, not area. This makes the differences between bubbles difficult to understand and is not a recommended practice."
      image: "/assets/images/datavis/charts/maps/bubble-mapping-do-not.png"
      content: Do not encode data in a bubble’s radius, doing so inappropriately magnifies differences in the data.
      type: "do not"
    - title: "Data Encoding"
      alt: "An image of a legend showing bubble sizes and values. In this case, each bubble has both a size and a color opacity that corresponds to the same variable in the data. This is not a recommended practice."
      image: "/assets/images/datavis/charts/maps/bubble-encoding-do-not.png"
      content: Don’t use more than one characteristic (in this example, both size and opacity) to represent the same variable.
      type: "do not"
  - title: "Example Charts"
    level: 3
  - title: "Figure 1: Single-Variable Choropleth Map Example"
    level: 4
    alt: "An image of a choropleth map showing changes in the SO2 total output emission rate in the United States, state by state. The map uses a diverging color palette to show that changes in rate can be both positive and negative."
    image: "/assets/images/datavis/charts/maps/example-1.svg"    
  - title: "Figure 2: Icon Map Example"
    level: 4
    alt: "And image of an icon map showing biomass powerplants in the state of Ohio. The icons used are the recommended biomass icon presented elsewhere in this guide. They have a dark border so the icons contrast with the light gray of the basemap."
    image: "/assets/images/datavis/charts/maps/example-2.svg"


 