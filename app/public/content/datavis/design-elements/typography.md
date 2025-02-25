---
title: "Typography"
tagline: ""
introTitle: "Introduction"
introContent: | 
        The [U.S. Web Design System (USWDS)](https://designsystem.digital.gov) includes four typeface options. Of those four, we recommend using Source Sans Pro for most text in your data visualizations and data products and Roboto Mono for numbers in visualizations and tables.

        For a more in-depth look at using fonts and type styles, please refer to the [USWDS page on typography](https://designsystem.digital.gov/components/typography/). In this guide, we will only call out best practices as they relate to specific data visualization use cases.
sections:
  - title: "Typographic Best Practices"
    level: 2
  - title: "Numbers"
    level: 3
    content: "Numbers should be tabular-spaced: each digit should take up the same amount of horizontal space. Numbers should also be lining (not oldstyle); that is, they should take up similar amounts of vertical space and shouldn’t extend too far above or below a common baseline. If possible, numbers should also be multiplexed:  each digit should take up the same amount of horizontal space no matter the font weight."
    cards:
    - title: "Tabular-Spaced Numbers"
      alt: ""
      image: "/assets/images/datavis/design-elements/typography/tabular-spaced-numbers.png"
      content: "Each digit should take up the same amount of horizontal space."
      type: "do"
    - title: "Non-Tabular-Spaced Numbers"
      alt: ""
      image: "/assets/images/datavis/design-elements/typography/non-tabular-spaced-numbers.png"
      content: "When digits take up different amounts of horizontal space, it makes them harder to compare to one another."
      type: "do not"
    - title: "Lining Numbers"
      alt: ""
      image: "/assets/images/datavis/design-elements/typography/lining-numbers.png"
      content: "Digits should take up similar amounts of vertical space."
      type: "do"
    - title: "Oldstyle Numbers"
      alt: ""
      image: "/assets/images/datavis/design-elements/typography/oldstyle-numbers.png"
      content: "Digits shouldn’t extend too far above or below a common baseline."
      type: "do not"
    - title: "Multiplexed Numbers"
      alt: ""
      image: "/assets/images/datavis/design-elements/typography/multiplexed-numbers.png"
      content: "Each digit should take up the same amount of horizontal space no matter the font weight."
      type: "do"
    - title: "Non-Multiplexed Numbers"
      alt: ""
      image: "/assets/images/datavis/design-elements/typography/non-multiplexed-numbers.png"
      content: "If heavier font weights make text wider, it becomes harder to compare numbers to each other."
      type: "do not"
  - title: "Special Characters"
    level: 3
    content: "In text throughout your visualization, use the open barrel lowercase a and g. These letter forms are easier to read at small sizes, including things like legends and axis labels."
    cards:
    - title: "Open Barrel Letters"
      alt: ""
      image: "/assets/images/datavis/design-elements/typography/open-barrel-letters.png"
      content: "The word pictured above uses the open barrel g and a. This text should remain easy to read even in smaller sizes."
      type: "do"
    - title: "Closed Barrel Letters"
      alt: ""
      image: "/assets/images/datavis/design-elements/typography/closed-barrel-letters.png"
      content: "The word pictured above uses a closed barrel g and a. This text would be harder to read at a smaller scale."
      type: "do not"
  - title: "Chemical Compounds"
    content: When writing chemical compounds, subscripts should use uppercase letters. For example, the chemical notation for nitrous oxides would be written NO<sub>X</sub>, not NO<sub>x</sub>.