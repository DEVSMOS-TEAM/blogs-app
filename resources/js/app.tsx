import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        const BlogApp = () => {
            useEffect(() => {
                AOS.init({
                    duration: 700,
                    once: true,
                });

                const observer = new MutationObserver(() => {
                    AOS.refresh();
                });

                observer.observe(document.body, { childList: true, subtree: true });

                return () => observer.disconnect();
            }, []);

            return <App {...props} />;
        };

        root.render(<BlogApp />);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
