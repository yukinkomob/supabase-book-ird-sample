import { Auth } from "@supabase/ui";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthLayout } from "src/layout/AuthLayout";
import { client } from "src/libs/supabase";

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <div>
      <Auth.UserContextProvider supabaseClient={client}>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </Auth.UserContextProvider>
    </div>
  );
};

export default MyApp;
