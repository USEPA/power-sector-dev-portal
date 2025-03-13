---
title: "Using the Theme"
tagline: ""
introTitle: "Introduction"
introContent: |
        Welcome! This vignette will demonstrate how the EPA CAPD Data
        Visualization Style Guide can be integrated into your R visualizations.
        Through the use of the `{ggcapdthemes}` package and the `theme_capd`
        function, you can easily customize and standardize your ggplots!
introImage: "/assets/images/ggplot/using-the-theme/chart-layout.svg"   
introImgAlt: "An image showing an example line chart with its key elements labeled highlighted in red. The key elements of the chart include its title, subtitle, a labeled and titled y-axis, a labeled and titled x-axis, tick marks connecting x-axis labels to their respective points along the axis line, dotted gridlines, and the two labeled lines that represent the data behind the chart."
sections:
  - content: |
        Because this package is intended to augment the functionality of ggplot2, we suggest loading it prior to loading `ggcapdthemes`.
  - code: |
      library(ggplot2)
      library(ggcapdthemes)
  - content: |
      For R users looking for DVSG best practices that go beyond the theme, check out the [Best Practices](#/ggplot/best-practices) vignette.
  - title: "Applying the theme `theme_capd()`"
    level: 2
    content: |
        First, we start with some eGRID data shown in a ggplot bar chart, using the default ggplot theme. The `ggcapdthemes` package contains a data object called `gg_ex_bar` to use as a building block.
    code: |
        gg_ex_bar  
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-4-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the default ggplot theme applied, which means a gray background with white gridlines and the default rainbow-hued color scheme for the data bars."
  - content: | 
      Next, we add the `theme_capd()` function to apply our custom theme.
    code: |  
      gg_ex_bar +
        theme_capd() 
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-5-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is now white and the gridlines are now horizontal and a dotted light gray. The default color scheme is still applied."
  - content: | 
      To change the orientation of the axis and grid lines to the y-axis, we can provide the `axis_lines = 'vert'` argument. The default is ‘horiz’ for horizontal (x-axis and horizontal grid lines shown).
    code: |  
      gg_ex_bar +
        theme_capd(axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-6-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The orientation of the axis and gridlines has now been changed to vertical to match the fact that this is a bar chart. The default color scheme is still applied."
  - content: | 
      Other theme specifications can be controlled with the `ticks`, `grid_lines`, and `legend_position` arguments, as shown here.
    code: |  
      gg_ex_bar +
         scale_fill_capd_discrete(palette = 'fuel_type') +
         theme_capd(grid_lines = c('major','minor'), 
                    axis_lines = 'vert', 
                    ticks = TRUE, 
                    legend_position = 'none')        
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-7-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. Tick marks have now been added to the x-axis labels and the legend had been removed to show that that’s possible. The default color scheme is still applied."
  - content: | 
      Lastly, we can add the `scale_fill_capd_discrete` function to apply a custom color palette for fuel types.
    code: |  
      gg_ex_bar +
         theme_capd(grid_lines = c('major','minor'), 
                    axis_lines = 'vert', 
                    ticks = TRUE, 
                    legend_position = 'none')        
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-8-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The custom fuel type color palette from the CAPD data visualization style guide has now been applied so that the colors of the bars match the fuel type they’re representing."
  - title: "General theme info"
    level: 3
    content: |
        The “Source Sans 3” font is downloaded from Google Fonts and applied to all when `theme_capd` is used. An initial font size is specified using the `base_size` argument; this defaults to 11pt, but we will use 10pt for this example.
  - title: "Font sizing: `base_size`"
    level: 3
    content: |
        Other fonts throughout the chart are re-sized relative to the `base_size`, using the `ggplot2::rel` function. The `half_line` setting is used for margins.
  - code: |  
      gg_ex_bar +
         theme_capd(base_size = 11)
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-9-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are horizontal and a dotted light gray. The default color scheme is still applied."
  - code: |  
      gg_ex_bar +
         theme_capd(base_size = 6)
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-9-2.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are horizontal and a dotted light gray. The default color scheme is still applied. The font size has been decreased and is now almost illegible."
  - code: |  
      gg_ex_bar +
          theme_capd(base_size = 16)
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-9-3.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are horizontal and a dotted light gray. The default color scheme is still applied. The font size has been increased and now takes up a lot of the chart space, while the data bars appear smaller."
  - content: |
        Here we see the font applied to all text elements by default; they will be re-sized in the sections below.

        Plot annotations such as titles, subtitles is formatted through the following theme options. The title size is magnified 20% compared to `base_size`, while the caption is decreased 20%.
  - title: "Axis line orientation: `axis_lines`"
    level: 3
  - code: |  
      ## default: 'horiz'
      gg_ex_bar +
          theme_capd(axis_lines = 'horiz')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-10-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are horizontal and a dotted light gray. The default color scheme is still applied."
  - code: |  
      gg_ex_bar +
           theme_capd(axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-10-2.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The orientation of the axis and gridlines has now been changed to vertical to match the fact that this is a bar chart. The default color scheme is still applied."
  - code: |  
      gg_ex_bar +
            theme_capd(axis_lines = 'both')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-10-3.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The orientation of the axis and gridlines has now been changed to both so that girdlines and axis lines appear both vertically and horizontally. The default color scheme is still applied."
  - title: "Gridlines: `grid_lines`"
    level: 3
    content: |
      The `grid_lines` arguments controls which sets of gridlines to display.

       Possible options include
        - major grid lines `'major'`
        - minor grid lines: `'minor'`
        - both major and minor: `c('major','minor')`
        - no gridlines: `'none'`

      Note that this interacts with the `axis_lines` argument and only shows the gridlines for the orientations specified. Other gridlines remain hidden.
  - code: |  
      gg_ex_bar +
          theme_capd(grid_lines = 'major', axis_lines = 'horiz')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-11-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are horizontal and a dotted light gray. The default color scheme is still applied."
  - code: |  
      gg_ex_bar +
          theme_capd(grid_lines = 'major', axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-11-2.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The orientation of the axis and gridlines has now been changed to vertical to match the fact that this is a bar chart. The default color scheme is still applied."
  - code: |  
      gg_ex_bar +
          theme_capd(grid_lines = c('major','minor'), axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-11-3.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The orientation of the axis and gridlines has now been changed to vertical to match the fact that this is a bar chart. Minor gridlines are now showing in addition to the existing major ones. The default color scheme is still applied."
  - code: |  
      gg_ex_bar +
          theme_capd(grid_lines = 'none')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-11-4.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The orientation of the axis has now been changed to vertical to match the fact that this is a bar chart. The gridlines have been completely removed from the chart. The default color scheme is still applied."
  - title: "Tick Marks: `ticks`"
    level: 3
    content: |
       The `ticks` argument determines whether to show (TRUE) or hide (FALSE) the tick marks on the non-major axis, or the one perpendicular to the plot’s orientation. For vertical `axis_lines`, this is the y-axis ticks marks and for horizontal orientations, this is the x-axis tick marks.
  - code: |  
      gg_ex_bar +
          theme_capd(ticks = FALSE)
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-12-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are horizontal and a dotted light gray. The default color scheme is still applied."
  - code: |  
      gg_ex_bar +
          theme_capd(ticks = TRUE)
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-12-2.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are horizontal and a dotted light gray. Horizontal tick marks have been added to connect the category names to their respective bars. The default color scheme is still applied."
  - code: |  
      gg_ex_bar +
          theme_capd(ticks = TRUE, axis_lines = 'both')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-13-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are showing both horizontally and vertically and are a dotted light gray. Horizontal tick marks have been added to connect the category names to their respective bars. Vertical tick marks have been added to connect x-axis labels to the axis line. The default color scheme is still applied."
    content: | 
      When `axis_lines = 'both'`, this controls whether to show both x-axis and y-axis tick marks.
  - title: "Legend: `legend_position`"
    level: 3
    content: |
        This is a wrapper for the `legend.position` ggplot theme argument. Valid options for `legend_position` are ‘top’, ‘bottom’, ‘left’, ‘right’, or ‘none’ to hide it.
  - code: |  
      gg_ex_bar +
          theme_capd(legend_position = 'top')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-14-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are horizontal and a dotted light gray. The legend has been moved from the right side of the chart to above it. The default color scheme is still applied."
  - code: |  
      gg_ex_bar +
          theme_capd(legend_position = 'bottom')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-14-2.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are horizontal and a dotted light gray. The legend has been moved from the right side of the chart to below it. The default color scheme is still applied."
  - code: |  
      gg_ex_bar +
          theme_capd(legend_position = 'bottom')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-14-3.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied. The background is white and the gridlines are horizontal and a dotted light gray. The legend has been removed from the chart. The default color scheme is still applied."
  - title: "Applying color palettes"
    level: 2
    content: |
       Color scales are added separately from the theme, using the `scale_color_capd_*` and `scale_fill_capd_*` functions. Here we apply the “unordered” palette using `scale_color_capd_discrete`.
  - title: "Quantitative palettes"
    level: 3
    content: |
       Like tooltips, data labels can help make individual or important data
       points easier to identify
  - title: "Sequential"
    level: 4
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-15-1.svg" 
    alt: "An image of a sequential color palette in shades of blue showing what the palette looks like for 3 categories to 7 categories. "
  - title: "Divergent"
    level: 4
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-16-1.svg"
    alt: "An image of a divergent color palette in shades of red and blue showing what the palette looks like for 3 categories to 7 categories."
  - image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-17-1.svg" 
    alt: "An image of a divergent color palette in shades of gold and blue showing what the palette looks like for 3 categories to 7 categories"
  - title: "Categorical palettes"
    level: 3
  - title: "Fuel type palettes"
    level: 5
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-18-1.svg"
    alt: "An image of two categorial color palettes each showing 11 distinct colors for the 11 fuel types commonly described in CAPD products."
  - content: | 
        Example of a barchart using the `scale_fill_capd_discrete` function
    code: |
        ggplot(resource_mix[resource_mix$year==2023,],aes(y = resource_label, x = generation_resource_mix, fill = resource_label)) +
          geom_bar(stat='identity') +
          scale_fill_capd_discrete(palette='fuel_type')+
          scale_x_continuous(expand=c(0,0), labels=scales::label_percent())+
          labs(x='', y='Resource Mix (%)', title='eGRID 2023 Resource Mix', color='Resource') +
          theme_capd(axis_lines = 'vert', grid_lines = c('major','minor'), legend_position = 'none') 
    image: "/assets/images/ggplot/using-the-theme/example-barcart.svg"
    alt: "An image of a bar chart showing 11 distinct colors for the 11 fuel types commonly described in CAPD products."
  - content: | 
        Example of a line plot using the `scale_color_capd_discrete` function
    code: |
        ggplot(resource_mix,aes(x = year, y = generation_resource_mix*100, color = resource_label, group = resource_label)) +
          geom_line() +
          geom_point()+
          scale_color_capd_discrete(palette='fuel_type')+
          labs(x='', y='Resource Mix (%)', title='eGRID Annual Resource Mix, 2018-2023', color='Resource') +
          theme_capd(grid_lines = c('major','minor'))
    image: "/assets/images/ggplot/using-the-theme/example-line-plot.svg"
    alt: "An image of a line plot showing 11 distinct colors for the 11 fuel types commonly described in CAPD products."
  - title: "Combustion vs Non-Combustion"
    level: 5
    content: |
        All Combustion fuel types:

        Includes all fossil fuels (coal, oil, natural gas, blast furnace gas, and tire-derived fuel) and biomass, such as wood, agricultural byproducts, municipal solid waste, and landfill gas.
  - code: |  
      ggplot(combustion) +
        geom_bar(aes(x = resource_mix, y=region, group=region, fill=fuel_type), stat='identity') +
        scale_fill_capd_discrete(palette = 'combustion') +
        scale_x_continuous(expand = c(0,0)) + 
        labs(x = 'Resource Mix (%)', y='eGRID Subregion', fill = 'Fuel Type', title = '2023 eGRID Resource Mix',
        subtitle = 'by Combustion vs. Non-combustion fuels') +
        theme_capd(axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-19-1.svg"
    alt: "An image of a bar chart showing the resource mix by eGRID subregion. Combustion fuels are shown in a dark orange while non-combustion fuels are shown in blue."
  - title: "Renewables vs Non-renewables"
    level: 5
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-20-1.svg"
    alt: "An image of two categorical color palettes. The first shows 4 distinct colors for renewable, nonrenewable, hydro, and nuclear fuel types. The second shows 2 distinct colors for nonrenewable and renewable fuel types."
  - code: |  
      ggplot(renewables) +
        geom_bar(aes(x = resource_mix, y = region, group = region, fill = fuel_type), stat = 'identity') +
        scale_fill_capd_discrete(palette = 'renewables2') +
        scale_x_continuous(expand=c(0,0)) +
        labs(x = 'Resource Mix (%)', y='eGRID Subregion', fill = 'Fuel Type', title = '2023 eGRID Resource Mix',
        subtitle = 'by Renewable vs. Non-renewable fuels') +
        theme_capd(axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-21-1.svg"
    alt: "An image of a bar chart showing the resource mix by eGRID subregion. Nonrenewable fuels are shown in a dark orange while renewable fuels are shown in green."
  - title: "Pollutant palettes"
    level: 4
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-22-1.svg"
    alt: "An image of a categorical color palette showing 8 distinct colors for the 8 common pollutants described in CAPD products."
  - title: "Unordered palettes"
    level: 4
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-23-1.svg"
    alt: "An image of two unordered categorical color palettes, each made up of 6 distinct colors and shades of gray for use in categorical charts that do not use fuel types or pollutants."
