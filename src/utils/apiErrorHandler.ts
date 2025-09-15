import { signOut, signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

/**
 * Centralized error handler for 42 API calls
 * Handles 401 authentication errors by triggering logout and re-login
 */

let isHandling401 = false; // Prevent multiple simultaneous 401 handlers

export const handle42APIError = async (error: any, response?: Response): Promise<void> => {
  // Handle fetch response errors
  if (response && response.status === 401) {
    await handle401Error();
    return;
  }

  // Handle thrown errors with status
  if (error && error.status === 401) {
    await handle401Error();
    return;
  }

  // Handle error messages that indicate authentication issues
  if (error && typeof error === 'object' && error.message) {
    const message = error.message.toLowerCase();
    if (message.includes('unauthorized') || message.includes('401')) {
      await handle401Error();
      return;
    }
  }

  // Log other errors
  console.error('42 API Error:', error);
};

const handle401Error = async (): Promise<void> => {
  // Prevent multiple handlers from running simultaneously
  if (isHandling401) {
    return;
  }

  isHandling401 = true;

  try {
    console.warn('42 API returned 401 - Token expired or invalid. Logging out and re-authenticating...');
    
    // Show user-friendly message
    toast.info('Your session has expired. Please wait while we log you back in...', {
      autoClose: false,
      toastId: 'auth-refresh', // Prevent duplicate toasts
    });

    // Sign out first to clear the invalid token
    await signOut({ 
      redirect: false,
      callbackUrl: window.location.pathname // Stay on current page after re-auth
    });

    // Small delay to ensure signOut completes
    await new Promise(resolve => setTimeout(resolve, 500));

    // Dismiss the info toast
    toast.dismiss('auth-refresh');

    // Sign back in
    const result = await signIn('42-school', { 
      redirect: false,
      callbackUrl: window.location.pathname
    });

    if (result?.error) {
      toast.error('Failed to re-authenticate. Please try logging in manually.');
      // Redirect to home page if re-auth fails
      window.location.href = '/';
    } else {
      toast.success('Successfully re-authenticated!', {
        autoClose: 3000,
      });
      
      // Reload the page to refresh all data with new token
      window.location.reload();
    }
  } catch (error) {
    console.error('Error handling 401:', error);
    toast.error('Authentication error. Please refresh the page and try again.');
  } finally {
    isHandling401 = false;
  }
};

/**
 * Enhanced fetch wrapper for 42 API calls
 * Automatically handles 401 errors with logout/re-login
 */
export const fetch42API = async (
  url: string, 
  options: RequestInit = {},
  accessToken?: string
): Promise<Response> => {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Safely merge existing headers
    if (options.headers) {
      if (options.headers instanceof Headers) {
        options.headers.forEach((value, key) => {
          headers[key] = value;
        });
      } else if (typeof options.headers === 'object') {
        Object.assign(headers, options.headers);
      }
    }

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Handle 401 errors
    if (response.status === 401) {
      await handle42APIError(null, response);
      throw new Error('Authentication failed - token expired');
    }

    return response;
  } catch (error) {
    // Check if it's a network error or authentication error
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      // Network error - don't treat as auth error
      throw error;
    }
    
    // Handle other potential auth errors
    await handle42APIError(error);
    throw error;
  }
};

/**
 * Enhanced fetch wrapper specifically for 42 API JSON responses
 * Handles both network and authentication errors
 */
export const fetch42APIJSON = async <T = any>(
  url: string,
  options: RequestInit = {},
  accessToken?: string
): Promise<T> => {
  const response = await fetch42API(url, options, accessToken);
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`42 API Error: ${response.status} - ${errorText}`);
  }

  return response.json();
};

/**
 * Wrapper for making authenticated requests to 42 API endpoints
 * with automatic error handling
 */
export const make42APIRequest = async <T = any>(
  endpoint: string,
  accessToken: string,
  options: RequestInit = {}
): Promise<T> => {
  const url = endpoint.startsWith('http') 
    ? endpoint 
    : `https://api.intra.42.fr/v2${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  return fetch42APIJSON<T>(url, options, accessToken);
};
