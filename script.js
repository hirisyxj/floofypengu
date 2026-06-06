//Site Data
const mobileUaPattern =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
const isMobileDevice =
  navigator.userAgentData?.mobile === true ||
  mobileUaPattern.test(navigator.userAgent || "");

const SITE_DATA = {
  profile: {
    name: "Floofy Pengu",
    title: "Angler of Stars",
    pronouns: "They/them",
    mbti: "INFP",
    lastUpdated: "June 6, 2026",
    aboutMe:
      "Started in Shadowbringers and got completely hooked. I fantasia between OCs a lot, so the name you see isn’t always who I’m currently playing. You’ll usually find me fishing, raiding, or vibing at social spots around Eorzea. Outside the game, I’m into tech, crafts, and street photography. You can read about my OCs when I get around to writing and updating the lore section.",
    socials: [{ label: "X", url: "https://x.com/penguxiv" }],
  },
  ocLores: [
    {
      name: "Floofy Pengu",
      age: "36",
      role: "tank",
      status: "single",
      themeColor: "#FFEE8C",
      details: [
        "Lalafell · Dunesfolk",
        "He/Him",
        "Single",
        "Gunbreaker",
        "Mercenary · Tavernkeeper",
      ],
      summary: [
        "Adopted into a Roegadyn merchant family in the bustling city of Ul'dah, Floofy's early years were steeped in the art of commerce. His adoption brought him into the family fold, and he quickly absorbed the family's values and business acumen. This upbringing instilled in him a deep understanding of profit and trade, and he was groomed to become a capable merchant like his adopted parents. However, as he approached the age of eighteen, Floofy made a life-altering decision to follow a different path - a life as an adventurer.",
        "With unwavering determination, Floofy picked up a pistol he had discovered in the dusty confines of the family's storage shed and set forth into the sun-drenched realm of Eorzea. From the very beginning, he embraced the intoxicating allure of the adventurer's life, yearning for the camaraderie of kindred souls. Every step into the unknown filled his heart with boundless enthusiasm, as he eagerly anticipated the bonds he believed would be forged on this new journey. Epic battles, tantalizing tales of ancient relics, and the mystique of uncharted territories stoked a fire within him, a yearning for companions who shared his fervour.",
        "As an adventurer, Floofy never forgot the lessons of his merchant upbringing and sought to earn some gil on the side. He ventured into the life of a mercenary, accepting daring contracts and confronting formidable foes. With each victorious mission, he not only accumulated fame and fortune but also honed his combat skills, while his reputation as a reliable and capable mercenary spread throughout Eorzea.",
        "However, as his journey unfolded, the harsh realities of the adventuring world revealed themselves. Betrayals, deceptions, and clashing ambitions plagued the groups he joined, leading to disillusionment with the concept of camaraderie and shared purpose.",
        "In those turbulent times, a wise mentor emerged - a grizzled veteran who had weathered Eorzea's harshest trials. Under this mentor's guidance, Floofy honed his combat skills even further, transitioning from a Machinist to a Gunbreaker, mastering the art of the gunblade. This shift marked a turning point in his journey, as his once-promising path toward forging bonds diverged into a solitary trail.",
        "Yet, Floofy remained a man of duality. Despite his preference for solitude, his warm and charismatic demeanour endeared him to many. He became a sought-after presence in taverns scattered throughout the realm, where he could briefly savour the camaraderie of fellow adventurers. There, they exchanged tales of valour, raised tankards of ale, and shared laughter, understanding the trials and tribulations of their calling.",
        "As the years passed and his wealth grew from his successful mercenary endeavours, Floofy carved a unique niche for himself. He founded and managed his own tavern within the adventurer's guild, situated amidst the towering spires of Ishgard. This tavern became a beloved gathering place for adventurers, travellers, and locals alike, seeking refuge, camaraderie, and the thrill of shared tales and drinks within the heart of the guild.",
      ],
    },
    {
      name: "Y'shtah Tia",
      age: "23",
      role: "dps",
      status: "single",
      themeColor: "#B2FFFF",
      details: [
        "Miqo'te · Seeker of the Sun",
        "He/Him",
        "Single",
        "Machinist",
        "Tavern Waiter",
      ],
      summary: [
        "As a young Miqo'te, Y'shtah cared little for the traditional nomadic life of his tribe or the intricacies of Miqo'te tribal politics. He was driven by a fierce desire to establish his own tribe and become a prominent Nunh. He believed in the power of a united and strong sub-tribe under his leadership, envisioning a future where he would stand as the dominant figure.",
        "However, Y'shtah's journey took an unexpected turn. Struggling to survive outside the protective embrace of his tribe, he resorted to theft. His nimble nature and quick wit made him an adept thief, and soon, his confidence in his abilities turned into cockiness.",
        "One day, while attempting to steal from a bustling tavern owned by a jaded lalafell named Floofy Pengu, Y'shtah's reckless ambition led him into a confrontation with the tavern master. Floofy, wise and observant, had dealt with his fair share of thieves and troublemakers. He recognised the desperation in Y'shtah's eyes and offered him a chance to make amends.",
        "Rather than turning Y'shtah over to the authorities, Floofy proposed a deal. He would spare Y'shtah from punishment if he agreed to work at the tavern, both to repay the stolen goods and to learn the value of honest labor. It was an offer Y'shtah couldn't refuse, as it provided him with a way out of the cycle of theft.",
        "Over time, Y'shtah's experiences at the tavern broadened his horizons. He interacted with the diverse patrons and found himself drawn to the beauty and culture of the Au Ra. His desire to start his own tribe gradually faded away as he embraced a new path of acceptance and appreciation for different races and cultures.",
        "At the tavern, Y'shtah's flirtatious nature became apparent. He enjoyed engaging with the patrons, charming them with his quick wit and charismatic demeanour. Floofy, recognizing Y'shtah's transformation, allowed him to flirt and socialise with the patrons as long as it didn't disrupt the peaceful atmosphere of the establishment.",
        "While Y'shtah wasn't an adventurer by trade, he found immense value in acquiring combat skills. He realised that in the ever-changing world of Eorzea, being capable of defending oneself was a valuable asset. Therefore, he dedicated himself to learning combat as a machinist under the guidance of Floofy, who was a former machinist.",
        "Floofy passed down not only combat skills but also knowledge of machinery and gadgets. He trusted Y'shtah with his own treasured pistol as a symbol of mentorship and solidarity. This gesture solidified their bond and the unconventional mentorship that had guided Y'shtah's journey.",
      ],
    },
  ],
  artworks: [
    {
      label: "Viera",
      src: "images/Floofy-Viera.webp",
      theme: {
        ember: "#d05535",
        emberLight: "#f08860",
        emberDim: "#b06040",
        emberRgb: "208, 85, 53",
        ash: "#100d0e",
        panel: "#100e0f",
        soot: "#1c1618",
        hue: [0, 22],
      },
    },
    {
      label: "Lalafell",
      src: "images/Floofy-Lalafell.webp",
      theme: {
        ember: "#b88020",
        emberLight: "#f0c870",
        emberDim: "#886010",
        emberRgb: "184, 128, 32",
        ash: "#0d0c09",
        panel: "#0e0d0a",
        soot: "#19180e",
        hue: [38, 55],
      },
    },
    {
      label: "Miqo'te",
      src: "images/Floofy-Miqo'te.webp",
      theme: {
        ember: "#1aa8b8",
        emberLight: "#70dce8",
        emberDim: "#107888",
        emberRgb: "26, 168, 184",
        ash: "#080e10",
        panel: "#090f12",
        soot: "#0e1820",
        hue: [175, 195],
      },
    },
  ],
  preferredJobs: [{ name: "Fisher", role: "gatherer" }],
  jobs: [
    // Tanks
    { name: "Paladin", role: "tank", level: 100 },
    { name: "Warrior", role: "tank", level: 100 },
    { name: "Dark Knight", role: "tank", level: 100 },
    { name: "Gunbreaker", role: "tank", level: 100 },
    // Healers
    { name: "White Mage", role: "healer", level: 50 },
    { name: "Scholar", role: "healer", level: 100 },
    { name: "Astrologian", role: "healer", level: 100 },
    { name: "Sage", role: "healer", level: 100 },
    // Melee DPS
    { name: "Monk", role: "dps", level: 100 },
    { name: "Dragoon", role: "dps", level: 100 },
    { name: "Ninja", role: "dps", level: 100 },
    { name: "Samurai", role: "dps", level: 0 },
    { name: "Reaper", role: "dps", level: 0 },
    { name: "Viper", role: "dps", level: 100 },
    // Ranged Physical DPS
    { name: "Bard", role: "dps", level: 100 },
    { name: "Machinist", role: "dps", level: 100 },
    { name: "Dancer", role: "dps", level: 100 },
    // Magical Ranged DPS
    { name: "Black Mage", role: "dps", level: 100 },
    { name: "Summoner", role: "dps", level: 100 },
    { name: "Red Mage", role: "dps", level: 100 },
    { name: "Pictomancer", role: "dps", level: 100 },
    { name: "Blue Mage", role: "bluemage", level: 80 },
    // Crafters
    { name: "Carpenter", role: "crafter", level: 100 },
    { name: "Blacksmith", role: "crafter", level: 100 },
    { name: "Armorer", role: "crafter", level: 100 },
    { name: "Goldsmith", role: "crafter", level: 100 },
    { name: "Leatherworker", role: "crafter", level: 100 },
    { name: "Weaver", role: "crafter", level: 100 },
    { name: "Alchemist", role: "crafter", level: 100 },
    { name: "Culinarian", role: "crafter", level: 100 },
    // Gatherers
    { name: "Miner", role: "gatherer", level: 100 },
    { name: "Botanist", role: "gatherer", level: 100 },
    { name: "Fisher", role: "gatherer", level: 100 },
  ],
  content: [
    {
      category: "savage",
      tier: "Shadowbringers",
      name: "Eden's Promise",
      badges: ["savage", "cleared"],
    },
    {
      category: "savage",
      tier: "Endwalker",
      name: "Asphodelos",
      badges: ["savage", "cleared"],
    },
    {
      category: "savage",
      tier: "Dawntrail",
      name: "AAC Cruiserweight",
      badges: ["savage", "cleared"],
    },
    {
      category: "ultimate",
      tier: "Stormblood",
      name: "Weapon's Refrain",
      badges: ["ultimate", "cleared"],
    },
    {
      category: "ultimate",
      tier: "Shadowbringers",
      name: "The Epic of Alexander",
      badges: ["ultimate", "cleared"],
    },
    {
      category: "chaotic",
      tier: "Dawntrail",
      name: "The Cloud of Darkness",
      badges: ["chaotic", "cleared"],
    },
    {
      category: "variant",
      tier: "Endwalker",
      name: "The Sil'dihn Subterrane",
      badges: ["criterion", "cleared"],
    },
    {
      category: "variant",
      tier: "Endwalker",
      name: "Aloalo Island",
      badges: ["criterion", "cleared"],
    },
    {
      category: "variant",
      tier: "Dawntrail",
      name: "The Merchant's Tale",
      badges: ["advanced", "cleared"],
    },
    {
      category: "deep",
      tier: "Endwalker",
      name: "Eureka Orthos",
      badges: ["floorcleared"],
    },
    {
      category: "deep",
      tier: "Dawntrail",
      name: "Pilgrim's Traverse",
      badges: ["floorcleared"],
    },
  ],
  fc: {
    icon: { src: "images/FC-Logo.webp" },
    name: "Floofy Pancakes",
    tag: "CAKE",
    lodestoneUrl:
      "https://na.finalfantasyxiv.com/lodestone/freecompany/9233505136016488961/",
    meta: [
      { label: "World", value: "Tonberry" },
      { label: "Focus", value: "Casual" },
    ],
  },
  music: {
    src: "music/A Thousand Years.mp3",
    label: "Music",
    defaultEnabled: false,
    volume: 0.2,
  },
  gposeVideo: "gpose/mylove.webm",
  gpose: [
    { src: "gpose/ffxiv_dx11 2025-02-18 00-16-31 Ice Cream Cake.webp" },
    { src: "gpose/ffxiv_dx11 2024-05-30 07-15-43.webp" },
    { src: "gpose/ffxiv_dx11 2024-06-20 08-03-30.webp" },
    { src: "gpose/ffxiv_dx11 2024-06-26 07-17-32.webp" },
    { src: "gpose/ffxiv_dx11 2024-07-14 02-55-59 Indulgence.webp" },
    { src: "gpose/ffxiv_dx11 2024-07-26 23-34-53 Elvastagram_5.webp" },
    { src: "gpose/ffxiv_dx11 2024-12-08 08-58-49 Wifi_Simplicity1B.webp" },
    { src: "gpose/ffxiv_dx11 2024-12-10 03-35-03 Elvastagram_5.webp" },
    { src: "gpose/ffxiv_dx11 2025-02-13 14-47-34 OkamiFilm_2 copy.webp" },
    { src: "gpose/ffxiv_dx11 2025-10-03 01-52-03 Ice Cream Cake.webp" },
    { src: "gpose/ffxiv_dx11_2024-02-15_19-12-48.webp" },
  ],
};

const PROFILE_DATA = SITE_DATA.profile;
const ARTWORKS = SITE_DATA.artworks;
const PREFERRED_JOBS = SITE_DATA.preferredJobs;
const MY_JOBS = SITE_DATA.jobs;
const MY_CONTENT = SITE_DATA.content;
const FC_DATA = SITE_DATA.fc;
const MUSIC_DATA = SITE_DATA.music || {};
const GPOSE_PHOTOS = SITE_DATA.gpose;
const OC_LORES = SITE_DATA.ocLores || [];

// Job Icons
// Served from xivapi/classjob-icons
const CDN = "images/jobs/";
const JOB_ICONS = {
  Paladin: CDN + "paladin.png",
  Warrior: CDN + "warrior.png",
  "Dark Knight": CDN + "darkknight.png",
  Gunbreaker: CDN + "gunbreaker.png",
  "White Mage": CDN + "whitemage.png",
  Scholar: CDN + "scholar.png",
  Astrologian: CDN + "astrologian.png",
  Sage: CDN + "sage.png",
  Monk: CDN + "monk.png",
  Dragoon: CDN + "dragoon.png",
  Ninja: CDN + "ninja.png",
  Samurai: CDN + "samurai.png",
  Reaper: CDN + "reaper.png",
  Viper: CDN + "viper.png",
  Bard: CDN + "bard.png",
  Machinist: CDN + "machinist.png",
  Dancer: CDN + "dancer.png",
  "Black Mage": CDN + "blackmage.png",
  Summoner: CDN + "summoner.png",
  "Red Mage": CDN + "redmage.png",
  Pictomancer: CDN + "pictomancer.png",
  "Blue Mage": CDN + "bluemage.png",
  Carpenter: CDN + "carpenter.png",
  Blacksmith: CDN + "blacksmith.png",
  Armorer: CDN + "armorer.png",
  Goldsmith: CDN + "goldsmith.png",
  Leatherworker: CDN + "leatherworker.png",
  Weaver: CDN + "weaver.png",
  Alchemist: CDN + "alchemist.png",
  Culinarian: CDN + "culinarian.png",
  Miner: CDN + "miner.png",
  Botanist: CDN + "botanist.png",
  Fisher: CDN + "fisher.png",
};

function makeJobIcon(jobName, size = "normal") {
  const src = JOB_ICONS[jobName];
  if (!src) return null;
  const img = document.createElement("img");
  img.src = src;
  img.alt = jobName;
  img.className = size === "small" ? "pref-job-icon" : "job-icon";
  img.addEventListener(
    "error",
    () => {
      img.style.display = "none";
    },
    { once: true },
  );
  return img;
}

// Ember Particles
let emberHue = { min: 0, max: 22 };

(function () {
  const canvas = document.getElementById("ember-canvas");
  const ctx = canvas.getContext("2d");
  let W,
    H,
    particles = [],
    frame = 0;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const rand = (a, b) => Math.random() * (b - a) + a;

  function spawn() {
    return {
      x: rand(0, W),
      y: rand(H * 0.78, H),
      vx: rand(-0.3, 0.3),
      vy: rand(-0.5, -1.1),
      life: 1,
      decay: rand(0.005, 0.011),
      size: rand(0.9, 2.2),
      hue: rand(emberHue.min, emberHue.max),
    };
  }

  for (let i = 0; i < 10; i++) {
    const p = spawn();
    p.life = Math.random();
    particles.push(p);
  }

  function tick() {
    requestAnimationFrame(tick);
    if (++frame % 2) return;
    ctx.clearRect(0, 0, W, H);
    if (Math.random() < 0.15 && particles.length < 22) particles.push(spawn());
    particles = particles.filter((p) => p.life > 0);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vx += rand(-0.025, 0.025);
      p.life -= p.decay;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue},85%,58%,${p.life * 0.6})`;
      ctx.fill();
    }
  }
  tick();
})();

// Utilities
const $id = (id) => document.getElementById(id);

const SOCIAL_ICONS = {
  default: `<iconify-icon icon="mdi:link-variant" aria-hidden="true"></iconify-icon>`,
  x: `<iconify-icon icon="fa6-brands:x-twitter" aria-hidden="true"></iconify-icon>`,
};

function getSocialIcon(label) {
  const l = (label || "").toLowerCase();
  if (l.includes("x") || l.includes("twitter") || l.includes("x.com"))
    return SOCIAL_ICONS.x;
  return SOCIAL_ICONS.default;
}

// Tabs
function initTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");
  const indicator = $id("tab-indicator");
  const nav = $id("tab-nav");

  function moveIndicator(btn) {
    indicator.style.left =
      btn.getBoundingClientRect().left -
      nav.getBoundingClientRect().left +
      "px";
    indicator.style.width = btn.getBoundingClientRect().width + "px";
    indicator.classList.add("ready");
  }

  const active = document.querySelector(".tab-btn.active");
  if (active) {
    const placeIndicator = () => moveIndicator(active);
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => requestAnimationFrame(placeIndicator));
    } else {
      requestAnimationFrame(placeIndicator);
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      $id(`panel-${btn.dataset.tab}`)?.classList.add("active");
      moveIndicator(btn);
      if (btn.dataset.tab === "gpose") loadGposeImages();
    });
  });

  window.addEventListener("resize", () => {
    const cur = document.querySelector(".tab-btn.active");
    if (cur) moveIndicator(cur);
  });

  window.addEventListener("load", () => {
    const cur = document.querySelector(".tab-btn.active");
    if (cur) moveIndicator(cur);
  });

  if (typeof ResizeObserver !== "undefined") {
    const ro = new ResizeObserver(() => {
      const cur = document.querySelector(".tab-btn.active");
      if (cur) moveIndicator(cur);
    });
    buttons.forEach((btn) => ro.observe(btn));
  }
}

// Theme switcher
function applyTheme(theme) {
  if (!theme) return;
  const r = document.documentElement;
  r.style.setProperty("--ember", theme.ember);
  r.style.setProperty("--ember-light", theme.emberLight);
  r.style.setProperty("--ember-dim", theme.emberDim);
  r.style.setProperty("--ember-rgb", theme.emberRgb);
  r.style.setProperty("--ash", theme.ash);
  r.style.setProperty("--panel", theme.panel);
  r.style.setProperty("--soot", theme.soot);
  if (theme.hue) {
    emberHue.min = theme.hue[0];
    emberHue.max = theme.hue[1];
  }
}

// Artwork Switcher
function initArtworks() {
  const dotsEl = $id("artwork-dots");
  const imgEl = $id("artwork-img");
  const emptyEl = $id("artwork-empty");

  if (!ARTWORKS.length) {
    emptyEl.style.display = "";
    imgEl.style.display = "none";
    dotsEl.style.display = "none";
    return;
  }
  // emptyEl stays visible as shimmer until first image loads
  dotsEl.style.display = "";

  ARTWORKS.forEach((art) => {
    new Image().src = art.src;
  });

  let switchTimer = null;

  function switchTo(i) {
    const art = ARTWORKS[i];
    applyTheme(art.theme);
    document
      .querySelectorAll(".artwork-thumb")
      .forEach((d, j) => d.classList.toggle("active", j === i));

    if (imgEl.style.display === "none") {
      imgEl.src = art.src;
      imgEl.alt = art.label || `Artwork ${i + 1}`;
      const reveal = () => {
        emptyEl.style.display = "none";
        imgEl.style.opacity = "0";
        imgEl.style.display = "block";
        requestAnimationFrame(() => {
          imgEl.style.opacity = "0.9";
        });
      };
      if (imgEl.complete && imgEl.naturalWidth > 0) reveal();
      else {
        imgEl.addEventListener("load", reveal, { once: true });
        imgEl.addEventListener("error", reveal, { once: true });
      }
      return;
    }

    if (switchTimer !== null) clearTimeout(switchTimer);
    imgEl.style.transition = "opacity 0.2s ease";
    imgEl.style.opacity = "0";

    switchTimer = setTimeout(() => {
      switchTimer = null;
      emptyEl.style.display = "";
      imgEl.src = art.src;
      imgEl.alt = art.label || `Artwork ${i + 1}`;
      const fadeIn = () => {
        emptyEl.style.display = "none";
        imgEl.style.opacity = "0.9";
      };
      if (imgEl.complete && imgEl.naturalWidth > 0) {
        requestAnimationFrame(fadeIn);
      } else {
        imgEl.addEventListener("load", fadeIn, { once: true });
        imgEl.addEventListener("error", fadeIn, { once: true });
      }
    }, 200);
  }

  ARTWORKS.forEach((art, i) => {
    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.className = "artwork-thumb" + (i === 0 ? " active" : "");
    thumb.title = art.label || `Artwork ${i + 1}`;
    thumb.setAttribute("aria-label", art.label || `Artwork ${i + 1}`);
    thumb.innerHTML = `<span class="artwork-thumb-label">${art.label || `Artwork ${i + 1}`}</span>`;

    thumb.addEventListener("click", () => switchTo(i));
    dotsEl.appendChild(thumb);
  });

  switchTo(0);
}

// Profile
function renderProfile() {
  const p = PROFILE_DATA;
  const nameEl = $id("disp-name");
  const titleEl = $id("disp-title");
  const aboutMeEl = $id("disp-aboutme");
  const tagsEl = $id("disp-tags");
  const socialsEl = $id("disp-socials");

  if (p.name && nameEl) nameEl.textContent = p.name;
  if (p.title) {
    if (titleEl) {
      titleEl.textContent = p.title;
      titleEl.style.display = "";
    }
  }
  const aboutMeText = p.aboutMe || p.lore;
  if (aboutMeText) {
    if (aboutMeEl) {
      aboutMeEl.textContent = aboutMeText;
      aboutMeEl.style.display = "";
    }
  }
  if (!tagsEl || !socialsEl) return;

  [p.pronouns, p.mbti].filter(Boolean).forEach((val) => {
    const el = document.createElement("div");
    el.className = "profile-tag";
    el.textContent = val;
    tagsEl.appendChild(el);
  });

  PREFERRED_JOBS.forEach((j) => {
    const el = document.createElement("div");
    el.className = `profile-tag pref-job-tag ${j.role}`;
    const icon = makeJobIcon(j.name, "small");
    if (icon) el.appendChild(icon);
    const span = document.createElement("span");
    span.textContent = j.name;
    el.appendChild(span);
    tagsEl.appendChild(el);
  });

  if (tagsEl.children.length) tagsEl.style.display = "";

  (p.socials || []).forEach(({ label, url }, index) => {
    if (!label && !url) return;
    const el = document.createElement("a");
    el.className = "social-link";
    el.innerHTML = getSocialIcon(label);
    const displayLabel = label || url || "Social link";
    const normalizedLabel = (label || "").trim().toLowerCase();
    const isX = normalizedLabel === "x" || normalizedLabel === "twitter";
    el.setAttribute("aria-label", displayLabel);
    if (!isX) {
      el.dataset.label = displayLabel;
    }
    el.style.animationDelay = `${index * 70}ms`;
    if (label && !isX) el.title = label;
    if (url) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener";
    }
    socialsEl.appendChild(el);
  });
  if (socialsEl.children.length) {
    socialsEl.style.display = "";
  }

  if (p.lastUpdated) {
    aboutMeEl?.parentElement?.querySelector(".profile-updated")?.remove();
    const updatedEl = document.createElement("div");
    updatedEl.className = "profile-updated";
    updatedEl.textContent = `Updated ${p.lastUpdated}`;
    aboutMeEl?.insertAdjacentElement("afterend", updatedEl);
  }
}

// OC Lore
function renderOcLore() {
  const loreGrid = $id("lore-grid");
  if (!loreGrid) return;
  loreGrid.innerHTML = "";

  if (!OC_LORES.length) {
    const empty = document.createElement("div");
    empty.className = "lore-empty";
    empty.textContent = "Coming Soon...";
    loreGrid.appendChild(empty);
    return;
  }

  const ROLE_STYLES = {
    tank: { color: "rgb(73, 106, 213)", bg: "rgba(73, 106, 213, 0.06)" },
    healer: { color: "rgb(82, 182, 118)", bg: "rgba(82, 182, 118, 0.06)" },
    dps: { color: "rgb(213, 100, 73)", bg: "rgba(213, 100, 73, 0.06)" },
    crafter: { color: "rgb(160, 120, 80)", bg: "rgba(160, 120, 80, 0.06)" },
    gatherer: { color: "rgb(100, 160, 140)", bg: "rgba(100, 160, 140, 0.06)" },
  };

  OC_LORES.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "lore-card";

    const roleStyle = entry.role ? ROLE_STYLES[entry.role] : null;
    if (roleStyle) {
      card.dataset.role = entry.role;
      card.style.setProperty("--role-c", entry.themeColor || roleStyle.color);
      card.style.setProperty("--role-bg", roleStyle.bg);
    }

    const name = entry.name || "Unnamed OC";
    const ageRaw = String(entry.age ?? "").trim();
    const summaries = Array.isArray(entry.summary)
      ? entry.summary.filter(Boolean)
      : [entry.summary].filter(Boolean);

    const head = document.createElement("div");
    head.className = "lore-card-head";

    const nameEl = document.createElement("h3");
    nameEl.className = "lore-card-name";
    nameEl.textContent = name;
    head.appendChild(nameEl);

    const ageEl = document.createElement("div");
    ageEl.className = "lore-card-world";
    const isUnknownAge =
      !ageRaw || ageRaw.toLowerCase() === "unknown" || ageRaw === "-";
    if (isUnknownAge) {
      ageEl.textContent = "Age —";
    } else if (/^\d+$/.test(ageRaw)) {
      ageEl.textContent = `${ageRaw} y/o`;
    } else {
      ageEl.textContent = `Age ${ageRaw}`;
    }
    head.appendChild(ageEl);

    card.appendChild(head);

    if (entry.details?.length) {
      const detailsEl = document.createElement("div");
      detailsEl.className = "lore-card-details";
      entry.details.forEach((d, i) => {
        const tag = document.createElement("span");
        tag.className =
          i === 0
            ? "lore-card-detail lore-card-detail--race"
            : "lore-card-detail";
        tag.textContent = d;
        detailsEl.appendChild(tag);
      });
      card.appendChild(detailsEl);
    }

    if (summaries.length > 0) {
      const p = document.createElement("p");
      p.className = "lore-card-summary";
      p.textContent = summaries[0];
      card.appendChild(p);
    }

    if (summaries.length > 1) {
      const extra = document.createElement("div");
      extra.className = "lore-extra";
      const inner = document.createElement("div");
      inner.className = "lore-extra-inner";
      summaries.slice(1).forEach((text) => {
        const p = document.createElement("p");
        p.className = "lore-card-summary";
        p.textContent = text;
        inner.appendChild(p);
      });
      extra.appendChild(inner);
      card.appendChild(extra);

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "lore-toggle";
      toggle.innerHTML = `<span>Read more</span><iconify-icon icon="mdi:chevron-down" aria-hidden="true"></iconify-icon>`;
      toggle.addEventListener("click", () => {
        const open = extra.classList.toggle("open");
        toggle.querySelector("span").textContent = open
          ? "Read less"
          : "Read more";
        toggle.classList.toggle("open", open);
      });
      card.appendChild(toggle);
    }

    loreGrid.appendChild(card);
  });

  const placeholder = document.createElement("div");
  placeholder.className = "lore-placeholder";
  placeholder.textContent = "More coming soon";
  loreGrid.appendChild(placeholder);
}

// Music
function initMusic() {
  if (isMobileDevice) return;
  const controls = $id("music-controls");
  const button = $id("music-toggle");
  const volumePopover = $id("music-volume-popover");
  const slider = $id("music-volume");
  const audio = $id("bg-music");
  const src = (MUSIC_DATA.src || "").trim();
  if (!controls || !button || !volumePopover || !slider || !audio || !src) {
    return;
  }

  const storageKey = "ffxiv_profile_music_enabled";
  const volumeKey = "ffxiv_profile_music_volume";
  const hintKey = "ffxiv_profile_music_hint_seen";
  let volume = Math.min(1, Math.max(0, Number(MUSIC_DATA.volume ?? 0.2)));

  try {
    const saved = localStorage.getItem(volumeKey);
    if (saved !== null) {
      const savedVolume = Number(saved);
      if (!Number.isNaN(savedVolume)) {
        volume = Math.min(1, Math.max(0, savedVolume));
      }
    }
  } catch {
    // Ignore storage access errors
  }

  audio.src = src;
  audio.volume = volume;
  slider.value = String(Math.round(volume * 100));

  const updateSliderVisual = (nextVolume) => {
    const level = Math.round(nextVolume * 100);
    slider.style.setProperty("--volume-level", `${level}%`);
  };
  updateSliderVisual(volume);
  // Force visual refresh on load
  requestAnimationFrame(() => {
    updateSliderVisual(volume);
  });

  controls.style.display = "inline-flex";

  const dismissHint = () => {
    controls.classList.remove("attention");
    try {
      localStorage.setItem(hintKey, "1");
    } catch {
      // Ignore storage access errors
    }
  };

  let hintDismissed = false;
  try {
    hintDismissed = localStorage.getItem(hintKey) === "1";
  } catch {
    // Ignore storage access errors
  }
  controls.classList.toggle("attention", !hintDismissed);

  const setButtonState = (enabled) => {
    button.setAttribute("aria-pressed", enabled ? "true" : "false");
    button.innerHTML = `<iconify-icon icon="${enabled ? "mdi:pause" : "mdi:music"}" aria-hidden="true"></iconify-icon><span class="sr-only">${enabled ? "Pause music" : "Play music"}</span>`;
    button.setAttribute("aria-label", enabled ? "Pause music" : "Play music");
    button.title = enabled ? "Pause music" : "Play music";
  };

  let enabled = Boolean(MUSIC_DATA.defaultEnabled);
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "1" || saved === "0") enabled = saved === "1";
  } catch {
    // Ignore storage access errors (private mode or blocked storage)
  }

  const applyState = async () => {
    if (!enabled) {
      audio.pause();
      setButtonState(false);
      return;
    }
    try {
      await audio.play();
      setButtonState(true);
    } catch {
      enabled = false;
      setButtonState(false);
    }
  };

  button.addEventListener("click", async () => {
    dismissHint();
    enabled = !enabled;
    try {
      localStorage.setItem(storageKey, enabled ? "1" : "0");
    } catch {
      // Ignore storage access errors
    }
    await applyState();
  });

  slider.addEventListener("input", () => {
    dismissHint();
    const next = Math.min(1, Math.max(0, Number(slider.value) / 100));
    audio.volume = next;
    updateSliderVisual(next);
    try {
      localStorage.setItem(volumeKey, String(next));
    } catch {
      // Ignore storage access errors
    }
  });

  const setVolumeOpen = (open) => {
    controls.classList.toggle("volume-open", open);
    button.setAttribute("aria-expanded", open ? "true" : "false");
  };

  const supportsHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  let closeVolumeTimer = null;
  const clearVolumeCloseTimer = () => {
    if (closeVolumeTimer !== null) {
      window.clearTimeout(closeVolumeTimer);
      closeVolumeTimer = null;
    }
  };
  const openVolume = () => {
    clearVolumeCloseTimer();
    setVolumeOpen(true);
  };
  const closeVolume = () => {
    clearVolumeCloseTimer();
    setVolumeOpen(false);
  };
  const scheduleVolumeClose = (delay = 140) => {
    clearVolumeCloseTimer();
    closeVolumeTimer = window.setTimeout(() => {
      setVolumeOpen(false);
      closeVolumeTimer = null;
    }, delay);
  };
  const isInsideVolumeUi = (node) =>
    node && (button.contains(node) || volumePopover.contains(node));

  if (supportsHover) {
    const handleEnter = () => openVolume();
    const handleLeave = (event) => {
      if (!isInsideVolumeUi(event.relatedTarget)) {
        scheduleVolumeClose();
      }
    };

    button.addEventListener("pointerenter", handleEnter);
    button.addEventListener("pointerleave", handleLeave);
    volumePopover.addEventListener("pointerenter", handleEnter);
    volumePopover.addEventListener("pointerleave", handleLeave);

    button.addEventListener("focusin", handleEnter);
    volumePopover.addEventListener("focusin", handleEnter);
    button.addEventListener("focusout", handleLeave);
    volumePopover.addEventListener("focusout", handleLeave);
  }

  document.addEventListener("click", (event) => {
    if (!controls.contains(event.target)) {
      closeVolume();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeVolume();
    }
  });

  setButtonState(enabled);
  if (enabled) {
    dismissHint();
  }
  if (enabled) {
    // Attempt auto-start only when explicitly enabled by user preference.
    applyState();
  }
}

// Jobs
const ROLE_ORDER = ["tank", "healer", "dps", "bluemage", "crafter", "gatherer"];
const ROLE_LABELS = {
  tank: "Tank",
  healer: "Healer",
  dps: "DPS",
  bluemage: "Limited Job",
  crafter: "Crafter",
  gatherer: "Gatherer",
};

function renderJobs() {
  const container = $id("jobs-role-groups");

  const groups = {};
  ROLE_ORDER.forEach((r) => (groups[r] = []));
  MY_JOBS.forEach((j) => {
    if (groups[j.role]) groups[j.role].push(j);
  });

  ROLE_ORDER.forEach((role) => {
    const jobs = groups[role];
    if (!jobs.length) return;

    const group = document.createElement("div");
    group.className = "role-group";
    group.innerHTML = `
      <div class="role-header">
        <div class="role-pip ${role}"></div>
        <div class="role-label ${role}">${ROLE_LABELS[role]}</div>
        <div class="role-line"></div>
      </div>
      <div class="jobs-grid"></div>
    `;
    const grid = group.querySelector(".jobs-grid");

    jobs.forEach((j) => {
      const cap = role === "bluemage" ? 80 : 100;
      const isMax = j.level >= cap;
      const isZero = j.level === 0;
      const pct = Math.min(100, Math.round((j.level / cap) * 100));

      const el = document.createElement("div");
      el.className = `job-row ${role}`;
      const icon = makeJobIcon(j.name);
      if (icon) el.appendChild(icon);
      el.innerHTML += `
        <div class="job-details">
          <div class="job-name">${j.name}</div>
          <div class="job-bar-track"><div class="job-bar-fill" style="width:0%" data-pct="${pct}"></div></div>
        </div>
        <div class="job-level${isMax ? " max" : ""}${isZero ? " zero" : ""}">${isZero ? "—" : j.level}</div>
      `;
      grid.appendChild(el);
    });
    container.appendChild(group);
  });

  requestAnimationFrame(() =>
    setTimeout(() => {
      document.querySelectorAll(".job-bar-fill").forEach((b) => {
        b.style.width = b.dataset.pct + "%";
      });
    }, 100),
  );
}

// Content
const CONTENT_SECTIONS = [
  {
    key: "ultimate",
    label: "Ultimate",
    pip: "pip-ultimate",
    title: "title-ultimate",
  },
  {
    key: "savage",
    label: "Savage Raids",
    pip: "pip-savage",
    title: "title-savage",
  },
  {
    key: "chaotic",
    label: "Chaotic Alliance Raids",
    pip: "pip-chaotic",
    title: "title-chaotic",
  },
  {
    key: "extreme",
    label: "Extreme Trials",
    pip: "pip-extreme",
    title: "title-extreme",
  },
  {
    key: "variant",
    label: "Variant & Criterion",
    pip: "pip-variant",
    title: "title-variant",
  },
  { key: "deep", label: "Deep Dungeons", pip: "pip-deep", title: "title-deep" },
];

const BADGE_LABELS = {
  cleared: "Cleared",
  ultimate: "Ultimate",
  savage: "Savage",
  extreme: "Extreme",
  chaotic: "Chaotic",
  floorcleared: "All Floors Cleared",
  advanced: "Advanced",
  criterion: "Criterion",
};

function renderContent() {
  CONTENT_SECTIONS.forEach((section) => {
    const items = MY_CONTENT.filter((c) => c.category === section.key);
    const wrapper = $id(`section-${section.key}`);
    if (!wrapper) return;
    if (!items.length) {
      wrapper.style.display = "none";
      return;
    }

    wrapper.innerHTML = `
      <div class="content-section-header">
        <div class="content-section-pip ${section.pip}"></div>
        <div class="content-section-title ${section.title}">${section.label}</div>
        <div class="content-section-line"></div>
      </div>
      <div class="content-grid"></div>
    `;
    const grid = wrapper.querySelector(".content-grid");
    items.forEach((item) => {
      const card = document.createElement("div");
      card.className = `content-card ${item.category}`;
      const badges = (item.badges || [])
        .map(
          (b) => `<div class="card-badge ${b}">${BADGE_LABELS[b] || b}</div>`,
        )
        .join("");
      card.innerHTML = `
        <div class="card-tier">${item.tier || ""}</div>
        <div class="card-name">${item.name}</div>
        <div class="card-badges">${badges}</div>
      `;
      grid.appendChild(card);
    });
  });
}

// Free Company
function renderFC() {
  const fc = FC_DATA;
  const fcLink = document.querySelector(".fc-link");
  const iconEl = $id("fc-icon");

  if (fcLink && fc.lodestoneUrl) {
    fcLink.href = fc.lodestoneUrl;
    fcLink.setAttribute(
      "aria-label",
      "Open Free Company page on The Lodestone in a new tab",
    );
    fcLink.title = "Open Free Company page on The Lodestone";
  }

  if (fc.icon?.src) {
    const img = document.createElement("img");
    img.src = fc.icon.src;
    img.alt = fc.name || "FC";
    img.style.cssText =
      "width:100%;height:100%;object-fit:contain;border-radius:50%;opacity:0;transition:opacity 0.3s ease;";
    const revealFC = () => {
      img.style.opacity = "1";
    };
    img.addEventListener("load", revealFC, { once: true });
    if (img.complete && img.naturalWidth > 0) revealFC();
    img.addEventListener(
      "error",
      () => {
        img.replaceWith(document.createTextNode("⚜"));
      },
      { once: true },
    );
    iconEl.appendChild(img);
  } else {
    iconEl.textContent = "⚜";
  }

  $id("fc-tag").textContent = fc.tag ? `«${fc.tag}»` : "";
  $id("fc-name").textContent = fc.name || "";

  const metaEl = $id("fc-meta");
  (fc.meta || []).forEach(({ label, value }) => {
    const item = document.createElement("div");
    item.className = "fc-meta-item";
    item.innerHTML = `<span>${label}</span>${value}`;
    metaEl.appendChild(item);
  });
}

// GPose / Lightbox
let lbIndex = 0;
let lbClosing = false;
let lbFadeTimer = 0;
let lbTrigger = null;
const LB_OPEN_FADE_MS = 280;
const LB_CLOSE_FADE_MS = 270;
const MOBILE_SWIPE_THRESHOLD = 70;
const MOBILE_SWIPE_DISTANCE = 120;

function loadGposeImages() {
  document.querySelectorAll("#gpose-grid img[data-src]").forEach((img) => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
    if (img.complete && img.naturalWidth > 0) img.style.opacity = "1";
  });
  const vid = document.querySelector(".gpose-video-card video[data-src]");
  if (vid) {
    vid.src = vid.dataset.src;
    vid.removeAttribute("data-src");
    vid.load();
    vid.play().catch(() => {});
  }
}

function renderGpose() {
  const gposeVideo = (SITE_DATA.gposeVideo || "").trim();
  if (gposeVideo) {
    const panel = $id("panel-gpose");
    const videoWrap = document.createElement("div");
    videoWrap.className = "gpose-video-card";
    const video = document.createElement("video");
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.dataset.src = gposeVideo;
    videoWrap.appendChild(video);
    panel.insertBefore(videoWrap, panel.firstChild);
  }

  const grid = $id("gpose-grid");
  if (!GPOSE_PHOTOS.length) {
    grid.classList.add("gpose-grid-empty");
    grid.innerHTML =
      '<div class="gpose-empty"><span class="gpose-empty-lead">No GPose screenshots yet</span><br><span class="gpose-empty-tail">check back soon.</span></div>';
    return;
  }

  grid.classList.remove("gpose-grid-empty");

  GPOSE_PHOTOS.forEach((photo, i) => {
    const item = document.createElement("div");
    item.className = "gpose-item";

    if (photo.src) {
      const img = document.createElement("img");
      img.dataset.src = photo.src;
      img.alt = "";
      img.decoding = "async";
      img.style.opacity = "0";
      img.style.transition = "opacity 0.3s ease";
      const revealGpose = () => {
        img.style.opacity = "1";
      };
      img.addEventListener("load", revealGpose, { once: true });
      item.appendChild(img);
    } else {
      const ph = document.createElement("div");
      ph.className = "gpose-placeholder";
      ph.innerHTML = `<iconify-icon icon="mdi:image-off-outline" aria-hidden="true"></iconify-icon>`;
      item.appendChild(ph);
    }

    item.addEventListener("click", () => openLightbox(i));
    grid.appendChild(item);
  });
}

function openLightbox(index) {
  lbIndex = index;
  updateLightbox();
  const overlay = $id("lightbox-overlay");
  const lightbox = $id("lightbox");
  window.clearTimeout(lbFadeTimer);
  lbClosing = false;
  lbTrigger = document.activeElement;
  overlay.classList.add("active");
  overlay.style.opacity = "0";
  overlay.style.transition = `opacity ${LB_OPEN_FADE_MS}ms ease`;
  lightbox.style.opacity = "0";
  lightbox.style.transform = "scale(0.94)";
  lightbox.style.transition = `opacity ${LB_OPEN_FADE_MS}ms ease, transform ${LB_OPEN_FADE_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
  requestAnimationFrame(() => {
    overlay.style.opacity = "1";
    lightbox.style.opacity = "1";
    lightbox.style.transform = "scale(1)";
    if (!isMobileDevice) $id("lb-close")?.focus();
  });
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const overlay = $id("lightbox-overlay");
  const lightbox = $id("lightbox");
  if (!overlay.classList.contains("active") || lbClosing) return;

  lbClosing = true;
  overlay.style.transition = `opacity ${LB_CLOSE_FADE_MS}ms ease`;
  lightbox.style.transition = `opacity ${LB_CLOSE_FADE_MS}ms ease, transform ${LB_CLOSE_FADE_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
  overlay.style.opacity = "0";
  lightbox.style.opacity = "0";
  lightbox.style.transform = "scale(0.96)";
  window.clearTimeout(lbFadeTimer);
  lbFadeTimer = window.setTimeout(() => {
    overlay.classList.remove("active");
    overlay.style.opacity = "";
    overlay.style.transition = "";
    lightbox.style.opacity = "";
    lightbox.style.transition = "";
    lightbox.style.transform = "";
    document.body.style.overflow = "";
    lbClosing = false;
    lbTrigger?.focus();
    lbTrigger = null;
  }, LB_CLOSE_FADE_MS);
}

function updateLightbox() {
  const photo = GPOSE_PHOTOS[lbIndex];
  if (!photo) return;
  const lbImg = $id("lb-img");
  const lbWrap = lbImg.parentElement;

  if (photo.src) {
    lbImg.src = photo.src;
    lbImg.style.display = "";
    lbWrap.style.setProperty("--lb-bg", `url('${photo.src}')`);
  } else {
    lbImg.style.display = "none";
    lbWrap.style.removeProperty("--lb-bg");
  }

  $id("lb-prev").style.opacity = lbIndex > 0 ? "" : "0.2";
  $id("lb-prev").style.pointerEvents = lbIndex > 0 ? "" : "none";
  $id("lb-next").style.opacity = lbIndex < GPOSE_PHOTOS.length - 1 ? "" : "0.2";
  $id("lb-next").style.pointerEvents =
    lbIndex < GPOSE_PHOTOS.length - 1 ? "" : "none";
}

function initLightbox() {
  $id("lb-close").addEventListener("click", closeLightbox);
  $id("lightbox-overlay").addEventListener("click", (e) => {
    if (e.target === $id("lightbox-overlay")) closeLightbox();
  });

  if (isMobileDevice) {
    const mobileLightbox = $id("lightbox");
    let dragStartX = 0;
    let dragStartY = 0;
    let dragActive = false;
    let dragAxis = null;

    const SLIDE_MS = 200;
    const SLIDE_EASE = `${SLIDE_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;

    const resetMobileLightbox = () => {
      mobileLightbox.style.transition = `opacity ${SLIDE_MS}ms ease, transform ${SLIDE_EASE}`;
      mobileLightbox.style.opacity = "";
      mobileLightbox.style.transform = "";
    };

    const navigateMobile = (dir) => {
      const exitX = dir === "next" ? "-100%" : "100%";
      const enterX = dir === "next" ? "100%" : "-100%";
      mobileLightbox.style.transition = `opacity ${SLIDE_MS}ms ease, transform ${SLIDE_EASE}`;
      mobileLightbox.style.transform = `translateX(${exitX})`;
      mobileLightbox.style.opacity = "0";
      setTimeout(() => {
        if (dir === "next") lbIndex++;
        else lbIndex--;
        updateLightbox();
        mobileLightbox.style.transition = "none";
        mobileLightbox.style.transform = `translateX(${enterX})`;
        mobileLightbox.style.opacity = "0";
        requestAnimationFrame(() => {
          mobileLightbox.style.transition = `opacity ${SLIDE_MS}ms ease, transform ${SLIDE_EASE}`;
          mobileLightbox.style.transform = "";
          mobileLightbox.style.opacity = "";
        });
      }, SLIDE_MS);
    };

    mobileLightbox.addEventListener(
      "touchstart",
      (e) => {
        dragStartX = e.touches[0].clientX;
        dragStartY = e.touches[0].clientY;
        dragActive = true;
        dragAxis = null;
        mobileLightbox.style.transition = "none";
      },
      { passive: true },
    );

    mobileLightbox.addEventListener(
      "touchmove",
      (e) => {
        if (!dragActive) return;
        const dx = e.touches[0].clientX - dragStartX;
        const dy = e.touches[0].clientY - dragStartY;
        if (!dragAxis && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
          dragAxis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
        }
        if (dragAxis === "x") {
          mobileLightbox.style.transform = `translateX(${dx}px)`;
          mobileLightbox.style.opacity = String(
            1 - Math.min(1, Math.abs(dx) / 280) * 0.35,
          );
        } else if (dragAxis === "y") {
          const progress = Math.min(1, Math.hypot(dx, dy) / 120);
          mobileLightbox.style.opacity = String(1 - progress * 0.9);
        }
        if (dragAxis) e.preventDefault();
      },
      { passive: false },
    );

    mobileLightbox.addEventListener(
      "touchend",
      (e) => {
        if (!dragActive) return;
        dragActive = false;
        const dx = e.changedTouches[0].clientX - dragStartX;
        const dy = e.changedTouches[0].clientY - dragStartY;

        if (dragAxis === "x") {
          if (dx < -80 && lbIndex < GPOSE_PHOTOS.length - 1)
            navigateMobile("next");
          else if (dx > 80 && lbIndex > 0) navigateMobile("prev");
          else resetMobileLightbox();
        } else if (dragAxis === "y") {
          if (Math.hypot(dx, dy) > 70) closeLightbox();
          else resetMobileLightbox();
        } else {
          closeLightbox();
        }
      },
      { passive: true },
    );

    mobileLightbox.addEventListener("touchcancel", () => {
      dragActive = false;
      dragAxis = null;
      resetMobileLightbox();
    });

    return;
  }

  $id("lb-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    if (lbIndex > 0) {
      lbIndex--;
      updateLightbox();
    }
  });
  $id("lb-next").addEventListener("click", (e) => {
    e.stopPropagation();
    if (lbIndex < GPOSE_PHOTOS.length - 1) {
      lbIndex++;
      updateLightbox();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (!$id("lightbox-overlay").classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft" && lbIndex > 0) {
      lbIndex--;
      updateLightbox();
    }
    if (e.key === "ArrowRight" && lbIndex < GPOSE_PHOTOS.length - 1) {
      lbIndex++;
      updateLightbox();
    }
    if (e.key === "Tab" && !isMobileDevice) {
      const focusable = [
        $id("lb-prev"),
        $id("lb-close"),
        $id("lb-next"),
      ].filter(Boolean);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (
          !focusable.includes(document.activeElement) ||
          document.activeElement === first
        ) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (
          !focusable.includes(document.activeElement) ||
          document.activeElement === last
        ) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  let touchStartX = 0;
  const lb = $id("lightbox");
  lb.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );
  lb.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) < MOBILE_SWIPE_THRESHOLD - 30) return;
      if (dx < 0 && lbIndex < GPOSE_PHOTOS.length - 1) {
        lbIndex++;
        updateLightbox();
      }
      if (dx > 0 && lbIndex > 0) {
        lbIndex--;
        updateLightbox();
      }
    },
    { passive: true },
  );
}

// Init
initTabs();
initArtworks();
renderProfile();
renderJobs();
renderContent();
renderOcLore();
renderFC();
renderGpose();
initLightbox();
initMusic();
