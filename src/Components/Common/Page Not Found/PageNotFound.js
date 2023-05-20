import React from "react";

function PageNotFound() {
  return (
    <>
      <div className="px-4 py-4">
        <p className="text-5xl text-gray-700">
          Error
        </p>
        <p className="text-2xl mt-2"><span className="text-red-600">404 : </span> Page Not Found</p>
      </div>
    </>
  );
}

export default PageNotFound;
