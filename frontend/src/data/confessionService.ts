import { Confession } from '../types/confessionTypes';
import confessionsDataJson from '../data/confessionsData.json';

// This would normally be a real service that makes API calls
// For demo purposes, we're simulating persistence with localStorage

class ConfessionService {
  private readonly STORAGE_KEY = 'mindflow_confessions';
  
  // Get all confessions
  getAllConfessions(): Promise<Confession[]> {
    return new Promise((resolve) => {
      try {
        // Try to get from localStorage first
        const storedData = localStorage.getItem(this.STORAGE_KEY);
        
        if (storedData) {
          // If we have stored data, use that
          resolve(JSON.parse(storedData));
        } else {
          // Otherwise, use our initial data and save it
          const initialConfessions = confessionsDataJson as Confession[];
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(initialConfessions));
          resolve(initialConfessions);
        }
      } catch (error) {
        // If localStorage fails or isn't available, fall back to the JSON file
        console.error("Failed to access localStorage:", error);
        resolve(confessionsDataJson as Confession[]);
      }
    });
  }
  
  // Add a new confession - fixed to avoid async inside Promise constructor
  addConfession(confession: Omit<Confession, 'id'>): Promise<Confession> {
    return new Promise((resolve) => {
      this.getAllConfessions()
        .then(confessions => {
          // Create new confession with unique ID
          const newConfession: Confession = {
            ...confession,
            id: `c${Date.now()}`  // Use timestamp for unique ID
          };
          
          // Add to beginning of array
          const updatedConfessions = [newConfession, ...confessions];
          
          // Save to localStorage
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedConfessions));
          
          // Return the new confession
          resolve(newConfession);
        })
        .catch(error => {
          console.error("Failed to add confession:", error);
          // Create a new confession anyway but don't persist it
          const fallbackConfession: Confession = {
            ...confession,
            id: `c${Date.now()}`
          };
          resolve(fallbackConfession);
        });
    });
  }
  
  // Update a confession (e.g., for likes) - fixed to avoid async inside Promise constructor
  updateConfession(id: string, updates: Partial<Confession>): Promise<Confession | null> {
    return new Promise((resolve) => {
      this.getAllConfessions()
        .then(confessions => {
          // Find the confession to update
          const index = confessions.findIndex(c => c.id === id);
          
          if (index === -1) {
            resolve(null);
            return;
          }
          
          // Update the confession
          const updatedConfession = { ...confessions[index], ...updates };
          confessions[index] = updatedConfession;
          
          // Save to localStorage
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(confessions));
          
          // Return the updated confession
          resolve(updatedConfession);
        })
        .catch(error => {
          console.error("Failed to update confession:", error);
          resolve(null);
        });
    });
  }
  
  // Get filtered confessions - fixed to use const instead of let
  getFilteredConfessions(filter: 'all' | 'popular'): Promise<Confession[]> {
    return new Promise((resolve) => {
      this.getAllConfessions()
        .then(confessions => {
          // Apply filters
          const filteredConfessions = [...confessions];
          
          if (filter === 'popular') {
            // Sort by likes (highest first)
            filteredConfessions.sort((a, b) => b.likes - a.likes);
          } else {
            // Sort by timestamp (newest first)
            filteredConfessions.sort((a, b) => 
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            );
          }
          
          resolve(filteredConfessions);
        })
        .catch(error => {
          console.error("Failed to filter confessions:", error);
          resolve([]);
        });
    });
  }
}

// Create and export a singleton instance
export const confessionService = new ConfessionService();