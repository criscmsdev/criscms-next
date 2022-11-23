import { Site } from '@/interfaces/site.interface';
import { getQuery, typePageEcommerceCategory, typePageFoodCategory, typePageMarketingCategory } from '@/src/utils';
import { createRef, FC, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import { useUpdateDBSiteMarketing } from '@/hooks/marketing/sites/useUpdateSiteDB';


interface FormValues {
  value: string[];
};
interface DataBaseForm {
  toggle: () => void
  setLeft: () => void
  site?: Site
}
export const DataBaseForm: FC<DataBaseForm> = ({ toggle, setLeft, site }) => {
  // console.log(site?.data.type);
  const pathname = usePathname();
  const query = getQuery(pathname!)
  const { mutate: updateSiteDBFood } = useUpdateDBSiteMarketing()
  // const { mutate: updateSiteDBWear } = useUpdateSiteDataBaseWear()
  const { register, handleSubmit } = useForm<FormValues>({ defaultValues: { value: site?.dataSite.dbSite.map(data => data.value) } });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const updateFormDB ={
      id: site?.id!,
      type:  data.value.map(data => data)
    }
    if (query[2] === 'marketing') { updateSiteDBFood(updateFormDB) }
    // if (query[2] === 'wear') { updateSiteDBWear({ id: site?._id!, inputDB: updateFormDB }) }
    // updateSiteDBFood({ id: site?._id!, inputDB: updateFormDB })
    toggle()
  };
  const cancelButtonRef = useRef(null)
  const ref = createRef();
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white p-5">
            <div className=" text-center sm:mt-0 sm:text-left">
              
              <div className="grid grid-cols-2 gap-3">
                {site?.dataSite.type === "marketing" &&
                  typePageMarketingCategory.map(data =>
                  (<div key={data.value} className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        type="checkbox"
                        value={data.value}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        {...register("value", {
                          required: 'Title required!!'
                        })}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        {data.label}
                      </label>
                      <p className="text-gray-500 hidden sm:block">{data.categories}</p>
                    </div>
                  </div>)
                  )
                }
                {site?.dataSite.type === "food" &&
                  typePageFoodCategory.map(data =>
                  (<div key={data.value} className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        type="checkbox"
                        value={data.value}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        {...register("value", {
                          required: 'Title required!!'
                        })}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        {data.label}
                      </label>
                      <p className="text-gray-500 hidden sm:block">{data.categories}</p>
                    </div>
                  </div>)
                  )
                }
                {site?.dataSite.type === "ecommerce" &&
                  typePageEcommerceCategory.map(data =>
                  (<div key={data.value} className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        type="checkbox"
                        value={data.value}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        {...register("value", {
                          required: 'Title required!!'
                        })}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        {data.label}
                      </label>
                      <p className="text-gray-500 hidden sm:block">{data.categories}</p>
                    </div>
                  </div>)
                  )
                }


              </div>
            </div>

          </div>
        </div>
        <div className="group-button-form">
        <button
            type="submit"
            className="btn-primary"
          >
            {site ? 'Update' : 'Created'}
          </button>
          <button
            className="btn-default"
            type="button"
            onClick={setLeft}
            ref={cancelButtonRef}>
            Cancel
          </button>
          
        </div>
      </form>
    </div>
  )
}