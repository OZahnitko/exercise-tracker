export const activityTimeSummaryTextColor = "#B0B0B0";

export const homepageSectionDefaultAlpha = 50;
export const homepageSectionDefaultColor = "#DDF2FF";

interface Alpha {
  (hexColor: string, percent?: number): string;
}

export const alpha: Alpha = (hexColor, percent = 100) =>
  `${hexColor}${Math.ceil(
    255 * ((() => (percent < 0 ? 0 : percent > 100 ? 100 : percent))() / 100)
  ).toString(16)}`;
