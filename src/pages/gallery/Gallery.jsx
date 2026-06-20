import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faImage,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faThLarge,
  faList,
  faChalkboardTeacher,
  faFlask,
  faUsers,
  faBuilding,
  faGraduationCap,
  faMusic,
  faPersonRunning
} from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../../components/PageHeader';
import './Gallery.css';

// Import images (using facilities images and additional gallery images)
// Sports Images
import sportsImg from '../../assets/facilities/sports.jpg';
import badmintonImg from '../../assets/facilities/badminton.jpg';

// Classroom Images
import classroomImg from '../../assets/facilities/classroom.jpg';
import computerLabImg from '../../assets/facilities/computer-lab.jpg';
import libraryImg from '../../assets/facilities/library.jpg';

// Laboratory Images
import scienceLabImg from '../../assets/facilities/science-lab.jpg';
import hmLabImg from '../../assets/facilities/hm-lab.jpg';

// Event Images
import welcomeImg from '../../assets/facilities/welcome.jpg';
import ecaImg from '../../assets/facilities/eca.jpg';

// Campus Images
import hostelImg from '../../assets/facilities/hostel.jpg';
import hallImg from '../../assets/facilities/hall.jpg';
import transportImg from '../../assets/facilities/transport.jpg';
import scholarshipImg from '../../assets/facilities/scholarship.jpg';

// Additional images
import workshopImg from '../../assets/facilities/workshop.jpeg';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid');

  // Gallery data with categories
  const galleryData = {
    categories: [
      { id: 'all', label: 'All', icon: faImage },
      { id: 'sports', label: 'Sports', faPersonRunning},
      { id: 'classrooms', label: 'Classrooms', icon: faChalkboardTeacher },
      { id: 'laboratories', label: 'Laboratories', icon: faFlask },
      { id: 'events', label: 'Events', icon: faUsers },
      { id: 'campus', label: 'Campus', icon: faBuilding },
      { id: 'cultural', label: 'Cultural', icon: faMusic },
      { id: 'academic', label: 'Academic', icon: faGraduationCap },
    ],
    images: [
      // Sports Category
      {
        id: 1,
        title: 'Sports Tournament',
        category: 'sports',
        image: sportsImg,
        description: 'Annual sports tournament with football, cricket, and volleyball competitions'
      },
      {
        id: 2,
        title: 'Football Match',
        category: 'sports',
        image: sportsImg,
        description: 'Exciting football matches between different teams'
      },
      {
        id: 3,
        title: 'Cricket Tournament',
        category: 'sports',
        image: sportsImg,
        description: 'Inter-college cricket tournament'
      },
      {
        id: 4,
        title: 'Volleyball Competition',
        category: 'sports',
        image: sportsImg,
        description: 'Volleyball matches showcasing team spirit'
      },
      {
        id: 5,
        title: 'Badminton Court',
        category: 'sports',
        image: badmintonImg,
        description: 'In-house badminton court for students'
      },
      
      // Classrooms Category
      {
        id: 6,
        title: 'AC Classroom',
        category: 'classrooms',
        image: classroomImg,
        description: 'Modern, air-conditioned classrooms for comfortable learning'
      },
      {
        id: 7,
        title: 'Computer Lab',
        category: 'classrooms',
        image: computerLabImg,
        description: 'Advanced computer lab with latest technology'
      },
      {
        id: 8,
        title: 'Library & Reading Room',
        category: 'classrooms',
        image: libraryImg,
        description: 'Extensive collection of books and journals'
      },
      
      // Laboratories Category
      {
        id: 9,
        title: 'Science Laboratory',
        category: 'laboratories',
        image: scienceLabImg,
        description: 'Well-equipped science labs for practical learning'
      },
      {
        id: 10,
        title: 'Hotel Management Lab',
        category: 'laboratories',
        image: hmLabImg,
        description: 'High-class practical training facility for HM students'
      },
      
      // Events Category
      {
        id: 11,
        title: 'Welcome Program',
        category: 'events',
        image: welcomeImg,
        description: 'Grand welcome programs for new students'
      },
      {
        id: 12,
        title: 'Extra-Curricular Activities',
        category: 'events',
        image: ecaImg,
        description: 'Diverse activities for holistic development'
      },
      {
        id: 14,
        title: 'Workshop & Seminar',
        category: 'events',
        image: workshopImg || computerLabImg,
        description: 'Educational workshops and seminars'
      },
     
      
      // Campus Category
      {
        id: 16,
        title: 'Hostel Facilities',
        category: 'campus',
        image: hostelImg,
        description: 'Safe and comfortable hostel facilities for boys and girls'
      },
      {
        id: 17,
        title: 'Covered Hall',
        category: 'campus',
        image: hallImg,
        description: 'Spacious hall for events and performances'
      },
      {
        id: 18,
        title: 'Transportation',
        category: 'campus',
        image: transportImg,
        description: 'Reliable transportation for students'
      },
 
      
      // Academic Category
      {
        id: 22,
        title: 'Educational Tour',
        category: 'academic',
        image: sportsImg,
        description: 'Educational tours and field trips for practical learning'
      },
      {
        id: 23,
        title: 'Academic Excellence',
        category: 'academic',
        image: welcomeImg,
        description: 'Celebrating academic achievements and success'
      },
      {
        id: 24,
        title: 'Scholarship Awards',
        category: 'academic',
        image: scholarshipImg,
        description: 'Merit-based scholarship awards for deserving students'
      },
    ]
  };

  // Get filtered images based on active category
  const getFilteredImages = () => {
    if (activeCategory === 'all') {
      return galleryData.images;
    }
    return galleryData.images.filter(img => img.category === activeCategory);
  };

  const filteredImages = getFilteredImages();

  // Open lightbox
  const openLightbox = (index) => {
    setSelectedImage(filteredImages[index]);
    setCurrentIndex(index);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate through images
  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateImage(-1);
        if (e.key === 'ArrowRight') navigateImage(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  

  return (
    <>
      <PageHeader title="Gallery" />
      <div className="gallery-page">
        {/* Gallery Header */}
        <div className="gallery-header">
          <div className="gallery-header-content">
            <h1>Our Gallery</h1>
            <p>Capturing moments of learning, growth, and community</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="gallery-controls">
          <div className="category-filters">
            {galleryData.categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          <div className="gallery-actions">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <FontAwesomeIcon icon={faThLarge} />
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <FontAwesomeIcon icon={faList} />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-section">
          {filteredImages.length > 0 ? (
            <div className={`gallery-grid ${viewMode}`}>
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="gallery-item-image">
                    <img src={image.image} alt={image.title} loading="lazy" />
                    <div className="gallery-item-overlay">
                      <div className="gallery-item-info">
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                        <span className="gallery-item-category">
                          <FontAwesomeIcon icon={faCamera} />
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-images">
              <FontAwesomeIcon icon={faImage} className="no-images-icon" />
              <h3>No Images Found</h3>
              <p>No images available in this category</p>
            </div>
          )}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <button 
              className="lightbox-nav lightbox-prev" 
              onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
              disabled={currentIndex === 0}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <span className="lightbox-category">
                  <FontAwesomeIcon icon={faCamera} />
                  {selectedImage.category}
                </span>
                <span className="lightbox-counter">
                  {currentIndex + 1} / {filteredImages.length}
                </span>
              </div>
            </div>
            
            <button 
              className="lightbox-nav lightbox-next" 
              onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
              disabled={currentIndex === filteredImages.length - 1}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;