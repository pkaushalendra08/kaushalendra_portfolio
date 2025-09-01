import webdev from "../Certificate/CertificateImage/crc course.jpg"
import delta from "../Certificate/CertificateImage/delta.jpg"
import reactcrc from "../Certificate/CertificateImage/reactCRC.jpg"
import nodeUdemy from "../Certificate/CertificateImage/nodeUdemy.jpg"

const certificates = [
  {
    id: 1,
    name: "Web Development and Design",
    issuer: "CRC-ABESIT",
    date: "July 2024",
    imageUrl: webdev, 
    viewUrl: "https://drive.google.com/file/d/1X5MPp08igkDripoWPgGxfyyRBjqYoPQt/view?usp=drivesdk", 
  },
  {
    id: 2,
    name: "Delta (FullStack Web Development)",
    issuer: "Apna College",
    date: "July 2025",
    imageUrl: delta, 
    viewUrl: "https://drive.google.com/file/d/1cZL1WsHHtG3Cdfisv6_tEgqt3ExvoCpY/view?usp=drivesdk", 
  },
  {
    id: 3,
    name: "Frontend Web Development Using REACT",
    issuer: "CRC-ABESIT",
    date: "December 2024",
    imageUrl: reactcrc, 
    viewUrl: "https://drive.google.com/file/d/1dpioIX9aiJHc6BcKaGF4UBuYiw1FBuiv/view?usp=drivesdk",
  },
  {
    id: 4,
    name: "Node.js-Beginner to Advance",
    issuer: "Udemy",
    date: "August 2025",
    imageUrl: nodeUdemy, 
    viewUrl: "https://drive.google.com/file/d/1e031Hi9V9u3s60Yp_aaYvOFekzKwcNQG/view?usp=drivesdk", 
  },
];

export default certificates;