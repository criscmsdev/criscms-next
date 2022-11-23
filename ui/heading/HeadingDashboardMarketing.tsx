'use client'
import { ReactNode, useState } from 'react'
import {
  DocumentPlusIcon,
  FolderPlusIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { useToggle } from 'ahooks'
import { usePathname } from 'next/navigation'
import { getQuery, typeSite } from '@/src/utils'
import { Page, Site } from 'interfaces'
import { SlideOversForm } from '../tailwindCSS/slideOversForm'
import { TabFormSite } from '../tab/tabFormSite'
import { TabFormPage } from '../tab/tabFormPage'
import { useMarketingGetSite } from '@/hooks/marketing/sites/useGetSite'
import { useSession } from 'next-auth/react'


interface HeadingDashboardMarketing {
  site?: Site
  page?: Page
  title?: string
}
let site1: Site
export function HeadingDashboardMarketing({ site, page, title }: HeadingDashboardMarketing) {
  // console.log(site);
  const {data: session} = useSession()
  // console.log('site1')
  console.log(process.env.API_URL)
  // console.log(session);
  
  const [state, { toggle, setLeft, setRight }] = useToggle();
  const [children, setChildren] = useState<ReactNode>()
  const pathname = usePathname()
  const query = getQuery(pathname!)
  if (site) {
    const { data } = useMarketingGetSite(site.id, site)
    site1 = data
  }


  const editHandle = (type: string) => {
    if (type === "site") {
      toggle(); 
      setChildren(<TabFormSite toggle={toggle} setLeft={setLeft} site={site1} />);
    }
    // if (type === "page") {
    //   toggle(); setChildren(<TabFormPage toggle={toggle} setLeft={setLeft} page={page} type={page?.data.type}/>)
    // }
  }
  const addHandle = (type: string) => {
    console.log('type', type)
    if (type === 'site') {
      toggle();
      setChildren(<TabFormSite toggle={toggle} setLeft={setLeft} />);
    }
    if (type === 'page') {
      toggle()
      setChildren(<TabFormPage toggle={toggle} setLeft={setLeft}  type={site ? site?.dataSite.type : page?.dataPage.type} uid={site ? site?.id : page?.id}/>)
    }
  }
  return (
    <div className=''>

      <div className="flex lg:items-center justify-between">
        <div className="min-w-0 flex space-x-2">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {site ? site1?.dataSite.name : page ? page?.dataPage.seoPage.title : title}
            {/* {title} */}
          </h2>
          {
            site &&
            <span className="block">
              <button
                type="button"
                className="inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => editHandle('site')}
              >
                <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                <p className='hidden sm:block'>
                  Edit
                </p>
              </button>
            </span>
          }
          {
            page &&
            <span className="block">
              <button className="btn-default space-x-3" onClick={() => editHandle('page')} >
                <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                <p className='hidden sm:block'>
                  Edit
                </p>
              </button>
            </span>
          }
          {/* <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Closing on January 9, 2020
          </div>
        </div> */}
        </div>
        <div className="flex">
          {/* <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
            <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            Edit
          </button>
        </span>

        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            View
          </button>
        </span> */}
          {
            query.length === 3 &&
            <span className="block">
              <button className="btn-primary space-x-3" onClick={() => addHandle('site')} >
                <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
                <p className='hidden sm:block'>
                  Add Site
                </p>
              </button>
            </span>
          }
          {
            (typeSite.map(data => data.value).includes(site?.dataSite.type!) || page?.dataPage.type === 'page') &&

            <button className="btn-primary space-x-3" onClick={() => addHandle('page')} >
              <FolderPlusIcon className="h-6 w-6" aria-hidden="true" />
              <p className='hidden sm:block'>
                Add Page
              </p>
            </button>
          }
          {['category', 'category-food'].includes(page?.dataPage.type!) &&

            <button className="btn-primary space-x-3" onClick={() => addHandle('category')} >
              <DocumentPlusIcon className="h-6 w-6" aria-hidden="true" />
              <p className='hidden sm:block'>
                Add Category
              </p>
            </button>
          }

          {/* <span className="">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <PlusIcon className="h-5 w-5" aria-hidden="true" />
              <p className='hidden sm:block'>

                New Site
              </p>
            </button>
          </span> */}

          {/* Dropdown */}
          {/* <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            More
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                  href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu> */}
        </div>
      </div>
      <SlideOversForm state={state} toggle={toggle} setLeft={setLeft}>
        {children}
      </SlideOversForm>
    </div>
  )
}
