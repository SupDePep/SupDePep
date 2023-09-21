import "./assets/App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStylesheet from "./assets/css/GlobalStylesheet";
import {ExclamationTriangleIcon, XMarkIcon} from "@heroicons/react/24/solid";
import Login from "./components/auth/Login";
import TokenLogin from "./components/auth/TokenLogin";
const Home = lazy(() => import('./components/Home'));

function App() {
    return (
        <Router>
            <>

                <GlobalStylesheet />

                <div className="flex items-center gap-x-6 bg-yellow-300 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                    <p className="text-sm leading-6 text-black">
                        <a href="#">
                            <strong className="font-semibold">Warning</strong>
                            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            This website is still in beta phase, some bugs may occur!
                        </a>
                    </p>
                    <div className="flex flex-1 justify-end">
                        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5 text-black" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div className={'min-h-screen'}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/login/token/:token" element={<TokenLogin />} />

                            {/*<Route path={"*"} element={<NotFoundPage />} />*/}
                        </Routes>
                </div>
                {/* <Suspense fallback={<Loading />}>
          <Footer/>
          <p className={'text-center my-2'}>© 2022 - 2023 Bagou450. All Rights Reserved.</p>
        </Suspense>*/}
            </>
        </Router>
    );
}

export default App;
