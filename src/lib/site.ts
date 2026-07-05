/* ============================================================
   Central site data for Winners Chapel International, Southport
   Real details sourced from winnerschapelsouthport.org.uk
   ============================================================ */

export const site = {
  name: "Winners Chapel International",
  city: "Southport",
  fullName: "Winners Chapel International, Southport",
  shortName: "WCI Southport",
  tagline: "A Faith-Based, Bible-Believing Church",
  hero: {
    heading: "Welcome to Winners Chapel International Southport",
    sub: "A Place of Faith. A Family of Love. A Home of Miracles.",
  },
  mandate:
    "To liberate the world from all oppression of the devil, through the preaching of the Word of Faith.",
  commission: "Living Faith Church Worldwide (Winners Chapel International)",
  presidingBishop: "Bishop David O. Oyedepo",
  residentPastor: "The Resident Pastor",
  address: {
    venue: "Saint George's Church",
    street: "150 Lord Street",
    city: "Southport",
    postcode: "PR9 0NP",
    country: "United Kingdom",
  },
  get fullAddress() {
    return `${this.address.venue}, ${this.address.street}, ${this.address.city}, ${this.address.postcode}`;
  },
  mapsQuery: "St George's Church, 150 Lord Street, Southport, PR9 0NP",
  phones: ["+44 (0)7445 448874", "+44 (0)1704 617457"],
  whatsapp: "https://wa.me/4407445448874",
  email: "visit@winnerschapelsouthport.org.uk",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100083295206811",
    x: "https://x.com/WCISouthport",
    instagram: "https://www.instagram.com/winnerssouthport/",
    youtube: "https://www.youtube.com/",
    whatsapp: "https://wa.me/4407445448874",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about", desc: "History, mission & vision" },
      { label: "The Mandate", href: "/about#mandate", desc: "The Liberation Mandate" },
      { label: "Statement of Faith", href: "/about#faith", desc: "What we believe" },
      { label: "Leadership", href: "/about#leadership", desc: "Meet our pastoral team" },
    ],
  },
  { label: "Our Pastor", href: "/our-pastor" },
  { label: "Ministries", href: "/ministries" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Sermons", href: "/media#sermons", desc: "Watch & listen" },
      { label: "Live TV & Radio", href: "/media#live", desc: "Stream services" },
      { label: "Devotionals", href: "/media#devotionals", desc: "Daily encouragement" },
      { label: "Gallery", href: "/media#gallery", desc: "Photos & videos" },
    ],
  },
  { label: "WOFBI", href: "/wofbi" },
  { label: "CSR", href: "/csr" },
  { label: "First Timers", href: "/first-timers" },
  { label: "Prayer", href: "/prayer" },
  { label: "Giving", href: "/giving" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    name: "Sunday First Service",
    day: "Sunday",
    time: "8:00 AM",
    desc: "Communion Service — a fresh outpouring of the Word to start your week in victory.",
    tag: "Weekly",
    icon: "sunrise",
  },
  {
    name: "Sunday Second Service",
    day: "Sunday",
    time: "10:30 AM",
    desc: "Our main celebration service with vibrant worship, the Word, and children's church.",
    tag: "Weekly",
    icon: "church",
  },
  {
    name: "Midweek Communion Service",
    day: "Wednesday",
    time: "6:00 PM",
    desc: "Bible study and communion — grow deeper in the Word midweek.",
    tag: "Weekly",
    icon: "book",
  },
  {
    name: "Winners Satellite Fellowship",
    day: "Various",
    time: "Weekly",
    desc: "Neighbourhood fellowships gathering across Southport for prayer and community.",
    tag: "WSF",
    icon: "users",
  },
  {
    name: "Community Outreach",
    day: "Saturday",
    time: "Monthly",
    desc: "Reaching Southport with the love of Christ — food bank, evangelism & support.",
    tag: "Outreach",
    icon: "heart",
  },
  {
    name: "Prayer Meetings",
    day: "Daily",
    time: "Varies",
    desc: "Corporate prayer altars — the Winners' Hour of prayer that moves mountains.",
    tag: "Prayer",
    icon: "flame",
  },
];

export const stats = [
  { value: 1200, suffix: "+", label: "Members" },
  { value: 48, suffix: "", label: "First Timers This Month" },
  { value: 3600, suffix: "+", label: "Souls Won" },
  { value: 320, suffix: "", label: "Volunteers" },
  { value: 12, suffix: "", label: "Years in Southport" },
  { value: 24, suffix: "", label: "Community Projects" },
  { value: 5400, suffix: "+", label: "Families Served" },
  { value: 9800, suffix: "+", label: "Food Bank Beneficiaries" },
];

export const experiences = [
  { title: "Healing", desc: "By His stripes, you are healed.", icon: "heart-pulse" },
  { title: "Salvation", desc: "A new life in Christ begins here.", icon: "cross" },
  { title: "Breakthrough", desc: "From limitation to unlimited increase.", icon: "trending-up" },
  { title: "Prayer", desc: "The altar where heaven answers.", icon: "flame" },
  { title: "Counselling", desc: "Wisdom and comfort for every season.", icon: "message-circle" },
  { title: "Deliverance", desc: "Freedom from every oppression.", icon: "shield" },
  { title: "Restoration", desc: "He restores the years and the joy.", icon: "sparkles" },
  { title: "Family", desc: "Building homes that honour God.", icon: "home" },
];

export const ministries = [
  { name: "Children's Church", slug: "children", desc: "A safe, joyful place where kids encounter God.", icon: "baby" },
  { name: "Youth Alive", slug: "youth", desc: "Raising a generation of bold, purpose-driven youth.", icon: "rocket" },
  { name: "Teens", slug: "teens", desc: "Guiding teenagers into faith and identity in Christ.", icon: "users" },
  { name: "Choir", slug: "choir", desc: "Leading the congregation into the presence of God.", icon: "music" },
  { name: "Technical", slug: "technical", desc: "Sound, lighting and stage excellence for worship.", icon: "sliders" },
  { name: "Protocol", slug: "protocol", desc: "Order, honour and hospitality in the house.", icon: "shield-check" },
  { name: "Ushering", slug: "ushering", desc: "The ministry of the open door and the warm welcome.", icon: "hand" },
  { name: "Hospitality", slug: "hospitality", desc: "Serving with warmth so everyone feels at home.", icon: "coffee" },
  { name: "Prayer Squad", slug: "prayer", desc: "Standing in the gap through fervent intercession.", icon: "flame" },
  { name: "Media", slug: "media", desc: "Telling the story through film, photo and social.", icon: "camera" },
  { name: "Security", slug: "security", desc: "Keeping the house of God safe and secure.", icon: "shield" },
  { name: "Sanctuary", slug: "sanctuary", desc: "Preparing a beautiful place for worship.", icon: "sparkles" },
  { name: "Follow-up", slug: "follow-up", desc: "No one left behind — caring for every first timer.", icon: "user-check" },
  { name: "Crowd Control", slug: "crowd-control", desc: "Coordinating movement and flow with excellence.", icon: "route" },
  { name: "Kingdom Advancement", slug: "kingdom-advancement", desc: "Evangelism and soul-winning across the region.", icon: "megaphone" },
  { name: "Transportation", slug: "transportation", desc: "Bus pickup and rides so distance is no barrier.", icon: "bus" },
  { name: "Bookshop", slug: "bookshop", desc: "Faith-building books, media and resources.", icon: "book-open" },
  { name: "Medical", slug: "medical", desc: "Care and first response for our congregation.", icon: "stethoscope" },
  { name: "Welfare", slug: "welfare", desc: "Practical support for members in need.", icon: "heart-handshake" },
];

export const sermons = [
  { title: "The Blessing That Makes Rich", speaker: "Resident Pastor", series: "Kingdom Prosperity", duration: "48:12", date: "Jun 2026", tag: "Newest", img: "/images/site/welcome-handshake.jpg" },
  { title: "Faith That Moves Mountains", speaker: "Resident Pastor", series: "Faith Foundations", duration: "52:30", date: "Jun 2026", tag: "Most Watched", img: "/images/site/children.jpg" },
  { title: "The Winning Life", speaker: "Resident Pastor", series: "Living in Victory", duration: "45:05", date: "May 2026", tag: "Series", img: "/images/site/sermon-audio.jpg" },
  { title: "Covenant of Increase", speaker: "Resident Pastor", series: "Kingdom Prosperity", duration: "50:41", date: "May 2026", tag: "Series", img: "/images/site/outreach.jpg" },
];

export const wofbiCourses = [
  { code: "BCC", name: "Basic Certificate Course", desc: "Your foundation in the Word — discover your identity and covenant rights in Christ.", weeks: "10 weeks", level: "Foundation" },
  { code: "LCC", name: "Leadership Certificate Course", desc: "Grow into Christlike leadership and prepare for service in the Kingdom.", weeks: "10 weeks", level: "Intermediate" },
  { code: "LDC", name: "Leadership Diploma Course", desc: "Advanced training in doctrine, leadership and the ministry mandate.", weeks: "12 weeks", level: "Advanced" },
];

export const events = [
  { title: "Shiloh 2026", type: "Convention", date: "Dec 2026", month: "DEC", day: "8", desc: "The annual global gathering of the Winners family — a prophetic feast of the Word.", featured: true },
  { title: "Healing & Deliverance Service", type: "Healing Service", date: "First Sunday Monthly", month: "AUG", day: "3", desc: "A dedicated service for supernatural healing and freedom." },
  { title: "Youth Alive Camp", type: "Youth Camp", date: "Aug 2026", month: "AUG", day: "22", desc: "A weekend of worship, fun and encounter for the next generation." },
  { title: "Prayer Summit", type: "Prayer", date: "Sep 2026", month: "SEP", day: "5", desc: "Corporate prayer and fasting for personal and community breakthrough." },
  { title: "Workers Meeting", type: "Workers", date: "Every Saturday", month: "WK", day: "SAT", desc: "Equipping and refreshing our volunteers for excellent service." },
  { title: "Family Day", type: "Community", date: "Jul 2026", month: "JUL", day: "26", desc: "A celebration of the Winners family — food, games and fellowship." },
];

export const csrPrograms = [
  { title: "Food Bank", desc: "Providing groceries and essentials to families across Southport.", stat: "9,800+ served", icon: "shopping-basket" },
  { title: "Homeless Support", desc: "Warm meals, clothing and dignity for the vulnerable.", stat: "Weekly outreach", icon: "home" },
  { title: "Employment Training", desc: "CV clinics, interview coaching and skills for the workplace.", stat: "Free clinics", icon: "briefcase" },
  { title: "Skills Development", desc: "Practical workshops that build confidence and capability.", stat: "Ongoing", icon: "wrench" },
  { title: "School Support", desc: "Uniforms, supplies and mentoring for local pupils.", stat: "Local schools", icon: "graduation-cap" },
  { title: "Community Partnerships", desc: "Working with councils and charities for greater impact.", stat: "Diverse & inclusive", icon: "handshake" },
];

export const testimonies = [
  { name: "Grace A.", category: "Healing", quote: "I came in on a wheelchair and walked out healed. Winners Chapel changed my life forever.", type: "video" },
  { name: "Daniel & Ruth", category: "Marriage", quote: "After years of waiting, God restored our marriage and blessed us with twins. Glory to God!", type: "written" },
  { name: "Samuel O.", category: "Finance", quote: "From redundancy to running my own business within a year. The covenant of increase is real.", type: "written" },
  { name: "Blessing E.", category: "Career", quote: "I secured my dream job after the employment clinic and prayers. Doors opened supernaturally.", type: "audio" },
  { name: "Tunde M.", category: "Deliverance", quote: "I was set free from a 15-year addiction. Today I lead others to that same freedom.", type: "video" },
  { name: "The Johnsons", category: "Family", quote: "This church became our family in a new country. We found love, faith and belonging.", type: "written" },
];

export const twelvePillars = [
  "The Word of Faith",
  "The Power of Praise",
  "The Sanctity of the Holy Spirit",
  "The Ministry of Angels",
  "The Blessing / Covenant of Increase",
  "The Power of Prayer",
  "The Wisdom of God",
  "The Realm of Signs & Wonders",
  "The Ministry of Restoration",
  "Kingdom Prosperity",
  "Vision & Focus",
  "The Excellency of Understanding",
];

export const galleryCategories = [
  "Church Life", "Worship", "Community", "Children", "Youth", "Conferences",
];
