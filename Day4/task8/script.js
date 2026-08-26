const settings = {
  theme: "dark",
  lang: "en"
};

Object.freeze(settings);

settings.theme = "light";
settings.fontSize = 16;

console.log(settings);
console.log("The object did not change because it is frozen.");
