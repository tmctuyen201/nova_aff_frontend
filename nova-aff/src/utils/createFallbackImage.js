/**
 * Create a beautiful gradient fallback image when the original image fails to load
 * @param {string} title - Campaign title to display
 * @param {string} color - Primary color for gradient
 * @param {string} category - Campaign category for icon
 * @returns {string} Data URL of the generated image
 */
export const createFallbackImage = (
  title,
  color = "#667eea",
  category = "default"
) => {
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 300;
  const ctx = canvas.getContext("2d");

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, 400, 300);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, "#764ba2");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 400, 300);

  // Add subtle pattern overlay
  ctx.globalAlpha = 0.1;
  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * 400,
      Math.random() * 300,
      Math.random() * 3 + 1,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "white";
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Add category icon
  const categoryIcons = {
    beauty: "💄",
    fashion: "👗",
    tech: "💻",
    health: "🏥",
    home: "🏠",
    electronics: "📱",
    toys: "🧸",
    education: "📚",
    food: "🍕",
    furniture: "🛋️",
    appliances: "⚡",
    "flash-sale": "⚡",
    seasonal: "🍂",
    lifestyle: "🌟",
    default: "🏷️",
  };

  const icon = categoryIcons[category] || categoryIcons.default;
  ctx.font = "48px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.fillText(icon, 200, 100);

  // Add title text
  ctx.fillStyle = "white";
  ctx.font = "bold 20px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Add text shadow
  ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;

  // Wrap text if too long
  const maxWidth = 360;
  const words = title.split(" ");
  let line = "";
  let y = 200;
  const lineHeight = 28;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), 200, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), 200, y);

  // Add "Nova Aff" watermark
  ctx.font = "12px Inter, sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.shadowColor = "transparent";
  ctx.fillText("Nova Aff", 350, 280);

  return canvas.toDataURL();
};

/**
 * Generate a consistent color based on text
 * @param {string} text - Text to generate color from
 * @returns {string} Hex color
 */
export const generateColorFromText = (text) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#74B9FF",
    "#FD79A8",
    "#FDCB6E",
    "#6C5CE7",
    "#A29BFE",
    "#FD79A8",
    "#E17055",
    "#00B894",
    "#0984E3",
  ];

  return colors[Math.abs(hash) % colors.length];
};
