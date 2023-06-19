# wordcloud

A fork of <https://www.jasondavies.com/wordcloud/> for generating word cloud visualizations.

## Changelog

User-visible changes:

- Add color palette selection feature.
- Update the default values for graphical parameter inputs.
  - `angle-count`: from 5 to 2.
  - `angle-from`: from -60 to -90.
  - `angle-to`: from 60 to 0.
  - `font`: from "Impact" to a condensed font by operating system.
- Use native font stack for the UI.

Other quality of life changes:

- Fix HTML structure, isolate inline CSS styles into a separate file.
- Refactor the SVG download feature with pure client-side solution.
- Upgrade d3 version to 3.5.17.
- Remove Google Ads.
