export const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = e.currentTarget.src.replace(/\/statUS\//, '/original/');
};
