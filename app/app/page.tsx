// app/app/page.tsx
'use client';
import { useAccounts, useCurrentAccount } from '@mysten/dapp-kit';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AppPage() {
  const accounts = useAccounts();
  const currentAccount = useCurrentAccount();
  const router = useRouter();
  
  // Verifica se il wallet è connesso
  const isConnected = !!currentAccount;

  useEffect(() => {
    if (!isConnected) {
      // Redirect back to migrate if not connected
      router.push('/migrate');
    }
  }, [isConnected, router]);

  if (!isConnected) {
    return null; // Will redirect in the useEffect
  }

  return (
    <main className="pt-24 px-6">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-ethnocentric mb-6 text-center">Ape Sui Society App</h1>
        
        <div className="bg-gray-800 p-4 rounded mb-6">
          <h2 className="text-lg mb-2">Wallet Information</h2>
          <p className="text-gray-300 text-sm truncate">
            <span className="text-gray-400">Connected Address:</span> {currentAccount?.address}
          </p>
        </div>
        
        <div className="text-center pt-4">
          <p>Your app is ready!</p>
        </div>
      </div>
    </main>
  );
}