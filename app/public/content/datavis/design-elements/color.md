---
title: "Color"
tagline: "Guidelines on using color effectively in visualizations."
introTitle: "Introduction"
introContent: "This guide’s data visualization color palettes are built using the USWDS’s existing color guidance and are intended to adhere to our internal principles around accessibility, clarity, and consistency. This section of the guide aims to provide practical palettes to use in common quantitative and categorical data visualizations while also providing palettes for more CAPD-specific use cases such as fuel and pollutant types."
sections:
  - title: "Color as Highlight"
    level: 3
    content: |
      Color can be used to encode meaning in numerous ways, but it should be used sparingly when possible and in accordance with accessibility best practices (outlined in the next section). In general, think about what color(s) or color palette you want to use based on the aspect of the visualization you want to call attention to.

      In some cases, color can be used to draw attention to important parts of a chart without overwhelming the user by employing it as a highlight. For example, if you are producing a trend chart that contains multiple lines and you want users to attend to one specific line, a single color can be used to highlight that line of interest to distinguish it from the rest. This is often more productive than applying different colors to each line and asking users to direct their attention through the maze of encodings to the line you want them to pay attention to.
    cards:
    - title: "Color as Highlight"
      image: "/assets/images/datavis/design-elements/color/color-as-highlight.png"
      content: "Strategic use of color can emphasize certain data points over others."
      type: "default"  
  - title: "Color and Accessibility"
    level: 3
  - title: "Contrast"
    level: 4
    content: |
          Contrast (between a data element and the background of a chart, and/or between different data elements) is essential in maintaining accessible visualizations. Ways to ensure that include using a dark border around elements whose color is too light to have sufficient contrast with the background or other elements, and using palettes that prioritize high contrast between neighboring colors. You can test existing or new color combinations using tools like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
  - title: "Additional Encodings (Beyond Color)"
    level: 4
    content: |
      The most accessible way to build a data visualization is to use something other than color to encode meaning; this way, you can sidestep many of the issues inherent to using color mentioned above. In practice, this can mean using patterned fills overlaid onto color scales (stripes, cross hatches, dots, etc.) and employing symbols to represent different categories in things like scatterplots or line charts. See the [Symbology](#/datavis/design-elements/symbology) page for more information.
  - title: "Quantitative Palettes"
    content: |
      Quantitative palettes are essential for representing data that has a natural order or scale. In this section, we examine different types of quantitative palettes and their appropriate usage.
    level: 2
  - title: "Sequential Palette"
    level: 3
    content: |
      Sequential scales can be used to show differences in quantitative data. For example, a choropleth map showing total CO² emissions by state might use a sequential color scale. Darker colors should be used for higher numbers. Keep in mind that some lighter colors don’t have high contrast with white backgrounds and may need a darker border (in this case **#274863**, the darkest of this palette) to be accessible.
    image: "/assets/images/datavis/design-elements/color/sequential-palettes.svg"
  - title: "Divergent Palettes"
    level: 3
    content: |
     If your quantitative data has a clear “midpoint” or “neutral” value, a divergent scale can highlight deviations from that point. For example, a choropleth map showing differences between states’ total CO² emissions and the national average for those emissions might use a divergent color scale. Keep in mind that some lighter colors don’t have high contrast with white backgrounds and may need a darker border (in this case **#274863**, **#78312**, or **#5C410A**, the darkest of these palettes) to be accessible.
  - title: "Divergent Palette 1"
    level: 4
    image: "/assets/images/datavis/design-elements/color/divergent-palette-1.svg"
  - title: "Divergent Palette 2"
    level: 4
    image: "/assets/images/datavis/design-elements/color/divergent-palette-2.svg"
  - title: "Bivariate Palettes"
    level: 3
    content: |
       If you want to encode two variables or aspects of your data through color, you can use a bivariate color palette. For example, a choropleth map showing how states compare on both amount and severity of pollution exposure could use a bivariate scale. Keep in mind that some lighter colors don’t have high contrast with white backgrounds and may need a darker border (in this case, **#1B3F09** or **#412E4E**, the darkest of the palettes) to be accessible.
    image: "/assets/images/datavis/design-elements/color/bivariate-palettes.svg"
  - title: "Categorical Palettes"
    level: 2
  - title: "Fuel Type Palettes"
    level: 3
    content: |
      Fuel types should be represented with the same colors across web products. Below are the colors for the eleven fuel types already used in visualizations as well as colors for common categories of those fuel types. The Main Fuel Type Palette can be used for all chart types. The Alternate Fuel Type Colors should not be used for line charts; if you use these colors, darker borders (specific colors called out below) need to be used so they are accessible when presented against a white background.
  - title: "Main Fuel Type Palette"
    level: 4
    image: "/assets/images/datavis/design-elements/color/main-fuel-type.svg"
  - title: "Alternate Type Palette"
    level: 4
    image: "/assets/images/datavis/design-elements/color/alternate-fuel-type.svg"
  - title: "Consolidated Fuel Type Palettes: Renewables"
    level: 4
    content: |
       Use these palettes for commonly grouped renewable fuel types, like in the Data Explorer and Power Profiler’s fuel mix visualizations.
    image: "/assets/images/datavis/design-elements/color/consolidated-fuel-type-renewables.svg"
  - title: "Consolidated Fuel Type Palette: Combustion"
    level: 4
    content: |
       Use these colors for commonly grouped combustion fuel types, like in the Data Explorer’s fuel mix visualizations.
    image: "/assets/images/datavis/design-elements/color/consolidated-fuel-type-combustion.svg"
  - title: "Pollutant Palette"
    level: 3
    content: |
       Pollutant types should be represented with the same colors across web products. Below are the colors for common types already used in visualizations.
    image: "/assets/images/datavis/design-elements/color/poluttant-palette.svg"
  - title: "Unordered Palettes"
    level: 3
    content: |
       You can use this type of palette if your data has a non-ordered nominal element you want to call attention to. For example, a chart comparing the electricity generated by two regions in the U.S. could use a nominal palette to distinguish between the two. Use a light gray (**#C9C9C9**) with a darker gray border (**#2E2E2E**) to represent non-important or “other” data elements in these palettes.
    image: "/assets/images/datavis/design-elements/color/unordered-palettes.svg"
