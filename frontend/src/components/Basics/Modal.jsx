import { Fragment, useState } from 'react'
import { Dialog, Transition, Combobox } from '@headlessui/react'

const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
]



function Modal({closeModal, isOpen}) {



    const ComboboxComponent = () => {

        const [selectedPerson, setSelectedPerson] = useState(people[0])
        const [query, setQuery] = useState('')

        const filteredPeople =
            query === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
        })

        return ( <Combobox as={Fragment}value={selectedPerson} onChange={setSelectedPerson}>
                <Combobox.Label>{"Assignee:"}</Combobox.Label>
                <Combobox.Input
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(person) => person.name}
                />
                <Combobox.Options>
                    {filteredPeople.map((person) => (
                    <Combobox.Option key={person.id} value={person}>
                        {person.name}
                    </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        )
    }

    return (
        <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        Add hobby
                    </Dialog.Title>
                    <div className="mt-2">
                        <ComboboxComponent />
                    </div>

                    <div className="mt-4">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                        >
                        Save
                        </button>
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

export default Modal
