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
    pronouns: "She/Her",
    mbti: "INFP",
    lastUpdated: "Apr 6, 2026",
    aboutMe:
      "Started in Shadowbringers and got completely hooked. I fantasia between OCs a lot, so the name you see isn’t always who I’m currently playing. You’ll usually find me fishing, raiding, or vibing at social spots around Eorzea. Outside the game, I’m into tech, crafts, and street photography. You can read about my OCs when I get around to writing and updating the lore section.",
    socials: [{ label: "X", url: "https://x.com/penguxiv" }],
  },
  ocLores: [
    // {
    //   name: "",
    //   age: "",
    //   summary:
    //     "",
    // },
  ],
  artworks: [
    { label: "Viera", src: "images/Floofy-Viera.png" },
    { label: "Lalafell", src: "images/Floofy-Lalafell.jpg" },
  ],
  preferredJobs: [{ name: "Fisher", role: "gatherer" }],
  jobs: [
    // Tanks
    { name: "Paladin", role: "tank", level: 100 },
    { name: "Warrior", role: "tank", level: 100 },
    { name: "Dark Knight", role: "tank", level: 100 },
    { name: "Gunbreaker", role: "tank", level: 100 },
    // Healers
    { name: "White Mage", role: "healer", level: 5 },
    { name: "Scholar", role: "healer", level: 100 },
    { name: "Astrologian", role: "healer", level: 80 },
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
    icon: { src: "images/FC-Logo.png" },
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
  gpose: [{ src: "gpose/ffxiv_dx11 2025-02-18 00-16-31 Ice Cream Cake.png" }],
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
const CDN = "https://cdn.jsdelivr.net/gh/xivapi/classjob-icons@master/icons/";
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
  img.loading = "lazy";
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
      hue: rand(0, 22),
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
  emptyEl.style.display = "none";
  dotsEl.style.display = "";

  function switchTo(i) {
    imgEl.src = ARTWORKS[i].src;
    imgEl.style.display = "block";
    document
      .querySelectorAll(".artwork-thumb")
      .forEach((d, j) => d.classList.toggle("active", j === i));
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

  OC_LORES.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "lore-card";

    const name = entry.name || "Unnamed OC";
    const ageRaw = String(entry.age ?? "").trim();
    const summary = entry.summary || "";

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

    const summaryEl = document.createElement("p");
    summaryEl.className = "lore-card-summary";
    summaryEl.textContent = summary;

    card.appendChild(head);
    card.appendChild(summaryEl);

    loreGrid.appendChild(card);
  });
}

// Music
function initMusic() {
  const mobileUaPattern =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobileDevice =
    navigator.userAgentData?.mobile === true ||
    mobileUaPattern.test(navigator.userAgent || "");
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
      "width:100%;height:100%;object-fit:contain;border-radius:50%;";
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

function renderGpose() {
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
      img.src = photo.src;
      img.alt = "";
      img.loading = "lazy";
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
  $id("lightbox-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  $id("lightbox-overlay").classList.remove("active");
  document.body.style.overflow = "";
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
    const mobileImage = $id("lb-img");
    let dragStartX = 0;
    let dragStartY = 0;
    let dragActive = false;
    let pinchActive = false;
    let pinchStartDistance = 0;
    let pinchStartScale = 1;
    let mobileZoomScale = 1;
    let panStartX = 0;
    let panStartY = 0;
    let panX = 0;
    let panY = 0;
    let panActive = false;

    const clampZoom = (value) => Math.max(1, Math.min(4, value));
    const clampPan = () => {
      const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const maxPanX = ((mobileZoomScale - 1) * viewportWidth) / 2;
      const maxPanY = ((mobileZoomScale - 1) * viewportHeight) / 2;
      panX = Math.max(-maxPanX, Math.min(maxPanX, panX));
      panY = Math.max(-maxPanY, Math.min(maxPanY, panY));
    };

    const applyZoom = (scale) => {
      mobileZoomScale = clampZoom(scale);
      mobileImage.style.transformOrigin = "center center";
      clampPan();
      mobileImage.style.transform = `translate(${panX}px, ${panY}px) scale(${mobileZoomScale})`;
    };

    const resetMobileLightbox = () => {
      mobileLightbox.style.transition =
        "transform 180ms ease, opacity 180ms ease";
      mobileLightbox.style.transform = "";
      mobileLightbox.style.opacity = "";
      panX = 0;
      panY = 0;
      panActive = false;
      applyZoom(1);
    };

    const touchDistance = (touches) => {
      const [a, b] = touches;
      return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    };

    mobileLightbox.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 2) {
          pinchActive = true;
          dragActive = false;
          panActive = false;
          pinchStartDistance = touchDistance(e.touches);
          pinchStartScale = mobileZoomScale;
          mobileLightbox.style.transition = "none";
          mobileImage.style.transition = "none";
          return;
        }

        if (mobileZoomScale > 1.05) {
          panActive = true;
          dragActive = false;
          panStartX = e.touches[0].clientX - panX;
          panStartY = e.touches[0].clientY - panY;
          mobileImage.style.transition = "none";
          return;
        }

        dragStartX = e.touches[0].clientX;
        dragStartY = e.touches[0].clientY;
        dragActive = true;
        panActive = false;
        mobileLightbox.style.transition = "none";
      },
      { passive: true },
    );

    mobileLightbox.addEventListener(
      "touchmove",
      (e) => {
        if (pinchActive && e.touches.length === 2) {
          const nextScale =
            pinchStartScale * (touchDistance(e.touches) / pinchStartDistance);
          applyZoom(nextScale);
          e.preventDefault();
          return;
        }

        if (panActive && e.touches.length === 1) {
          panX = e.touches[0].clientX - panStartX;
          panY = e.touches[0].clientY - panStartY;
          clampPan();
          mobileImage.style.transform = `translate(${panX}px, ${panY}px) scale(${mobileZoomScale})`;
          e.preventDefault();
          return;
        }

        if (!dragActive) return;
        const touch = e.touches[0];
        const dx = touch.clientX - dragStartX;
        const dy = touch.clientY - dragStartY;
        const distance = Math.hypot(dx, dy);
        const progress = Math.min(1, distance / 120);
        mobileLightbox.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px) scale(${1 - progress * 0.1})`;
        mobileLightbox.style.opacity = String(1 - progress * 0.9);
        if (distance > 3) e.preventDefault();
      },
      { passive: false },
    );

    mobileLightbox.addEventListener(
      "touchend",
      (e) => {
        if (pinchActive && e.touches.length < 2) {
          pinchActive = false;
          mobileImage.style.transition = "transform 180ms ease";
          applyZoom(mobileZoomScale);
          if (mobileZoomScale <= 1.05) {
            resetMobileLightbox();
          }
          return;
        }

        if (panActive) {
          panActive = false;
          mobileImage.style.transition = "transform 180ms ease";
          applyZoom(mobileZoomScale);
          return;
        }

        if (!dragActive) return;
        dragActive = false;
        const touch = e.changedTouches[0];
        const dx = touch.clientX - dragStartX;
        const dy = touch.clientY - dragStartY;
        const shouldClose = Math.hypot(dx, dy) > 70;
        if (shouldClose) {
          closeLightbox();
          return;
        }
        resetMobileLightbox();
      },
      { passive: true },
    );

    mobileLightbox.addEventListener("touchcancel", () => {
      dragActive = false;
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
      if (Math.abs(dx) < 40) return;
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
