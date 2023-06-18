import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { HabitsContext } from '../../context/HabitsProvider'

// to set minimum date as current date.
const currentDate = new Date().toISOString().split('T')[0];

const HabitFormModal = () => {
    const { toggleModal, setToggleModal, formData,
        setFormData, habitsDispatch, habitsState, initialFormData } = useContext(HabitsContext)
    const { name, repeat, goal, timeOfTheDay, startDate, id } = formData

    const forEdit = id !== 0
    const modalSubmit = (e) => {
        e.preventDefault()
        if (forEdit) {
            habitsDispatch({
                type: 'edit_habit', payload: {
                    id: id,
                    ...formData,
                }
            })
        }
        else {
            habitsDispatch({
                type: 'add_habit', payload: {
                    ...formData,
                    id: habitsState.length + 1,
                }
            })
        }

        setFormData(initialFormData)
        setToggleModal(false)
    }

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const handleClose = () => {

        setFormData(initialFormData)
        setToggleModal(false)
    }
    return (
        <>
            <Transition appear show={toggleModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h3"
                                        className="my-4 text-lg font-semibold leading-6 text-center text-white sm:text-2xl"
                                    >
                                        {forEdit ? "Edit Habit" : "Add Habit"}
                                    </Dialog.Title>
                                    <div className="mt-2">

                                        <form onSubmit={modalSubmit}>
                                            <div className="grid grid-cols-4 grid-rows-3 gap-4">
                                                {/* <div>
                                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-100 uppercase">
                                                        Name <sup className='text-sm text-red-400 '>*</sup>
                                                    </label>
                                                 
                                                    <div className="mt-2">
                                                        <select
                                                            id="designation"
                                                            name="designation"
                                                            value={designation}
                                                            onChange={handleChange}
                                                            className="block w-full p-2 text-gray-100 bg-gray-700 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                                        >
                                                            <option value="Mr.">Mr.</option>
                                                            <option value="Ms.">Ms.</option>

                                                        </select>
                                                    </div>
                                                </div> */}
                                                <div className='col-span-4' >
                                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-100 uppercase ">
                                                        Name <sup className='text-sm text-red-400 '>*</sup>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            required
                                                            value={name}
                                                            onChange={handleChange}
                                                            className="block w-full px-2 bg-gray-700 rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div></div>
                                                <div className="col-span-2 row-start-2">
                                                    <label htmlFor="repeat" className="block text-sm font-medium leading-6 text-gray-100 uppercase">
                                                        Repeat
                                                    </label>
                                                    <div className="mt-2">
                                                        <select
                                                            id="repeat"
                                                            name="repeat"
                                                            value={repeat}
                                                            onChange={handleChange}
                                                            className="block w-full p-2 text-gray-100 bg-gray-700 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                                        >
                                                            <option value="daily">Daily</option>
                                                            <option value="weekly">Weekly</option>
                                                            <option value="alternate_days">Alternate Days</option>
                                                            <option value="monthly">Monthly</option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 col-start-3 row-start-2">
                                                    <label htmlFor="goal" className="block text-sm font-medium leading-6 text-gray-100 uppercase">
                                                        Goal
                                                    </label>
                                                    <div className="mt-2">
                                                        <select
                                                            id="goal"
                                                            name="goal"
                                                            value={goal}
                                                            onChange={handleChange}
                                                            className="block w-full p-2 text-gray-100 bg-gray-700 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                                        >
                                                            <option value="once_a_day">Once</option>
                                                            <option value="twice_a_day">Twice </option>
                                                            <option value="thrice_a_day">Thrice</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 row-start-3">
                                                    <label htmlFor="timeOfTheDay" className="block text-sm font-medium leading-6 text-gray-100 uppercase">
                                                        Time of Day
                                                    </label>
                                                    <div className="mt-2">
                                                        <select
                                                            id="timeOfTheDay"
                                                            name="timeOfTheDay"
                                                            value={timeOfTheDay}
                                                            onChange={handleChange}
                                                            className="block w-full p-2 text-gray-100 bg-gray-700 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                                        >
                                                            <option value="any_time">Any Time</option>
                                                            <option value="morning">Morning (From 9 AM) </option>
                                                            <option value="afternoon">Afternoon (From 12 PM) </option>
                                                            <option value="evening">Evening (From 6 PM) </option>
                                                            <option value="night">Night (From 9 PM) </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 col-start-3 row-start-3">
                                                    <label htmlFor="startDate" className="block text-sm font-medium leading-6 text-gray-100 uppercase">
                                                        Start Date
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="date"
                                                            id="startDate"
                                                            className="block w-full bg-gray-700 rounded-md border-0 py-1.5 h-9 px-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"

                                                            name='startDate'
                                                            value={startDate}
                                                            onChange={handleChange}
                                                            min={currentDate}
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="flex justify-center w-auto mt-8 space-x-8">
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

                                                >
                                                    Submit
                                                </button>
                                                <button
                                                    onClick={handleClose}
                                                    type="button"
                                                    className="px-4 py-2 text-sm font-medium text-gray-100 bg-red-400 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"

                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>

                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default HabitFormModal