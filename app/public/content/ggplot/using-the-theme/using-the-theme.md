---
title: "Using the Theme"
tagline: ""
introTitle: "Introduction"
introContent: |
        Welcome! This vignette will demonstrate how the EPA CAPD Data
        Visualization Style Guide can be integrated into your R visualizations.
        Through the use of the `{ggcapdthemes}` package and the `theme_capd`
        function, you can easily customize and standardize your ggplots!

        Because this package is intended to augment the functionality of
        ggplot2, we suggest loading it prior to loading `ggcapdthemes`.
introImage: "/assets/images/ggplot/using-the-theme/chart-layout.svg"   
sections:
  - content: |
        Because this package is intended to augment the functionality of ggplot2, we suggest loading it prior to loading ggcapdthemes.
  - code: |
      library(ggplot2)
      library(ggcapdthemes)
  - title: "Applying the theme `theme_capd()`"
    level: 2
    content: |
        First, we start with some eGRID data shown in a ggplot bar chart, using the default ggplot theme. The ggcapdthemes package contains a data object called gg_ex_bar to use as a building block.
    code: |
        gg_ex_bar  
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-4-1.svg" 
  - content: | 
      Next, we add the theme_capd() function to apply our custom theme.
    code: |  
      gg_ex_bar +
        theme_capd() 
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-5-1.svg" 
  - content: | 
      To change the orientation of the axis and grid lines to the y-axis, we can provide the axis_lines = 'vert' argument. The default is ‘horiz’ for horizontal (x-axis and horizontal grid lines shown).
    code: |  
      gg_ex_bar +
        theme_capd(axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-6-1.svg" 
  - content: | 
      Other theme specifications can be controlled with the ticks grid_lines and legend_position arguments, as shown here.
    code: |  
      gg_ex_bar +
         scale_fill_capd_discrete(palette = 'fuel_type') +
         theme_capd(grid_lines = c('major','minor'), 
                    axis_lines = 'vert', 
                    ticks = TRUE, 
                    legend_position = 'none')        
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-7-1.svg" 
  - content: | 
      Lastly, we can add the scale_fill_capd_discrete function to apply a custom color palette for fuel types.
    code: |  
      gg_ex_bar +
         theme_capd(grid_lines = c('major','minor'), 
                    axis_lines = 'vert', 
                    ticks = TRUE, 
                    legend_position = 'none')        
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-8-1.svg" 
  - title: "General theme info"
    level: 3
    content: |
        The “Source Sans 3” font is downloaded from Google Fonts and applied to all when theme_capd is used. An initial font size is specified using the base_size argument; this defaults to 11pt, but we will use 10pt for this example.
  - title: "Font sizing: `base_size`"
    level: 3
    content: |
        Other fonts throughout the chart are re-sized relative to the base_size, using the ggplot2::rel function. The half_line setting is used for margins.
  - code: |  
      gg_ex_bar +
         theme_capd(base_size = 11)
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-9-1.svg" 
  - code: |  
      gg_ex_bar +
         theme_capd(base_size = 6)
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-9-2.svg" 
  - code: |  
      gg_ex_bar +
          theme_capd(base_size = 16)
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-9-3.svg" 
  - content: |
        Here we see the font applied to all text elements by default; they will be re-sized in the sections below.

        Plot annotations such as titles, subtitles is formatted through the following theme options. The title size is magnified 20% compared to base_size, while the caption is decreased 20%.
  - title: "Axis line orientation: `plot direction`"
    level: 3
  - code: |  
      ## default: 'horiz'
      gg_ex_bar +
          theme_capd(axis_lines = 'horiz')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-10-1.svg" 
  - code: |  
      gg_ex_bar +
           theme_capd(axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-10-2.svg" 
  - code: |  
      gg_ex_bar +
            theme_capd(axis_lines = 'both')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-10-3.svg" 
  - title: "Gridlines: `grid_lines`"
    level: 3
    content: |
      The grid_lines arguments controls which sets of gridlines to display.

       Possible options include
        - major grid lines 'major'
        - minor grid lines: 'minor'
        - both major and minor: c('major','minor')
        - no gridlines: 'none'

      Note that this interacts with the `axis_lines` argument and only shows the gridlines for the orientations specified. Other gridlines remain hidden.
  - code: |  
      gg_ex_bar +
          theme_capd(grid_lines = 'major', axis_lines = 'horiz')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-11-1.svg" 
  - code: |  
      gg_ex_bar +
          theme_capd(grid_lines = 'major', axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-11-2.svg" 
  - code: |  
      gg_ex_bar +
          theme_capd(grid_lines = c('major','minor'), axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-11-3.svg" 
  - code: |  
      gg_ex_bar +
          theme_capd(grid_lines = 'none')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-11-4.svg" 
  - title: "Tick Marks: `ticks`"
    level: 3
    content: |
       The `ticks` argument determines whether to show (TRUE) or hide (FALSE) the tick marks on the non-major axis, or the one perpendicular to the plot’s orientation. For vertical `axis_liness`, this is the y-axis ticks marks and for horizontal orientations, this is the x-axis tick marks.
  - code: |  
      gg_ex_bar +
          theme_capd(ticks = FALSE)
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-12-1.svg" 
  - code: |  
      gg_ex_bar +
          theme_capd(ticks = TRUE)
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-12-2.svg" 
  - code: |  
      gg_ex_bar +
          theme_capd(ticks = TRUE, axis_lines = 'both')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-13-1.svg" 
    content: | 
      When axis_lines = 'both', this controls whether to show both x-axis and y-axis tick marks.
  - title: "Legend: `legend_position`"
    level: 3
    content: |
        This is a wrapper for the `legend.position` ggplot theme argument. Valid options for `legend_position` are ‘top’, ‘bottom’, ‘left’, ‘right’, or ‘none’ to hide it.
  - code: |  
      gg_ex_bar +
          theme_capd(legend_position = 'top')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-14-1.svg" 
  - code: |  
      gg_ex_bar +
          theme_capd(legend_position = 'bottom')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-14-2.svg" 
  - code: |  
      gg_ex_bar +
          theme_capd(legend_position = 'bottom')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-14-3.svg" 
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
  - title: "Divergent"
    level: 4
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-16-1.svg"
  - image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-17-1.svg" 
  - title: "Categorical palettes"
    level: 3
  - title: "Fuel type palettes"
    level: 5
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-18-1.svg"
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
  - title: "Renewables vs Non-renewables"
    level: 5
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-20-1.svg"
  - code: |  
      ggplot(renewables) +
        geom_bar(aes(x = resource_mix, y = region, group = region, fill = fuel_type), stat = 'identity') +
        scale_fill_capd_discrete(palette = 'renewables2') +
        scale_x_continuous(expand=c(0,0)) +
        labs(x = 'Resource Mix (%)', y='eGRID Subregion', fill = 'Fuel Type', title = '2023 eGRID Resource Mix',
        subtitle = 'by Renewable vs. Non-renewable fuels') +
        theme_capd(axis_lines = 'vert')
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-21-1.svg"
  - title: "Pollutant palettes"
    level: 4
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-22-1.svg"
  - title: "Unordered palettes"
    level: 4
    image: "/assets/images/ggplot/using-the-theme/unnamed-chunk-23-1.svg"
