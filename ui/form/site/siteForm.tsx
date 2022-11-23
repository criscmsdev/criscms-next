
import { FC, useRef } from 'react';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { Site } from '@/interfaces/site.interface';
import { usePathname } from 'next/navigation';
import { getQuery, typeSite } from '@/src/utils';
import { useRouter } from 'next/navigation';
import { useCreateSiteFood } from '@/hooks/food/sites/useCreateSite';
import { useUpdateSiteFood } from '@/hooks/food/sites/useUpdateSite';
import { useMarketingCreateSite } from '@/hooks/marketing/sites/useCreateSite';
import { useMarketingUpdateSite } from '@/hooks/marketing/sites/useUpdateSite';

interface SiteForm {
  toggle: () => void,
  setLeft: () => void,
  site?: Site
}
interface FormValues {
  name: string;
  domain: string;
  description: string;
  type: string;
  clientId: string;
};
export const SiteForm: FC<SiteForm> = ({ toggle, site, setLeft }) => {
  const pathname = usePathname();
  
  const query = getQuery(pathname!)
  // const { mutate: createSite } = useCreateSite()
  const { mutate: createSiteFood } = useCreateSiteFood()
  const { mutate: marketingCreateSite } = useMarketingCreateSite()
  const { mutate: updateSiteFood } = useUpdateSiteFood()
  const { mutate: marketingUpdateSite } = useMarketingUpdateSite()
  // const { mutate: createSiteWear } = useCreateSiteWear()
  // const { mutate: updateSiteWear } = useUpdateSiteWear()
  // const { data: session } = useSession()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>({ mode: "onChange", defaultValues: site ? { name: site?.dataSite.name, domain: site?.url, description: site?.dataSite.description, type: site?.dataSite.type, clientId: site.dataSite.infoSite.clientId } : {name: "", domain: ".vercel.app", description: "site description", type: query[2], clientId: "123456"} });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const form = { ...data, name: data.name.trim(), domain: data.domain.trim(), description: data.description.trim(), uid: "1234" }
    // const {client, ...updateForm} = form;
    const createForm = { ...form, clientId: data.clientId?.trim() }
    const updateForm = { ...form, clientId: data.clientId?.trim(), id: site?.id! }
    // createSiteFood(createForm, refresh)

    if (site) {
      // if (query[2] === 'food') {updateSiteFood(updateForm)}
      if (query[2] === 'marketing') {marketingUpdateSite(updateForm)}
      // if (query[2] === 'wear') { updateSiteWear({ id: site._id, input: updateForm }) }
    } else {
      // if (query[2] === 'food') { createSiteFood(createForm) }
      if (query[2] === 'marketing') { marketingCreateSite(createForm) }
      // if (query[2] === 'wear') { createSiteWear( {input: createForm}) }
    }
    // refresh();
    toggle();
  }

  const cancelButtonRef = useRef(null)
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} method="POST" className='h-full'>
        <div className=" sm:rounded-md px-2">
          <div className="p-2 ">
            
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  className="label-form">
                  Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("name", {
                    required: 'Name required!!',
                    minLength: {value: 2, message: 'min 2 characters'}
                  })}
                  
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                  
                />
                {errors.name && <p className='text-red-600 text-sm'>This is required!!</p>}
              </div>
              <div className="col-span-6">
                <label
                  // htmlFor="company-website" 
                  className="label-form">
                  Website
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                    http://
                  </span>
                  <input
                    type="text"
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    placeholder="example.com"
                    {...register("domain")}

                  />
                </div>
              </div>
              <div className="col-span-6">
                <label className="label-form">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    
                    {...register("description")}
                  />
                </div>
              </div>
              
              {
                query.length === 2 &&
                <div className="col-span-6">
                  <label
                    className="label-form">
                    Client name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    {...register("clientId")}
                  />
                </div>
              }

              <div className="col-span-6">
                <fieldset>
                  <legend className="label-form">Type </legend>
                  {/* <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p> */}
                  <div className=" grid grid-cols-2 ">
                    {
                      typeSite.map(data => (
                        <div className="flex items-center my-2" key={data.label}>
                          <input
                            type="radio"
                            value={data.value}
                            // onBlur={onBlur} 
                            {...register('type')}
                            onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          // {...register("type", {required:true, onChange: (e) => {setValue("type", e.target.value, {shouldValidate: true});}, onBlur: (e) => {},})}
                          />
                          {/* {errors.type && <p>This is required</p>} */}
                          <label className="ml-3 block text-sm text-gray-500">
                            {data.label}
                          </label>
                        </div>)
                      )
                    }

                  </div>
                </fieldset>
              </div>


            </div>
            
          </div>

        </div>
        <div className=" group-button-form">
          <button
            type="submit"
            className="btn-primary "
          >
            {site ? 'Update' : 'Created'}
          </button>
          <button
            type="button"
            className="btn-default"
            onClick={setLeft}
            ref={cancelButtonRef}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}