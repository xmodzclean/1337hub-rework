// utils/fetchUsers.ts
import { handle42APIError } from "./apiErrorHandler";

export const fetchUsers = async (url: string, token: string | undefined): Promise<any> => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        // Handle 401 specifically for authentication errors
        if (response.status === 401) {
          await handle42APIError(null, response);
        }
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      
      // Handle potential authentication errors
      await handle42APIError(error);
      
      throw error;
    }
};
  