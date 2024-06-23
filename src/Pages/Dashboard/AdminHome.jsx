import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FcPaid, FcSalesPerformance } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import useAdminPay from "../../Hooks/useAdminPay";

const AdminHome = () => {
  const [payment, refetch] = useAdminPay();

  const totalPrice = payment?.reduce((total, item) => total + item.total, 0);
  const totalQuantity = payment?.reduce((total, item) => total + parseInt(item.quantity), 0);

  const totalPending = payment?.reduce((total, item) => {
    if (item.status === 'pending') {
      return total + item.total;
    }
    return total;
  }, 0);
  const totalPaid = payment?.reduce((total, item) => {
    if (item.status === 'paid') {
      return total + item.total;
    }
    return total;
  }, 0);

  return (
    <div className="mt-20">
      <div className=" h-screen ">
        <div className="col-span-3 md:col-span-2 flex flex-col items-center md:items-start gap-4 pt-16 px-2">
          <p className="flex justify-center w-full gap-2 pt-4 font-extrabold text-2xl md:text-3xl ">
            <span>Statistics</span>

            <svg
              className="w-8 h-8 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              ></path>
            </svg>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8 pt-4 mx-auto">
            <div className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 ">
              <div className="flex gap-2 items-center">
                <span className="font-bold text-3xl md:text-4xl">{totalQuantity}</span>
                <FcSalesPerformance className="text-4xl" />
              </div>
              <span className="font-semibold text-sm text-center">
                Total Sales
              </span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 ">
              <div className="flex gap-2 items-center">
                <span className="font-bold text-3xl md:text-4xl">{totalPrice}</span>
                <FaMoneyBillTrendUp className="text-4xl" />
              </div>
              <span className="font-semibold text-sm text-center">
                Total Revenue
              </span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 ">
              <div className="flex gap-2 items-center">
                <span className="font-bold text-3xl md:text-4xl">{totalPaid}</span>
                <FcPaid className="text-4xl" />
              </div>
              <span className="font-semibold text-sm text-center">
                Paid Total
              </span>
            </div>

            <div className="md:col-start-2 lg:col-auto flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 ">
              <div className="flex gap-2 items-center">
                <span className="font-bold text-3xl md:text-4xl">{totalPending}</span>
                <MdOutlinePendingActions className="text-4xl" />
              </div>
              <span className="font-semibold text-sm text-center">
                Pending Total
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
