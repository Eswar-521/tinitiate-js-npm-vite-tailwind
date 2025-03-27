// import { useState } from "react";
// import { Edit, Mail, Phone, User, Upload } from "lucide-react";

// const Profile = () => {
//   const [showDetails, setShowDetails] = useState(true);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-xl rounded-lg p-6 w-96 border-t-4 border-blue-500">
//         {/* Profile Picture */}
//         <div className="flex flex-col items-center">
//           <div className="relative">
//             <img
//               src="https://via.placeholder.com/100"
//               alt="Profile"
//               className="w-24 h-24 rounded-full border-4 border-gray-300"
//             />
//             <label className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full cursor-pointer">
//               <Upload className="text-white" size={20} />
//               <input type="file" className="hidden" />
//             </label>
//           </div>
//           <h2 className="text-xl font-semibold mt-2 text-gray-800">
//             John Doe
//           </h2>
//           <p className="text-gray-500 text-sm">UI/UX Designer</p>
//         </div>

//         {/* Toggle Button */}
//         <button
//           onClick={() => setShowDetails(!showDetails)}
//           className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition transform hover:scale-105"
//         >
//           {showDetails ? "Hide Details" : "Show Details"}
//         </button>

//         {/* Profile Details with Sliding Effect */}
//         {showDetails && (
//           <div className="mt-4 transition-all duration-500">
//             <div className="flex items-center text-gray-700 mb-2">
//               <User className="mr-2 text-blue-500" size={20} />
//               <span>Eswar </span>
//             </div>
//             <div className="flex items-center text-gray-700 mb-2">
//               <Mail className="mr-2 text-blue-500" size={20} />
//               <span>eswar@gamil.com</span>
//             </div>
//             <div className="flex items-center text-gray-700 mb-2">
//               <Phone className="mr-2 text-blue-500" size={20} />
//               <span>+123 456 7890</span>
//             </div>
//           </div>
//         )}

//         {/* Edit Profile Button */}
//         <button className="mt-4 w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition transform hover:scale-105">
//           <Edit className="mr-2" size={20} />
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import { Edit, Mail, Phone, User, Camera } from "lucide-react";

// const Profile = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 p-6">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-96">
//         {/* Profile Banner */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-28 flex items-center justify-center relative">
//           <div className="absolute -bottom-10">
//             <div className="relative">
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
//               />
//               <label className="absolute bottom-0 right-0 bg-gray-800 p-1 rounded-full cursor-pointer">
//                 <Camera className="text-white" size={18} />
//                 <input type="file" className="hidden" />
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Profile Details */}
//         <div className="pt-12 pb-6 text-center">
//           <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
//           <p className="text-gray-500 text-sm">Full Stack Developer</p>
//         </div>

//         {/* User Info */}
//         <div className="p-6 space-y-4">
//           <div className="flex items-center text-gray-700">
//             <User className="mr-3 text-blue-500" size={20} />
//             <span>John Doe</span>
//           </div>
//           <div className="flex items-center text-gray-700">
//             <Mail className="mr-3 text-blue-500" size={20} />
//             <span>johndoe@example.com</span>
//           </div>
//           <div className="flex items-center text-gray-700">
//             <Phone className="mr-3 text-blue-500" size={20} />
//             <span>+123 456 7890</span>
//           </div>

//           {/* Edit Button */}
//           <button className="mt-4 w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition transform hover:scale-105">
//             <Edit className="mr-2" size={20} />
//             Edit Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import { Edit, Mail, Phone, User, Camera, BookOpen, CheckCircle } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-96">
        
        {/* Profile Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-28 flex items-center justify-center relative">
          <div className="absolute -bottom-10">
            <div className="relative">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              <label className="absolute bottom-0 right-0 bg-gray-800 p-1 rounded-full cursor-pointer">
                <Camera className="text-white" size={18} />
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="pt-12 pb-6 text-center">
          <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-500 text-sm">Full Stack Developer</p>
        </div>

        {/* User Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-center text-gray-700">
            <User className="mr-3 text-blue-500" size={20} />
            <span>John Doe</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Mail className="mr-3 text-blue-500" size={20} />
            <span>johndoe@example.com</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Phone className="mr-3 text-blue-500" size={20} />
            <span>+123 456 7890</span>
          </div>

          {/* Course Details */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <BookOpen className="mr-2 text-purple-600" size={22} />
              Enrolled Courses
            </h3>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm">
                <span>React Development</span>
                <CheckCircle className="text-green-500" size={20} />
              </div>
              <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm">
                <span>Node.js Backend</span>
                <CheckCircle className="text-green-500" size={20} />
              </div>
              <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm">
                <span>UI/UX Design</span>
                <CheckCircle className="text-yellow-500" size={20} />
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <button className="mt-4 w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition transform hover:scale-105">
            <Edit className="mr-2" size={20} />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
