import "@/styles/globals.scss";
import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import Layouts from "../components/Layout";
import {StatusDataContext} from "../components/context/statusContext"

const cookie = new Cookies();

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <Provider store={store}>
            <StatusDataContext>
            <Layouts>
                <div style={{ flexGrow: 1, paddingTop: '78px' }}>
                    <Component {...pageProps} />
                </div>
            </Layouts>
            </StatusDataContext>
        </Provider>
    );
}
