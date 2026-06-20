// src/data/noticeData.js
// This file manages notices with localStorage persistence

const STORAGE_KEY = 'liberty_notices';

// Default notices data
const defaultNotices = [
  {
    id: 1,
    title: "Admission Open 2026",
    description: "Applications are now open for +2 Science, Management, and Hotel Management programs. Limited seats available.",
    fullDescription: "Liberty SS/College is pleased to announce that admissions for the academic year 2026 are now open. We offer +2 programs in Science, Management, and Hotel Management. Our institution provides state-of-the-art facilities, experienced faculty, and a conducive learning environment. Scholarships are available for meritorious students.",
    date: "June 19, 2026",
    time: "10:00 AM",
    type: "important",
    category: "admissions",
    link: "/admissions",
    author: "Admission Office",
    views: 245,
    isFeatured: true,
    isBookmarked: false,
    image: null,
    imageCaption: "Admission Open 2026"
  },
  {
    id: 2,
    title: "Sports Week 2026",
    description: "Annual sports week starting from June 25. Register your teams by June 22.",
    fullDescription: "The much-awaited Sports Week 2026 is scheduled from June 25 to June 30. Events include Football, Cricket, Volleyball, Badminton, Table Tennis, and Athletics.",
    date: "June 15, 2026",
    time: "9:00 AM",
    type: "event",
    category: "events",
    link: "/sports",
    author: "Sports Department",
    views: 312,
    isFeatured: true,
    isBookmarked: false,
    image: null,
    imageCaption: "Sports Week Celebration"
  }
];

// Initialize localStorage with default data if empty
export const initializeNotices = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultNotices));
  }
};

// Get all notices
export const getAllNotices = () => {
  initializeNotices();
  const data = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(data) || [];
};

// Save notices to localStorage
export const saveNotices = (notices) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notices));
};

// Get a single notice by ID
export const getNoticeById = (id) => {
  const notices = getAllNotices();
  return notices.find(notice => notice.id === id);
};

// Add a new notice
export const addNotice = (notice) => {
  const notices = getAllNotices();
  const newNotice = {
    ...notice,
    id: Date.now(),
    views: 0,
    isBookmarked: false,
    date: notice.date || new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  };
  notices.unshift(newNotice);
  saveNotices(notices);
  return newNotice;
};

// Update an existing notice
export const updateNotice = (id, updatedData) => {
  const notices = getAllNotices();
  const index = notices.findIndex(notice => notice.id === id);
  if (index !== -1) {
    notices[index] = { ...notices[index], ...updatedData };
    saveNotices(notices);
    return notices[index];
  }
  return null;
};

// Delete a notice
export const deleteNotice = (id) => {
  const notices = getAllNotices();
  const filtered = notices.filter(notice => notice.id !== id);
  saveNotices(filtered);
  return filtered;
};

// Toggle bookmark
export const toggleBookmark = (id) => {
  const notices = getAllNotices();
  const notice = notices.find(n => n.id === id);
  if (notice) {
    notice.isBookmarked = !notice.isBookmarked;
    saveNotices(notices);
    return notice;
  }
  return null;
};

// Increment views
export const incrementViews = (id) => {
  const notices = getAllNotices();
  const notice = notices.find(n => n.id === id);
  if (notice) {
    notice.views = (notice.views || 0) + 1;
    saveNotices(notices);
    return notice;
  }
  return null;
};

// Get featured notices
export const getFeaturedNotices = () => {
  const notices = getAllNotices();
  return notices.filter(notice => notice.isFeatured);
};

// Get latest notices for homepage
export const getLatestNotices = (count = 3) => {
  const notices = getAllNotices();
  return notices.slice(0, count);
};

// Convert image to base64
export const imageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};