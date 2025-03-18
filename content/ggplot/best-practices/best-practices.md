---
title: "Best Practies"
tagline: ""


sections:
  - code: |  
      library(ggplot2)
      library(ggcapdthemes)
  - title: "Color as Highlight"
    content: |
        This theme includes both quantitative and categorical color palettes. However, there are some situations where you might not want to use a whole palette; instead, you might want to use color to draw attention only to specific parts of a chart without overwhelming the user. For more details on using color as a highlight, see the [Color page](power-sector-dev-portal/#/datavis/design-elements/color) of the [Data Visualization Style Guide](power-sector-dev-portal/#/datavis).
  - title: "Highlighting Discrete Colors"
    content: |
        Using the `gghighlight` package to assist, we can emphasize certain groups or elements of charts. Leave fuel type as original color, gray out non-highlighted groups.
  - code: |  
      p_bar <- gg_ex_bar +
        scale_color_capd_discrete(palette = 'fuel_type') +
        theme_capd(plot_direction = 'vert', legend_position = 'none')
  - code: |  
      p_bar + gghighlight::gghighlight(
        resource == 'gas',
        unhighlighted_params = list(
          fill = '#C9C9C9', 
          color = '#2E2E2E',
          linewidth = 0.2) 
      )
      #> label_key: resource_label
    image: "/power-sector-dev-portal/assets/images/ggplot/best-practices/unnamed-chunk-4-1.svg"
    alt: "An image of a bar chart showing generation resource mix built in ggplot with the custom CAPD theme applied. The bar showing Gas is orange while all other bars are light gray with a dark gray border."
  - title: "Highlighting Continuous Colors"
    code: |  
      p_co2 <- ggplot(co2_emission_2022, aes(y = region, x = co2)) + 
        geom_bar(stat = 'identity', fill = '#2378C3') + 
        scale_x_continuous(limits=c(0,NA), expand=c(0,0)) +
        theme_capd(axis_lines = 'vert')

      p_co2 +
        gghighlight::gghighlight(
          region == 'NYUP',
          unhighlighted_params = list(
            fill = '#C9C9C9', 
            linewidth = 0.2
          )
        )
  - title: "Legends"
    content: |
        Legends are most helpful and accessible when they are directly attached to the relevant data elements. If that isn’t possible, keeping them as close as possible to the data elements is a good compromise. For more details on legend design, see the [dedicated section of the Data Visualization Style Guide](power-sector-dev-portal/#/datavis/charts).

        By default, ggplot sorts character variables for color / fill alphabetically from A to Z. Sometimes this is desired, other times there are more useful orders for aligning to the data at hand.
    code: |  
      ggplot(data = so2_aq,
            aes(x=year, y=value, color=stat)) +
        geom_line() +
        labs(color = 'Statistic') + 
        theme_capd()
    image: "/power-sector-dev-portal/assets/images/ggplot/best-practices/unnamed-chunk-6-1.svg" 
    alt: "An image of a multi-line chart with three lines. The order of the lines from top to bottom does not match the order in which they are described in the legend that sits to the right of the chart." 
  - title: "Sorting Legend Entries"
    content: |
        Using the `fct_reorder2` function from the `forcats` tidyverse package, you can easily reorder columns by another columns value. This allows the legend categories to go in order of highest to lowest value.
    code: |  
      ggplot(so2_aq,
            aes(x=year, y=value, color = forcats::fct_reorder2(stat, year, value))) +
        geom_line() +
        labs(color = 'Statistic') + 
        theme_capd()
    image: "/power-sector-dev-portal/assets/images/ggplot/best-practices/unnamed-chunk-7-1.svg" 
    alt: "An image of a multi-line chart with three lines. The order of the lines from top to bottom matches the order in which they are described in the legend that sits to the right of the chart."
  - title: "Adding Direct Labels on your Chart"
    content: |
      Through the help of the `directlabels` package, you can also add labels directly onto a ggplot for easier context. Here we add them to the end of the lines using the `method = 'last.qp'` argument.
    code: |  
      p_direct <- ggplot(so2_aq, aes(x=year, y=value, color=stat)) +
                    geom_line() +
                    labs(color='Statistic', y = 'SO_2 Air Quality') + 
                    theme_capd()

      directlabels::direct.label(p_direct, method = 'last.qp')
    image: "/power-sector-dev-portal/assets/images/ggplot/best-practices/unnamed-chunk-8-1.svg" 
    alt: "An image of a multi-line chart with three lines. The three lines are directly labeled with their names in their respective colors on the right-most edge of the chart."
  - code: |  
      directlabels::direct.label(p_direct, method = 'first.qp')
    image: "/power-sector-dev-portal/assets/images/ggplot/best-practices/unnamed-chunk-8-2.svg" 
    alt: "An image of a multi-line chart with three lines. The three lines are directly labeled with their names in their respective colors on the left-most edge of the chart."
  - title: "Tooltips"
    content: |
        Tooltips that call out names, values, and style (color, stroke pattern, etc.) of individual data elements can help make those data points easier to identify in your chart. For more details on tooltip design, see the [Chart Layout page](power-sector-dev-portal/#/datavis/design-elements/layout) of the [Data Visualization Style Guide](power-sector-dev-portal/#/datavis).
  - title: "Plotly"
    content: |
       The `plotly` package can be used for interactive charts. To turn a ggplot object into a plotly chart, wrap it in `plotly::ggplotly()`.
    code: |  
        p_so2 <-ggplot(so2_aq,
              aes(x=year, y=value, color = stat)) +
          geom_line() +
          labs(color = 'Statistic') + 
          scale_color_capd_discrete(palette = 'sequential') +
          theme_capd()

        plotly::ggplotly(p_so2)
  - title: "Alt Text for Charts"
    content: |
       Alternative text helps make charts more accessible for users who cannot rely on visuals. Alt text should be specific and detailed but not overly wordy; it can be used in combination with other, non-visual representations of the same data, such as tables or direct downloads.
  - title: "Including Alt Text Manually"
    code: |  
      p_alt <- p_bar +
        labs(alt = 'My alt text here')

      p_alt
    image: "/power-sector-dev-portal/assets/images/ggplot/best-practices/unnamed-chunk-10-1.svg" 
    alt: "An image of a bar chart showing generation resource mix by fuel type built in ggplot with the custom theme_capd() theme applied but with the default color scheme still applied."
  - title: "Generating alt text template"
    level: 4
    code: |  
      ggalttext::generate_alt_text(p_bar)
      #> [1] "2023 eGRID Generation Resource Mix.  A plot with Generation Resource Mix (%) on the x-axis and Resource on the y-axis. The data is displayed using bars."
  - title: "Color Accessibility"
    content: |
        Variations of color accessibility can be assessed using the
        `colorblindr` package.
    code: |  
      colorblindr::cvd_grid(p_bar)
    image: "/power-sector-dev-portal/assets/images/ggplot/best-practices/colorblindr_example_barplot.svg" 
    alt: "An image showing how a bar chart would look to readers with four different types of color blindness."
  - title: "Other Data Accessibility"
    content: |
        Another way to make your charts more accessible is to provide the underlying data directly to users either by providing data tables near their respective charts, or by allowing users to download that data.
