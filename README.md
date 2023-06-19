# Word cloud generator enhanced

A fork of <https://www.jasondavies.com/wordcloud/> for generating word cloud visualizations.

## Changelog

User-visible changes:

- Add color palette selection feature, offering color palettes from
  - Tableau
  - Viridis
  - ColorBrewer
  - ggplot2
  - D3
  - Okabe-Ito
  - Gephi
- Update the default word cloud typeface from Impact to a font based on user's operating system.
  - macOS: Avenir Next Condensed Medium
  - Windows: Franklin Gothic Medium
  - Linux: Liberation Sans Bold
- Update the default values for graphical parameter inputs:
  - `angle-count`: from 5 to 2.
  - `angle-from`: from -60 to -90.
  - `angle-to`: from 60 to 0.
- Use native font stack for the UI.

Other quality of life changes:

- Fix HTML structure, isolate inline CSS styles into a separate file.
- Refactor the SVG download feature with pure client-side solution.
- Upgrade d3 version to 3.5.17.
- Remove Google Ads.
