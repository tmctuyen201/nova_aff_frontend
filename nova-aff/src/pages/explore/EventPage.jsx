import React from "react";
import styles from "../../styles/pages/events.module.css";

const EventPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Affiliate World Asia 2024",
      location: "Bangkok, Thailand",
      date: "December 4, 2024",
      image: "/event-upcoming-1.jpg",
    },
    {
      id: 2,
      title: "Affiliate World Asia 2024",
      location: "Bangkok, Thailand",
      date: "December 4, 2024",
      image: "/event-upcoming-1.jpg",
    },
  ];

  const featuredEvents = [
    {
      id: 1,
      title: "Affiliate World Asia 2024",
      location: "Bangkok, Thailand",
      date: "December 4, 2024",
      image: "/event-upcoming-1.jpg",
      type: "portrait",
    },
    {
      id: 2,
      title: "Affiliate World Asia 2024",
      location: "Bangkok, Thailand",
      date: "December 4, 2024",
      image: "/event-featured-2.jpg",
      type: "landscape",
    },
    {
      id: 3,
      title: "Affiliate World Asia 2024",
      location: "Bangkok, Thailand",
      date: "December 4, 2024",
      image: "/event-featured-2.jpg",
      type: "landscape",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Affiliate World Asia 2024",
      location: "Bangkok, Thailand",
      date: "December 4, 2024",
      image: "/event-upcoming-1.jpg",
    },
    {
      id: 2,
      title: "Affiliate World Asia 2024",
      location: "Bangkok, Thailand",
      date: "December 4, 2024",
      image: "/event-upcoming-1.jpg",
    },
  ];

  const EventCard = ({ event, type = "portrait" }) => (
    <div className={`${styles.eventCard} ${styles[type]}`}>
      <div className={styles.eventImage}>
        <img src={event.image} alt={event.title} />
      </div>
      <div className={styles.eventInfo}>
        <h3 className={styles.eventTitle}>{event.title}</h3>
        <p className={styles.eventLocation}>Location: {event.location}</p>
        <p className={styles.eventDate}>Date: {event.date}</p>
        <button className={styles.viewDetailBtn}>
          <span>View detail</span>
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
            <path
              d="M1 1L10 9L1 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.eventsPage}>
      {/* Hero Section */}
      <section className={styles.eventsHero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Events</h1>
            <p className={styles.heroDescription}>
              Stay informed and join us at special events designed to bring you
              knowledge, inspiration, and networking opportunities.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src="/events-hero.jpg" alt="Events" />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className={styles.upcomingEvents}>
        <div className={styles.eventsContainer}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          <div className={styles.eventsGrid}>
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} type="portrait" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className={styles.featuredEvents}>
        <div className={styles.eventsContainer}>
          <h2 className={styles.sectionTitle}>Featured Events</h2>
          <div className={styles.featuredGrid}>
            <div className={styles.featuredMain}>
              <EventCard event={featuredEvents[0]} type="portrait" />
            </div>
            <div className={styles.featuredSide}>
              <EventCard event={featuredEvents[1]} type="landscape" />
              <EventCard event={featuredEvents[2]} type="landscape" />
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className={styles.pastEvents}>
        <div className={styles.eventsContainer}>
          <h2 className={styles.sectionTitle}>Past Events</h2>
          <div className={styles.eventsGrid}>
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} type="portrait" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventPage;
