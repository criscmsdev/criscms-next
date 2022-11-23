// 'use client'
// import { useDeleteSitesFood } from '@/lib/hooks/food/site/useDeleteSites';
// import { deletePages0Food } from '@/lib/page/food/page0';
import { useDeleteSitesFood } from '@/hooks/food/sites/useDeleteSites';
import { useDeleteSitesMarketing } from '@/hooks/marketing/sites/useDeleteSites';
import { getQuery } from '@/src/utils';
import { TrashIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
// import { getQuery, typePageEcommerceCategory, typePageFoodCategory } from '../../../utils'
// import { useDeleteSitesFood, useDeletePages2, useDeletePages3, useDeleteProducts, useDeleteFoods, useDeletePages0Food, useDeletePages1Food, useDeleteSitesWear } from '../../hooks'

interface HeadingDashboardOption {
  checked: boolean;
  toggleAll: () => void;
  unSelectAll: () => void;
  selected: string[];
  type?: string;
}

export function HeadingDashboardOption({
  checked,
  toggleAll,
  unSelectAll,
  selected,
  type,
}: HeadingDashboardOption) {
  const { refresh } = useRouter();

  const pathname = usePathname();
  const query = getQuery(pathname!);
  const { mutate: deleteSitesFood } = useDeleteSitesFood();
  const { mutate: deleteSitesMarketing } = useDeleteSitesMarketing();
  // const { mutate: deleteSitesWear } = useDeleteSitesWear()
  // const { mutate: deletePages0Food } = useDeletePages0Food(query[3])
  // const { mutate: deletePages1Food } = useDeletePages1Food(query[5])
  // const { mutate: deletePages2 } = useDeletePages2(query[5])
  // const { mutate: deletePages3 } = useDeletePages3(query[5])
  // const { mutate: deleteProducts } = useDeleteProducts(query[5])
  // const { mutate: deleteFoods } = useDeleteFoods(query[5])

  const deleteHandle = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (query.length === 3) {
          {
            query[2] === 'food' && deleteSitesFood(selected);
          }
          {
            query[2] === 'marketing' && deleteSitesMarketing(selected);
          }
        }
        // if (query.length === 3 && query[2] === 'marketing') { deleteSitesMarketing(selected) }
        // if (query.length === 4) { deletePages0Food(selected) }

        // if (query.length === 3 && query[2] === 'wear') { deleteSitesWear({ ids: selected }) }

        // if (query.length === 6) {
        //   if (query[4] === 'page0') { deletePages1Food({ ids: selected })}
        //   if (query[4] === 'page1' && typePageFoodCategory.map(data => data.value).includes(type!)) {
        //     deleteFoods({ ids: selected, type: type! })
        //   }
        //   if (query[4] === 'page1') {
        //     deletePages2({ ids: selected })
        //   }
        //   if (query[4] === 'page2' && typePageEcommerceCategory.map(data => data.value).includes(type!)) {
        //     deleteProducts({ ids: selected, type: type! })
        //   }
        //   if (query[4]=== 'page2') {
        //     deletePages3({ ids: selected })
        //   }
        // }
        // refresh();
        unSelectAll();
      }
    });
  };
  return (
    <div
      className={` ${
        selected.length !== 0 ? 'opacity-100' : 'hidden  -translate-y-6 '
      } `}
    >
      <div className="mx-auto max-w-7xl pt-3 ">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <input
              type="checkbox"
              className="h-5 w-5  rounded border-gray-400 text-indigo-600 focus:ring-indigo-500 bg-white"
              onChange={() => toggleAll}
              checked={checked}
              onClick={toggleAll}
            />
            <p className="ml-2 text-sm font-medium">Select All</p>
          </div>

          <span
            className={`block opacity-100 transition ease-in-out delay-150`}
          >
            <button className="btn-default " onClick={() => deleteHandle()}>
              <TrashIcon className="h-5 w-5" aria-hidden="true" />
              <p className="">({selected.length})</p>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
