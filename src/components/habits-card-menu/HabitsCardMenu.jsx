import { Popover, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";


const HabitsCardMenu = ({ habit }) => {

    return (
        <Popover className="relative">
            <Popover.Button className="focus:outline-0"><EllipsisVerticalIcon title="Options" className="p-2 text-gray-600 rounded-full cursor-pointer w-9 h-9 hover:text-gray-800 hover:bg-gray-300/60 bg-gray-300/40" /></Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="absolute py-4 space-y-2 text-gray-600 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
                    <div className='space-y-2 text-sm font-semibold'>
                      
                            <Popover.Button className='w-full px-6 pb-1 text-left hover:text-gray-800'>Edit</Popover.Button>
                            <Popover.Button className='w-full px-6 pb-1 text-left border-gray-100 hover:text-gray-800'>Delete</Popover.Button>
                            <Popover.Button className='w-full px-6 pb-1 text-left border-gray-100 hover:text-gray-800'>Archive</Popover.Button>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
};

export default HabitsCardMenu;