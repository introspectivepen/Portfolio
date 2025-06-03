import { useState, useEffect } from 'react';

export const useRoles = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    { first: 'SOFTWARE', second: 'ENGINEER' },
    { first: 'WEB', second: 'DEVELOPER' },
    { first: 'FRONTEND', second: 'DEVELOPER' },
    { first: 'FULLSTACK', second: 'DEVELOPER' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return { currentRole, setCurrentRole,roles };
};