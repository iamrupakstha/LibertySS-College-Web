// src/components/AdminNotices.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEdit,
  faTrash,
  faSave,
  faTimes,
  faUpload,
  faImage,
  faBullhorn,
  faStar,
  faExclamationTriangle,
  faInfoCircle,
  faCalendarAlt,
  faClock,
  faTag,
  faUser,
  faFileAlt,
  faLink,
  faSignOutAlt,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import {
  getAllNotices,
  addNotice,
  updateNotice,
  deleteNotice,
  imageToBase64
} from '../data/noticeData';
import '../styles/AdminNotices.css';

const AdminNotices = () => {
  const [notices, setNotices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fullDescription: '',
    date: '',
    time: '',
    type: 'update',
    category: 'general',
    link: '',
    author: '',
    isFeatured: false,
    image: null,
    imageCaption: ''
  });

  // Check authentication on mount
  useEffect(() => {
    const isAdmin = localStorage.getItem('adminAuth') === 'true';
    if (!isAdmin) {
      navigate('/admin/login');
    } else {
      loadNotices();
    }
  }, [navigate]);

  const loadNotices = () => {
    const data = getAllNotices();
    setNotices(data);
  };

  // Handle logout
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('adminAuth');
      localStorage.removeItem('adminLoginTime');
      navigate('/admin/login');
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      fullDescription: '',
      date: '',
      time: '',
      type: 'update',
      category: 'general',
      link: '',
      author: '',
      isFeatured: false,
      image: null,
      imageCaption: ''
    });
    setPreviewImage(null);
    setEditingNotice(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.title || !formData.description || !formData.date) {
        alert('Please fill in all required fields');
        setLoading(false);
        return;
      }

      let imageData = formData.image;
      
      if (formData.image && typeof formData.image === 'object') {
        imageData = await imageToBase64(formData.image);
      }

      const noticeData = {
        ...formData,
        image: imageData,
        date: formData.date || new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      };

      let result;
      if (editingNotice) {
        result = updateNotice(editingNotice.id, noticeData);
      } else {
        result = addNotice(noticeData);
      }

      if (result) {
        loadNotices();
        resetForm();
        setShowForm(false);
        alert(editingNotice ? 'Notice updated successfully!' : 'Notice added successfully!');
      }
    } catch (error) {
      console.error('Error saving notice:', error);
      alert('Error saving notice. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (notice) => {
    setEditingNotice(notice);
    setFormData({
      ...notice,
      image: notice.image || null
    });
    setPreviewImage(notice.image);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle delete
  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteNotice(id);
      loadNotices();
    }
  };

  // Handle image selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size should be less than 2MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      setFormData({ ...formData, image: file });
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image
  const removeImage = () => {
    setFormData({ ...formData, image: null });
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Get type badge class
  const getTypeClass = (type) => {
    switch(type) {
      case 'important': return 'type-important';
      case 'event': return 'type-event';
      case 'update': return 'type-update';
      default: return '';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'important': return faExclamationTriangle;
      case 'event': return faStar;
      case 'update': return faInfoCircle;
      default: return faBullhorn;
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

  return (
    <div className="admin-notices">
      <div className="admin-header">
        <div className="admin-header-left">
          <h1>
            <FontAwesomeIcon icon={faBullhorn} />
            Notice Management
          </h1>
          <span className="notice-count">{notices.length} notices</span>
        </div>
        <div className="admin-header-right">
          <button 
            className="btn-add"
            onClick={() => {
              resetForm();
              setShowForm(!showForm);
            }}
          >
            <FontAwesomeIcon icon={showForm ? faTimes : faPlus} />
            {showForm ? 'Cancel' : 'Add New Notice'}
          </button>
          <button className="btn-logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </button>
        </div>
      </div>

      {/* Notice Form */}
      {showForm && (
        <div className="notice-form-container">
          <div className="form-header">
            <h2>{editingNotice ? 'Edit Notice' : 'Create New Notice'}</h2>
          </div>
          <form onSubmit={handleSubmit} className="notice-form">
            <div className="form-grid">
              {/* Left Column */}
              <div className="form-left">
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faFileAlt} />
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter notice title"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faFileAlt} />
                    Short Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief description (shown in cards)"
                    rows="3"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faFileAlt} />
                    Full Description
                  </label>
                  <textarea
                    value={formData.fullDescription}
                    onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                    placeholder="Detailed description (shown in modal)"
                    rows="4"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group half">
                    <label>
                      <FontAwesomeIcon icon={faClock} />
                      Time
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="form-right">
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faImage} />
                    Notice Image
                  </label>
                  <div className="image-upload-container">
                    {previewImage ? (
                      <div className="image-preview">
                        <img src={previewImage} alt="Notice preview" />
                        <button 
                          type="button"
                          className="remove-image"
                          onClick={removeImage}
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    ) : (
                      <div 
                        className="upload-area"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <FontAwesomeIcon icon={faUpload} className="upload-icon" />
                        <p>Click to upload image</p>
                        <span className="upload-hint">PNG, JPG, JPEG (Max 2MB)</span>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageSelect}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                  </div>
                  <input
                    type="text"
                    value={formData.imageCaption}
                    onChange={(e) => setFormData({ ...formData, imageCaption: e.target.value })}
                    placeholder="Image caption"
                    className="caption-input"
                  />
                </div>
              </div>
            </div>

            {/* Additional Fields */}
            <div className="form-row">
              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faTag} />
                  Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="update">Update</option>
                  <option value="important">Important</option>
                  <option value="event">Event</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faTag} />
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="general">General</option>
                  <option value="admissions">Admissions</option>
                  <option value="exams">Exams</option>
                  <option value="events">Events</option>
                  <option value="academic">Academic</option>
                  <option value="cultural">Cultural</option>
                  <option value="sports">Sports</option>
                  <option value="scholarships">Scholarships</option>
                  <option value="meetings">Meetings</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faUser} />
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Author name"
                />
              </div>

              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faLink} />
                  Link
                </label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="/page-link"
                />
              </div>
            </div>

            <div className="form-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                />
                <FontAwesomeIcon icon={faStar} />
                Feature this notice
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-save" disabled={loading}>
                <FontAwesomeIcon icon={loading ? faSpinner : faSave} spin={loading} />
                {loading ? 'Saving...' : (editingNotice ? 'Update Notice' : 'Save Notice')}
              </button>
              <button type="button" className="btn-cancel" onClick={() => {
                resetForm();
                setShowForm(false);
              }}>
                <FontAwesomeIcon icon={faTimes} />
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Notices List */}
      <div className="notices-list">
        <div className="list-header">
          <h2>All Notices</h2>
        </div>

        {notices.length === 0 ? (
          <div className="empty-state">
            <FontAwesomeIcon icon={faBullhorn} className="empty-icon" />
            <h3>No notices yet</h3>
            <p>Create your first notice by clicking "Add New Notice"</p>
          </div>
        ) : (
          <div className="notices-table-container">
            <table className="notices-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Featured</th>
                  <th>Views</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice.id} className={notice.isFeatured ? 'featured-row' : ''}>
                    <td>
                      {notice.image ? (
                        <img 
                          src={notice.image} 
                          alt={notice.title} 
                          className="notice-thumbnail"
                        />
                      ) : (
                        <div className="no-image-placeholder">
                          <FontAwesomeIcon icon={faImage} />
                        </div>
                      )}
                    </td>
                    <td className="title-cell">{notice.title}</td>
                    <td>{formatDate(notice.date)}</td>
                    <td>
                      <span className={`type-badge ${getTypeClass(notice.type)}`}>
                        <FontAwesomeIcon icon={getTypeIcon(notice.type)} />
                        {notice.type}
                      </span>
                    </td>
                    <td>
                      {notice.isFeatured && (
                        <FontAwesomeIcon icon={faStar} className="featured-star" />
                      )}
                    </td>
                    <td>{notice.views || 0}</td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="btn-edit"
                          onClick={() => handleEdit(notice)}
                          title="Edit"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button 
                          className="btn-delete"
                          onClick={() => handleDelete(notice.id, notice.title)}
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNotices;