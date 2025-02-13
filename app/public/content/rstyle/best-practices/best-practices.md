---
title: "Best Practies"
tagline: ""


sections:
  - title: "Color as Highlight"
    content: |
        This theme includes both quantitative and categorical color palettes.
        However, there are some situations where you might not want to use a
        whole palette; instead, you might want to use color to draw attention
        only to specific parts of a chart without overwhelming the user. For
        more details on using color as a highlight, see the of the Data
        Visualization Style Guide.
  - title: "Highlighting Discrete Colors"
    content: |
        Using the `gghighlight` package to assist, we can emphasize certain
        groups or elements of charts. Leave fuel type as original color, gray
        out non-highlighted groups.
  - title: "Highlighting Continuous Colors"
    content: |
        Using the `gghighlight` package to assist, we can emphasize certain
        groups or elements of charts. Leave fuel type as original color, gray
        out non-highlighted groups.
  - title: "Legends"
    content: |
        Legends are most helpful and accessible when they are directly attached
        to the relevant data elements. If that isn’t possible, keeping them as
        close as possible to the data elements is a good compromise. For more
        details on legend design, see the of the Data Visualization dedicated
        section Style Guide.

        By default, ggplot sorts character variables for color / fill
        alphabetically from A to Z. Sometimes this is desired, other times there
        are more useful orders for aligning to the data at hand.
  - title: "Sorting Legend Entries"
    content: |
        Using the `fct_reorder2` function from the `forcats` tidyverse package,
        you can easily reorder columns by another columns value. This allows the
        legend categories to go in order of highest to lowest value.
  - title: "Adding Direct Labels on your Chart"
    content: |
       Through the help of the `directlabels` package, you can also add labels
       directly onto a ggplot for easier context. Here we add them to the end
       of the lines using the `method = 'last.qp'` argument.
  - title: "Tooltips"
    content: |
        Tooltips that call out names, values, and style (color, stroke pattern,
        etc.) of individual data elements can help make those data points easier
        to identify in your chart. For more details on tooltip design, see the
        of the Data Visualization Style Guide.
  - title: "Plotly"
    content: |
       The `plotly` package can be used for interactive charts. To turn a
       ggplot object into a plotly chart, wrap it in `plotly::ggplotly()`.
  - title: "Data Labels"
    content: |
       Like tooltips, data labels can help make individual or important data
       points easier to identify
  - title: "Alt Text for Charts"
    content: |
       Alternative text helps make charts more accessible for users who cannot
       rely on visuals. Alt text should be specific and detailed but not overly
       wordy; it can be used in combination with other, non-visual
       representations of the same data, such as tables or direct downloads.
  - title: "Including Alt Text Manually"
    content: |
        Using the `fct_reorder2` function from the `forcats` tidyverse package,
        you can easily reorder columns by another columns value. This allows the
        legend categories to go in order of highest to lowest value.
  - title: "Color Accessibility"
    content: |
        Variations of color accessibility can be assessed using the
        `colorblindr` package.
  - title: "Other Data Accessibility"
    content: |
        Another way to make your charts more accessible is to provide the
        underlying data directly to users either by providing data tables near
        their respective charts, or by allowing users to download that data.
