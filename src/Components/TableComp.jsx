import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaClipboard } from "react-icons/fa";

function TableComp() {
    const [imagesData, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  const formatDate = (date) => {
    const formattedDate = moment(date).format("MMMM Do YYYY, h:mm:ss a");
    return formattedDate;
  };

  const calculateSize = (size) => {
    const fileSizeInKB = size / 1024;
    return Math.floor(fileSizeInKB);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:3000/v1/images/get-image-report"
      );
      if (response.status === 200) {
        console.log(response);
        setData(response.data);
        setIsLoading(true);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead className="bg-green-500 text-white">
          <tr>
            <th>ID</th>
            <th>Format</th>
            <th>Thumbnail</th>
            <th>Link</th>
            <th>Dimension</th>
            <th>Size (KB)</th>
            <th>Purpose</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {imagesData.map((image) => {
            const isPDF = image.link.toLowerCase().endsWith(".pdf");
            return (
              <tr key={image.id}>
                <td>{image.id}</td>
                <td>{image.format}</td>
                <td>
                  {isPDF ? (
                    <div className="bg-red-500 text-white py-1 px-2 rounded">
                      <span>PDF</span>
                    </div>
                  ) : (
                    <img
                      src={image.link}
                      alt="Thumbnail"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  )}
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-success mx-2 p-2 rounded"
                      onClick={() => {
                        copyToClipboard(image.link);
                      }}
                    >
                      <FaClipboard />
                    </button>
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      View
                    </a>
                  </div>
                </td>
                <td>{image.dimension}</td>
                <td>{`${calculateSize(image.size)} KB`}</td>
                <td>{image.use}</td>
                <td>{image.originalname}</td>
                <td>{formatDate(image.date)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      );
    </>
  );
}

export default TableComp;
