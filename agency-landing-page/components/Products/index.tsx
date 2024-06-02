import React, { useEffect, useState } from "react"; // Combined import

export default function Products() {
  const [data, setData] = useState([]); // Set initial state to an empty array

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const options = {
      method: "GET",
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.error(err, "error");
        // Optionally update the state to reflect the error in the UI
        // setData('Error fetching data'); // You can set state to an error message or similar approach
      });
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((d) => {
          return (
            <div key={d.id}>
              <h3>{d.title}</h3>{" "}
              {/* Displaying the product title as an example */}
              <img
                src={d.image}
                alt={d.title}
                style={{ width: "100px" }}
              />{" "}
              {/* Displaying image */}
              <p>${d.price}</p> {/* Displaying price */}
            </div>
          );
        })
      ) : (
        <p>No products found.</p> // This will be displayed if the data array is empty
      )}
    </div>
  );
}
