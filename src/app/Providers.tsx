"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { AdmissionProvider } from "@/contexts/AdmissionContext";

import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10 * 60 * 1000, // 10 minutes (increased for better performance)
            gcTime: 30 * 60 * 1000, // 30 minutes (increased for better caching)
            retry: 2,
            retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            refetchOnMount: false, // Don't refetch on component mount if data exists
            networkMode: 'online', // Only run queries when online
        },
        mutations: {
            retry: 1,
            networkMode: 'online',
        },
    },
});

let persister : any;

if (typeof window !== "undefined") {
    persister = createSyncStoragePersister({
        storage: window.localStorage,
    });
}

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
            <SessionProvider refetchInterval={5 * 60}>
                <AdmissionProvider>
                    {children}
                </AdmissionProvider>
            </SessionProvider>
        </PersistQueryClientProvider>
    );
};

export default Providers;
