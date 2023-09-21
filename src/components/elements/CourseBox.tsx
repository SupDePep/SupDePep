import React, {Fragment} from 'react';
import {Menu, Transition} from "@headlessui/react";
import {format} from "date-fns";
import {
    AcademicCapIcon,
    BookOpenIcon,
    BriefcaseIcon,
    CalculatorIcon,
    CircleStackIcon,
    CodeBracketIcon,
    ComputerDesktopIcon,
    GlobeAmericasIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    RocketLaunchIcon,
    TableCellsIcon,
    UsersIcon,
    WindowIcon,
    EllipsisHorizontalIcon,
    CpuChipIcon,
    MicrophoneIcon,
    CheckIcon,
    DocumentIcon,
    UserGroupIcon,
    PresentationChartBarIcon,
    BuildingOfficeIcon,
    PresentationChartLineIcon,
    QueueListIcon,
    KeyIcon,
    CogIcon,
    GlobeEuropeAfricaIcon,
    CommandLineIcon,
    ServerStackIcon,
    CodeBracketSquareIcon,
    BeakerIcon,
    CloudIcon,
    XMarkIcon,
    ClockIcon
} from "@heroicons/react/24/solid";
import {GlobeAsiaAustraliaIcon, ServerIcon} from "@heroicons/react/20/solid";
function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ')
}
type CourseElement = {
    id: number;
    allDay: boolean;
    description: string;
    end: string;
    start: string;
    location: string;
    title: string;
}
export default function CourseBox({ course }: { course: CourseElement }) {
    const name = course.title.match(/<span class="type_cours">(.*?)<\/span>/)?.[1]?.replace(/./, char => char.toUpperCase());
    const intervenant = course.description.match(/:\s*(.+)/)?.[1];
    const room = course.location.match(/:\s*(.+)/)?.[1];
    const start = format(new Date(course.start), "dd MMMM yyyy à HH:mm:ss");
    const end = format(new Date(course.end), "dd MMMM yyyy à HH:mm:ss")

    return (
        <li key={course.id} className="overflow-hidden rounded-xl border border-gray-200">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                {name === 'RENTREE' ? (
                    <AcademicCapIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-yellow-500"
                    />
                ) : name === 'HARDWARE' ? (
                    <ComputerDesktopIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-blue-500"
                    />
                ) : name === 'FEDERATION DE GROUPE' ? (
                    <UsersIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-green-500"
                    />
                ) : name === 'ANGLAIS' ? (
                    <GlobeAmericasIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-red-500"
                    />
                ) : name === 'PROJET VOLTAIRE' ? (
                    <BookOpenIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-purple-500"
                    />
                ) : name === 'MATHEMATIQUES' ? (
                    <CalculatorIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-orange-500"
                    />
                ) : name === 'HTML/CSS/JS' ? (
                    <CodeBracketIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-cyan-500"
                    />
                ) : name === 'WINDOWS CLIENT' ? (
                    <WindowIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-gray-500"
                    />
                ) : name === 'BASES DE DONNEES' ? (
                    <CircleStackIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-amber-800"
                    />
                ) : name === 'RESEAUX' ? (
                    <RocketLaunchIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-sky-500"
                    />
                ) : name === 'EXPRESSION ECRITE' ? (
                    <PencilIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-pink-500"
                    />
                ) : name === 'EXCEL' ? (
                    <TableCellsIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-yellow-700"
                    />
                ) : name === 'ELECTRONIQUE' ? (
                    <CpuChipIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-sky-300"
                    />
                ) : name === 'EXPRESSION ORALE' ? (
                    <MicrophoneIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-blue-800"
                    />
                ) : name === 'SUIVI' ? (
                    <CheckIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-green-700"
                    />
                ) : name === 'WORD' ? (
                    <DocumentIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-purple-700"
                    />
                ) : name === 'PERSONAL BRANDING' ? (
                    <BriefcaseIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-brown-800"
                    />
                ) : name === 'JOURNEE D\'INTEGRATION' ? (
                    <UserGroupIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-red-800"
                    />
                ) : name === 'CONFERENCE' ? (
                    <PresentationChartBarIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-yellow-800"
                    />
                ) : name === 'CONNAISSANCE DE L\'ENTREPRISE' ? (
                    <BuildingOfficeIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-green-800"
                    />
                ) : name === 'POWERPOINT' ? (
                    <PresentationChartLineIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-orange-800"
                    />
                ) : name === 'Architecture et compréhension des SI' ? (
                    <MagnifyingGlassIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-blue-800"
                    />
                ) : name === 'Initiation SCRUM' ? (
                    <QueueListIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-orange-300"
                    />
                ) :  name === 'HACKATHON' ? (
                    <KeyIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-blue-300"
                    />
                ) :  name === 'POO' ? (
                    <CogIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-green-300"
                    />
                ) :  name === 'COMMUNICATION WEB' ? (
                    <GlobeEuropeAfricaIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-purple-300"
                    />
                ) :  name === 'MVC' ? (
                    <CommandLineIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-red-300"
                    />
                ) :  name === 'Systèmes d\'exploitation SPARE' ? (
                    <ServerIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-yellow-3000"
                    />
                ) :  name === 'MISE EN SITUATION RESEAU' ? (
                    <GlobeAsiaAustraliaIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-sky-300"
                    />
                ) :  name === 'PROJET D\'ETUDES' ? (
                    <BookOpenIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-pink-300"
                    />
                ) :  name === 'MISE EN SITUATION OS' ? (
                    <ServerStackIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-blue-800"
                    />
                ) :  name === 'GIT' ? (
                    <CodeBracketSquareIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-green-800"
                    />
                ) :  name === 'PHP' ? (
                    <CloudIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-orange-800"
                    />
                ) :  name === 'Initiation génie logiciel' ? (
                    <BeakerIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-purple-800"
                    />
                ) :   (
                    <BriefcaseIcon
                        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 text-sky-500"
                    />
                )}

                <div className="flex text-sm font-medium leading-6 text-gray-900 font-semibold">
                    {name} {new Date(course.start) <= new Date() && new Date() <= new Date(course.end) ? (
                    <ClockIcon className="my-auto mx-2 h-6 w-6 text-orange-500" />
                ) : new Date(course.end) <= new Date() ? (
                    <CheckIcon className="my-auto mx-2 h-6 w-6 text-green-500" />
                ) : (
                    <XMarkIcon className="my-auto mx-2 h-6 w-6 text-red-500" />
                )}
                </div>

                <Menu as="div" className="relative ml-auto">
                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Open options</span>
                        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-50' : '',
                                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                                        )}
                                    >
                                        View
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-50' : '',
                                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                                        )}
                                    >
                                        Présence
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Intervenant</dt>
                    <dd className="text-gray-700">
                        <div className="font-medium text-gray-900">{intervenant && intervenant.trim() !== '' ? intervenant : 'Non spécifiée'}</div>
                    </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Salle</dt>
                    <dd className="flex items-start gap-x-2">
                        <div className="font-medium text-gray-900">{room && room.trim() !== '' ? room : 'Non spécifiée'}</div>
                    </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Début</dt>
                    <dd className="flex items-start gap-x-2">
                        <div className="font-medium text-gray-900">{start}</div>
                    </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Fin</dt>
                    <dd className="flex items-start gap-x-2">
                        <div className="font-medium text-gray-900">{end}</div>
                    </dd>
                </div>
            </dl>
        </li>
    )
}