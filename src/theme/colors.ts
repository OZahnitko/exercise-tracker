interface AlphaFunctionProps {
  (hexColor: string, percent?: number): string;
}

export const alpha: AlphaFunctionProps = (hexColor, percent = 100) =>
  `${hexColor}${Math.ceil(
    255 * ((() => (percent < 0 ? 0 : percent > 100 ? 100 : percent))() / 100)
  ).toString(16)}`;
