// src/pages/notice/Notice.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullhorn,
  faCalendarAlt,
  faClock,
  faChevronRight,
  faSearch,
  faTag,
  faExclamationCircle,
  faInfoCircle,
  faStar,
  faEye,
  faChevronDown,
  faChevronUp,
  faTimes,
  faExpand,
  faCompress,
  faFilter,
  faCalendarWeek,
  faCalendarDay,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../../components/PageHeader';
import { getAllNotices } from '../../data/noticeData';
import './Notice.css';

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterDate, setFilterDate] = useState('all');
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [displayCount, setDisplayCount] = useState(5);
  const [showFullImage, setShowFullImage] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Load notices from localStorage
  useEffect(() => {
    const loadNotices = () => {
      setLoading(true);
      try {
        const data = getAllNotices();
        setNotices(data);
      } catch (error) {
        console.error('Error loading notices:', error);
        setNotices([]);
      } finally {
        setLoading(false);
      }
    };
    loadNotices();
  }, []);

  // Get unique types for filter
  const types = ['all', ...new Set(notices.map(notice => notice.type))];

  // Date filter helper
  const filterByDate = (noticeDate) => {
    if (filterDate === 'all') return true;
    
    const notice = new Date(noticeDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    switch(filterDate) {
      case 'today': {
        const todayEnd = new Date(today);
        todayEnd.setHours(23, 59, 59, 999);
        return notice >= today && notice <= todayEnd;
      }
      case 'week': {
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        return notice >= weekStart;
      }
      case 'month': {
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        return notice >= monthStart;
      }
      default: return true;
    }
  };

  // Filter notices
  const getFilteredNotices = () => {
    let filtered = notices.filter(notice => {
      const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          notice.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || notice.type === filterType;
      const matchesDate = filterByDate(notice.date);
      return matchesSearch && matchesType && matchesDate;
    });

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    return filtered;
  };

  const filteredNotices = getFilteredNotices();
  const displayedNotices = filteredNotices.slice(0, displayCount);
  const hasMore = displayCount < filteredNotices.length;

  // Load more notices
  const loadMore = () => {
    setDisplayCount(prev => prev + 5);
  };

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(5);
  }, [searchTerm, filterType, filterDate]);

  // Get type icon
  const getTypeIcon = (type) => {
    switch(type) {
      case 'important': return faExclamationCircle;
      case 'event': return faStar;
      case 'update': return faInfoCircle;
      default: return faTag;
    }
  };

  const getTypeClass = (type) => {
    switch(type) {
      case 'important': return 'notice-important';
      case 'event': return 'notice-event';
      case 'update': return 'notice-update';
      default: return '';
    }
  };

  const getTypeBadge = (type) => {
    switch(type) {
      case 'important': return 'Important';
      case 'event': return 'Event';
      case 'update': return 'Update';
      default: return 'General';
    }
  };

  // Format date
  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    } catch {
      return dateStr;
    }
  };

  if (loading) {
    return (
      <>
        <PageHeader title="Notices" />
        <div className="notices-loading">
          <div className="loading-spinner"></div>
          <p>Loading notices...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Notices" />
      <div className="notices-page">
        <div className="notices-container">
          {/* Search and Filter */}
          <div className="notices-toolbar">
            <div className="search-bar">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-controls">
              <button 
                className={`filter-toggle ${showFilters ? 'active' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <FontAwesomeIcon icon={faFilter} />
                Filters
                <FontAwesomeIcon icon={showFilters ? faChevronUp : faChevronDown} />
              </button>

              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Types</option>
                {types.filter(t => t !== 'all').map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="filters-expanded">
              <div className="filter-group">
                <label>Date Filter</label>
                <div className="date-filter-buttons">
                  <button 
                    className={`date-btn ${filterDate === 'all' ? 'active' : ''}`}
                    onClick={() => setFilterDate('all')}
                  >
                    <FontAwesomeIcon icon={faCalendar} />
                    All
                  </button>
                  <button 
                    className={`date-btn ${filterDate === 'today' ? 'active' : ''}`}
                    onClick={() => setFilterDate('today')}
                  >
                    <FontAwesomeIcon icon={faCalendarDay} />
                    Today
                  </button>
                  <button 
                    className={`date-btn ${filterDate === 'week' ? 'active' : ''}`}
                    onClick={() => setFilterDate('week')}
                  >
                    <FontAwesomeIcon icon={faCalendarWeek} />
                    This Week
                  </button>
                  <button 
                    className={`date-btn ${filterDate === 'month' ? 'active' : ''}`}
                    onClick={() => setFilterDate('month')}
                  >
                    <FontAwesomeIcon icon={faCalendar} />
                    This Month
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="notices-stats">
            <span>
              Showing {displayedNotices.length} of {filteredNotices.length} notices
            </span>
          </div>

          {/* Notices Grid */}
          {displayedNotices.length > 0 ? (
            <>
              <div className="notices-grid">
                {displayedNotices.map((notice) => (
                  <div 
                    key={notice.id} 
                    className={`notice-card ${getTypeClass(notice.type)} ${notice.isFeatured ? 'featured' : ''}`}
                    onClick={() => setSelectedNotice(notice)}
                  >
                    {notice.isFeatured && (
                      <div className="featured-badge">
                        <FontAwesomeIcon icon={faStar} />
                        Featured
                      </div>
                    )}
                    
                    <div className="notice-card-header">
                      <div className="notice-type-badge">
                        <FontAwesomeIcon icon={getTypeIcon(notice.type)} />
                        {getTypeBadge(notice.type)}
                      </div>
                      {notice.image && (
                        <div className="notice-thumbnail-wrapper">
                          <img 
                            src={notice.image} 
                            alt={notice.title} 
                            className="notice-thumbnail"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedNotice(notice);
                              setShowFullImage(true);
                            }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="notice-card-body">
                      <h3 className="notice-card-title">{notice.title}</h3>
                      <p className="notice-card-description">{notice.description}</p>
                    </div>

                    <div className="notice-card-footer">
                      <div className="notice-meta">
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          <span>{formatDate(notice.date)}</span>
                        </div>
                        {notice.time && (
                          <div className="meta-item">
                            <FontAwesomeIcon icon={faClock} />
                            <span>{notice.time}</span>
                          </div>
                        )}
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faEye} />
                          <span>{notice.views || 0}</span>
                        </div>
                      </div>
                      <div className="notice-read-more">
                        Read More <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="load-more-container">
                  <button className="load-more-btn" onClick={loadMore}>
                    Load More ({filteredNotices.length - displayCount} remaining)
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="no-notices">
              <FontAwesomeIcon icon={faBullhorn} className="no-notices-icon" />
              <h3>No Notices Found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}

          {/* Notice Detail Modal */}
          {selectedNotice && (
            <div className="notice-modal" onClick={() => {
              setSelectedNotice(null);
              setShowFullImage(false);
            }}>
              <div className="notice-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => {
                  setSelectedNotice(null);
                  setShowFullImage(false);
                }}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                
                {selectedNotice.image && (
                  <div className={`modal-image ${showFullImage ? 'full-image' : ''}`}>
                    <img 
                      src={selectedNotice.image} 
                      alt={selectedNotice.title} 
                      onClick={() => setShowFullImage(!showFullImage)}
                    />
                    <button 
                      className="image-toggle-btn"
                      onClick={() => setShowFullImage(!showFullImage)}
                    >
                      <FontAwesomeIcon icon={showFullImage ? faCompress : faExpand} />
                      {showFullImage ? 'Collapse' : 'Expand'}
                    </button>
                    {selectedNotice.imageCaption && (
                      <div className="image-caption">{selectedNotice.imageCaption}</div>
                    )}
                  </div>
                )}
                
                <div className={`modal-header ${getTypeClass(selectedNotice.type)}`}>
                  <div className="modal-type-badge">
                    <FontAwesomeIcon icon={getTypeIcon(selectedNotice.type)} />
                    {getTypeBadge(selectedNotice.type)}
                  </div>
                  <h2>{selectedNotice.title}</h2>
                  <div className="modal-meta">
                    <span>
                      <FontAwesomeIcon icon={faCalendarAlt} /> {formatDate(selectedNotice.date)}
                    </span>
                    {selectedNotice.time && (
                      <span>
                        <FontAwesomeIcon icon={faClock} /> {selectedNotice.time}
                      </span>
                    )}
                    <span>
                      <FontAwesomeIcon icon={faEye} /> {selectedNotice.views || 0} views
                    </span>
                  </div>
                </div>
                
                <div className="modal-body">
                  <p>{selectedNotice.fullDescription || selectedNotice.description}</p>
                  {selectedNotice.author && (
                    <div className="modal-author">
                      <strong>Posted by:</strong> {selectedNotice.author}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notices;