import {Fragment, useEffect, useRef, useState} from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import {Menu, Switch, Transition} from '@headlessui/react'
import React from 'react';
import {config} from "../config";
import useSWR from "swr";
import {fetcher} from "./api/http";
import {useNavigate} from "react-router-dom";
import Loading from "./elements/Loading";
import { format } from 'date-fns';
import CourseBox from "./elements/CourseBox";



interface CourseElement {
    id: number;
    allDay: boolean;
    description: string;
    end: string;
    start: string;
    location: string;
    title: string;
}
function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ')
}
export default function Home() {

    const { data, error, isLoading } = useSWR(`${config.API_URL}/auth/edt`, fetcher);
    const navigation = useNavigate();
    const [showPastCourses, setShowPastCourses] = useState(false);


    if(!data || (error || isLoading)) {
        return <Loading/>
    }
    console.log(data)
    if(data.status === 'error') {
        navigation('/login')
    }
    return (
        <>
            <h3 className={'text-4xl text-center my-4'}>
                <span>Cacher les cours passés.</span><br/>

                <Switch
                    checked={showPastCourses}
                    onChange={() => setShowPastCourses(!showPastCourses)}
                    className={classNames(
                        !showPastCourses ? 'bg-indigo-600' : 'bg-gray-200',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                    )}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        className={classNames(
                            !showPastCourses ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                        )}
                    >
        <span
            className={classNames(
                !showPastCourses ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
            className={classNames(
                !showPastCourses ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
                </Switch>

            </h3>
        <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 mx-8 my-4">
            {data.data.map((course: CourseElement) => {
                const courseTitle = course.title.match(/<span class="type_cours">(.*?)<\/span>/)?.[1]?.replace(/./, char => char.toUpperCase());
                const isCourseNewOrOngoing = new Date(course.end) > new Date();
                if (!showPastCourses && !isCourseNewOrOngoing) {
                    return null;
                }

                return courseTitle ? <CourseBox course={course} key={course.id} /> : null;
            })}


        </ul>
        </>
    )
}
