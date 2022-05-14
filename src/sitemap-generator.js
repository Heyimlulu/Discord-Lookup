require("babel-register")({
    presets: ["es2015", "react"]
});

const router = require("./utils/sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
        new Sitemap(router)
            .build("https://discord.name/")
            .save("./public/sitemap.xml")
    );
}

generateSitemap();
