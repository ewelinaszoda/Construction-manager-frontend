import React from "react"

const  GetCurrentDate = () => {

  const date = new Date().toDateString();

    return (
      <div>
        <p>TODAY: {date}</p>
      </div>
    );

}

export default GetCurrentDate;