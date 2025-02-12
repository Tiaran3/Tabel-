"use client"; // Agar bisa menggunakan state & effect
import { useEffect, useState } from "react";

export default function StudentTable() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const students = [
    {
      no: 1,
      nim: "2211001",
      nama: "Ahmad Fauzan",
      gender: "Laki-laki",
      prodi: "Informatika",
      kelas: "A",
      semester: 4,
      alamat: "Jl. Merdeka No. 10",
      hobby: "Membaca",
      citaCita: "Software Engineer",
    },
    {
      no: 2,
      nim: "2211002",
      nama: "Siti Rahma",
      gender: "Perempuan",
      prodi: "Sistem Informasi",
      kelas: "B",
      semester: 2,
      alamat: "Jl. Sudirman No. 15",
      hobby: "Menulis",
      citaCita: "Data Analyst",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        🎓 Daftar Mahasiswa
      </h1>

      {/* UI untuk Desktop */}
      {!isMobile && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg rounded-lg bg-white">
            <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <tr>
                {[
                  "No",
                  "NIM",
                  "Nama",
                  "Gender",
                  "Prodi",
                  "Kelas",
                  "Semester",
                  "Alamat",
                  "Hobby",
                  "Cita-cita",
                ].map((col, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 px-4 py-3 text-center uppercase tracking-wide"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index}
                  className={`hover:bg-blue-200 transition ${
                    index % 2 === 0 ? "bg-blue-50" : "bg-gray-100"
                  }`}
                >
                  {Object.values(student).map((value, idx) => (
                    <td
                      key={idx}
                      className="border border-gray-300 px-4 py-3 text-center text-gray-700"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* UI untuk Mobile (Tabel dengan Grid System) */}
      {isMobile && (
        <div className="space-y-4">
          {students.map((student, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md bg-gradient-to-r from-blue-100 to-blue-300 p-4"
            >
              <div className="grid grid-cols-3 border-b pb-2 mb-2">
                <p className="font-semibold text-gray-600">Nama:</p>
                <p className="col-span-2 font-bold text-blue-800">{student.nama}</p>
              </div>
              <div className="grid grid-cols-3 border-b pb-2 mb-2">
                <p className="font-semibold text-gray-600">NIM:</p>
                <p className="col-span-2 font-bold text-blue-800">{student.nim}</p>
              </div>
              <div className="grid grid-cols-3 border-b pb-2 mb-2">
                <p className="font-semibold text-gray-600">Gender:</p>
                <p className="col-span-2">{student.gender}</p>
              </div>
              <div className="grid grid-cols-3 border-b pb-2 mb-2">
                <p className="font-semibold text-gray-600">Prodi:</p>
                <p className="col-span-2">{student.prodi}</p>
              </div>
              <div className="grid grid-cols-3 border-b pb-2 mb-2">
                <p className="font-semibold text-gray-600">Kelas:</p>
                <p className="col-span-2">{student.kelas}</p>
              </div>
              <div className="grid grid-cols-3 border-b pb-2 mb-2">
                <p className="font-semibold text-gray-600">Semester:</p>
                <p className="col-span-2">{student.semester}</p>
              </div>
              <div className="grid grid-cols-3 border-b pb-2 mb-2">
                <p className="font-semibold text-gray-600">Alamat:</p>
                <p className="col-span-2">{student.alamat}</p>
              </div>
              <div className="grid grid-cols-3 border-b pb-2 mb-2">
                <p className="font-semibold text-gray-600">Hobby:</p>
                <p className="col-span-2">{student.hobby}</p>
              </div>
              <div className="grid grid-cols-3">
                <p className="font-semibold text-gray-600">Cita-cita:</p>
                <p className="col-span-2">{student.citaCita}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
