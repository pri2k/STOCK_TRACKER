import React from 'react';

const teamMembers = [
  {
    role: 'Project Manager',
    description: 'Oversees the project development process, managing the team and ensuring timely delivery.',
    members: ['Toko Saniya'],
  },
  {
    role: 'Frontend Developer',
    description: 'Responsible for creating the visual elements of the application that users interact with.',
    members: ['Toko Saniya', 'Samruddhi', 'Priya'],
  },
  {
    role: 'Backend Developer',
    description: 'Handles server-side logic and database interactions, ensuring the application runs smoothly.',
    members: ['Toko Saniya', 'Purwanshi', 'Samruddhi', 'Shiny'],
  },
  {
    role: 'Data Analyst',
    description: 'Focuses on analyzing data to improve user experience and application performance.',
    members: ['Shiny', 'Priya'],
  },
  {
    role: 'Documentation Specialist',
    description: 'Creates and maintains documentation for the application, ensuring clarity and accessibility for users and developers.',
    members: ['Purwanshi', 'Shiny'],
  },
];

const Developers = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Meet Our Team</h2>
      <div style={styles.grid}>
        {teamMembers.map((group, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.role}>{group.role}</h3>
            <p style={styles.description}>{group.description}</p>
            <div style={styles.membersContainer}>
              {group.members.map((member, memberIndex) => (
                <p key={memberIndex} style={styles.name}>{member}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/patterns/dark-wood.png")',
    backgroundSize: 'cover',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#333',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '350px',
    transition: 'transform 0.2s',
  },
  role: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#777',
    marginBottom: '1rem',
  },
  membersContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    fontSize: '1.4rem',
    color: '#555',
    margin: '0.2rem 0',
  },
};

// Add hover effect to cards
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 640px) {
    .grid {
      flex-direction: row; 
      flex-wrap: wrap; 
      justify-content: center; 
    }
  }
  @media (min-width: 1024px) {
    .card {
      max-width: 400px; 
    }
  }
`;
document.head.appendChild(styleSheet);

export default Developers;
