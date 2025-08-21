#!/usr/bin/env node

import fs from "fs";
import path from "path";

// Utility function to convert kebab-case to camelCase
function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Function to update className in JSX content
function updateClassNames(content) {
  // Replace className="class-name" with className={styles.className}
  return content.replace(/className="([^"]+)"/g, (match, classNames) => {
    // Handle multiple classes (space-separated)
    const classes = classNames.split(" ");
    if (classes.length === 1) {
      // Single class
      const camelCase = kebabToCamel(classes[0]);
      return `className={styles.${camelCase}}`;
    } else {
      // Multiple classes - use template literals
      const camelClasses = classes.map((cls) => `styles.${kebabToCamel(cls)}`);
      return `className={\`\${${camelClasses.join("} ${")}\}\`}`;
    }
  });
}

// Function to convert a page file
function convertPageToCSSModules(pagePath, cssPath) {
  try {
    console.log(`Converting ${pagePath}...`);

    // Read the JSX file
    let jsxContent = fs.readFileSync(pagePath, "utf8");

    // Update the CSS import
    const cssFileName = path.basename(cssPath, ".css");
    jsxContent = jsxContent.replace(
      /import\s+["']([^"']*\.css)["'];/,
      `import styles from "${cssPath.replace(".css", ".module.css")}";`
    );

    // Update className attributes
    jsxContent = updateClassNames(jsxContent);

    // Write back the updated JSX file
    fs.writeFileSync(pagePath, jsxContent);

    // Copy CSS file to module version
    const moduleCssPath = cssPath.replace(".css", ".module.css");
    if (!fs.existsSync(moduleCssPath)) {
      fs.copyFileSync(cssPath, moduleCssPath);
    }

    // Delete original CSS file
    fs.unlinkSync(cssPath);

    console.log(`✅ Converted ${pagePath} successfully`);
  } catch (error) {
    console.error(`❌ Error converting ${pagePath}:`, error.message);
  }
}

// Pages to convert
const pagesToConvert = [
  {
    jsx: "frontend/nova-aff/src/pages/creator/CreatorOverviewPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/creator-overview.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/creator/CreatorToolsPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/creator-tools.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/creator/ExploreCampaignsPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/explore-campaigns.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/brand/AffiliateMarketingPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/affiliate-marketing.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/brand/InfluencerMarketingPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/influencer-marketing.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/brand/InfluencerBookingPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/influencer-booking.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/brand/UserGeneratedContentPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/user-generated-content.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/contact/ContactPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/contact.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/about/AboutPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/about.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/auth/LoginPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/login.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/auth/SignUpPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/signup.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/explore/BlogPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/blog.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/explore/EventPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/events.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/support/SupportPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/support.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/publisher/PublisherOverviewPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/publisher-overview.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/publisher/PublisherCreatorToolsPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/publisher-creator-tools.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/publisher/PublisherExploreCampaignsPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/publisher-explore-campaigns.css",
  },
  {
    jsx: "frontend/nova-aff/src/pages/brand/BrandPage.jsx",
    css: "frontend/nova-aff/src/styles/pages/brand.css",
  },
];

// Main execution
console.log("🚀 Starting CSS Modules conversion...\n");

let converted = 0;
let errors = 0;

pagesToConvert.forEach(({ jsx, css }) => {
  if (fs.existsSync(jsx) && fs.existsSync(css)) {
    convertPageToCSSModules(jsx, css);
    converted++;
  } else {
    console.log(`⚠️  Skipping ${jsx} - file not found`);
    errors++;
  }
});

console.log(`\n✨ Conversion complete!`);
console.log(`📊 Stats: ${converted} converted, ${errors} skipped`);
console.log(
  `\n🔥 CSS conflicts resolved! Your pages now use scoped CSS Modules.`
);
