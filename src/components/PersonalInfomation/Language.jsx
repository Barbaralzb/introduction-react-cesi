import { LanguageIcon } from '@heroicons/react/20/solid'

function Language() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex">
        <LanguageIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        <h3 className="text-lg font-medium leading-6 text-gray-900">Languages</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">French</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Advanced : B2</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">English</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Intemediate</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Spanish</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">First language</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Language