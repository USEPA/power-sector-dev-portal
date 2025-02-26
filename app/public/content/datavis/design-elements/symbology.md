---
title: "Symbology"
tagline: ""
introTitle: "Introduction"
introContent: | 
        Icons and symbology can be useful tools when making data visualizations more accessible and engaging. Icons, shapes, and modifications to opacity or lines can allow people to understand your visualization without relying on color alone. 
sections:
  - title: Symbology Best Practices
    level: 2
    content: |
        - Don’t scale icons with data; it’s hard for people to gauge differences in size of non-standard shapes.
        - Keep icons simple but unique. Think about how they might read at different sizes (i.e., as small icons on a map, or larger icons next to call-out values).
        - Always provide a legend; don’t expect people to intuit the meaning of icons.
  - title: "Examples of Best Practices"
    level: 3
    cards:
    - title: "Non-scaled Icons"
      alt: "An image of a choropleth map of Pennsylvania with flame-shaped icons dotted throughout. The icons are simple and high-contrast against the color scheme of the map, which makes them easy to spot."
      image: "/assets/images/datavis/design-elements/symbology/non-scaled-icons.png"
      content: "Icons on maps are helpful to add more detail to categorical, point-based data. They should not be scaled to represent a quantitative variable."
      type: "do"
    - title: "Simple, Unique Icons"
      alt: "An image showing three icons, a sun, a moon, and a star, at two different sizes. The icons are simple and distinct, which makes them easy to parse at both sizes."
      image: "/assets/images/datavis/design-elements/symbology/simple-unique-icons.png"
      content: "Icons should be straightforward to identify but distinct enough to be easy to distinguish from one another, no matter the size."
      type: "do"
  - title: "Things to Avoid"
    level: 3
    cards:
    - title: "Scaled Icons"
      alt: "An image of a choropleth map of Pennsylvania with flame-shaped icons dotted throughout. The icons are scaled to represent changes in data, which makes them hard to read and makes the whole map confusing."
      image: "/assets/images/datavis/design-elements/symbology/scaled-icons.png"
      content: "Scaling icons makes it difficult to compare differences between them because of their irregular shape."
      type: "do not"
    - title: "Complex or Similar Icons"
      alt: "An image showing three icons, a flame and two water droplets, at two different sizes. The icons are simple but to similar to one another, which makes them hard to differentiate from each other at both sizes."
      image: "/assets/images/datavis/design-elements/symbology/complex-or-similar-icons.png"
      content: "If icons are too complex or look too similar to one another, they will be hard for users to differentiate in visualizations, especially at smaller sizes."
      type: "do not"
  - title: "Non-Color Palettes"
    level: 2
    content: |
       Using only color to encode meaning is often not enough to produce an accessible visualization. Data elements either need to be directly labeled or styled with non-color-based attributes to reduce the reliance on color. The palettes provided below can be used on their own or in combination with a color palette to make a visualization more accessible (for example, by layering hatch marks on top of color fills).
  - title: "Categorical Palette"
    level: 3
    content: |
       The patterned fills provided in this palette are suggestions; your ability to use them may depend on the program in which you’re building a visualization. If these exact options are not available, the most important thing is to choose patterns that are not easily confused with one another. 
    alt: ""
    image: "/assets/images/datavis/design-elements/symbology/categorical-palette.svg"
  - title: "Sequential Palettes"
    level: 3
    content: |
       As above, these fills are suggestions, to be adjusted depending on the software or program being used. Please note, some patterned fills may conflict with map elements (for example, the dots in the second palette below) and thus should not be used on map-based visualizations. 
    alt: ""
    image: "/assets/images/datavis/design-elements/symbology/sequential-palettes.png"
  - title: "Special Icon Sets"
    level: 2
    content: |
       The following icons can be used when representing fuel types on maps or other visualizations and on websites as more illustrative accompaniments to descriptive text. 
  - title: "Icon Set A"
    level: 3
    content: |
       This set of icons is best suited for non-data-visualization uses, such as illustrative icons on websites. While the plain black version (pictured below) can be used in most cases, there are also additional two-color variant sets available.
    downloads:
    - title: "Download Icon Set A (Plain Black)"
      link: "/assets/images/datavis/design-elements/symbology/set-a-plain-black.zip"
    - title: "Download Icon Set A (Color Variant)"
      link: "/assets/images/datavis/design-elements/symbology/set-b-color-variant.zip"
    alt: ""
    image: "/assets/images/datavis/design-elements/symbology/set-a.svg"
  - title: "Icon Set B"
    level: 3
    content: |
       This set of icons is simper and thus best suited for visualizations such as maps and charts. Beyond the plain black version (pictured below), this set has a variety of color variants for use in different scenarios.
    downloads:
    - title: "Download Icon Set B (Plain Black)"
      link: "/assets/images/datavis/design-elements/symbology/set-b-plain-black.zip"
    - title: "Download Icon Set B (Color Variant)"
      link: "/assets/images/datavis/design-elements/symbology/set-b-color-variant.zip"
    - title: "Download Icon Set B (3 sets of Fuel Type Colors)"
      link: "/assets/images/datavis/design-elements/symbology/set-b-three-sets.zip"
    alt: ""
    image: "/assets/images/datavis/design-elements/symbology/set-b.svg"
