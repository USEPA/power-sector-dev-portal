---
title: "Typography"
tagline: ""
introTitle: "Introduction"
introContent: | 
        The US Web Design System [(USWDS)](https://designsystem.digital.gov) includes four typeface options. Of those four, we recommend using [Source Sans](https://fonts.adobe.com/fonts/source-sans) for most text in your data products, including visualizations and tables.

        For a more in-depth look at using fonts and type styles, please refer to the [USWDS page on typography](https://designsystem.digital.gov/components/typography/). In this guide, we will only call out best practices as they relate to specific data visualization use cases.
sections:
  - title: "Typographic Best Practices"
    level: 2
  - title: "Numbers"
    level: 3
    content: "Numbers should be tabular-spaced: each digit should take up the same amount of horizontal space. Numbers should also be lining (not oldstyle); that is, they should take up similar amounts of vertical space and shouldn’t extend too far above or below a common baseline. If possible, numbers should also be multiplexed:  each digit should take up the same amount of horizontal space no matter the font weight."
    cards:
    - title: "Tabular-Spaced Numbers"
      alt: "An image showing two numbers in the Source Sans Pro font. Each number is labeled to show how wide it is; all numbers are the same width."
      image: "/power-sector-dev-portal/assets/images/datavis/design-elements/typography/tabular-spaced-numbers.png"
      content: "Each digit should take up the same amount of horizontal space."
      type: "do"
    - title: "Non-Tabular-Spaced Numbers"
      alt: "An image showing two numbers in the Public Sans font. Each number is labeled to show how wide it is; all numbers are different widths."
      image: "/power-sector-dev-portal/assets/images/datavis/design-elements/typography/non-tabular-spaced-numbers.png"
      content: "When digits take up different amounts of horizontal space, it makes them harder to compare to one another."
      type: "do not"
    - title: "Lining Numbers"
      alt: "An image showing a number in the Source Sans pro font. The numbers are all the same height."
      image: "/power-sector-dev-portal/assets/images/datavis/design-elements/typography/lining-numbers.png"
      content: "Digits should take up similar amounts of vertical space."
      type: "do"
    - title: "Oldstyle Numbers"
      alt: "An image showing a number in the Merriweather font. The numbers are all different heights."
      image: "/power-sector-dev-portal/assets/images/datavis/design-elements/typography/oldstyle-numbers.png"
      content: "Digits shouldn’t extend too far above or below a common baseline."
      type: "do not"
    - title: "Multiplexed Numbers"
      alt: "An image showing two numbers in the Roboto Mono font, one in thin and one in bold. Each number is labeled to show how wide it is; all numbers are the same width even though one of the numbers is thin and the other is bold."
      image: "/power-sector-dev-portal/assets/images/datavis/design-elements/typography/multiplexed-numbers.png"
      content: "Each digit should take up the same amount of horizontal space no matter the font weight."
      type: "do"
    - title: "Non-Multiplexed Numbers"
      alt: "An image showing two numbers in the Public Sans font, one in thin and one in bold. Each number is labeled to show how wide it is; some numbers are wider than others, and the bold numbers are even wider than the thin ones."
      image: "/power-sector-dev-portal/assets/images/datavis/design-elements/typography/non-multiplexed-numbers.png"
      content: "If heavier font weights make text wider, it becomes harder to compare numbers to each other."
      type: "do not"
  - title: "Chemical Compounds"
    content: When writing chemical compounds, subscripts should use uppercase letters. For example, the chemical notation for nitrogen oxides would be written NO<sub>X</sub>, not NO<sub>x</sub>.