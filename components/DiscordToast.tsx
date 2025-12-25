'use client';

import { useState, useEffect } from 'react';
import { X, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TOAST_STORAGE_KEY = 'hawiah_discord_toast_v1';
const REMIND_LATER_DELAY = 24 * 60 * 60 * 1000; // 24 hours

export default function DiscordToast() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkVisibility = () => {
            try {
                const stored = localStorage.getItem(TOAST_STORAGE_KEY);
                if (!stored) {
                    setIsVisible(true);
                    return;
                }

                const data = JSON.parse(stored);
                if (data.status === 'dismissed') {
                    return;
                }

                if (data.status === 'remind_later') {
                    const now = Date.now();
                    if (now > data.timestamp + REMIND_LATER_DELAY) {
                        setIsVisible(true);
                    }
                }
            } catch (e) {
                // Fallback if JSON parse fails
                setIsVisible(true);
            }
        };

        // Small delay to not block initial render and allow hydration
        const timer = setTimeout(checkVisibility, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem(TOAST_STORAGE_KEY, JSON.stringify({ status: 'dismissed' }));
    };

    const handleRemindLater = () => {
        setIsVisible(false);
        localStorage.setItem(TOAST_STORAGE_KEY, JSON.stringify({ status: 'remind_later', timestamp: Date.now() }));
    };

    const handleJoin = () => {
        // Optionally dismiss when joining, or keep it. User said "announcement", usually you want people to see it until they act.
        // If they click join, we can probably consider it "done" or maybe just leave it?
        // Let's set it to dismissed to avoid annoying them after they clicked.
        localStorage.setItem(TOAST_STORAGE_KEY, JSON.stringify({ status: 'dismissed' }));
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[100] sm:w-[400px]"
                >
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 sm:p-5 flex flex-col gap-4 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="flex items-start gap-4">
                            <div className="shrink-0 p-3 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-xl">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-indigo-600 dark:text-indigo-400">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                                    Join the Community
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Join our Discord server for discussions, help, and bug reports.
                                </p>
                            </div>
                            <button
                                onClick={handleDismiss}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex gap-3 justify-end items-center mt-2">
                            <button
                                onClick={handleRemindLater}
                                className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                            >
                                Remind me later
                            </button>
                            <a
                                href="https://dsc.gg/hawiah"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleJoin}
                                className="inline-flex items-center justify-center rounded-lg bg-[#5865F2] hover:bg-[#4752C4] px-4 py-2 text-xs font-bold text-white transition-colors shadow-lg shadow-indigo-500/20"
                            >
                                Join Server
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
