const commonStyles = {
  borderRadius: "50%",
};

const fullWidthKeys = ["company"];
const renderExtraLabelKeys = ["followers", "following", "public_repos"];
const extraLabelsKeysMap = {
  followers: "Followers",
  following: "Following",
  public_repos: "Public Repos",
};
const hyperLinksMap = {
  email: "mailto:",
  twitter_username: "https://twitter.com/",
};

export {
  commonStyles,
  fullWidthKeys,
  renderExtraLabelKeys,
  extraLabelsKeysMap,
  hyperLinksMap,
};
