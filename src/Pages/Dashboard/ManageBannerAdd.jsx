import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const ManageBannerAdd = () => {
  const { user } = useAuth() || {};
  

  const handleAdd = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.item_name.value;
    const image = form.image.value;
    const description = form.description.value;
    const email = user.email;


    const item = {
      name,
      image,
      description,
      email,
    };

    fetch("http://localhost:5000/addbanner", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Good job!",
          text: "Successfully Added a Banner!",
          icon: "success",
        });
      });

    
  };
  return (
    <div>
      <div>
        <div>
          <h3 className="font-bold text-2xl mb-6">Add Banner</h3>
          <form
            onSubmit={handleAdd}
            className="container flex flex-col mx-auto space-y-12"
          >
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Banner Titel</label>
                <input
                  name="item_name"
                  type="text"
                  placeholder="Title"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Image URL</label>
                <input
                  name="image"
                  type="text"
                  placeholder="https://"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600"
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm">Banner Description</label>
                <textarea
                  name="description"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Add"
              className="btn bg-gray-700 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageBannerAdd;
